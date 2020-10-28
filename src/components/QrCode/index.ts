// Fork address https://github.com/rx-ts/vue/tree/master/packages/vue-qrcode
import QRCode, { QRCodeErrorCorrectionLevel, QRCodeSegment as _QRCodeSegment, QRCodeToDataURLOptions } from 'qrcode'
import { defineComponent, h } from 'vue'

export const LEVELS = [
  'low',
  'medium',
  'quartile',
  'high',
  'L',
  'M',
  'Q',
  'H'
] as const
export const MASK_PATTERNS = [0, 1, 2, 3, 4, 5, 6, 7] as const
export type MaskPattern = typeof MASK_PATTERNS[number]
export const MODES = ['alphanumeric', 'numeric', 'kanji', 'byte'] as const
export type QRCodeMode = _QRCodeSegment['mode']
export interface QRCodeSegment {
  data: string;
  mode?: QRCodeMode | null;
}
export type QRCodeValue = string | QRCodeSegment[]
export const TYPES = ['image/png', 'image/jpeg', 'image/webp'] as const
export type QRCodeProps = Omit<QRCodeToDataURLOptions, 'renderOptions'> & {
  quality?: number;
  value: QRCodeValue;
}

const MAX_QR_VERSION = 40

export default defineComponent({
  props: {
    version: {
      type: Number,
      validator: (version: number) =>
        version === parseInt(String(version), 10) &&
        version >= 1 &&
        version <= MAX_QR_VERSION
    },
    errorCorrectionLevel: {
      type: String,
      validator: (level: QRCodeErrorCorrectionLevel) => LEVELS.includes(level)
    },
    maskPattern: {
      type: Number,
      validator: (maskPattern: MaskPattern) => MASK_PATTERNS.includes(maskPattern)
    },
    toSJISFunc: Function,
    margin: Number,
    scale: Number,
    width: Number,
    color: {
      type: Object,
      validator: (color: QRCodeProps['color']) => (['dark', 'light'] as const).every(
        // eslint-disable-next-line
        c => ['string', 'undefined'].includes(typeof color![c])
      )
    },
    type: {
      type: String,
      // eslint-disable-next-line
      validator: (type: QRCodeProps['type']) => TYPES.includes(type!)
    },
    quality: {
      type: Number,
      validator: (quality: number) => quality === parseFloat(String(quality)) && quality >= 0 && quality <= 1
    },
    value: {
      type: [String, Array],
      required: true,
      validator (value: string | QRCodeSegment[]) {
        if (typeof value === 'string') {
          return true
        }
        return value.every(
          ({ data, mode }) => typeof data === 'string' && (mode == null || MODES.includes(mode))
        )
      }
    }
  },
  data () {
    return {
      dataUrl: ''
    }
  },
  watch: {
    $props: {
      deep: true,
      immediate: true,
      handler: 'toDataURL'
    }
  },
  methods: {
    toDataURL (this: { $props: QRCodeProps; dataUrl: string; value: string }) {
      const { quality, ...props } = this.$props
      return QRCode.toDataURL(
        this.value,
        Object.assign(
          props,
          quality == null || {
            renderOptions: {
              quality
            }
          }
        )
      ).then(dataUrl => (this.dataUrl = dataUrl))
    }
  },
  render () {
    return h('img', {
      ...this.$attrs,
      src: this.dataUrl
    })
  }
})
