<template>
  <v-container  class="mx-auto my-16"  fluid>
    <v-row justify="center" align="center" >
       <v-col md="6" sm="6" xs="7"> <v-img  :height="500"
          src="/imgHome/Mention-amico (1).svg"  :lazy-src="`https://picsum.photos/10/6?image=${ 5 + 10}`" alt="`https://picsum.photos/10/6?image=${5 + 10}`"></v-img>
      </v-col>
      <v-col md="4" sm="7" class="px-0 form" align-self="center">
        <v-form class="px-md-16 bg py-10 px-5 glass-card" width="100%">
          <v-text class="text-h6 text-md-h5 text-sm-h6 font-weight-bold bg-text">WHAT DO YOU THINK?</v-text>
          <v-text-field  label="Name"  class="mt-10"
            color="deep-purple"></v-text-field>
          <v-text-field  label="Email"
            color="deep-purple"></v-text-field>
          <v-text-field   variant="filled" color="deep-purple"
             label="Password" style="min-height: 60px" type="password"></v-text-field>
          <v-textarea clearable color="deep-purple"   label="Your Comment"
            variant="outlined" ></v-textarea>

          <v-btn class="bg mt-4 text-purple-darken-4 text-center d-flex justify-center w-50 mx-auto" rounded="xl" size="x-large" elevation="4"
            variant="tonal" >
            Submit
          </v-btn>

        </v-form>
      </v-col>



    </v-row>

  </v-container>
</template>

<style>
.bg {
  background: #e099d2;
  background: linear-gradient(to right,
      #2121ba2c,
      #9f2c8a25);
}

.bg-text {
  background: linear-gradient(to right,
      #5555c3,
      #a94b98);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.glass-card {
  box-shadow: 0 6px 10px   rgba(194, 123, 194, 0.2);
  border-radius: 70px;
}
.form{
  flex-basis: auto;
}
</style>
