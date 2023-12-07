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
      <div class="point point-0">
        <div class="label label-0">1</div>
        <div class="text">信封：圣诞老人送来的一封信。圣诞老人郑重声明：不要迷恋爷，爷只是个传说。爷没有会飞的驯鹿，爷的礼物也不多。只好编一条真挚的祝福，祝你平安夜平平安安，圣诞节快快乐乐!</div>
      </div>
      <div className="point point-1">
        <div className="label label-1">2</div>
        <div className="text">雪人：漫天飞舞的雪花，把大地覆盖成一片雪白，两眼发亮的雪人站在那里，在这白茫茫的大雪中，他显得格外的明亮耀眼。</div>
      </div>
      <!-- <div className="point point-2">
        <div className="label label-2">3</div>
        <div className="text">沙滩：宇宙展开的一小角。不想说来这里是暗自疗伤，那过于矫情，只想对每一粒沙子，每一朵浪花问声你们好吗</div>
      </div> -->
      <!-- <div className="point point-3">
        <div className="label label-3">4</div>
        <div className="text">飞鸟：在苍茫的大海上，狂风卷集着乌云。在乌云和大海之间，海燕像黑色的闪电，在高傲地飞翔。</div>
      </div> -->
      <!-- <div className="point point-4">
        <div className="label label-4">5</div>
        <div className="text">礁石：寂寞又怎么样？礁石都不说话，但是水流过去之后，礁石留下。</div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import WebglThreeRender from '@/utils/WebglThreeRender.ts'
import Loading from '@/containers/loading.vue'
import Snow from './images/雪花.svg'
import Animations from '@/utils/animations';

class Christmas extends WebglThreeRender {
  gltfLoader!: GLTFLoader
  animateId2!: number;
  cloud: any
  range = 500
  speed = 0.12
  points = [
    {
      position: new THREE.Vector3(0.2, -1, -0.6),
      element: document.querySelector('.point-0') as HTMLElement,
      class: 'point-0'
    },
    {
      position: new THREE.Vector3(5, 4, 4.4),
      element: document.querySelector('.point-1') as HTMLElement,
      class: 'point-1'
    },
    // {
    //   position: new THREE.Vector3(30, 10, 70),
    //   element: document.querySelector('.point-2') as HTMLElement,
    //   class: 'point-2'
    // },
    // {
    //   position: new THREE.Vector3(-100, 50, -300),
    //   element: document.querySelector('.point-3') as HTMLElement,
    //   class: 'point-3'
    // },
    // {
    //   position: new THREE.Vector3(-120, 50, -100),
    //   element: document.querySelector('.point-4') as HTMLElement,
    //   class: 'point-4'
    // }
  ];

  constructor(canvas: HTMLElement, options?: any) {
    super(canvas, options)
    this.myDraw()
  }

