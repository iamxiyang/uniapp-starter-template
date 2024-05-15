<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title text-red">{{ title }}</text>
    </view>
    <Com1 />
    <tm-button @click="test" label="test"></tm-button>
  </view>
</template>

<!-- 使用 type="home" 属性设置首页 -->
<route type="home" lang="json">
{
  "style": { "navigationBarTitleText": "首页" }
}
</route>

<script setup lang="ts">
  const title = ref('Hello')

  const test = () => {
    uni.showToast({
      title: title.value,
      icon: 'none',
    })
  }
</script>

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
