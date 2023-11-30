<template>
  <div id="ocean">
    <div id="ocean-webgl"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as THREE from "three";
import * as TWEEN from '@tweenjs/tween.js'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Water } from 'three/examples/jsm/objects/Water';
import { Sky } from 'three/examples/jsm/objects/Sky';
import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare.js';
import WebglThreeRender from '@/utils/WebglThreeRender'
import waterTexture from '@/containers/Ocean/images/waternormals.jpg';

//#region 
// class OceanWebgl extends WebglThreeRender {
//   mixers: any
//   sky: Sky
//   water: Water
//   island: any
//   state = {
//     loadingProcess: 0,
//     sceneReady: false
//   }

//   constructor(dom: HTMLElement) {
//     super(dom)
//     this.mixers = [];
//     this.initSea()
//     this.initSky()
//     this.loadModel()
//     this.resetCamera()
//     this.render2()
//     this.animate1()
//   }

//   loadModel() {
//     this.loader = new GLTFLoader()
//     this.loader.load('./models/island.glb', (gltf: any) => {
//       const island = gltf.scene
//       island.traverse((child: any) => {
//         if (child.isMesh) {
//           child.material.metalness = .4;
//           child.material.roughness = .6;
//         }
//       })
//       island.position.set(0, -5, 0)
//       island.scale.set(80, 80, 80)
//       this.island = island
//       this.scene.add(island)
//     })
//     this.loader.load('./models/flamingo.glb', (gltf: any) => {
//       const mesh = gltf.scene.children[0];
//       mesh.scale.set(0.4, 0.4, 0.4)
//       mesh.position.set(-100, 80, -300)
//       mesh.rotation.set(0.2, -0.8, 0)
//       this.scene.add(mesh)

//       const bird2 = mesh.clone();
//       bird2.scale.set(0.0035, 0.0035, 0.0035)
//       bird2.position.set(150, 80, -500)
//       bird2.rotation.set(0.2, -0.8, 0)
//       this.scene.add(bird2);

//       const mixer = new THREE.AnimationMixer(mesh);
//       mixer.clipAction(gltf.animations[0]).setDuration(1.2).play();
//       console.log(mixer.clipAction(gltf.animations[0]).setDuration(1.2))
//       this.mixers.push(mixer);

//       const mixer2 = new THREE.AnimationMixer(bird2);
//       mixer2.clipAction(gltf.animations[0]).setDuration(1.8).play();
//       this.mixers.push(mixer2);
//     })
//   }
//   resetCamera() {
//     this.camera.position.set(60, 280, 280)
//   }

//   // 天空
//   initSky() {
//     this.sky = new Sky();
//     this.sky.scale.setScalar(10000);
//     this.scene.add(this.sky);
//     const skyUniforms = this.sky.material.uniforms;
//     skyUniforms['turbidity'].value = 20;
//     skyUniforms['rayleigh'].value = 2;
//     skyUniforms['mieCoefficient'].value = 0.005;
//     skyUniforms['mieDirectionalG'].value = 0.8;
//     // 太阳
//     const sun = new THREE.Vector3();
//     const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
//     const phi = THREE.MathUtils.degToRad(88);
//     const theta = THREE.MathUtils.degToRad(180);
//     sun.setFromSphericalCoords(1, phi, theta);
//     this.sky.material.uniforms['sunPosition'].value.copy(sun);
//     this.water.material.uniforms['sunDirection'].value.copy(sun).normalize();
//     this.scene.environment = pmremGenerator.fromScene(this.sky).texture;
//   }

//   // 海
//   initSea() {
//     const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
//     this.water = new Water(waterGeometry, {
//       textureWidth: 512,
//       textureHeight: 512,
//       waterNormals: new THREE.TextureLoader().load(waterTexture, (texture: any) => {
//         texture.wrapS = THREE.RepeatWrapping
//         texture.wrapT = THREE.RepeatWrapping;
//       }),
//       sunDirection: new THREE.Vector3(),
//       sunColor: 0xffffff,
//       waterColor: 0x0072ff,
//       distortionScale: 4,
//       fog: this.scene.fog !== undefined
//     });
//     this.water.rotation.x = - Math.PI / 2;
//     this.scene.add(this.water);
//   }

