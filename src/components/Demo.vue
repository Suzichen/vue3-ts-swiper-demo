<template>
  <div class="hello">
    <Swiper ref="swiperRef">
      <template #default>
        <swiper-item :no-swiping="true">
          <span style="color: red">Vertical Slide 1 as Vue components</span>
          <button @click="test">更新下一页数据并跳转</button>
        </swiper-item>
        <swiper-item>
          <span>{{ msg }}</span>
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
      msg: '内层，不滚动12',
      swiperConfig: {
        initialSwipe: 0
      },
      swipeIndex: 0
    }
  },
  computed: {
    swiperRef () {
      return this.$refs.swiperRef as typeof Swiper
    }
  },
  methods: {
    next () {
      this.swiperRef.next()
    },
    test () {
      this.msg = 'click test'
      this.swiperRef.next()
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
