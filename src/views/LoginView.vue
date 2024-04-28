<template>
    <v-container  id="contact">
<v-row align="center" justify="center" class="my-12">
    <v-col class="text-center" md="4" cols="8">
        <h1 class="mt-16 text-h3 text-purple-darken-4">Log In</h1>
        <v-form @submit.prevent="loginUser" class="my-6 py-6">
            <v-text-field bg-color="#ecf5f4" label="Email" type="email" v-model="email"
                class="my-6 "></v-text-field>

            <v-text-field bg-color="#ecf5f4" label="password" required v-model="password"
                type="password" ></v-text-field>

            <v-btn type="submit" color="#659a9d" class="mr-4" value="register"> Login </v-btn>
            <div class="text-h6 mt-8"><p>Don't have an account ?  <router-link to="Register" class="text-red-darken-2">Sign up</router-link></p></div>
        </v-form>
    </v-col>
</v-row>
</v-container>
</template>
<script>
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {auth} from '../firebase/index.js';

export default{
    data() {
        return {
            email:'',
            password:'',
        }
    },
    methods:{
        loginUser(){
    signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('تم تسجيل الدخول بنجاح');
            this.$router.replace({ name: 'Home' });
        })
        .catch((error) => {
            alert('حدث خطأ أثناء عملية تسجيل الدخول: ' + error.message);
        });
}
    }
}

</script>
