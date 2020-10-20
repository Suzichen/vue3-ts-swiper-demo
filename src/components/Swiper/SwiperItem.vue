<template>
  <div class="swiper-slide " :class="{ 'swiper-no-swiping': noSwiping }">
    <slot v-if="!autoScroll"></slot>
    <div v-else class="swiper-container swiper-container-scrollbar">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <slot></slot>
        </div>
      </div>
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper } from 'swiper/bundle'

export default defineComponent({
  name: 'SwiperItem',
  props: {
    noSwiping: {
      type: Boolean,
      default: false
    },
    autoScroll: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    const swiperScrollbar = new Swiper('.swiper-container-scrollbar', {
      scrollbar: {
        el: '.swiper-container-scrollbar .swiper-scrollbar'
      },
      direction: 'vertical',
      slidesPerView: 'auto',
      mousewheel: true,
      freeMode: true,
      nested: true
    })
    console.log(swiperScrollbar)
  }
})
</script>

<style scoped lang="scss">
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-container-scrollbar .swiper-slide {
  height: auto;
}
.swiper-scrollbar {
  opacity: 0;
}
</style>
