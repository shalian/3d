<template>
  <div id="home-3d">
    <ul>
      <li>
        <RouterLink to="/ocean">
          <!-- <div class="preview"> -->
          <img :src="Ocean" alt="">
          <!-- </div> -->
          <h3>海中小岛</h3>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Ocean from '@/containers/Ocean/images/_preview.png'
</script>

<style scoped lang="scss">
$border-radius: 8px;

#home-3d {
  ul {
    padding: 0;
    margin: 0;
  }

  li {
    width: 180px;
    // height: 45px;
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
    }

    img {
      width: 100%;
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }

    h3 {
      margin: 0px;
      width: 180px;
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
