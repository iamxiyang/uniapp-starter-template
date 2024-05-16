<!-- 使用 type="home" 属性设置首页 -->
<route type="home" lang="json">
{
  "style": {
    "navigationBarTitleText": "首页"
  }
}
</route>

<script setup lang="ts">
const title = ref('Hello')

function test() {
  // console.log('test')
  uni.showToast({
    title: title.value,
    icon: 'none',
  })
}
</script>

<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title ml-10px mr-10px text-red">
        {{ title }}
      </text>
    </view>
    <Com1 />
    <view>
      <text class="i-carbon:edit-filter text-red" />
      <text class="i-carbon-share text-blue" />
    </view>
    <tm-button label="test" @click="test" />
  </view>
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
}
</style>
