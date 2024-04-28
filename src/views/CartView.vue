 <script setup>
import { useCartStore } from "@/stores/useCartStore";
import {VDataTable} from "vuetify/labs/VDataTable"
import { ref ,computed } from 'vue';
const search = ref();
const store = useCartStore();
const products = computed(() => store.cart);
const removeFromCart = (id) => {
  store.removeFromCart(id)
};
const total = computed(() => {
      let totalPrice = 0;
      for (let product of store.cart) {
        totalPrice += product.price * product.count;
      }
      return  totalPrice.toFixed(3);
    });
const headers=[{
          title: 'Id',
          align: 'start',
          sortable: false,
          key: 'id',
        },
{title: 'Product',
          align: 'center',
          sortable: false,
          key: 'image',},
{title: 'Name',
          align: 'center',
          sortable: false,
          key: 'title',},
          {title: 'Color',
          align: 'center',
          sortable: false,
          key: 'color',},
          {title: 'Quantity',
          align: 'center',
          sortable: true,
          key: 'count',},
          {title: 'Price',
          align: 'center',
          sortable: true,
          key: 'price',},
          {title: 'SubPrice',
          align: 'center',
          sortable: false,
          key: 'subPrise',},
          {title: 'Deletes',
          align: 'center',
          sortable: false,
          key: 'delete',}];

</script>
<template>
<div class="mt-16 w-md-75   mx-auto">
  <h1 class="text-md-h3 text-center mb-16">Shopping Cart - From Website Angel</h1>
  <v-card class="w-75 w-sm-100 mx-auto">
    <v-card-title class="d-flex align-center justify-space-between flex-wrap py-md-2 py-sm-2">
       <div><v-icon color='deep-purple-lighten-2'>mdi-cart</v-icon> &nbsp;
     Shopping Cart</div>
      <v-text-field class="d-flex align-center justify-center ps-1"
        v-model="search"
        density="compact"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat
        hide-details
      ></v-text-field>
    <div><span class='text-purple-darken-4'>TotalPrice:</span>{{ total }}$</div>
    </v-card-title>
    <v-divider></v-divider>
  <VDataTable
  item-key="ID"
  items-per-page="5"
  v-model:search="search"
  :headers="headers"
  :items="products"
  class="elevation-1"
  alternating
>
  <template v-slot:item.image="{ item }">
    <v-img
    class="my-2  rounded-lg"
                    width="150"
                    height="150"
                    :src="item.img"
                    alt="cart-img"
                    cover
                  />
  </template>
  <template v-slot:item.count="{ item }">
  <v-icon @click="store.decrementQ(item)">
                    mdi-minus</v-icon>
                <span class="text-h6">{{ item.count }}</span>
   <v-icon @click="store.incrementQ(item)">
                    mdi-plus</v-icon>

  </template>
  <template v-slot:item.subPrise="{ item }">
   {{ item.price * item.count}}$
  </template>
  <template v-slot:item.delete="{ item }">
    <v-btn icon @click="removeFromCart(item.id)" >
      <v-icon color="red">mdi-delete</v-icon>
    </v-btn>
   </template>
</VDataTable>
</v-card>
</div>
</template>


<style >
.v-text-field input.v-field__input {
  width: 200px !important;
}

@media (max-width: 600px) {
.v-card{
  width: 100vw !important;
}
  .v-text-field input.v-field__input {
    width: 100px !important;
  }
}
</style>