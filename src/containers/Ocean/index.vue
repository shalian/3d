<template>
  <div id="ocean" class="webgl">
    <div id="ocean-webgl" class="webgl-3d">
      <Loading v-show="state.loadingProcess != 100">
        <template #default>
          <div class="loading">
            <p>Loading · · ·</p>
            <span class="process">{{ state.loadingProcess }}%</span>
          </div>
        </template>
      </Loading>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import * as THREE from "three";
// import * as TWEEN from '@tweenjs/tween.js'
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Water } from 'three/examples/jsm/objects/Water';
import { Sky } from 'three/examples/jsm/objects/Sky';
import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare.js';
import lensflareTexture0 from '@/containers/Ocean/images/lensflare0.png';
import lensflareTexture1 from '@/containers/Ocean/images/lensflare1.png';
import vertexShader from '@/containers/Ocean/shaders/rainbow/vertex.glsl';
import fragmentShader from '@/containers/Ocean/shaders/rainbow/fragment.glsl';
import WebglThreeRender from '@/utils/WebglThreeRender'
import waterTexture from '@/containers/Ocean/images/waternormals.jpg';
import Animations from '@/utils/animations';
import Loading from '../loading.vue';

//#region 
class OceanWebgl extends WebglThreeRender {
  sky!: Sky
  water!: Water
  island: any
  animateId2!: number;
  gltfLoader!: GLTFLoader // gltf/glb

  constructor(dom: HTMLElement, options = {}) {
    super(dom, options)

    this.myDraw()
  }

  initModel() {
    this.gltfLoader = new GLTFLoader(this.manager)
    this.gltfLoader.load('./models/island.glb', (gltf: any) => {
      const island = gltf.scene
      island.traverse((child: any) => {
        if (child.isMesh) {
          child.material.metalness = .4;
          child.material.roughness = .6;
        }
      })
      island.position.set(0, -5.5, 0)
      island.scale.set(80, 80, 80)
      this.island = island
      this.scene.add(island)
    })
    this.gltfLoader.load('./models/flamingo.glb', (gltf: any) => {
      const mesh = gltf.scene.children[0];
      mesh.scale.set(0.4, 0.4, 0.4)
      mesh.position.set(-180, 80, -160)
      mesh.rotation.set(0.2, -0.8, 0)
      this.scene.add(mesh)

      const bird2 = mesh.clone();
      bird2.scale.set(0.4, 0.4, 0.4)
      bird2.position.set(-60, 75, -260)
      bird2.rotation.set(0.2, -0.8, 0)
      this.scene.add(bird2);

      const mixer = new THREE.AnimationMixer(mesh);
      mixer.clipAction(gltf.animations[0]).setDuration(1.2).play();
      this.mixers.push(mixer);

      const mixer2 = new THREE.AnimationMixer(bird2);
      mixer2.clipAction(gltf.animations[0]).setDuration(1.8).play();
      this.mixers.push(mixer2);
    })
  }

  // 天空
  initSky() {
    this.sky = new Sky();
    this.sky.scale.setScalar(10000);
    this.scene.add(this.sky);
    const skyUniforms = this.sky.material.uniforms;
    skyUniforms['turbidity'].value = 20;
    skyUniforms['rayleigh'].value = 2;
    skyUniforms['mieCoefficient'].value = 0.005;
    skyUniforms['mieDirectionalG'].value = 0.8;
  }

  // 海
  initSea() {
    const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
    this.water = new Water(waterGeometry, {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: new THREE.TextureLoader().load(waterTexture, (texture: any) => {
        texture.wrapS = THREE.RepeatWrapping
        texture.wrapT = THREE.RepeatWrapping;
      }),
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x0072ff,
      distortionScale: 4,
      fog: this.scene.fog !== undefined
    });
    this.water.rotation.x = - Math.PI / 2;
    this.scene.add(this.water);
  }

  // 太阳
  initSun() {
    const sun = new THREE.Vector3();
    const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
    const phi = THREE.MathUtils.degToRad(88);
    const theta = THREE.MathUtils.degToRad(180);
    sun.setFromSphericalCoords(1, phi, theta);
    this.sky.material.uniforms['sunPosition'].value.copy(sun);
    this.water.material.uniforms['sunDirection'].value.copy(sun).normalize();
    this.scene.environment = pmremGenerator.fromScene(this.sky as any).texture;
    // 太阳点光源
    const pointLight = new THREE.PointLight(0xffffff, 1.2, 2000);
    pointLight.color.setHSL(.995, .5, .9);
    pointLight.position.set(0, 45, -5000);
    const textureLoader = new THREE.TextureLoader();
    const textureFlare0 = textureLoader.load(lensflareTexture0);
    const textureFlare1 = textureLoader.load(lensflareTexture1);
    // 镜头光晕
    const lensflare = new Lensflare();
    lensflare.addElement(new LensflareElement(textureFlare0, 600, 0, pointLight.color));
    lensflare.addElement(new LensflareElement(textureFlare1, 60, .6));
    lensflare.addElement(new LensflareElement(textureFlare1, 70, .7));
    lensflare.addElement(new LensflareElement(textureFlare1, 120, .9));
    lensflare.addElement(new LensflareElement(textureFlare1, 70, 1));
    pointLight.add(lensflare);
    this.scene.add(pointLight);
  }

