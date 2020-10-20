<template>
  <div class="swiper-container swiper-container-v">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { Swiper } from 'swiper/bundle'
import 'swiper/swiper-bundle.css'

export default defineComponent({
  name: 'Swiper',
  setup () {
    const swiperV = ref({} as Swiper)
    onMounted(() => {
      swiperV.value = new Swiper('.swiper-container-v', {
        direction: 'vertical'
      })
    })
  }
})
</script>

<style scoped lang="scss">
.swiper-container{
  width: 100%;
  height: 100%;
}
</style>
