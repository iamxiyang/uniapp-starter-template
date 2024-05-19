<route lang="json">
{
  "style": {
    "navigationBarTitleText": "列表",
    "navigationBarBackgroundColor": "#ffffff"
  }
}
</route>

<script setup lang="ts">
import api from '@/api'
import useInfiniteScroll from '@/composables /useInfiniteScroll'

const { data, loadStatus } = useInfiniteScroll(data => api.mock.page(data))
</script>

<template>
  <view class="page">
    <view class="mx-4% my-20rpx rd-10rpx bg-white px-2% py-20rpx">
      <view v-for="item in data?.records" :key="item.id" class="mb-20rpx h-120rpx border-b-(1px #ccc solid)">
        {{ item }}
      </view>
      <view class="mt-40rpx">
        <uv-load-more :status="loadStatus" />
      </view>
    </view>
    <view class="h-100rpx" />
  </view>
</template>

<style lang="scss"></style>
