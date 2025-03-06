<template>
<div>
    <div v-for="four in foursStore.four">

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