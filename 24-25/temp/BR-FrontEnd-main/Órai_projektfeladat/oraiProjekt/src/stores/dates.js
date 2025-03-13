import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useDateStore = defineStore('dates', () => {
  const dates = ref([])

  // Fetch reserved dates
  const getDates = () => {
    axios.get('http://localhost:3000/reservedDates')
      .then(res => dates.value = res.data)
  }

  // Find a date by ID
  function findDateToReserve(id) {
    return dates.value.find(date => date.dateId === id)
  }

  // Reserve a date with name & phone
  async function reserveDate(id, title) {
    const existing = findDateToReserve(id)
    if (!existing) {
      const newReservation = { dateId: id, title }
      try {
        await axios.post('http://localhost:3000/reservedDates', newReservation)
        dates.value.push(newReservation) // Update local state
      } catch (error) {
        console.error("Error reserving date:", error)
      }
    } else {
      console.log("This slot is already reserved!")
    }
  }

  return { dates, getDates, findDateToReserve, reserveDate }
})
