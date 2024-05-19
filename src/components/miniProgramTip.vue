<!-- 小程序右上角提示 -->
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { getDeviceInfo } from '@/utils/device'

const props = defineProps<{
  text: string
  show: boolean
  autoClose?: boolean | number
}>()
const emtis = defineEmits(['close'])
const show = ref(!!props.show)
const containerRight = ref(0)
const arrowRight = ref(0)

onMounted(() => {
  const res = uni.getMenuButtonBoundingClientRect()
  const device = getDeviceInfo()
  if (!device.window)
    return
  containerRight.value = device.window.windowWidth - res.right
  arrowRight.value = res.width - res.width / (device.isPcOrMac ? 6 : 4) + (device.isPcOrMac ? 9 : 0)
})

watch(() => props.show, (val) => {
  if (val)
    show.value = val
})

const Timer: number | null = null

watch(() => props.autoClose, (val) => {
  Timer && clearTimeout(Timer)
  if (val) {
    setTimeout(() => {
      close()
    }, val === true ? 3000 : val)
  }
}, {
  immediate: true,
})

function close() {
  show.value = false
  emtis('close')
}
</script>

<template>
  <view v-if="show">
    <!-- #ifdef MP-WEIXIN -->
    <view
      class="mini-program-tip"
      :style="{
        '--arrow-right': `${arrowRight}px`,
        'right': `${containerRight}px`,
      }"
    >
      <text>
        {{ text }}
      </text>
      <button class="reset-button mx-0 pr-0" @click="close">
        <tm-icon name="tmicon-times" :font-size="26" color="white" />
      </button>
    </view>
    <!-- #endif -->
  </view>
</template>

<style lang="scss" scoped>
.mini-program-tip {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 62rpx;
  background-color: $uni-color-primary;
  position: fixed;
  top: 0;
  z-index: 99;
  font-size: 26rpx;
  margin: 20rpx 0;
  padding-left: 30rpx;
  padding-right: 30rpx;
  border-radius: 100rpx;

  &:before {
    content: '';
    position: fixed;
    top: -14rpx;
    right: var(--arrow-right);
    z-index: 99;
    border-color: transparent;
    border-style: solid;
    border-width: 18rpx;
    border-bottom-color: $uni-color-primary;
  }
}
</style>
