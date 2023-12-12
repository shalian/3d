import * as THREE from 'three'
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry"
import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader"
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader';
import gsap from 'gsap'
import isChinese from './isChinese'

type TypeTextOpt = {
  size?: number,
  height?: number, // 挤出文本的厚度。
  curveSegments?: number, // （表示文本的）曲线上点的数量。默认值为12。
  bevelEnabled?: boolean, // 是否开启斜角
  bevelThickness?: number, // 文本上斜角的深度，默认值为20。
  bevelSize?: number, // 斜角与原始文本轮廓之间的延伸距离。默认值为8。
  bevelOffset?: number // 从文本轮廓斜边开始有多远。默认值为0。
  bevelSegments?: number // 斜角的分段数。默认值为3。
}

interface IText {
  text?: string,
  parent: THREE.Object3D,
  material?: {
    matcap: THREE.Texture
    opacity?: number // 材质透明度 0-1
  },
  position?: THREE.Vector3
  textOptions?: TypeTextOpt & { spacing: number, initializeDelay?: number }
  animation: 'upDownFlip' | 'zoomAndFlip'
}

export default class ThreeText {
  font!: any
  text!: string
  parent!: any
  material!: any
  textOptions!: any
  initializeDelay!: number
  position!: THREE.Vector3 | { x: number, y: number, z: number }
  animation!: 'upDownFlip' | 'zoomAndFlip'
  meshes = [] as Array<any>
  meshesPosition!: any
  meshesRotation!: any

  constructor(options: IText) {
    this.parent = options.parent
    this.material = options.material
    this.position = options.position || { x: 0, y: 0, z: 0 }
    this.text = options.text || 'Text'
    this.textOptions = options.textOptions
    this.initializeDelay = options.textOptions?.initializeDelay || 2;
    this.animation = options.animation
    this.loadFont()
  }
  loadFont() {
    const textLoader = new FontLoader();
    textLoader.load('./fonts/helvetiker_bold.typeface.json', (font) => {
      this.font = font;
      this.init()
    })

    // const ttfLoader = new TTFLoader()
    // ttfLoader.load('./fonts/kenpixel.ttf', (json) => {
    //   this.font = new Font(json);
    //   this.init()
    // });
  }
  init() {
    const characters = this.text.split('');
    let _textOptions: { [key: string]: any } = {
      size: 0,
      height: 0,
      curveSegments: 0,
      bevelEnabled: false,
      bevelThickness: 0,
      bevelSize: 0,
      bevelOffset: 0,
      bevelSegments: 0
    }
    for (const key in this.textOptions) {
      if (key !== 'spacing') _textOptions[key] = this.textOptions[key]
    }
    // console.log(_textOptions)

    characters.forEach((character: string, index: number) => {
      const geometry = new TextGeometry(character, {
        font: this.font,
        ..._textOptions
      });
      console.log(isChinese(character))
      geometry.center(); // 将几何体的中心点移到原点 (0, 0, 0)

      if (this.parent.isObject3D) {
        const materials = new THREE.MeshMatcapMaterial({
          ...this.material,
          flatShading: THREE.SmoothShading,
        });
        const textMesh = new THREE.Mesh(geometry, materials);
        const { x, y, z } = this.position
        textMesh.position.set(x + index * (this.textOptions.size + this.textOptions.spacing), y, z)
        this.parent.add(textMesh)
        this.meshes.push(textMesh)
      }
    })

    this.meshesPosition = this.meshes.map((mesh: THREE.Mesh) => mesh.position)
    this.meshesRotation = this.meshes.map((mesh: THREE.Mesh) => mesh.rotation)

    this.initAnimation()
  }

  initAnimation() {
    let _this = this
    let tl = gsap.timeline({
      delay: 1,
      defaults: {
        duration: _this.initializeDelay,
        ease: 'elastic.out(1, .75)',
        stagger: 0.1,
      },
      onComplete: () => {
        this[this.animation]();
      },
    });

    tl
      .from(this.meshesPosition, { z: 1000 }, 'start')
      .from(this.meshesRotation, { x: Math.PI * 2 }, 'start');
  }

  upDownFlip() {
    gsap.timeline({
      repeat: -1,
      defaults: {
        duration: 2,
        ease: 'elastic.out(1, .75)',
        stagger: 0.1,
      },
    })
      .to(this.meshesPosition, { y: this.meshesPosition[0].y - 30 }, 'start')
      .to(this.meshesRotation, { x: Math.PI * 2 }, 'start')
      .to(this.meshesPosition, { y: this.meshesPosition[0].y }, 'end')
      .to(this.meshesRotation, { x: Math.PI * 4 }, 'end');
  }

  zoomAndFlip() {
    console.log(this.meshesPosition)
    gsap.timeline({
      repeat: -1,
      defaults: {
        duration: 2,
        ease: 'elastic.out(1.2, 1)',
        stagger: 0.1,
      },
    })
      .to(this.meshesPosition, { z: this.meshesPosition[0].z + 100 }, 'start')
      .to(this.meshesRotation, { duration: 2, y: Math.PI * 2 }, 'start')
      .to(this.meshesRotation, { duration: 2, y: Math.PI * 4 }, 'end')
      .to(this.meshesPosition, { z: this.meshesPosition[0].z }, 'end');
  }
}
