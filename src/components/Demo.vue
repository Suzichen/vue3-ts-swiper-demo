<template>
  <div class="hello">
    <!-- <SwiperTsx>
      <template #default>
        <swiper-item>
          <span style="color: red">Vertical Slide 1 as Vue components</span>
        </swiper-item>
        <swiper-item>
          <span style="color: red">Vertical Slide 2 as Vue components</span>
        </swiper-item>
        <swiper-item>
          <span style="color: red">Vertical Slide 3 as Vue components</span>
        </swiper-item>
      </template>
    </SwiperTsx> -->
    <Swiper ref="swiperRef" :touchable="touchable" v-bind="swiperConfig" @change="onSwipeChange">
      <swiper-item :no-swiping="true">
        <p>此页不可拖动切换</p>
        <button @click="next">切换到下一页</button>
      </swiper-item>
      <swiper-item :auto-scroll="true">
        <h3>内层，滚动</h3>
        <p v-for="i in 50" :key="i">xxxxxx {{ i }}</p>
      </swiper-item>
      <swiper-item :auto-scroll="true">
        <h3>{{ msg }}</h3>
        <p v-for="i in 7" :key="i">{{ msg }} {{ i }}</p>
        <button @click="test">按钮</button>
        <p v-for="i in 7" :key="i">{{ msg }} {{ i }}</p>
      </swiper-item>
      <swiper-item>
        <span style="color: red">Vertical Slide 4 as Vue components</span>
      </swiper-item>
    </Swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperItem } from './Swiper'
// import { SwiperTsx, SwiperItem } from './Swiper'
interface TSwiper {
  next(): void;
}
export default defineComponent({
  name: 'Demo',
  components: {
    // SwiperTsx,
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
      return this.$refs.swiperRef as TSwiper
    },
    touchable (): boolean {
      return !!this.swipeIndex
    }
  },
  methods: {
    next () {
      this.swiperRef.next()
    },
    test () {
      this.msg = 'click test'
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
