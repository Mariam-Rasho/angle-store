<template>
    <v-container  id="contact">
<v-row align="center" justify="center" class="my-12">
    <v-col class="text-center" md="4" cols="8">
        <h1 class="mt-16 text-h3 text-purple-darken-4">Sign Up</h1>
        <v-form @submit.prevent="signupRequest" class="my-6 py-6">
           <label for="email"> <v-text-field bg-color="#ecf5f4" label="Email" type="email" v-model="email"
                class="my-6" id="email"></v-text-field></label>
<label for="password">
            <v-text-field bg-color="#ecf5f4" label="password" required v-model="password"
                type="password" id="password"></v-text-field>
</label>
<v-btn type="submit" color="#659a9d" class="mr-4" value="register"> sign Up </v-btn>
       <div class="text-h6 mt-8"><p>Already have an account ? <router-link to="Login" class="text-red-darken-4">Login</router-link></p></div> </v-form>
    </v-col>
</v-row>
</v-container>
</template>
<script>
//  import { auth } from '@/firebase';
// import * as firebase from 'firebase/app';
//  import "firebase/auth";
//  import {auth} from 'firebase/app'
// import { auth } from "../firebase"
import {auth} from '../firebase/index.js';
import { createUserWithEmailAndPassword} from 'firebase/auth'

export default{
    data() {
        return {
            email:'',
            password:'',
        }
    },
methods:{
   async signupRequest(){
    try
    {
        const user=await  createUserWithEmailAndPassword(auth,this.email,this.password)
        alert("successfully registered");
        this.$router.replace({name:'Login'});
    }
   catch(error)
    {   alert(error.msg);
     }
    },
},
}




</script>
