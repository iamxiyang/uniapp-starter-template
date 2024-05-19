<!-- 小程序提示右上角添加我的小程序 -->
<script setup>
const show = ref(false)

function close() {
  show.value = false
  uni.setStorageSync('lastShowTime', Date.now())
}

onMounted(async () => {
  const { added } = await uni.checkIsAddedToMyMiniProgram()
  const lastShowTime = uni.getStorageSync('lastShowTime') || 0
  show.value = !added && (!lastShowTime || Date.now() - lastShowTime > 24 * 60 * 60 * 1000)
})
</script>

<template>
  <mini-program-tip :show="show" :auto-close="5000" text="点击右上角 添加我的小程序，下次访问更方便" @close="close" />
</template>
