<template>
  <v-parallax class="overlay-lighten" src="/imgHome/photo_2023-11-26_19-05-24.jpg" height="750" id="home">
    <div class="d-flex flex-column fill-height justify-center align-center">
      <vue-typewriter-effect :strings="[$t('message.hello')]"
        class="text-md-h1 text-h4 text-center font-weight-bold  pb-16 text-home">
      </vue-typewriter-effect>
    </div>
  </v-parallax>
</template>
<script >
import VueTypewriterEffect from "vue-typewriter-effect"
export default {
  components: {
    VueTypewriterEffect
  },

}
</script>
<style>
.overlay-lighten {
  opacity: 0.7;
  position: fixed;

}

.text-home {
  background: linear-gradient(90deg,
      rgb(218, 36, 133) 0%,
      rgb(172, 36, 210) 35%,
      rgba(55, 0, 255, 0.865) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media only screen and (max-width: 330px) {
  .text-home {
    font-size: 40px !important;
    ;
  }
}
</style>
