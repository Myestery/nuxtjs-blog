<template>
  <div>
    <v-app light>
      <v-card class="overflow-hidden" height="100%">
        <v-app-bar>
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

          <v-toolbar-title>Blog</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn rounded icon fab color="pink">
            <v-icon>search</v-icon>
          </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-app-bar>
            <h3><nuxt-link to="/">Blog</nuxt-link></h3>
            <v-btn
              rounded
              icon
              fab
              color="pink"
              @click="drawer = false"
              style="margin-left: 70%"
            >
              <v-icon>close</v-icon>
            </v-btn>
          </v-app-bar>
          <v-list nav dense>
            <v-list-item-group active-class="deep-purple--text text--accent-4">
              <v-list-item to="/">
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>
              <v-list-item to="/blogs">
                <v-list-item-icon>
                  <v-icon>mdi-filmstrip</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Blogs</v-list-item-title>
              </v-list-item>
              <v-list-item to="/user/home" v-if="auth.loggedIn">
                <v-list-item-icon>
                  <v-icon>mdi-account-details</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Dashboard</v-list-item-title>
              </v-list-item>

              <v-list-item to="/account" v-if="auth.loggedIn">
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Account</v-list-item-title>
              </v-list-item>
              <v-list-item to="/login" v-if="!auth.loggedIn">
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Login</v-list-item-title>
              </v-list-item>
              <v-list-item v-if="auth.loggedIn" @click="Logout">
                <v-btn icon>
                  <v-icon>mdi-logout</v-icon>
                </v-btn>
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
        <v-main>
          <nuxt style="margin-top: 30px" />
        </v-main>
      </v-card>
      <v-footer app>
        <!-- -->
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  data: () => ({
    drawer: false,
  }),
  head: {
    link: [{ rel: "stylesheet", href: "/css/material.css", type: "text/css" }],
  },
  computed: {
    ...Vuex.mapState(["auth"]),
  },
  methods: {
    Logout() {
      this.$auth.logout();
    },
  },
};
</script>
<style scoped>
</style>