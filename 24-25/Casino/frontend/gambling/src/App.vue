<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
      <nav class="text-center">
        <RouterLink class="btn btn-outline-success m-5 w-25" to="/">Lottók</RouterLink>
        <RouterLink class="btn btn-outline-success m-5 w-25" to="/game">Játék</RouterLink>
      </nav>
  <RouterView />
</template>

<style scoped>

</style>