  initModel(): void {
    this.gltfLoader = new GLTFLoader(this.manager)
    const group = new THREE.Group()
    this.gltfLoader.load('./models/圣诞树.glb', (gltf) => {
      // console.log(gltf)
      const mesh = gltf.scene
      mesh.position.set(-8, -1.8, 10)
      mesh.rotation.set(0, Math.PI / 4, 0)
      mesh.scale.set(0.05, 0.065, 0.05)
      mesh.traverse((child: any) => {
        if (child.isMesh) {
          if (child.name.includes('Box0')) child.castShadow = false;
          else child.castShadow = true;
        }
      })
      group.add(mesh)

      const animation = gltf.animations[0]
      const mixer = new THREE.AnimationMixer(mesh);
      mixer.clipAction(animation).setDuration(1.2).play();
      this.mixers.push(mixer);
    }, (process) => { }, (err) => { console.log(err) })

    this.gltfLoader.load('./models/圣诞老人的信.glb', (gltf) => {
      // console.log(gltf)
      const mesh = gltf.scene
      mesh.position.set(-3.9, -2, 2.5)
      mesh.rotation.set(-Math.PI / 2, 0, 0)
      mesh.scale.set(8, 8, 8)
      group.add(mesh)

      const animation = gltf.animations[0]
      const mixer = new THREE.AnimationMixer(mesh);
      // console.log(mixer)
      mixer.clipAction(animation).setDuration(0.5).play();
      // this.mixers.push(mixer);
    }, (process) => { }, (err) => { console.log(err) })

    this.gltfLoader.load('./models/雪屋.glb', (gltf) => {
      // console.log(gltf)
      const mesh = gltf.scene
      mesh.position.set(-4, -2, -5)
      mesh.rotation.set(0, Math.PI / 36, 0)
      mesh.scale.set(1.8, 1.8, 1.8)
      mesh.traverse((child: any) => {
        if (child.isMesh) {
          child.castShadow = true;
        }
      })
      group.add(mesh)
    }, (process) => { }, (err) => { console.log(err) })

    this.gltfLoader.load('./models/雪地.glb', (gltf) => {
      // console.log(gltf)
      const mesh = gltf.scene
      mesh.position.set(15, -6.8, 5)
      mesh.rotation.set(0, Math.PI / 2, 0)
      mesh.scale.set(0.5, 0.5, 0.5)
      mesh.receiveShadow = true;
      group.add(mesh)

      const mesh2 = mesh.clone()
      mesh2.scale.set(10, 0.1, 10)
      mesh2.position.set(-100, -3.3, -380)
      mesh2.rotation.set(Math.PI, 0, 0)
      group.add(mesh2)
      const notVisibles = ['Object_5', 'Object_7', 'Object_11', 'Object_13', 'Object_15', 'Object_17', 'Object_19', 'Object_21', 'Object_23', 'Object_25', 'Object_27', 'Object_29', 'Object_31', 'Object_33', 'Object_35', 'Object_37', 'Object_39'] // 11肚子  13帽子  15头  17左眼  19右眼  21鼻子
      mesh.traverse((child: any) => {
        if (child.isMesh) {
          // 创建一个支持阴影的 MeshStandardMaterial
          const newMaterial = new THREE.MeshStandardMaterial({
            color: child.material.color, // 保留原始颜色
            roughness: 0.7,
            metalness: 0.0,
          });
          // 将新的材质应用到物体上
          child.material = newMaterial;
          child.castShadow = true;
          child.receiveShadow = true;
          if (notVisibles.includes(child.name)) child.visible = false;
        }
      })
      mesh2.traverse((child: any) => {
        if (child.isMesh) {
          const newMaterial = new THREE.MeshStandardMaterial({
            color: child.material.color, // 保留原始颜色
            side: THREE.DoubleSide
          });
          // 将新的材质应用到物体上
          child.material = newMaterial;
          child.receiveShadow = true;
          if (notVisibles.includes(child.name)) child.visible = false;
        }
      })
    }, (process) => { }, (err) => { console.log(err) })

    this.gltfLoader.load('./models/雪人2.glb', (gltf) => {
      const mesh = gltf.scene
      mesh.position.set(1, -0.2, 8.5)
      mesh.rotation.set(0, -Math.PI / 3, 0)
      mesh.scale.set(0.6, 0.6, 0.6)
      mesh.traverse((child: any) => {
        if (child.isMesh) {
          child.castShadow = true;
        }
      })
      const animation = gltf.animations[0]
      const mixer = new THREE.AnimationMixer(mesh);
      mixer.clipAction(animation).setDuration(0.35).play();
      this.mixers.push(mixer);
      group.add(mesh)
    }, (process) => { }, (err) => { console.log(err) })

    group.position.set(4, 0, -4)
    this.scene.add(group)
  }

