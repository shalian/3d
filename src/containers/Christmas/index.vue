<template>
  <div class="webgl" id="christmas">
    <div id="christmas-webgl" class="webgl-3d">
      <Loading v-if="state.loadingProcess < 100">
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
import { Ref, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import WebglThreeRender from '@/utils/WebglThreeRender.ts'
import Loading from '@/containers/loading.vue'


class Christmas extends WebglThreeRender {
  gltfLoader!: GLTFLoader
  animateId2!: number;
  constructor(canvas: HTMLElement) {
    super(canvas)
    this.myDraw()
  }

  initModel(): void {
    this.gltfLoader = new GLTFLoader(this.manager) // this.manager
    this.gltfLoader.load('./models/merry_christmas.glb', (gltf) => {
      console.log(gltf)
      const mesh = gltf.scene
      mesh.position.set(0, -1, 0)
      mesh.scale.set(0.02, 0.02, 0.02)
      this.scene.add(mesh)

      const animation = gltf.animations[0]
      const mixer = new THREE.AnimationMixer(mesh);
      mixer.clipAction(animation).setDuration(1.2).play();
      this.mixers.push(mixer);
    }, (process) => { }, (err) => { console.log(err) })
  }

  animate2(): void {
    this.animateId2 = requestAnimationFrame(this.animate2.bind(this))
    const delta = this.clock.getDelta()
    this.mixers.forEach((item: THREE.AnimationMixer) => {
      item.update(delta * 0.08)
    })
  }

  myDraw() {
    this.scene.background = new THREE.Color(0x333333)
    this.initManager()
    this.initModel()
    this.initControls()
    this.initHelper()
    this.animate2()
  }

  initCamera(): void {
    super.initCamera()
    this.camera.position.set(28, 29, 26)
  }
  initControls(): void {
    super.initControls()
    this.controls.minDistance = 2
    this.controls.maxDistance = 100
    this.controls.enablePan = false
  }
  initManager(): void {
    const target = { x: 1.04, y: 5.8, z: 8 }
    super.initManager(state, target)
  }
  destroyed(): void {
    super.destroyed(webgl.value!)
    cancelAnimationFrame(this.animateId2)
  }
}


const webgl = ref<Christmas | null>(null)
const state = ref({
  loadingProcess: 0,
  loadingTimeout: null
})


function init() {
  const canvas = document.getElementById('christmas-webgl')!
  webgl.value = new Christmas(canvas)
}

onMounted(() => {
  init()
})
onBeforeUnmount(() => {
  if (webgl.value) {
    webgl.value.destroyed()
  }
  webgl.value = null
})
</script>
