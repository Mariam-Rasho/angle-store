<template>
  <v-container fluid>
    <v-app-bar>
      <v-row no-gutters justify="center" align="center" class="py-8">
        <v-col cols="3" >
          <v-app-bar-title>
            <v-img min-width="100px" src="@/assets/Screenshot__295_-removebg-preview (1).png"   alt="`https://picsum.photos/10/6?image=${5 + 10}`"></v-img>
          </v-app-bar-title>
        </v-col>
      <v-col cols="auto" md="6" class="d-none d-sm-flex align-center justify-center">
          <v-toolbar-items class="justify-md-center">
            <v-btn class=" text-h5  px-2 mx-1 text-purple-darken-4"><router-link to="/">{{
              $t('message.home') }}</router-link>
            </v-btn>
            <v-btn class="text-h5 px-2 mx-1 text-purple-darken-4"><router-link to="/About">{{
              $t('message.about') }}</router-link>
            </v-btn>
            <v-btn class="text-h5 px-2 mx-1 text-purple-darken-4"><router-link to="/Product">{{
              $t('message.product') }}</router-link>
            </v-btn>
          </v-toolbar-items>
        </v-col>
        <v-col cols="auto" class="mx-auto">
          <v-btn icon to="Login" size="medium" @click="logout">
            <v-icon color='brown-darken-3'>mdi-login</v-icon>
          </v-btn>
          <v-btn icon to="/Cart" class="mr-3">
            <v-badge location="right top" :content="totalCount" color="deep-purple-lighten-2"><v-icon
                color='deep-purple-lighten-1'>mdi-cart</v-icon></v-badge>
          </v-btn>
          <v-btn icon to="/Favorite" size="medium" class="mr-3">
            <v-icon color="red-darken-4">mdi-heart</v-icon>
          </v-btn>
          <v-btn icon @click="changeLocale()" size="medium" class="mr-3">
            <v-icon color="brown">{{ $i18n.locale === 'en' ? 'mdi-abjad-arabic' : 'mdi-alpha-e' }}
              mdi-abjad-arabic</v-icon>
          </v-btn>
          <v-btn icon @click="toggleTheme()" class="pa-md-4 pa-0" size="medium">
            <v-icon color="brown-lighten-2"> mdi-brightness-4</v-icon>
          </v-btn>

        </v-col>
        <v-col class="text-center d-md-none d-xm-flex" cols="2">
          <v-menu width="100%" class="text-center">
            <template v-slot:activator="{ props }">
              <v-app-bar-nav-icon
                color="text-purple-darken-4"
                v-bind="props"
                position="position-absolute"
              >
              </v-app-bar-nav-icon>
            </template>
            <v-list class="mt-2">
              <v-list-item>
                <v-list-item-title class="text-h5  pa-2 mx-1 text-purple-darken-4"><router-link to="/">{{
                  $t('message.home') }}</router-link>
               </v-list-item-title>
                <v-list-item-title class="text-h5  pa-2 mx-1 text-purple-darken-4">
                  <router-link to="/About">{{
                    $t('message.about') }}</router-link></v-list-item-title>
                <v-list-item-title class=" text-h5  pa-2 mx-1 text-purple-darken-4">
                  <router-link to="/Product">{{
                    $t('message.product') }}</router-link></v-list-item-title>

              </v-list-item>
            </v-list>
            </v-menu>
        </v-col>
      </v-row>
    </v-app-bar>

  </v-container>

</template>

<script>
import { useCartStore } from '@/stores/useCartStore';
import { useTheme } from 'vuetify'
import {signOut } from 'firebase/auth'
import { auth } from "@/firebase/index"
import router from '@/router';
export default {
  data() {
    const theme = useTheme()
    function toggleTheme() {
      theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    };
    function logout() {
      signOut(auth).then(() => {
        router.push('/login');
      }).catch(error => {
        console.error('Logout error:', error);
      });
    }

    return {
      cart: [],
      totalCount: 0,
      theme,
      toggleTheme,
      logout,
      active: true
    }
  },
  methods: {
    changeLocale() {
      console.log(this.$i18n.locale);
      this.$vuetify.locale.current = this.$vuetify.locale.current === 'en' ? 'ar' : 'en';
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'ar' : 'en';
    },
  },
  created() {
    setInterval(() => {
      this.cart = useCartStore().cart;
      this.totalCount = this.cart.reduce((accumulator, item) => {
        return accumulator + item.count;

      }, 0);
    }, 1000);
  },
}


</script>
<style scoped>
.v-app-bar ,.v-list {
  max-width: 100vw !important;
  background: linear-gradient(to top left, #82bce9b8, #f88fb4bb) !important;
  backdrop-filter: blur(18px) !important;
}

.v-toolbar-items .v-btn:focus {
  background-color: rgba(171, 110, 184, 0.427) !important;
}


</style>
