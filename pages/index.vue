<template>
  <div>
    <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          HELLO {{`${auth.user.name.firstname} ${auth.user.name.surname}`}}
        </div>
        <v-list-item-title class="headline mb-1">
          WELCOME HOME
        </v-list-item-title>
        <v-list-item-subtitle>I'll definitely come back to edit this page</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar>
       <img :src="`/img/thumbs/${auth.user.image}`" alt="profile pic" srcset=""></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        to="/account"
      >
        EDIT PROFILE
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
import Vuex from 'vuex'
export default {
  // async asyncData({
  //   isDev,
  //   route,
  //   store,
  //   env,
  //   params,
  //   query,
  //   req,
  //   res,
  //   $axios,
  // }) {
  //   let blogs = await $axios.$get("/api/blogs");
  //   return {
  //     blogs,
  //   };
  // },
  data() {
    return {};
  },
  head() {
    return {
      meta: [{}],
      title: "Home Page",
    };
  },
  computed: {
    ...Vuex.mapState(["auth"]),
  },
};
</script>
