<template>
  <div class="container-loading">
    <div class="loading-box">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container-loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;

  .loading-box {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, .5);

    :deep(.loading) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      color: skyblue;
      background: #000;

      p {
        font-size: 24px;
      }

      .process {
        font-weight: 600;
        font-size: 44px;
      }
    }
  }
}
</style>