  initPoint() {
    document.querySelectorAll('.point').forEach(item => {
      item.addEventListener('click', (event: any) => {
        let className = event.target!.classList[event.target.classList.length - 1];
        switch (className) {
          case 'label-0':
            Animations.animateCamera(this.camera, this.controls, { x: -0.05667105479061238, y: 1.9438436206209484, z: 1.499206272744231 }, { x: 0, y: 0, z: 0 }, 1600, () => { });
            break;
          case 'label-1':
            Animations.animateCamera(this.camera, this.controls, { x: 9.2, y: 3.35, z: 7.54 }, { x: 0, y: 0, z: 0 }, 1600, () => { });
            break;
          case 'label-2':
            Animations.animateCamera(this.camera, this.controls, { x: 30, y: 10, z: 100 }, { x: 0, y: 0, z: 0 }, 1600, () => { });
            break;
          default:
            Animations.animateCamera(this.camera, this.controls, { x: 0, y: 40, z: 140 }, { x: 0, y: 0, z: 0 }, 1600, () => { });
            break;
        }
      }, false);
    });
  }

  // 下雪
  initSnow(vetics?: any) {
    // 创建几何体
    const geometry = new THREE.BufferGeometry()
    // console.log(geometry)
    // 加载纹理图片
    // https://img2.baidu.com/it/u=1879110700,2254023743&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=496
    const texture = new THREE.TextureLoader().load(Snow)
    // 定义材质
    const material = new THREE.PointsMaterial({
      size: 0.5,
      transparent: true,
      opacity: 0.8,
      map: texture,
      sizeAttenuation: true,
      color: 0xffffff,
      // 该融合模式表示，在画新像素时背景像素的颜色会被添加到新像素上。
      // 在本案例中，意味着黑色背景不会被加载出来，我们也可以把纹理背景定义为透明色，也会有类似效果。
      blending: THREE.AdditiveBlending,
      depthTest: false, // 解决贴图黑边的问题
      depthWrite: false, // 保证粒子之间不会互相影响
    })

    let veticsFloat32Array = []
    for (let i = 0; i < 2000; i++) {
      // 正方体
      // const particle = new THREE.Vector3(
      //   Math.random() * this.range - this.range / 2,
      //   Math.random() * this.range - this.range / 2,
      //   Math.random() * this.range - this.range / 2
      // )

      // 圆柱
      // 随机生成极坐标角度
      const theta = Math.random() * Math.PI * 2;
      // 随机生成半径
      const radius = Math.random() * this.range / 2;
      // 计算粒子在三维坐标系中的位置
      const particle = new THREE.Vector3(
        radius * Math.cos(theta),
        Math.random() * this.range - this.range / 2,
        radius * Math.sin(theta)
      );
      veticsFloat32Array.push(...particle.toArray())
    }

    // 初始化渲染粒子雨滴
    const vertices = new THREE.Float32BufferAttribute(vetics || veticsFloat32Array, 3)
    geometry.attributes.position = vertices
    const cloud = new THREE.Points(geometry, material)
    cloud.raycast = () => { }; // 禁用射线检测
    cloud.position.set(0, -10, 0)
    cloud.scale.set(0.5, 1, 0.5)
    this.scene.add(cloud)
    return cloud
  }

  animate2(): void {
    this.animateId2 = requestAnimationFrame(this.animate2.bind(this))
    const delta = this.clock.getDelta()
    this.mixers.forEach((item: THREE.AnimationMixer) => {
      item.update(delta * 0.08)
    })

    if (state.value.sceneReady) {
      // 遍历每个点
      for (const point of this.points) {
        // 获取2D屏幕位置
        const screenPosition = point.position.clone();
        screenPosition.project(this.camera);
        this.raycaster.setFromCamera(screenPosition, this.camera);
        const intersects = this.raycaster.intersectObjects(this.scene.children, true);
        if (intersects.length === 0) {
          // 未找到相交点，显示
          point.element!.className = `point ${point.class} visible`;
        } else {
          // 找到相交点
          // 获取相交点的距离和点的距离
          const intersectionDistance = intersects[0].distance;
          const pointDistance = point.position.distanceTo(this.camera.position);
          // 相交点距离比点距离近，隐藏；相交点距离比点距离远，显示
          if (point.element) {
            point.element.className = intersectionDistance < pointDistance ? `point ${point.class}` : `point ${point.class} visible`;
          }
        }
        const translateX = screenPosition.x * sizes.value.width * 0.5;
        const translateY = - screenPosition.y * sizes.value.height * 0.5;
        if (point.element) point.element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
      }
    }

    if (this.cloud) {
      this.scene.remove(this.cloud)
      let rainPositionArray = Array.from(this.cloud.geometry.attributes.position.array) as any[]
      for (let i = 0; i < rainPositionArray.length; i += 3) {
        rainPositionArray[i + 1] -= this.speed
        if (rainPositionArray[i + 1] < 0) {
          rainPositionArray[i + 1] = Math.random() * this.range - this.range / 2
        }
      }
      this.cloud = this.initSnow(rainPositionArray)
    }
  }

