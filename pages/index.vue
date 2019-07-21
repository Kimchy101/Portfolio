<template>
  <v-layout
    column
    justify-center
    align-center
    class="transcontainer">
    <v-flex
      xs12
      sm8
      md6>
      <v-card>
        <v-card-title class="headline">About us</v-card-title>
        <hr class="my-3">
        <v-card-text>
          <p>Welcome to the official CUBE<sub>4</sub> website. </p>
          <p>Here at CUBE<sub>4</sub>,<br> we are dedicated to delivering the greatest in entertainment and art for our noteworthy audience.</p>
          <p>We are varied in our expertise. Our work is a variety of mediums ranging from video games to movies.</p>
          <p>We are uniquely dedicated to the integrity of art. 
             To us, craftsmanship is a meaningful, refined expression 
             that connects the minds of artists and developers to the lives of our viewers.</p>
          <p>We are constantly pushing the limits of our work.
             Our evaluation is based on innovation and creativity.
             We stray from the common path of stagnation 
             in favor of new, fascinating ideas that go beyond standards previously set.</p>
          <p class="body-2">We are CUBE<sub>4</sub>, the apical shape of entertainment</p>
        </v-card-text>

      </v-card>
    </v-flex>
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
