<script setup>
import { useLoveStore } from "@/stores/useLoveStore.js"
import ProductCard from "@/components/Home/ProductHome.vue"
import { computed } from "vue";
const store = useLoveStore();
const products = computed(() => store.love);
const removeFromLove = (id) => {
  store.removeFromLove(id)
};
</script>
<template>
  <v-container class="mt-16 pt-16" id="home">
    <v-row align="center" justify="center">
      <v-col v-for="product in products" :key="product.id" cols="10"  md="3">
        <ProductCard :product="product">
          <template #delete>
            <v-btn class="ml-md-16 ml-0" style="margin-left: 150px !important;" icon="mdi-delete" size="small" variant="text" color="error" @click="removeFromLove(product.id)" />
          </template>
        </ProductCard>
      </v-col>
    </v-row>
  </v-container>
</template>

