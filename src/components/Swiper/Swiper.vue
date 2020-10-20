<template>
  <div class="swiper-container swiper-container-v">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
// TODO: 某页禁用手势
// TODO: 轮播完成事件
import { defineComponent, ref, onMounted } from 'vue'
import { Swiper } from 'swiper/bundle'
import 'swiper/swiper-bundle.css'

export default defineComponent({
  name: 'Swiper',
  props: {
    initialSwipe: {
      type: Number,
      default: 0
    }
  },
  setup (props, context) {
    const initialSlide = ref(props.initialSwipe).value
    const swiperV = ref({} as Swiper)
    const { emit } = context
    onMounted(() => {
      swiperV.value = new Swiper('.swiper-container-v', {
        direction: 'vertical',
        initialSlide,
        noSwiping: true,
        on: {
          slideChangeTransitionEnd: e => {
            emit('change', e.activeIndex)
          }
        }
      })
    })
    const next = () => {
      swiperV.value.slideNext()
    }
    return {
      next
    }
  }
})
</script>

<style scoped lang="scss">
.swiper-container{
  width: 100%;
  height: 100%;
}
</style>
