<template>
  <div class="hello">
    <Swiper ref="swiperRef" @change="onSwipeChange">
      <template #default>
        <swiper-item :no-swiping="true">
          <span style="color: red">Vertical Slide 1 as Vue components</span>
          <button @click="test">更新下一页数据并跳转</button>
        </swiper-item>
        <swiper-item ref="scrollSwiperRef" :auto-scroll="true">
          <p v-for="i in plength" :key="i">{{ i }}: 未知数据长度</p>
        </swiper-item>
        <swiper-item>
          <span style="color: red">Vertical Slide 3 as Vue components</span>
        </swiper-item>
      </template>
    </Swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperItem } from './Swiper'
export default defineComponent({
  name: 'Demo',
  components: {
    Swiper,
    SwiperItem
  },
  data () {
    return {
      plength: 50,
      swiperConfig: {
        initialSwipe: 0
      },
      swipeIndex: 0
    }
  },
  computed: {
    swiperRef () {
      return this.$refs.swiperRef as typeof Swiper
    },
    scrollSwiperRef () {
      return this.$refs.scrollSwiperRef as typeof SwiperItem
    }
  },
  methods: {
    next () {
      this.swiperRef.next()
    },
    test () {
      console.log(this.swiperRef)
      console.log(this.scrollSwiperRef)
      console.log(this.scrollSwiperRef.updated) // TODO: undefined
      // this.scrollSwiperRef.updated()
      // this.swiperRef.next()
    },
    onSwipeChange (i: number) {
      this.swipeIndex = i
    }
  }
})
</script>

<style scoped lang="scss">
.hello {
  height: 100%;
}
</style>
