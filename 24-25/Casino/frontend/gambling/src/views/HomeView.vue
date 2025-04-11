<template>
<div class="container">
  <h1 class="text-center">Lottók</h1>
  <div class="row">
  <div class="card col-6" id="lotto5">
    <div class="card-body">
      <h3 class="card-title">Ötöslottó</h3>
      <img class="card-img-top mt-2 mb-2" src="../../public/lotto5.png" alt="lotto5">
    <p class="card-text">Az Ötöslottó játékban 90 szám közül kell 5-t választania</p>
    </div>
    <button class="btn btn-success" @click="gameStore.addGame('Ötös lottó')">Játszom</button>
  </div>
  <div class="card col-6" id="lotto6">
    <div class="card-body">
      <h3 class="card-title">Hatoslottó</h3>
      <img class="card-img-top mt-2 mb-2" src="../../public/lotto6.png" alt="lotto6">
    <p class="card-text">A Hatoslottó játékban 90 szám közül kell 5-t választania</p>
    </div>
    <button class="btn btn-success" @click="gameStore.addGame('Hatos lottó')">Játszom</button>
  </div>
  <div class="card col-6" id="skandinav">
    <div class="card-body">
      <h3 class="card-title">Skandináv lottó</h3>
      <img class="card-img-top mt-2 mb-2" src="../../public/lotto7.png" alt="lotto7">
    <p class="card-text">A Skandináv lottó játékban 35 szám közül kell 7-t választania</p>
    </div>
    <button class="btn btn-success" @click="gameStore.addGame('Skandináv lottó')">Játszom</button>
  </div>
  <div class="card col-6" id="euro">
    <div class="card-body">
      <h3 class="card-title">Euro Jackpot</h3>
      <img class="card-img-top mt-2 mb-2" src="../../public/lotto8.png" alt="lotto8">
    <p class="card-text">Az Euro Jackpot játékban 50 szám közül kell 5-t és 12 számből 2-t választania</p>
    </div>
    <button class="btn btn-success" @click="gameStore.addGame('Euro Jackpot')">Játszom</button>
  </div>
</div>
</div>
</template>

<script setup>
import { useGameStore } from '@/stores/gameStore';

const gameStore = useGameStore();
</script>

<style scoped>

</style>