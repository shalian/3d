<template>
  <div id="lunar" class="webgl">
    <div id="lunar-webgl" class="webgl-3d">
      <Loading v-show="progress != 100">
        <template #default>
          <div class="loading">
            <p>Loading · · ·</p>
            <span class="process">{{ progress }}%</span>
          </div>
        </template>
      </Loading>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import bgTexture from './images/bg.png';
import cycleTexture from './images/cycle.png';
import WebglThreeRender from '@/utils/WebglThreeRender';
import Loading from '@/containers/loading.vue';
import Animations from '@/utils/animations';

class Lunar extends WebglThreeRender {
  meshes = [] as Array<THREE.Group>
  cycle!: any
  group = new THREE.Group()
  plane: any
  gltfLoader!: GLTFLoader
  fbxLoader!: FBXLoader
  animateId2!: number;

  constructor(canvas: HTMLElement) {
    super(canvas)
    this.myDraw()
  }

  initModel() {
    // 创建地面
    var planeGeometry = new THREE.PlaneGeometry(300, 300);
    // 透明材质显示阴影
    var planeMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(0, -0.179, 0);
    plane.receiveShadow = true;
    this.plane = plane
    this.scene.add(plane);

    // 透明材质显示阴影
    this.cycle = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load(cycleTexture),
      transparent: true,
      side: THREE.DoubleSide
    }));
    this.cycle.rotation.x = -0.5 * Math.PI;
    this.cycle.position.set(0, -0.18, 0);
    this.cycle.scale.set(0.12, 0.12, 0.12);
    this.cycle.receiveShadow = true;
    this.scene.add(this.cycle);

    // 🐀🐂🐅🐇🐉🐍🐎🐏🐒🐓🐕🐖
    this.gltfLoader = new GLTFLoader(this.manager)
    this.gltfLoader.load('./models/dragon.gltf', (gltf: any) => {
      // console.log(gltf)
      const mesh = gltf.scene
      mesh.traverse((child: any) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.material.metalness = 0;
          child.material.roughness = .8;
          child.material.transparent = true;
          child.material.side = THREE.DoubleSide;
          child.material.color = new THREE.Color(0xffffff);
        }
      });
      const mixer = new THREE.AnimationMixer(mesh);
      mixer.clipAction(gltf.animations[3]).setDuration(1.2).play();
      this.mixers.push(mixer);
      mesh.rotation.set(0, -59.5, 0)
      mesh.scale.set(3.8, 3.8, 3.8)
      mesh.position.set(0, -2, 0)
      this.group.add(mesh);
    },
      (progress) => { },
      (err) => { console.log(err) }
    )

    // 文字模型
    this.fbxLoader = new FBXLoader();
    this.fbxLoader.load('./models/text.fbx', mesh => {
      mesh.traverse((child: any) => {
        if (child.isMesh) {
          this.meshes.push(mesh);
          child.castShadow = true;
          child.receiveShadow = true;
          child.material.metalness = .2;
          child.material.roughness = .8;
          child.material.color = new THREE.Color(0x111111);
        }
      });
      mesh.position.set(4, 24, -20);
      mesh.rotation.set(-80, 0, 0);
      mesh.scale.set(.45, .45, .45);
      this.group.add(mesh);
      this.group.scale.set(0.1, 0.1, 0.1)
      this.scene.add(this.group)
    });
  }

  initManager() {
    const target = {
      x: -0.04,
      y: 1.9,
      z: 5.4
    }
    super.initManager(state, target)
  }

  initLight2() {
    const cubeGeometry = new THREE.BoxGeometry(0.001, 0.001, 0.001);
    const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xdc161a });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(0, 0, 0);
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.intensity = 1;
    light.position.set(6, 5, 4); // (20, 20, 8)
    light.castShadow = true;
    light.target = cube;
    light.shadow.mapSize.width = 512 * 14;
    light.shadow.mapSize.height = 512 * 14;
    light.shadow.camera.top = 20; // 80
    light.shadow.camera.bottom = -20; // -30
    light.shadow.camera.left = -20; // -30
    light.shadow.camera.right = 20; // 80
    // light.shadow.camera.near = 2; // 阴影相机的近截面
    // light.shadow.camera.far = 60; // 阴影相机的远截面
    // console.log(light.shadow)
    this.scene.add(light);

    // const lightHelper = new THREE.DirectionalLightHelper(light, 1, 'red');
    // scene.add(lightHelper);
    // const lightCameraHelper = new THREE.CameraHelper(light.shadow.camera);
    // scene.add(lightCameraHelper);

    // 环境光
    const ambientLight = new THREE.AmbientLight(0xffffff);
    this.scene.add(ambientLight);

    // 聚光灯
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(20, 20, 8);
    spotLight.castShadow = false;
    // spotLight.shadow.mapSize
    // spotLight.shadow.camera.far
    // spotLight.shadow.camera.nera
    spotLight.target = this.plane;
    this.scene.add(spotLight);
  }
  animate2() {
    this.cycle.rotation.z += 0.3 / 60
    this.animateId2 = requestAnimationFrame(this.animate2.bind(this))
    const delta = this.clock.getDelta();
    this.mixers && this.mixers.forEach((item: any) => {
      item.update(delta * 0.4);
    });
  }

  myDraw() {
    super.draw()
    this.scene.background = new THREE.TextureLoader().load(bgTexture);
    this.scene.fog = new THREE.Fog(0xdddddd, 100, 120);
    this.initManager()
    this.initModel()
    this.initLight2()
    this.animate2()
  }
  destroyed(): void {
    super.destroyed(webgl.value!)
    cancelAnimationFrame(this.animateId2);
    // this.manager = null as unknown as THREE.LoadingManager
    // this.meshes = []
    // this.plane = null
    // this.controls = null as any
    // this.renderer.dispose()
    // this.scene.clear()
  }
  initCamera() {
    super.initCamera()
    this.camera.position.set(15.658330107719104, 10.293379445948675, 16.548807746161597)
  }
  initRender(): void {
    super.initRender()
    this.renderer.shadowMap.enabled = true; // 接收阴影
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap // 阴影类型
    this.webglCanvas.addEventListener(
      'dblclick',
      (() => {
        var oldP = {
          x: this.camera.position.x,
          y: this.camera.position.y,
          z: this.camera.position.z,
        }
        var oldT = {
          x: this.controls.target.x,
          y: this.controls.target.y,
          z: this.controls.target.z,
        }
        // var newP = {
        //   x: 500,
        //   y: 432,
        //   z: -466,
        // }
        var newP = { x: -0.03605639885864392, y: 1.9312043546788207, z: 5.392508662632908 }

        var newT = {
          x: 0,
          y: 0,
          z: 0,
        }
        this.animateCamera(oldP, oldT, newP, newT, () => { })
        // this.camera.position.set(-455, -14, -258);
      }).bind(this)
    )
  }
  initControls() {
    super.initControls()
    this.controls.maxPolarAngle = 1.5;
    this.controls.minDistance = 4;
    this.controls.maxDistance = 25;
  }
}

const webgl = ref<Lunar | null>(null)
const state = ref({
  // 页面模型加载进度，0：未加载，100：加载完成
  loadingProcess: 0,
  loadingTimeout: null
})
const progress = computed(() => state.value.loadingProcess)

function init() {
  const canvas = document.getElementById('lunar-webgl') as HTMLElement
  webgl.value = new Lunar(canvas)
  // webgl.value.initHelper()
  webgl.value.removeLight()
}

onMounted(() => {
  init()
})
onBeforeUnmount(() => {
  // console.log('组件销毁了！')
  // webgl.value && webgl.value.destroyed(webgl.value)
  if (webgl.value) {
    const webglDom = document.getElementById('lunar-webgl')!
    const canvas = webglDom!.getElementsByTagName('canvas')![0]
    // webgl.value.renderer = null;
    webgl.value.destroyed()
    // cancelAnimationFrame(webgl.value.animate as any);
    // webgl.value.scene.clear();

    // webglDom?.removeChild(canvas)
  }
  state.value = {
    loadingProcess: 0,
    loadingTimeout: null
  }
  webgl.value = null
})
</script>

<style scoped lang="scss">
</style>
