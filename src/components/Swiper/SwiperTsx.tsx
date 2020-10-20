import { defineComponent, ref, onMounted, h } from 'vue'
import { Swiper } from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
import './index.scss'
import SwiperItem from './SwiperItem.vue'

export default defineComponent({
  name: 'SwiperTsx',
  setup (_, context) {
    const swiperV = ref({} as Swiper)
    onMounted(() => {
      swiperV.value = new Swiper('.swiper-container-v', {
        direction: 'vertical'
      })
    })
    const { slots } = context
    console.log(slots.default)
    return () => h(
      <div class="swiper-container swiper-container-v">
        <div class="swiper-wrapper">
          {/* { slots.default() } */}
          <SwiperItem>
            <span>dsgdfgdf</span>
          </SwiperItem>
          <SwiperItem>
            <span>dsgdfgdf</span>
          </SwiperItem>
          <SwiperItem>
            <span>dsgdfgdf</span>
          </SwiperItem>
        </div>
      </div>
    )
  }
})
