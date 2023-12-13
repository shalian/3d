<template>
  <div id="home-3d">
    <ul>
      <li v-for="data in datas" :key="data.url">
        <RouterLink :to="data.url">
          <div class="preview">
            <img :src="data.thumbnail" :alt="data.name">
          </div>
          <h3>{{ data.name }}</h3>
        </RouterLink>
      </li>
    </ul>
    <!-- <Child v-model="test" @update:modelValue="handleModelValue" /> -->
    <!-- <div>{{ test }}</div> -->
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
import Ocean from '@/containers/Ocean/images/_preview.png'
import Lunar from '@/containers/Lunar/images/_preview.png'
import Christmas from '@/containers/Christmas/images/_preview.png'
import RotateText from '@/containers/RotateText/images/_preview.png'
// import Child from './Child.vue';
// import Cookie from '@/utils/Cookie'

interface IData {
  name: string
  url: string
  thumbnail: string
}
const datas: Array<IData> = [
  {
    name: '海中小岛',
    url: '/ocean',
    thumbnail: Ocean,
  }, {
    name: '恭喜发财',
    url: '/lunar',
    thumbnail: Lunar,
  }, {
    name: '圣诞快乐',
    url: '/christmas',
    thumbnail: Christmas,
  }, {
    name: '文字旋转',
    url: '/rotatetext',
    thumbnail: RotateText,
  },
]


// const test = ref({
//   name: 's',
//   age: 22,
//   wife: {
//     name: 'a',
//     age: 21
//   }
// })
// const handleModelValue = (data: any) => {
//   console.log(data)
//   test.value = data
// }
// Cookie.set('name', 's')

// setTimeout(() => {
//   Cookie.remove('name')
//   console.log(Cookie.get('test2'))
//   console.log(Cookie.get('test4'))
//   console.log('name 删除了')
// }, 3000);
</script>

<style scoped lang="scss">
$border-radius: 8px;

#home-3d {
  position: relative;
  width: 100%;
  height: 100%;

  ul {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(3, 210px);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: flex-start;
    width: calc(210px * 3 + 20px * 2);
    max-height: 750px;
    overflow: hidden auto;
    transition: all 0.3s;
    @include scrollbar();
  }

  @media screen and (max-width: 750px) {
    ul {
      width: calc(210px * 2 + 20px);
      grid-template-columns: repeat(2, 210px);
    }
  }

  @media screen and (max-width: 450px) {
    ul {
      width: calc(220px * 1);
      grid-template-columns: repeat(1, 210px);
    }
  }

  li {
    // margin: 10px 0px;
    width: 210px;
    height: 245px;
    // border: 1px solid #ccc;
    border-radius: $border-radius;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      transition: all .3s;
      background: rgba(0, 0, 0, .05);
    }

    >a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      border-radius: $border-radius;
      overflow: hidden;
    }

    .preview {
      width: 100%;
      height: calc(100% - 36px);
    }

    img {
      width: 100%;
      height: 100%;
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }

    h3 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0px;
      width: 100%;
      height: 36px;
      color: var(--g-color);
      font-size: 18px;
      font-weight: 600;
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
      border: 1px solid #ccc;
      border-top-width: 0px;
      box-sizing: border-box;
    }
  }
}
</style>
