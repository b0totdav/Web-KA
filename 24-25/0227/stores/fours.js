import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useFoursStore = defineStore('four', () => {
  const four = ref({})
  const getDatas = () =>{
    fetch("http://localhost:3000/fours")
     .then(response => response.json())
     .then(data => four.value = data)
  }

  const addFour = (number) => {
  }

  return { four, getDatas, addFour}
})
