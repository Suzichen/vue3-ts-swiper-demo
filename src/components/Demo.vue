<template>
  <div class="hello">
    <Swiper ref="swiperRef" @change="onSwipeChange">
      <template #default>
        <swiper-item :no-swiping="true">
          <span style="color: red">Vertical Slide 1 as Vue components</span>
          <button @click="test">更新下一页数据并跳转</button>
        </swiper-item>
        <swiper-item ref="scrollSwiperRef" :auto-scroll="true" v-if="plength">
          <p v-for="i in plength" :key="i">{{ i }}: 动态长度页面</p>
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
      plength: 0,
      addLen: 0,
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
      this.addLen += 15
      this.plength = this.addLen
      this.$nextTick(() => {
        this.swiperRef.updateSlides()
        this.scrollSwiperRef.doUpdate()
        this.swiperRef.next()
      })
    },
    onSwipeChange (i: number) {
      this.swipeIndex = i
      if (i === 0) this.plength = 0 // 当返回到动态高度页的上一页时，需要销毁此动态页以确保滚动不出错(此demo用v-if)
    }
  }
})
</script>

<style scoped lang="scss">
.hello {
  height: 100%;
}
</style>
