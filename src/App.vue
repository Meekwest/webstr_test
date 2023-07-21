<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script setup>
import { checkAuth } from '@helpers/checkAuth';

checkAuth();
</script>

<style lang="scss">
@import "src/assets/styles/main.scss";

.app {
  background: $white;
  min-height: 100svh;
}
</style>
