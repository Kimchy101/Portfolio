<template>
  <v-app dark>
    <v-navigation-drawer
      clipped
      v-model="drawer"
      fixed
      app
      width=220
    >
      <v-list>

        <!-- Navigation bar tile (ex: Home page link)-->
        <v-list-tile
          v-for="(navTile, i) in navTiles"
          :to="navTile.to"
          :key="i"
          :active-class="navTile.color"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="navTile.icon" />
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-html="'<sup><strong>' + (i + 1) + '</strong> </sup>' + navTile.title" />
          </v-list-tile-content>

        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    
    <v-toolbar
      clipped-left
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title v-html="title"/>

    </v-toolbar>

    <!-- Bulk of content (template's nuxt) -->
    <v-content>
      <v-container>
        <logo v-bind:caption="logoCaption" />
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2018 cube4.org</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  export default {
    data() {
      return {
        drawer: null,
        navTiles: [
          { icon: 'apps', title: 'Home', to: '/' , color: 'red lighten-2'},
          { icon: 'games', title: 'Games', to: '/games', color: 'green'},
          { icon: 'movies', title: 'Movies', to: '/movies', color: 'red darken-3'},
          { icon: 'chat', title: 'Blog', to: '/blog', color: 'blue'},
          { icon: 'contact_mail', title: 'Contact', to: '/contact', color: 'brown' }
        ],
        title: 'CUBE<sub>4</sub>',
        logoCaption: '<br>'
      }
    },
    methods: {
      updateLogoCaption: function()
      {
        var str = '/' +  window.location.pathname.split("/").pop() + '/';
        this.logoCaption = (str.length > 2) ? str : "<br>";
      }
    },
    mounted() {
      this.updateLogoCaption();
    },
    watch: {
      $route(to, from) {
        this.updateLogoCaption();
      },
    },
    components: {
      Logo
    }
  }
</script>
