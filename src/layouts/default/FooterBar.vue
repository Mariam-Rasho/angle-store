<template>
  <v-footer class="pa-0 mt-16" theme="light">
    <v-container class="footer pa-0 pb-3" fluid >
      <v-row  align="center" id="row1"  class="pa-0 my-1">
          <v-col>
          <v-img :height="70" :width="600" src="@/assets/Screenshot__295_-removebg-preview (1).png"></v-img>
        </v-col>
        <v-col>
          <div class="text-center">
            <v-btn class="footColor" v-for="icon in icons" :key="icon"  :icon="icon"  variant="plain" size="small">
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <!-- <v-divider :thickness="1"></v-divider> -->
<v-row align="center" class="pt-5" justify="center">
  <v-col md="2" class="text-center">
    <h6 class="text-uppercase fw-bold mb-2 text-h5">Pages</h6>
    <p>
      <a href="#!" class="text-reset">Home</a>
    </p>
    <p>
      <a href="#!" class="text-reset">Cart</a>
    </p>
    <p>
      <a href="#!" class="text-reset">Favorite</a>
    </p>
    <p>
      <a href="#!" class="text-reset">About</a>
    </p>
     </v-col>
<v-col md="5" class="text-center">
          <h6 class="text-uppercase fw-bold mb-2 text-h5">Categories</h6>
          <p>
            <a href="#!" class="text-reset">Dress</a>
          </p>
          <p>
            <a href="#!" class="text-reset">T-Shirt</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Shoes</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Jacket</a>
          </p>
           </v-col>
        <v-col md="2" class="px-8 px-sm-16">
          <h6 class="text-uppercase fw-bold mb-4 text-h6">Contact</h6>
          <p>
            <v-icon class="fas fa-home me-3 link-secondary" icon="mdi-map-marker"></v-icon> Damascus
          </p>
          <p>
            <v-icon class=" me-3 link-secondary" icon="mdi-web"></v-icon>
            Store@Angel.com
          </p>
          <p>
            <v-icon icon="mdi-phone" class="me-3 link-secondary" />
            234 567 88
          </p>
          <p>
            <v-icon icon="mdi-phone" class="me-3 link-secondary" />
            234 567 89
          </p>
        </v-col>
</v-row>
      <v-row align="center" id="row2">
        <v-col  class="px-4 py-6 text-center footColor">
          {{ new Date().getFullYear() }} — <strong class="pt-10">Angel E-commerce</strong>
        </v-col>
      </v-row>
    </v-container>

    <div class="triangle"></div>
  </v-footer>
  <!-- Footer -->

  <!-- Footer -->
</template>


<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
      'mdi-github',
      'mdi-google'
    ],
  }),
}
</script>
<style>
a {
  text-decoration-line: none;
  color: rgb(53, 3, 73);
}

.triangle {
  border: 200px solid transparent;
  border-top: 0;
  border-bottom:100px solid red;
  position: absolute;
  transform: rotate(90deg);
  right: 83.6%;
  top: 39%;
}
.footColor{
  color: rgba(240, 234, 243, 0.815);
}
.footer{
  overflow: hidden;
}
.v-footer {
  overflow: hidden;
}
#row1{
  background-color: black;
}
#row2{
  background-color: rgb(2, 85, 2);
}
@media only screen and (max-width: 1024px) {
  .footer * {
    flex-basis: content !important;
  }
  #row1,#row2{
    background-color: #953a7d0c !important;
  }
  .footer{
    background: linear-gradient(to top left, #82bce94d, #f88fb432) !important;
  backdrop-filter: blur(18px) !important;
  }
  .footColor{
    color: rgba(74, 30, 89, 0.808);
  }
  .triangle {
 display: none;
  }

}
</style>