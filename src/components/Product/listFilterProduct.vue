<template>
    <ul id="buttons" class="d-flex justify-start align-center my-10">
        <li><v-chip size="large" density="comfortable"  color="purple-darken-4" class="mr-4 my-2" @click="$emit('filter', category)"
          v-for="category in categories" :key="category">
          {{ category }}
        </v-chip>
        </li>
    </ul>

</template>

<script setup>
const categories=["All products","Dress","T-Shirt","Skirt suit","Jacket","Sweater"];

</script>

<style>
#buttons{
    list-style: none;
}


</style>