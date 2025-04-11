<template>
  <div class="container">
    <h1 class="text-center">Fogadások</h1>
    <div v-if="gameStore.games.length == 0" class="card">
        <p  class="text-danger text-center">Még nincs leadott fogadás</p>
    </div>
    <div v-else class="card">
      <ul v-for="game in gameStore.games">
          <li>{{ game }}</li>
        </ul>
      <button class="btn btn-danger w-25" @click="gameStore.clearGames()">Törlés</button>
    </div>
  </div>
</template>

<script setup>
import { useGameStore } from '@/stores/gameStore';

const gameStore = useGameStore();
</script>

<style>

</style>
