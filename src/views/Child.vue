<template>
  <div class="child">
    <input type="text" v-model="data.wife.name">
  </div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue';
import useVModel from '@/hooks/useVModel'

const props = defineProps({
  modelValue: {
    default: undefined as any
  }
})
const emits = defineEmits(['update:modelValue'])

const data = useVModel(props, 'modelValue', emits)
</script>
