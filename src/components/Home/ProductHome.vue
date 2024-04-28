<template>
  <v-card  hover>
    <v-img class="align-end pa-0 ma-0" height="240" :src="product.img" :lazy-src="`https://picsum.photos/10/6?image=${5 + 10}`" cover>
    </v-img>

    <div class="bg-grey-lighten-5">
      <v-card-actions class="justify-space-between align-center py-0">
        <v-btn variant="text">
          <router-link class="text-purple-darken-4 font-weight-bold text-subtitle-1" :to="`/Detail/${product.id}`">
            Details
          </router-link>
        </v-btn>

          <slot name="delete"></slot>

        <v-btn icon @click="love.addToLove(product)">
          <slot name="loveProduct"></slot>
          <!-- <v-rating color="red-darken-4" empty-icon="mdi-heart-outline" full-icon="mdi-heart" length="1"></v-rating> -->
        </v-btn>

      </v-card-actions>
    </div>
  </v-card>
</template>
<script setup>
import { useCartStore } from '@/stores/useCartStore';
import { useLoveStore } from '@/stores/useLoveStore'

defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const love = useLoveStore()
const store = useCartStore()
</script>

<style>
.space-line {
  line-height: 2rem !important;
}
</style>