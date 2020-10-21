import { defineComponent, ref, onMounted, h } from 'vue'
import { Swiper } from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
import './index.scss'

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
  setup () {
    const swiperScrollbar = ref({} as Swiper)
    onMounted(() => {
      swiperScrollbar.value = new Swiper('.swiper-container-scrollbar', {
        scrollbar: {
          el: '.swiper-container-scrollbar .swiper-scrollbar'
        },
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheel: true,
        freeMode: true,
        nested: true
      })
    })
    const doUpdate = () => {
      swiperScrollbar.value.update()
    }
    return {
      doUpdate
    }
  },
  render () {
    const defaultSlots = this.$slots.default ? this.$slots.default() : ''
    const getContent = () => {
      return !this.$props.autoScroll
        ? defaultSlots
        : h(
          <div class="swiper-container swiper-container-scrollbar">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                { defaultSlots }
              </div>
            </div>
            <div class="swiper-scrollbar"></div>
          </div>
        )
    }
    return h(
      <div class={['swiper-slide', { 'swiper-no-swiping': this.$props.noSwiping }]}>
        { getContent() }
      </div>
    )
  }
})
