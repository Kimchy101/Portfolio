<template>
  <v-layout
    column
    justify-center
    align-center
    class="transcontainer">
      <v-card class="pa-2">
        <v-layout align-center column>
          <v-card-title class="display-1 text-xs-center greeting">Hi! My name is Andrew Choi.</v-card-title>
            <img width="80%" class="justify-content" src="~/static/profile.png">
          <v-card-text class="headline font-weight-light text-xs-center">
              I'm a highschooler who specializes in coding for websites and video games.<br>
              I take great pride in what I create.<br>
              You can check some of my projects on the tabs to the left. 
          </v-card-text>
        </v-layout>
      </v-card>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
  .greeting
  {
    color: #e57373;
  }
  img
  {
    max-width: 250px
  }
</style>
