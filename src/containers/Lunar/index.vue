<template>
  <div id="lunar" class="webgl">
    <div id="lunar-webgl" class="webgl-3d"> </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import WebglThreeRender from '@/utils/WebglThreeRender';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import textModel from './models/text.fbx'

class Lunar extends WebglThreeRender {
  constructor(canvas: HTMLElement) {
    super(canvas)

    this.myDraw()
  }

  loadModel() {
    this.loader = new GLTFLoader()

    this.loader.load('./models/island.glb', (gltf: any) => {
      const mesh = gltf.scene
      this.scene.add(mesh)
    })

    // 文字模型
    // const fbxLoader = new FBXLoader();
    // fbxLoader.load(textModel, mesh => {
    //   mesh.traverse((child: any) => {
    //     if (child.isMesh) {
    //       meshes.push(mesh);
    //       child.castShadow = true;
    //       child.receiveShadow = true;
    //       child.material.metalness = .2;
    //       child.material.roughness = .8;
    //       child.material.color = new THREE.Color(0x111111);
    //     }
    //   });
    //   mesh.position.set(4, 6, -8);
    //   mesh.rotation.set(-80, 0, 0);
    //   mesh.scale.set(.32, .32, .32);
    //   group.add(mesh);
    // });
  }

  initPlane() {
    // 创建地面
    var planeGeometry = new THREE.PlaneGeometry(100, 100);
    // 透明材质显示阴影
    var planeMaterial = new THREE.ShadowMaterial({ color: 0x00ff00, opacity: .5 });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(0, -8, 0);
    plane.receiveShadow = true;
    this.scene.add(plane);
  }

  resetCamera() {
    this.camera.lookAt(0, 0, 0)
  }
  myDraw() {
    this.initPlane()
    this.loadModel()
  }
}

function init() {
  const canvas = document.getElementById('lunar-webgl') as HTMLElement
  const lunar = new Lunar(canvas)
}

onMounted(() => {
  init()
})
</script>
