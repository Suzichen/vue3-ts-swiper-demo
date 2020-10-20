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
    <Swiper>
      <swiper-item>
        <span style="color: red">Vertical Slide 1 as Vue components</span>
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

export default defineComponent({
  name: 'Demo',
  components: {
    // SwiperTsx,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      msg: '内层，不滚动12'
    }
  },
  methods: {
    test () {
      this.msg = 'click test'
    }
  }
})
</script>

<style scoped lang="scss">
.hello {
  height: 100%;
}
</style>