//   render2() {
//     this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
//   }

//   animate1(): void {
//     requestAnimationFrame(this.animate1.bind(this));
//     this.water.material.uniforms['time'].value += 2 / 60.0;
//     // stats && stats.update();
//     this.controls && this.controls.update();
//     TWEEN && TWEEN.update();
//     const delta = this.clock.getDelta();
//     this.mixers && this.mixers.forEach((item: any) => {
//       item.update(delta);
//     });
//     // const timer = Date.now() * 0.0005;
//     // this.camera && (this.camera.position.y += Math.sin(timer) * .05);

//     // const points = [
//     //   {
//     //     position: new THREE.Vector3(10, 46, 0),
//     //     element: document.querySelector('.point-0') as HTMLElement
//     //   },
//     //   {
//     //     position: new THREE.Vector3(-10, 8, 24),
//     //     element: document.querySelector('.point-1') as HTMLElement
//     //   },
//     //   {
//     //     position: new THREE.Vector3(30, 10, 70),
//     //     element: document.querySelector('.point-2') as HTMLElement
//     //   },
//     //   {
//     //     position: new THREE.Vector3(-100, 50, -300),
//     //     element: document.querySelector('.point-3') as HTMLElement
//     //   },
//     //   {
//     //     position: new THREE.Vector3(-120, 50, -100),
//     //     element: document.querySelector('.point-4') as HTMLElement
//     //   }
//     // ];
//     // if (this.state.sceneReady) {
//     //   // 遍历每个点
//     //   for (const point of points) {
//     //     // 获取2D屏幕位置
//     //     const screenPosition = point.position.clone();
//     //     screenPosition.project(this.camera);
//     //     this.raycaster.setFromCamera(screenPosition, this.camera);
//     //     const intersects = this.raycaster.intersectObjects(this.scene.children, true);
//     //     if (intersects.length === 0) {
//     //       // 未找到相交点，显示
//     //       point.element.classList.add('visible');
//     //     } else {
//     //       // 找到相交点
//     //       // 获取相交点的距离和点的距离
//     //       const intersectionDistance = intersects[0].distance;
//     //       const pointDistance = point.position.distanceTo(this.camera.position);
//     //       // 相交点距离比点距离近，隐藏；相交点距离比点距离远，显示
//     //       intersectionDistance < pointDistance ? point.element.classList.remove('visible') : point.element.classList.add('visible');
//     //     }
//     //     const translateX = screenPosition.x * sizes.value.width * 0.5;
//     //     const translateY = - screenPosition.y * sizes.value.height * 0.5;
//     //     point.element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
//     //   }

//     //   this.renderer.render(this.scene, this.camera);
//     // }
//   }
// }
//#endregion

class OceanWebgl {
  webglCanvas: any
  camera: any
  scene!: THREE.Scene
  renderer!: THREE.WebGLRenderer
  loader!: GLTFLoader
  controls!: OrbitControls
  clock!: THREE.Clock

  mixers: any
  sky!: Sky
  water!: Water
  island: any
  state = {
    loadingProcess: 0,
    sceneReady: false
  }

  constructor(dom: HTMLElement) {
    this.webglCanvas = dom
    this.mixers = [];
    this.scene = new THREE.Scene()

    this.initRender()
    this.initCamera()
    this.initLight()
    this.initControls()
    this.initModel()
    this.animate()
  }

