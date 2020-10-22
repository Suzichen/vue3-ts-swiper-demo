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
import { defineComponent, nextTick, ref } from 'vue'
import { Swiper, SwiperItem } from './Swiper'
export default defineComponent({
  name: 'Demo',
  components: {
    Swiper,
    SwiperItem
  },
  setup () {
    const plength = ref(0)
    const addLen = ref(0)
    const swiperRef = ref({} as typeof Swiper)
    const scrollSwiperRef = ref({} as typeof SwiperItem)
    // 更新动态页组件并跳转
    const updateSwiperItem = () => {
      swiperRef.value.updateSlides()
      scrollSwiperRef.value.update()
      swiperRef.value.next()
    }
    // 更新数据
    const test = () => {
      addLen.value += 15
      plength.value = addLen.value
      nextTick(() => { updateSwiperItem() })
    }
    // 记录索引值
    const swipeIndex = ref(0)
    const onSwipeChange = (i: number) => {
      swipeIndex.value = i
      if (i === 0) plength.value = 0 // 当返回到动态高度页的上一页时，需要销毁此动态页以确保下次滚动不出错(此demo用v-if)
    }
    // 跳转下一页
    const next = () => {
      swiperRef.value.next()
    }
    return {
      plength,
      addLen,
      swipeIndex,
      swiperRef,
      scrollSwiperRef,
      next,
      test,
      onSwipeChange
    }
  }
})
</script>

<style scoped lang="scss">
.hello {
  height: 100%;
}
</style>
