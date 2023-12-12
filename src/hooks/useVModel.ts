import { computed } from "vue";

/**
 * @description computed 拦截 props 内数据，转为响应式
 * 
 * @param props 传入 props 
 * @param propName props 内拦截的 name
 * @param emits 创建的 defineEmits()
 * @returns 
 */
export default function useVModel(props: any, propName: string, emits: any) {

  const handleUpdate = () => {
    emits(`update:${propName}`, props[propName])
  }

  function deepProxy(data: object): string | object {
    return new Proxy(data, {
      get(target, key) {
        const targetValue = Reflect.get(target, key)
        return typeof targetValue === 'object' ? deepProxy(targetValue) : targetValue;
      },
      set(target, key, value, receiver) {
        const res = Reflect.set(target, key, value)
        handleUpdate()
        return res;
      },
    })
  }
  return computed({
    get() {
      return deepProxy(props[propName])
    },
    set(v: any) {
      emits(`update:${propName}`, v)
    }
  })
}
