import { DefineComponent, defineComponent, ref, onMounted, h } from 'vue'
import { Swiper } from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
import './index.scss'

interface TSwiper extends DefineComponent {
  next(): void;
  prev(): void;
  update(): void;
  updateSlides(): void;
}

export default defineComponent({
  name: 'Swiper',
  setup (_, { emit }) {
    const swiperV = ref({} as Swiper)
    const prevIndex = ref(0)
    onMounted(() => {
      swiperV.value = new Swiper('.swiper-container-v', {
        direction: 'vertical',
        on: {
          slideChangeTransitionEnd: e => {
            prevIndex.value = swiperV.value.previousIndex
            emit('change', e.activeIndex)
          }
        }
      })
    })
    const next = () => {
      swiperV.value.slideNext()
    }
    const prev = () => {
      swiperV.value.slidePrev()
    }
    const update = () => {
      swiperV.value.update()
    }
    const updateSlides = () => {
      swiperV.value.updateSlides()
    }
    return {
      next,
      prev,
      update,
      updateSlides,
      prevIndex
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
}) as unknown as TSwiper
