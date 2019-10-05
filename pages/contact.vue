<template>
  <v-card>
     <v-layout align-center column>
        <v-card-title class="display-1 text-xs-center question">Questions, comments, requests?</v-card-title>
          <v-card-text class="headline font-weight-light text-xs-center">
            You can reach me at<br>
            kimchy101@gmail.com
          </v-card-text>
     </v-layout>
  </v-card>
</template>

<script>
import UnderConstruction from '~/components/Under Construction'
export default {
  components: {
    UnderConstruction
  }
}
</script>

<style scoped>
  .question
  {
    color: rgb(151, 106, 89);
  }
</style>
