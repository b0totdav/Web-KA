<template>
    <div class="container">
      <table id="tabla">
        <tr>
          <th></th>
          <th>Hétfő</th>
          <th>Kedd</th>
          <th>Szerda</th>
          <th>Csütörtök</th>
          <th>Péntek</th>
        </tr>
        <tr v-for="hour in hours" :key="hour">
          <td>{{ hour }}:00</td>
          <td v-for="day in days" :key="day">
            <span v-if="getDateValue(`${day}${hour}`)">
              {{ getDateValue(`${day}${hour}`) }}
            </span>
            <router-link v-else :to="`/reserve/${day}${hour}`">
              <button>Foglalás</button>
            </router-link>
          </td>
        </tr>
      </table>
    </div>
  </template>
  
  <script setup>
  import { useDateStore } from '../stores/dates.js'
  import { onMounted, ref } from 'vue'
  
  const dateStore = useDateStore()
  const days = ref(["h", "k", "s", "c", "p"])
  const hours = ref([8, 9, 10, 11, 12, 13, 14, 15])
  
  onMounted(() => {
    dateStore.getDates() // Fetch reservations
  })
  
  const getDateValue = (id) => {
    const date = dateStore.dates.find(d => d.dateId === id)
    return date ? date.title : null
  }
  </script>
  
  

<style scoped>
table{
    border: solid 1px black;
    text-align: center;
    justify-self: center;
}
td{
    border: solid 1px black;
    padding: 10px;
    width: 100px;
    border-collapse: collapse;
}
tr:hover{
    background-color: #9ff2fd7c;
}
td:hover{
    background-color: #fcadad7c;
}
</style>