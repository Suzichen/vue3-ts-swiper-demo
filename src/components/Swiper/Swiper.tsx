import { defineComponent, ref, onMounted, h } from 'vue'
import { Swiper } from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
import './index.scss'

export default defineComponent({
  name: 'Swiper',
  setup () {
    const swiperV = ref({} as Swiper)
    onMounted(() => {
      swiperV.value = new Swiper('.swiper-container-v', {
        direction: 'vertical'
      })
    })
    const next = () => {
      swiperV.value.slideNext()
    }
    return {
      next
    }
  },
  render () {
    const defaultSlots = this.$slots.default ? this.$slots.default() : ''
    return h(
      <div class="swiper-container swiper-container-v">
        <div class="swiper-wrapper">
          { defaultSlots }
        </div>
      </div>
    )
  }
})