  myDraw() {
    this.scene.background = new THREE.Color(0x333333)
    this.initManager()
    this.initModel()
    this.initPoint()
    this.cloud = this.initSnow()
    this.initControls()
    // this.initHelper()
    this.animate2()
  }

  initRender(): void {
    super.initRender(target)
    this.renderer.shadowMap.enabled = true; // 接收阴影
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap // 阴影类型
  }
  initCamera(): void {
    super.initCamera()
    this.camera.near = 1
    this.camera.position.set(107, 100, 64)
  }
  initLight(): void {
    var ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    ambientLight.name = '_ambientLight'
    this.scene.add(ambientLight)

    const light = new THREE.DirectionalLight(0xffffff, 0.1);
    light.position.set(20, 25, 5);
    light.castShadow = true
    light.shadow.mapSize.width = 512 * 4;
    light.shadow.mapSize.height = 512 * 4;
    light.shadow.camera.top = 20; // 80
    light.shadow.camera.bottom = -20; // -30
    light.shadow.camera.left = -20; // -30
    light.shadow.camera.right = 20; // 80
    this.scene.add(light);
  }
  initControls(): void {
    super.initControls()
    this.controls.maxPolarAngle = 1.5
    this.controls.minDistance = 2
    this.controls.maxDistance = 180
    this.controls.enablePan = false
  }
  initManager(): void {
    super.initManager(state, target)
  }
  destroyed(): void {
    super.destroyed(webgl.value!)
    cancelAnimationFrame(this.animateId2)
    this.cloud = null
  }
}

const target = { x: 13.4, y: 12.6, z: 24.9 }
const webgl = ref<Christmas | null>(null)
const state = ref({
  loadingProcess: 0,
  loadingTimeout: null,
  sceneReady: false
})
const sizes = ref({
  width: 0,
  height: 0
})

function init() {
  const canvas = document.getElementById('christmas-webgl')!
  sizes.value = {
    width: canvas.offsetWidth,
    height: canvas.offsetHeight
  }
  webgl.value = new Christmas(canvas, { logarithmicDepthBuffer: false })
  // webgl.value.removeLight()
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

<style scoped lang="scss">
.point {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;

  &.visible {
    .label {
      transform: scale(1, 1)
    }
  }

  .label {
    position: absolute;
    top: -16px;
    left: -16px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #00000077;
    border: 1px solid #ffffff77;
    color: #ffffff;
    font-family: Helvetica, Arial, sans-serif;
    text-align: center;
    line-height: 32px;
    font-weight: 100;
    font-size: 14px;
    cursor: help;
    transform: scale(0, 0);
    transition: transform 0.3s;
  }

  &:hover .text {
    opacity: 1;
  }

  .text {
    position: absolute;
    top: 30px;
    left: -120px;
    width: 210px;
    padding: 12px 20px;
    border-radius: 4px;
    background: rgba(0, 0, 0, .6);
    border: 1px solid #ffffff77;
    color: #ffffff;
    line-height: 1.3em;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 100;
    font-size: 14px;
    word-break: break-all;
    text-align: left;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }
}
</style>