  // 彩虹
  initTorus() {
    const material = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      transparent: true,
      uniforms: {},
      vertexShader: vertexShader,
      fragmentShader: fragmentShader
    });
    const geometry = new THREE.TorusGeometry(200, 10, 50, 100);
    const torus = new THREE.Mesh(geometry, material);
    (torus as any).opacity = .1;
    torus.position.set(0, -80, -650);
    torus.scale.set(1.8, 1.8, 1.8)
    this.scene.add(torus);
  }

  initManager() {
    const target = { x: 41, y: 257, z: 447 }
    super.initManager(state, target)
  }

  animate2(): void {
    this.animateId2 = requestAnimationFrame(this.animate2.bind(this));
    this.water.material.uniforms['time'].value += 2 / 60.0;
    // stats && stats.update();
    // this.controls && this.controls.update();
    // TWEEN && TWEEN.update();
    const delta = this.clock.getDelta();
    this.mixers && this.mixers.forEach((item: any) => {
      item.update(delta);
    });
    // const timer = Date.now() * 0.0005;
    // this.camera && (this.camera.position.y += Math.sin(timer) * .05);

    // const points = [
    //   {
    //     position: new THREE.Vector3(10, 46, 0),
    //     element: document.querySelector('.point-0') as HTMLElement
    //   },
    //   {
    //     position: new THREE.Vector3(-10, 8, 24),
    //     element: document.querySelector('.point-1') as HTMLElement
    //   },
    //   {
    //     position: new THREE.Vector3(30, 10, 70),
    //     element: document.querySelector('.point-2') as HTMLElement
    //   },
    //   {
    //     position: new THREE.Vector3(-100, 50, -300),
    //     element: document.querySelector('.point-3') as HTMLElement
    //   },
    //   {
    //     position: new THREE.Vector3(-120, 50, -100),
    //     element: document.querySelector('.point-4') as HTMLElement
    //   }
    // ];
    // if (state.value.sceneReady) {
    //   // 遍历每个点
    //   for (const point of points) {
    //     // 获取2D屏幕位置
    //     const screenPosition = point.position.clone();
    //     screenPosition.project(this.camera);
    //     this.raycaster.setFromCamera(screenPosition, this.camera);
    //     const intersects = this.raycaster.intersectObjects(this.scene.children, true);
    //     if (intersects.length === 0) {
    //       // 未找到相交点，显示
    //       point.element.classList.add('visible');
    //     } else {
    //       // 找到相交点
    //       // 获取相交点的距离和点的距离
    //       const intersectionDistance = intersects[0].distance;
    //       const pointDistance = point.position.distanceTo(this.camera.position);
    //       // 相交点距离比点距离近，隐藏；相交点距离比点距离远，显示
    //       intersectionDistance < pointDistance ? point.element.classList.remove('visible') : point.element.classList.add('visible');
    //     }
    //     const translateX = screenPosition.x * sizes.value.width * 0.5;
    //     const translateY = - screenPosition.y * sizes.value.height * 0.5;
    //     point.element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
    //   }

    //   this.renderer.render(this.scene, this.camera);
    // }
  }
  initCamera() {
    super.initCamera()
    this.camera.near = 1
    this.camera.updateProjectionMatrix();
    // this.camera.position.set(65, 160, 320)
    this.camera.position.set(373, 777, 1227)
  }
  initControls() {
    super.initControls()
    this.controls.target.set(0, 0, 0);
    this.controls.maxPolarAngle = 1.4;
    this.controls.minDistance = 180;
    this.controls.maxDistance = 1500;
    this.controls.enabled = true;
  }
  initRender() {
    super.initRender({ x: 41, y: 257, z: 447 })
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
  }
  myDraw() {
    super.draw()
    this.initManager()
    this.initSea()
    this.initSky()
    this.initSun()
    this.initTorus()
    this.initModel()
    this.animate2()
  }

  destroyed(): void {
    super.destroyed(webgl.value!)
    cancelAnimationFrame(this.animateId2)
    // this.gltfLoader.parse('', '', () => { console.log(123) })
    // this.renderer.dispose()
    // this.scene.clear()
  }
}
//#endregion

const webgl = ref<OceanWebgl | null>(null)
const sizes = ref({
  width: 0,
  height: 0
})
const state = ref({
  loadingProcess: 0,
  sceneReady: false,
  loadingTimeout: null
})

function initThree() {
  const canvas = document.getElementById('ocean-webgl') as HTMLElement
  sizes.value = {
    width: canvas.offsetWidth,
    height: canvas.offsetHeight
  }
  webgl.value = new OceanWebgl(canvas, {
    logarithmicDepthBuffer: false // 解决深度冲突
  })
  // webgl.value.removeLight()
  // webgl.value.initHelper()
  // console.log(webgl.value);
}

onMounted(() => {
  initThree()
})

onBeforeUnmount(() => {
  // console.log('组件销毁了！')
  // webgl.value && webgl.value.destroyed(webgl.value)
  if (webgl.value) {
    webgl.value.destroyed()
    // cancelAnimationFrame(webgl.value.animate as any);
  }
  state.value = {
    loadingProcess: 0,
    loadingTimeout: null,
    sceneReady: false,
  }
  webgl.value = null
})
</script>

<style lang="scss" scoped>
// 
</style>
