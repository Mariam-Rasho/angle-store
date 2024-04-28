<template>
        <v-container id="home" class="my-16">
  <buttonFilter @filter="filterProduct"/>
        <v-row justify="center">
            <v-col xs="12" md="3" sm="4" v-for="(product, index) in displayedProducts" :key="index">
                <ProductCard :product="product" >
                    <template #loveProduct><v-rating color="red-darken-4" empty-icon="mdi-heart-outline" full-icon="mdi-heart" length="1"></v-rating></template>
                    </ProductCard>
            </v-col>
        </v-row>
        <v-pagination class="mt-16" v-model="currentPage" :length="totalPages" @input="updatePage"
            rounded="circle">
        </v-pagination>
    </v-container>
</template>

<script setup>
import buttonFilter from'@/components/Product/listFilterProduct.vue';
import ProductCard from '../Home/ProductHome.vue';
import { ref, computed } from 'vue';
import { useCartStore } from '@/stores/useCartStore';
const store = useCartStore();
const currentPage = ref(1);
const pageSize = 12;
const displayedProducts = computed(() => {
    const startIndex = (currentPage.value - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return productFilter.value.slice(startIndex, endIndex);
});

const totalPages = computed(() => Math.ceil(productFilter.value.length / pageSize));
function updatePage(newPage) {
    currentPage.value = newPage;
}
const productFilter=ref([]);
productFilter.value=store.products;
function filterProduct(category){
    if(category=="All products"){
        return productFilter.value=store.products;
    }
    else{return console.log(productFilter.value=store.products.filter(product=>product.category==category))}

}
</script>