/* eslint-disable */
import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
import Stats from 'three/examples/jsm/libs/stats.module'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

import {
  CSS2DObject,
  CSS2DRenderer,
} from 'three/examples/jsm/renderers/CSS2DRenderer'


export default class WebglThreeRender {
  /**
   * @webglCanvas 场景入口DOM
   */
  webglCanvas

  renderer!: THREE.WebGLRenderer
  camera!: any
  scene!: THREE.Scene
  light: any
  stats: { dom: any } | undefined
  controls!: OrbitControls
  GLTFSCENE: any
  loader!: OBJLoader | FBXLoader | GLTFLoader
  clock!: THREE.Clock
  raycaster!: THREE.Raycaster
  mixers = [] as Array<THREE.AnimationMixer> // 动画数组


  /**
   * CSS3DRenderer、scene
   */
  renderer2!: CSS2DRenderer
  labelRenderer!: CSS2DRenderer
  css2group!: THREE.Group

  // other
  logarithmicDepthBuffer!: boolean

  constructor(DOM: HTMLElement, options?: any) {
    this.webglCanvas = DOM
    this.logarithmicDepthBuffer = options?.logarithmicDepthBuffer || false; // 解决深度冲突
    this.draw()
  }

  initRender() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      logarithmicDepthBuffer: this.logarithmicDepthBuffer
    })
    this.renderer.setSize(
      this.webglCanvas.clientWidth,
      this.webglCanvas.clientHeight
    )
    //告诉渲染器需要阴影效果
    this.renderer.shadowMap.enabled = false
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap // 默认的是，没有设置的这个清晰 THREE.PCFShadowMap
    this.renderer.domElement.style.position = 'absolute'
    this.renderer.domElement.style.top = '0'
    // this.renderer.setClearColor(0xffffff);
    this.webglCanvas.appendChild(this.renderer.domElement)
    // this.renderer.domElement.style.pointerEvents = "none";
    this.webglCanvas.addEventListener('click', this.getIntersects.bind(this))
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
        var newP = { x: 12.646996215143721, y: 192.75498994165565, z: 222.16958702849763 }

        var newT = {
          x: 0,
          y: 0,
          z: 0,
        }
        this.animateCamera(oldP, oldT, newP, newT, () => { })
        // this.camera.position.set(-455, -14, -258);
      }).bind(this)
    )
    this.labelRenderer = new CSS2DRenderer()
    this.labelRenderer.setSize(
      this.webglCanvas.clientWidth,
      this.webglCanvas.clientHeight
    )
    this.labelRenderer.domElement.style.position = 'absolute'
    // 相对鼠标的相对偏移
    this.labelRenderer.domElement.style.top = '0px'
    this.labelRenderer.domElement.style.left = '0px'
    // //设置.pointerEvents=none，以免模型标签HTML元素遮挡鼠标选择场景模型
    this.labelRenderer.domElement.style.pointerEvents = 'none'
    this.webglCanvas.appendChild(this.labelRenderer.domElement)
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(
      800,
      this.webglCanvas.clientWidth / this.webglCanvas.clientHeight,
      0.1,
      10000
    )
    this.camera.position.set(0.9, 4, 4)
  }
  initScene() {
    this.scene = new THREE.Scene()
  }
  initLight() {
    /**
     * 添加环境光
     */
    var ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    ambientLight.name = '_ambientLight'
    this.scene.add(ambientLight)
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
  removeLight() {
    // 假设你的灯光对象数组存储在 lights 数组中
    var lights = this.scene.children.filter(object => object instanceof THREE.Light);

    // 定义要查找和移除的灯光的名称
    var targetLightName = ["_ambientLight", '_directionalLight', '_directionalLight2', '_directionalLight3'];
    // 遍历灯光数组
    for (var i = 0; i < lights.length; i++) {
      var light = lights[i];
      // 检查灯光的名称是否匹配目标名称
      if (targetLightName.includes(light.name)) {
        // 从场景中移除灯光
        this.scene.remove(light);
        console.log("灯光已移除：" + light.name);
        // break; // 如果只有一个匹配的灯光，可以提前结束循环
      }
    }
  }

  lodis() { }

  scenStart() {
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
    var newP = {
      x: 500,
      y: 432,
      z: -466,
    }
    var newT = {
      x: 0,
      y: 0,
      z: 0,
    }
    this.animateCamera(oldP, oldT, newP, newT, () => { })
  }

  // //初始化性能插件
  // initStats () {
  //   this.stats = new Stats();
  //   this.webglCanvas.appendChild(this.stats.dom);
  // }
  initControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    // 如果使用animate方法时，将此函数删除
    //controls.addEventListener( 'change', render );
    // 使动画循环使用时阻尼或自转 意思是否有惯性
    this.controls.enableDamping = true
    //动态阻尼系数 就是鼠标拖拽旋转灵敏度
    //controls.dampingFactor = 0.25;
    //是否可以缩放
    this.controls.enableZoom = true
    //是否自动旋转
    this.controls.autoRotate = false
    //设置相机距离原点的最远距离
    this.controls.minDistance = 2
    //设置相机距离原点的最远距离
    this.controls.maxDistance = 1000
    //是否开启右键拖拽
    this.controls.enablePan = true
    this.controls.target = new THREE.Vector3(0, 0, 0)
  }
  render() {
    this.renderer.render(this.scene, this.camera)
    this.labelRenderer.render(this.scene, this.camera) //渲染标签
  }
  //窗口变动触发的函数
  onWindowResize() {
    this.camera.aspect =
      this.webglCanvas.clientWidth / this.webglCanvas.clientHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(
      this.webglCanvas.clientWidth,
      this.webglCanvas.clientHeight
    )
    this.render()
  }
  animate() {
    //更新控制器
    this.render()
    //更新性能插件
    // this.stats && this.stats.update();
    this.controls && this.controls.update();
    TWEEN && TWEEN.update()
    requestAnimationFrame(this.animate.bind(this))
  }
  draw() {
    this.clock = new THREE.Clock();
    this.raycaster = new THREE.Raycaster()
    this.initRender()
    this.initScene()
    this.initCamera()
    this.initLight()
    this.initControls()
    this.animate()
    // this.initModel()
    // this.initStats();
    window.onresize = this.onWindowResize.bind(this)
    this.onWindowResize()
  }
  async initModel(type: 'glb' | 'fbx' | 'obj', model: any) {
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    cube.scale.set(10, 10, 10)
    cube.position.set(-120, 120, -120)
    // this.scene.add(cube)

    // let loader: GLTFLoader | FBXLoader | OBJLoader
    switch (type) {
      case 'fbx':
        this.loader = new FBXLoader()
        break;
      case 'glb':
        this.loader = new GLTFLoader()
        break;
      case 'obj':
        this.loader = new OBJLoader()
        break;
      default:
        break;
    }
    // console.log(this.loader)
    let _model = null
    if (this.loader) {
      console.log(this.loader, model)
      // const res = await this.loader.loadAsync(model)
      // if (type == 'glb') {
      //   _model = res.scene
      //   this.scene.add(res.scene)
      // } else {
      //   _model = res
      //   this.scene.add(res)
      // }

      // loader.load(model, (res: any) => {
      //   console.log(res)
      //   if (type == 'glb') {
      //     _model = res.scene
      //     this.scene.add(res.scene)
      //   } else {
      //     _model = res
      //     this.scene.add(res)
      //   }
      //   // res.scene.scale.set(20, 20, 20)  
      // })
    }
    return _model

    // var _this = this
    // const loader = new FBXLoader()
    // loader.load('./static/model/main.FBX', function (object: any) {
    //   const pictures = [
    //     // 'right.png',
    //     // 'left.png',
    //     // 'top.jpg',
    //     // 'bottom.png',
    //     // 'front.png',
    //     // 'back.png',
    //     'nx.jpg',
    //     'ny.jpg',
    //     'nz.jpg',
    //     'px.jpg',
    //     'py.jpg',
    //     'pz.jpg',
    //   ]
    //   var textureCube = new THREE.CubeTextureLoader()
    //     .setPath('./static/envimg3/')
    //     .load(pictures)
    //   var mtlLoader = new MTLLoader()

    //   mtlLoader.load('./static/main.mtl', (materials: any) => {
    //     materials.preload()
    //     var m = materials.materials['Standardmaterial_1']
    //     m.specular.set(0x66ccff) // 高光反射颜色
    //     m.shininess = 10 // 高光高亮程度，默认30
    //     m.reflectivity = 0.2
    //     m.metalness = 1
    //     m.envMap = textureCube
    //     // m.depthWrite= true

    //     // console.log(m)

    //     object.traverse(function (child: any) {
    //       if (child.type == 'Mesh') {
    //         // console.log(child)

    //         child.castShadow = true
    //         child.receiveShadow = true
    //         child.material = m
    //       }
    //     })
    //     _this.GLTFSCENE = object
    //     _this.GLTFSCENE.position.y = -200
    //     // console.log(_this.GLTFSCENE)
    //     _this.scene.add(_this.GLTFSCENE)
    //     _this.lodis()
    //     _this.scenStart()
    //   })
    // })

    // css2对象编组
    this.css2group = new THREE.Group()
    this.scene.add(this.css2group)
  }

  // 辅助工具
  initHelper() {
    var helper = new THREE.AxesHelper(350)
    this.scene.add(helper)
  }

  //场景点击事件
  getIntersects(event: any) {
    // console.log(this.camera.position)
    event.preventDefault() // 阻止默认的点击事件执行, https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault

    //声明 rayCaster 和 mouse 变量
    let rayCaster = new THREE.Raycaster()
    let mouse = new THREE.Vector2()

    //通过鼠标点击位置，计算出raycaster所需点的位置，以屏幕为中心点，范围-1到1
    mouse.x =
      ((event.clientX - this.webglCanvas.getBoundingClientRect().left) /
        this.webglCanvas.offsetWidth) *
      2 -
      1
    mouse.y =
      -(
        (event.clientY - this.webglCanvas.getBoundingClientRect().top) /
        this.webglCanvas.offsetHeight
      ) *
      2 +
      1 //这里为什么是-号，没有就无法点中

    //通过鼠标点击的位置(二维坐标)和当前相机的矩阵计算出射线位置
    rayCaster.setFromCamera(mouse, this.camera)

    //获取与射线相交的对象数组， 其中的元素按照距离排序，越近的越靠前。
    //+true，是对其后代进行查找，这个在这里必须加，因为模型是由很多部分组成的，后代非常多。
    // console.log(this.GLTFSCENE.children);
    let intersects = null
    if (this.GLTFSCENE?.children) intersects = rayCaster.intersectObjects(this.GLTFSCENE.children, true)


    //返回选中的对象

    // console.log(intersects)

    var meshName = null
    var partsType = null

    return intersects
  }
  /**
   * @oldP  相机原来的位置1
   * @oldT  target原来的位置
   * @newP  相机新的位置
   * @newT  target新的位置
   * @callBack  动画结束时的回调函数
   */
  animateCamera(
    oldP: { x: any; y: any; z: any },
    oldT: { x: any; y: any; z: any },
    newP: { x: any; y: any; z: any },
    newT: { x: any; y: any; z: any },
    callBack: () => any
  ) {
    var _this = this
    var tween = new TWEEN.Tween({
      x1: oldP.x, // 相机x
      y1: oldP.y, // 相机y
      z1: oldP.z, // 相机z
      x2: oldT.x, // 控制点的中心点x
      y2: oldT.y, // 控制点的中心点y
      z2: oldT.z, // 控制点的中心点z
    })
    tween.to(
      {
        x1: newP.x,
        y1: newP.y,
        z1: newP.z,
        x2: newT.x,
        y2: newT.y,
        z2: newT.z,
      },
      1000
    )
    tween.onUpdate(function (object: {
      x1: any
      y1: any
      z1: any
      x2: any
      y2: any
      z2: any
    }) {
      _this.camera.position.x = object.x1
      _this.camera.position.y = object.y1
      _this.camera.position.z = object.z1
      _this.controls.target.x = object.x2
      _this.controls.target.y = object.y2
      _this.controls.target.z = object.z2
      _this.controls.update()
    })
    tween.onComplete(function () {
      _this.controls.enabled = true
      callBack && callBack()
    })
    tween.easing(TWEEN.Easing.Cubic.InOut)
    tween.start()
  }

  coherer(color = '#F5F5F5') {
    var textureCube = new THREE.CubeTextureLoader()
      .setPath('http://oss3.data-bh.com/wmn/envimg/')
      .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg'])
    return new THREE.MeshPhysicalMaterial({
      color: color,
      // 材质像金属的程度. 非金属材料，如木材或石材，使用0.0，金属使用1.0，中间没有（通常）.
      // 默认 0.5. 0.0到1.0之间的值可用于生锈的金属外观
      metalness: 1.0,
      // 材料的粗糙程度. 0.0表示平滑的镜面反射，1.0表示完全漫反射. 默认 0.5
      roughness: 0.6,
      // 设置环境贴图
      envMap: textureCube,
      // 反射程度, 从 0.0 到1.0.默认0.5.
      // 这模拟了非金属材料的反射率。 当metalness为1.0时无效
      reflectivity: 0.5,
    })
  }

  createPlane2(vnode: any, x: number, y: number, z: number) {
    var element = document.createElement('div')
    // element.style.width = 100 + 'px'
    // element.style.height = 100 + 'px'
    // element.style.backgroundColor = 'rgba(0,0,0)'

    vnode.mount(element)

    var label = new CSS2DObject(element)
    label.position.set(x, y, z)

    this.css2group.add(label)
  }

  css2groupShow() {
    this.css2group.traverse(function (child: any) {
      child.visible = true
    })
  }

  css2groupHide() {
    this.css2group.traverse(function (child: any) {
      child.visible = false
    })
  }

  caseShow() {
    this.GLTFSCENE.traverse(function (child: any) {
      if (child.type == 'Mesh' && child.name == 'Line006') {
        child.visible = true
      }
    })
  }

  caseHide() {
    this.GLTFSCENE.traverse(function (child: any) {
      if (child.type == 'Mesh' && child.name == 'Line006') {
        child.visible = false
      }
    })
  }

  /**
   * @description 取消事件的绑定
   */
  removeEventListeners() {
    this.webglCanvas.removeEventListener('click', () => { })
    this.webglCanvas.removeEventListener('dblclick', () => { })
  }



  /**
   * @description 销毁 three 场景
   * @param container new WebglThreeRender() 实例
   */
  destroyed(container: WebglThreeRender) {
    if (!container) return
    this.removeEventListeners()

    cancelAnimationFrame(this.animate as any);
    this.scene.traverse(object => {
      if (object instanceof THREE.Mesh) {
        // 释放几何体和材质的内存
        object.geometry.dispose();
        if (object.material instanceof THREE.Material) {
          object.material.dispose();
        } else if (Array.isArray(object.material)) {
          object.material.forEach(material => material.dispose());
        }
      }
    });
    this.scene.children.length = 0;
    this.scene.clear();
    this.mixers.forEach((mixer: any) => {
      mixer.stopAllAction();
      mixer.uncacheRoot(mixer._root); // 如果有缓存根节点，请清除
    });
    this.mixers = []
    this.renderer.dispose();

    if (this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }

    // container.camera = null

    console.log('Three 已销毁');
  }
}
