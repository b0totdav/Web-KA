import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', () => {
  const games = ref([])

  const addGame = (text) =>{
    if(!games.value.find(game => game === text)){
      games.value.push(text)
    }
  }
  const clearGames = () =>{
    games.value = []
  }

  return { games, addGame, clearGames }
})
