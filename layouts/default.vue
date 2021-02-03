<template>
  <v-app>
    <v-app-bar color="deep-purple accent-4"
      fixed
      app
    >
    <template v-slot:extension>
        <v-tabs
          centered
          slider-color="yellow"
          background-color="deep-purple accent-4"
          center-active
          dark
        >
        <v-tab to="/">Home</v-tab>
        <v-tab to="/admin">Admin</v-tab>
        </v-tabs>
      </template>
  
      <v-btn
        icon
        class="white--text"
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title class="white--text" v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
      ],
      title: 'Nuxt & Vuetify.js Blog'
    }
  }
}
</script>