  initLight() {
    /**
     * 添加环境光
     */
    var ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    ambientLight.name = '_ambientLight'
    // this.scene.add(ambientLight)
    /**
     * 打三个方向的光
     */
    var directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.name = '_directionalLight'
    directionalLight.position.set(180, 100, 50)
    this.scene.add(directionalLight)

    var directionalLight2 = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight2.name = '_directionalLight2'
    directionalLight2.position.set(-180, 100, 50)
    this.scene.add(directionalLight2)

    var directionalLight3 = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight3.name = '_directionalLight3'
    directionalLight3.position.set(-180, 100, -50)
    this.scene.add(directionalLight3)
  }

  initModel() {
    this.loader = new GLTFLoader()

    // 海
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

    // 天空
    this.sky = new Sky();
    this.sky.scale.setScalar(10000);
    this.scene.add(this.sky);
    const skyUniforms = this.sky.material.uniforms;
    skyUniforms['turbidity'].value = 20;
    skyUniforms['rayleigh'].value = 2;
    skyUniforms['mieCoefficient'].value = 0.005;
    skyUniforms['mieDirectionalG'].value = 0.8;
    // 太阳
    const sun = new THREE.Vector3();
    const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
    const phi = THREE.MathUtils.degToRad(88);
    const theta = THREE.MathUtils.degToRad(180);
    sun.setFromSphericalCoords(1, phi, theta);
    this.sky.material.uniforms['sunPosition'].value.copy(sun);
    this.water.material.uniforms['sunDirection'].value.copy(sun).normalize();
    this.scene.environment = pmremGenerator.fromScene(this.sky as any).texture;

    // 小岛
    this.loader.load('./models/island.glb', (gltf: any) => {
      const island = gltf.scene
      island.traverse((child: any) => {
        if (child.isMesh) {
          child.material.metalness = .4;
          child.material.roughness = .6;
        }
      })
      island.position.set(0, -5, 0)
      island.scale.set(80, 80, 80)
      this.island = island
      this.scene.add(island)
    })
  }

  initControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.target.set(0, 0, 0);
    this.controls.enableDamping = true;
    this.controls.enablePan = false;
    this.controls.maxPolarAngle = 1.5;
    this.controls.minDistance = 50;
    this.controls.maxDistance = 1200;
  }
  initCamera() {
    this.camera = new THREE.PerspectiveCamera(
      800,
      this.webglCanvas.clientWidth / this.webglCanvas.clientHeight,
      0.1,
      10000
    )
    this.camera.position.set(60, 280, 280)
  }

  initRender() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    this.renderer.setSize(
      this.webglCanvas.clientWidth,
      this.webglCanvas.clientHeight
    )
    //告诉渲染器需要阴影效果
    this.renderer.shadowMap.enabled = false
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap // 默认的是，没有设置的这个清晰 THREE.PCFShadowMap
    this.webglCanvas.appendChild(this.renderer.domElement)
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;

    this.clock = new THREE.Clock();
  }

  animate(): void {
    this.renderer.render(this.scene, this.camera)
    requestAnimationFrame(this.animate.bind(this));
    this.water.material.uniforms['time'].value += 2 / 60.0;
    // stats && stats.update();
    this.controls && this.controls.update();
    TWEEN && TWEEN.update();
    const delta = this.clock!.getDelta();
    this.mixers && this.mixers.forEach((item: any) => {
      item.update(delta);
    });
  }

  initHelper() {
    var helper = new THREE.AxesHelper(350)
    this.scene.add(helper)
  }
}

const webgl = ref<OceanWebgl>()
const sizes = ref({
  width: 0,
  height: 0
})

function initThree() {
  const canvas = document.getElementById('ocean-webgl') as HTMLElement
  // console.log(canvas.offsetWidth)
  sizes.value = {
    width: canvas.offsetWidth,
    height: canvas.offsetHeight
  }
  webgl.value = new OceanWebgl(canvas)
  // webgl.value.removeLight()
  // webgl.value.initHelper() 
  console.log(webgl.value);
}

onMounted(() => {
  initThree()
})
</script>

<style lang="scss" scoped>
#ocean {
  width: 100vw;
  height: 100vh;

  #ocean-webgl {
    width: 100%;
    height: 100%;
  }
}
</style>
