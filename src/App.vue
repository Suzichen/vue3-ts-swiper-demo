<template>
  <Demo msg="测试swiper"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Demo from './components/Demo.vue'

export default defineComponent({
  name: 'App',
  components: {
    Demo
  }
})
</script>

<style lang="scss">
html,body,#app {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #fafafa;
}
</style>
