<template>
     <v-container class="mt-16">
       <h1 class="text-h4 my-16 text-decoration-underline">Product Details</h1>
       <v-row>
            <v-col>
                <v-card height="100%" flat>
                    <v-row justify="center" align="center" height="100%" class="ma-0">
                      <v-col md="5" class="pa-0">
                        <v-img height="400px" width="400px" :src="product.img" :lazy-src="`https://picsum.photos/10/6?image=${5 + 10}`" cover />
                      </v-col>
                      <v-col class="py-0">
                        <v-card-title class="text-h4">
                          {{ product.title }}
                        </v-card-title>
                        <v-card-subtitle>{{ product.Department }} {{ product.season }}</v-card-subtitle>
                        <div class="pl-4">
                          <v-rating half-increments readonly :length="5" size="small" density="compact"
                            :model-value="product.rating" color="yellow" active-color="yellow-darken-1"></v-rating>
                        </div>
                        <v-card-text class="text-h6 space-line py-0">{{ product.description }}</v-card-text>
                        <v-row align="center" justify="space-around">
                          <v-col md="3">
                            <v-select
                            variant="underlined"
                                v-model="selectColor"
                                :items="Colors"
                                label="Select an Color"
                                class="my-6"
                                clearable
                              ></v-select>
                          </v-col>
                            <v-col md="3" class="text-h6 ">Price: <span class="text-red-darken-1">{{ product.price }}$</span></v-col>
                        </v-row>


                          <v-btn  @click="store.addToCart(product,selectColor)" class="mx-auto " block
                          rounded="xl" min-width="13%">
                              <v-icon color='deep-purple-lighten-2'>mdi-cart </v-icon>
                              Add To Cart </v-btn>

                      </v-col>
                    </v-row>

                  </v-card>

           </v-col>

        </v-row>
    </v-container>
</template>
<script>
import { useCartStore } from '@/stores/useCartStore';
export default{
  props:['id'],
  data() {
const store=useCartStore();
const prod = store.products;
  console.log(prod);
  const Product=prod.filter(p=>p.id==this.id)
  const product=Product[0];
const Colors=['red','blue','black','purple','pink','brown'];
console.log(product.color);

    return{ store,product,Colors,color:""}
  },


}




</script>

