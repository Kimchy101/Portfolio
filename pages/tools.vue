<template>
    <v-layout column>
        <div class="pa-2 ma-2"><p class="display-1 blue--text text-xs-center">Here's what I'm familiar with...</p></div>
        <v-card class="pa-2 ma-2">
            <v-layout align-center :column="$vuetify.breakpoint.xsOnly">
            <v-card-title class="display-1 blue--text font-weight-light"><i>Languages</i></v-card-title>
            <v-card-text class="headline text-xs-center">
              C#, Java, JavaScript, CSS, Python
            </v-card-text>
            </v-layout>
        </v-card>
        <v-card class="pa-2 ma-2">
            <v-layout align-center :column="$vuetify.breakpoint.xsOnly">
            <v-card-title class="display-1 blue--text text-xs-center font-weight-light"><i>Framework or Engine</i></v-card-title>
            <v-card-text class="headline text-xs-center">
              Nuxt, Vue, Unity, Vuetify
            </v-card-text>
            </v-layout>
        </v-card>
          <v-card class="pa-2 ma-2">
            <v-layout align-center :column="$vuetify.breakpoint.xsOnly">
            <v-card-title class="display-1 blue--text text-xs-center font-weight-light"><i>Dev Tools</i></v-card-title>
            <v-card-text class="headline text-xs-center">
              VSCode, Git, GitHub
            </v-card-text>
            </v-layout>
        </v-card>
    </v-layout>
</template>

<script>
export default {

}
</script>