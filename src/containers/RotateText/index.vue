<template>
  <div id="ocean" class="webgl">
    <div id="ocean-webgl" class="webgl-3d">
      <!-- <Loading v-show="state.loadingProcess != 100">
        <template #default>
          <div class="loading">
            <p>Loading · · ·</p>
            <span class="process">{{ state.loadingProcess }}%</span>
          </div>
        </template>
      </Loading> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as THREE from 'three'
import WebglThreeRender from '@/utils/WebglThreeRender';
import logoMatcap from './images/matcap_0.png'
import logoMatcap1 from './images/matcap_5.png'
import logoMatcap2 from './images/matcap_6.png'
import bgTexture from './images/bg.png'
import ThreeText from '@/utils/ThreeText'
const textureLoader = new THREE.TextureLoader();

class RotateText extends WebglThreeRender {
  matcaps = {
    logoMatcap: textureLoader.load(logoMatcap),
    textMatcap1: textureLoader.load(logoMatcap1),
    textMatcap2: textureLoader.load(logoMatcap2),
  }
  coneGroup!: THREE.Group
  axis = new THREE.Vector3(0, 1, 0);
  constructor(canvas: HTMLElement) {
    super(canvas)
    this.myDraw()
  }
  initModel(): void {
    // 锥形
    //#region 
    const coneGroup = new THREE.Group()
    const logoMaterial = new THREE.MeshMatcapMaterial({
      matcap: this.matcaps.logoMatcap,
      side: THREE.DoubleSide,
    })
    const cone = new THREE.Mesh(new THREE.ConeBufferGeometry(4, 4, 4), logoMaterial);
    coneGroup.add(cone)

    const cylinder = new THREE.Mesh(new THREE.CylinderBufferGeometry(6, 10, 4, 4, 1), logoMaterial);
    cylinder.position.y = -6
    coneGroup.add(cylinder);

    const cylinder2 = new THREE.Mesh(new THREE.CylinderBufferGeometry(12, 16, 4, 4, 1), logoMaterial);
    cylinder2.position.y = -12
    coneGroup.add(cylinder2);

    coneGroup.scale.set(1.5, 1.5, 1.5)
    coneGroup.position.set(-2, 8, 50)
    this.coneGroup = coneGroup
    this.coneGroup.rotateX(-1 * Math.PI * 0.05);
    this.coneGroup.rotateY(Math.PI * 0.2);
    this.coneGroup.rotateZ(Math.PI * 0.15);
    this.scene.add(coneGroup)
    //#endregion

    // 文字
    //#region 
    const textGroup = new THREE.Group();
    new ThreeText({
      text: 'TEXT',
      parent: textGroup,
      material: {
        matcap: this.matcaps.textMatcap1
      },
      position: new THREE.Vector3(-150, 110, 0),
      textOptions: {
        spacing: 20,
        size: 80,
        height: 25, // 挤出文本的厚度。
        curveSegments: 12, // （表示文本的）曲线上点的数量。默认值为12。
        bevelEnabled: true, // 是否开启斜角
        bevelThickness: 10, // 文本上斜角的深度，默认值为20。
        bevelSize: 10, // 斜角与原始文本轮廓之间的延伸距离。默认值为8。
        bevelOffset: 2,
        bevelSegments: 5 // 斜角的分段数。默认值为3。
      },
      animation: 'zoomAndFlip'
    })
    new ThreeText({
      text: 'Welcome',
      parent: textGroup,
      material: {
        matcap: this.matcaps.textMatcap2,
        opacity: 0.75
      },
      position: new THREE.Vector3(-240, -50, 0),
      textOptions: {
        spacing: 20,
        size: 60,
        height: 25, // 挤出文本的厚度。
        curveSegments: 12, // （表示文本的）曲线上点的数量。默认值为12。
        bevelEnabled: true, // 是否开启斜角
        bevelThickness: 10, // 文本上斜角的深度，默认值为20。
        bevelSize: 10, // 斜角与原始文本轮廓之间的延伸距离。默认值为8。
        bevelOffset: 2,
        bevelSegments: 5 // 斜角的分段数。默认值为3。
      },
      animation: 'upDownFlip'
    })
    textGroup.position.set(0, 0, 0)
    textGroup.scale.set(0.2, 0.2, 0.2)
    this.scene.add(textGroup)
    //#endregion
  }
  animate2(): void {
    requestAnimationFrame(this.animate2.bind(this))
    if (this.coneGroup) {
      this.coneGroup.rotateOnAxis(this.axis, Math.PI / 400);
    }
  }
  myDraw() {
    this.scene.background = new THREE.TextureLoader().load(bgTexture);
    this.initModel()
    this.animate2()
  }
  initRender(): void {
    super.initRender({ x: 0, y: 10, z: 150 })
  }
  initControls(): void {
    super.initControls()
    this.controls.enableDamping = false
    this.controls.minDistance = 80
    this.controls.maxDistance = 200
    this.controls.minPolarAngle = 0.9 // 上最大角度
    this.controls.maxPolarAngle = 1.6
    this.controls.minAzimuthAngle = -0.5 // 左最大角度
    this.controls.maxAzimuthAngle = 0.5
  }
  initCamera(): void {
    super.initCamera()
    this.camera.position.set(0, 10, 150)
  }
}

const webgl = ref<RotateText | null>(null)
const sizes = ref({
  width: 0,
  height: 0
})

function init() {
  const canvas = document.getElementById('ocean-webgl')!
  webgl.value = new RotateText(canvas)
  // webgl.value.initHelper()
}

onMounted(() => {
  init()
})
</script>
