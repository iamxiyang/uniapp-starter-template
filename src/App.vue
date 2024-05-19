<script setup lang="ts"></script>

<template>
  <view />
</template>

  <style lang="scss">
    /* #ifdef APP-NVUE */
    @import './tmui/scss/nvue.css';
    /* #endif */
    /* #ifndef APP-NVUE */
    @import './tmui/scss/noNvue.css';

    /* #endif */
    .reset-button {
      outline: none;
      background: transparent;
      line-height: 1;
      border-radius: 0;

      &::after {
        border: none
      }
    }
  </style>
