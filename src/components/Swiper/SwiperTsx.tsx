import { defineComponent, ref, onMounted, h } from 'vue'
import { Swiper } from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
import './index.scss'

export default defineComponent({
  name: 'SwiperTsx',
  setup (_, { slots }) {
    const swiperV = ref({} as Swiper)
    onMounted(() => {
      swiperV.value = new Swiper('.swiper-container-v', {
        direction: 'vertical'
      })
    })
    const defaultSlots = slots.default ? slots.default() : ''
    return () => h(
      <div class="swiper-container swiper-container-v">
        <div class="swiper-wrapper">
          { defaultSlots }
        </div>
      </div>
    )
  }
})
