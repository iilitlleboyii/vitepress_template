# Vue

## 优化

记录 Vue 常用的优化方案。

### 按帧渲染

有时一个页面需要加载很多内容，渲染时间比较长，用户体验不是很好，此时我们可以使用 `requestAnimationFrame` 按帧渲染，按优先级给不同组件分配渲染帧，这样用户就能第一时间看到内容，提升用户体验。
::: code-group

```js [useDefer.js]
import { ref } from "vue"

export function useDefer(maxCount = 100) {
  const currentFrame = ref(0)
  let rafId

  function updateCurrentFrame() {
    rafId = requestAnimationFrame(() => {
      currentFrame.value++
      if (currentFrame.value <= maxCount) {
        updateCurrentFrame()
      } else {
        cancelAnimationFrame(rafId)
      }
    })
  }

  updateCurrentFrame()

  return function defer(n) {
    return n <= currentFrame.value
  }
}
```

```vue [index.vue]
<template>
  <div>
    <div v-for="n in 100" :key="n">
      <heavy-component v-if="defer(n)"></heavy-component>
    </div>
  </div>
</template>

<script setup lang="js">
import { useDefer } from "@/hooks/useDefer"

const defer = useDefer()
</script>
```

:::

### 冻结对象

在 Vue2 中模板解析的数据都必须在 data() 方法中返回，但是部分数据仅是用来展示的，并不会对它进行任何修改，因此我们可以使用 `Object.freeze` 方法冻结对象，这样 Vue 就能通过 `Object.isFrozen` 方法判断对象是否被冻结，如果是一个冻结对象就不会为其创建响应式，进而提升性能，避免一些大数据造成页面渲染卡顿。
