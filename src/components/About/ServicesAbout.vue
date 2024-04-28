<template>
  <v-container class="mt-16">
    <h1 class="text-h3 ma-16 pl-md-6 pl-sm-0  text-center">Our Services</h1>
    <v-row align="center" justify="center" class="mt-10 text-center">
      <v-col v-for="item in services" :key="item" md="4">
        <v-card class="mx-auto bg-trans" variant="flat">
          <div class="image">
            <v-img class="align-end"  height="100" :src="item.img"  :lazy-src="`https://picsum.photos/10/6?image=${5 + 10}`">
            </v-img>
          </div>
          <div class="hidden">
            <v-card-title class="text-h6  mt-8">{{ item.title }}</v-card-title>
            <v-card-subtitle class="pb-6">
              {{ item.subtitle }}
            </v-card-subtitle>
          </div>
        </v-card></v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      services: [
        { title: "24/7 CUSTOMER SERVICE", subtitle: "Service Support 24/7", img: "/images/phone.gif" }, { title: "FREE SHIPPING WORLDWIDE", subtitle: "Free shipping worldwide", img: "/images/worldwide.gif" },
        { title: "MONEY BACK GUARANTEE!", subtitle: "100% Money Back - 30 Days", img: "/images/cashback.gif" },

      ]
    }
  },
}
</script>
