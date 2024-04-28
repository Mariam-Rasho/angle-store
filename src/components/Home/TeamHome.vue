<template>
  <v-container  class="mx-auto my-16">
    <h1 class="text-h2 text-center my-10">Our Team</h1>
    <v-row justify="center">
      <v-col md="3"  cols="10" min-height="300%" v-for="member in teams" :key="member.id">
        <TeamMember :gender=member.gender>
          <template #imgUser>
            <v-img height="230px" width="100%" :src="member.url" :lazy-src="`https://picsum.photos/10/6?image=${5 + 10}`" cover>
            </v-img>
          </template>
          <template #name>
            {{ member.first_name }} {{ member.last_name }}
          </template>
          <template #role>
            {{ member.job_title }}
          </template>
        </TeamMember>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import TeamMember from './TeamMember.vue';
export default {
  components: {
    TeamMember,
  },
  data() {
    return {
      url: "/json/team.json",
      teams: [],
    }
  },
  //   (async () => {
  //   let response = await fetch(this.url);
  //   this.teams = await response.json();

  // });
  async created() {
    let response = await fetch(this.url);
    this.teams = await response.json();
    // fetch(this.url).then(response =>
    //   response.json()).then(data => {
    //     this.teams = data
    //   })
  },
}
</script>
<style scoped>
v-col {
  flex-basis: auto !important;
}
</style>