<template>
<div>
    <div v-for="four in foursStore.four">
        <h1>{{ four.id }}</h1>
        <p>{{ four.value }}</p>
    </div>
</div>
</template>

<script setup>
import { ref } from "vue";
import useFoursStore from "../stores/fours.js"

const foursStore = useFoursStore()


</script>

<style scoped>

</style>