<template>
  <v-carousel id="home" cycle v-model="onboarding" show-arrows="hover" height="700" hide-delimiters class="pt-md-8 pt-10  gradient">
    <v-carousel-item v-for="item in items" :key="item" >
        <v-row justify="center" align="center" class="mx-auto w-75 h-100" >
          <v-col md="7" class="text-center">
            <v-card-title class="bg-text text-md-h3 pa-md-10  text-sm-h6 ">{{ item.title
            }}</v-card-title>
            <v-card-text
              class="text-md-h5 text-sm-h6  font-weight-regular text-grey-darken-1 text-LH mb-4">{{
                item.content
              }}</v-card-text>
              <v-btn rounded="xl" density="comfortable" elevation="4" class="bg text-purple-darken-4  text-md-h6 text-sm-subtitle-6" size="large" max-width="170"  to="/Product"> Buy Now</v-btn>
          </v-col>
          <v-col md="5" cols="8">
            <v-img :src="item.src"  min-height="500" max-width="900"  ></v-img>
          </v-col>
        </v-row>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data: () => ({
    length: 3,
    onboarding: 1,
    items: [
      {
        title: "shopping time",
        content: "Explore an enchanting world of children's clothing products in the Angel online store and discover beauty and sophistication in every design.",
        src: "/images/photo_2023-11-03_20-46-21-removebg-preview.png"

      },
      {
        title: "Winter Colection",
        content: "Enjoy an easy and fun shopping experience at Angel online store and discover our amazing selection of children’s clothing for girls and boys  that meets all your child’s needs",
        src: "/images/photo_2023-11-03_23-32-28-removebg-preview.png"

      },
      {
        title: "Summer Colection",
        content: "Ensure your child's comfort and style with our carefully crafted and fashion-forward children's clothing.They have a variety of options to choose from",
        src: "/images/photo_2023-11-04_23-36-30-removebg-preview.png"

      },
      {
        title: "Summer Girls Clothing",
        content: "The clothing store is your ideal destination to find the latest fashion trends and the most beautiful designs. The store offers you a wide variety of modern and practical clothes for girls",
        src: "/images/photo_2023-11-03_20-47-339-removebg-preview.png"

      },
      {
        title: "Summer  Boys Clothing",
        content: "Get ready to explore our amazing collection of girls’ clothing at Angel online store and let your child shine with unparalleled elegance.",
        src: "/images/rBNaOGELtAGAOfmdAADmsTViwfk306-removebg-preview.png"
      }, {
        title: "Winter Girls Clothing",
        content: "Dress your girls in the cutest outfits that will make them feel confident and happy.They have a variety of options to choose from,including different colors and designs",
        src: "/images/99fc56c8bf5900f784f4fd3ee904cbd5-removebg-preview.png"

      }, {
        title: "winter Boys Clothing",
        content: "The Angel store offers a range of clothing for boys, including jeans, jackets, sweaters and T-shirts. They have a variety of options to choose from, including different colors and designs.",
        src: "/images/5181-removebg-preview.png"
      },
      {
        title: "Girls' Dresses",
        content: "Angel offers a wide selection of girls' dresses, including casual and formal styles. Their collection includes dresses for different seasons and occasions, such as summer dresses and winter dresses.",
        src: "/images/dressremovebg-preview.png"
      },
      // {
      //   title: "Boys' Suits",
      //   content: "Angel offers a smart suit set for boys that includes a white shirt, adjustable tie, vest, trousers and a fully lined vest. The collection is designed to suit boys in a formal and elegant way.",
      //   src: "/src/assets/images/r-bg/New folder/photo_2023-11-03_20-47-46-removebg-preview.png"
      // },

      // {
      //   title: "Children's Shoes",
      //   content: "children's shoes come in a variety of styles and designs, including sandals, boots, and athletic shoes. When choosing shoes for children, it's important to consider factors like  comfort, and support.",
      //   src: "/src/assets/images/r-bg/New folder/photo_2023-11-04_01-01-11-removebg-preview.png"
      // },
      {
        title: "Home Delivery Service",
        content: "We have a home delivery service with a guarantee of quality within a short period. All you have to do is choose the products you like and we are ready",
        src: "/images/photo_2023-11-03_20-46-43-removebg-preview.png"
      },
    ],
  }),
}
</script>
<style>
.bg-text {
  background: #e099d2;
  background: linear-gradient(to right,
      #7f7ff1d6,
      #f584e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gradient{
  max-width: 100vw !important;
  background: linear-gradient(to top left, #bddbf1b8, #f4a9c3bb) !important;
  backdrop-filter: blur(18px) !important;
}
.text-LH {
  line-height: 2.3rem !important;
}

@media only screen and (max-width: 500px) {
.gradient{
  min-height: 90vh !important;
}
}
</style>
