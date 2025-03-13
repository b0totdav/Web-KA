<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
 
      <nav>
        <RouterLink to="/">Kezdőoldal</RouterLink>
        <RouterLink to="/reserve">Foglalás</RouterLink>
      </nav>
  <RouterView />
</template>

<style scoped>

</style>
