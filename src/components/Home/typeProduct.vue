<template>
    <v-container  class="mt-16">
        <v-row justify="center" class="my-16">
            <v-col v-for=" item in Category" :key="item" cols="auto">
                <v-card class="mx-auto" width="330" height="250"
                    :image=item.image :title=item.title theme="dark" :lazy-src="`https://picsum.photos/10/6?image=${5 + 10}`"></v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>
const Category=[{title:"Girls",image:"/images/12048.jpg"},{title:"Boy",image:"/images/3990-5.jpg"},{title:"Shoes",image:"/images/R.jpg"},]
</script>