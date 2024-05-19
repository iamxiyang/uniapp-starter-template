<script setup lang="ts"></script>

<template>
  <tm-app _class="page" transprent>
    <slot />
    <!-- #ifdef MP-WEIXIN -->
    <add-to-my-mini-program />
    <!-- #endif -->
  </tm-app>
</template>
