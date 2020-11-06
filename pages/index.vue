<template>
  <div>
    Welcome Home
      <div>FirstName: <span>{{auth.user.name.firstname}}</span></div>
      <div>Surname: <span>{{auth.user.name.surname}}</span></div>
      <div>Image: <img :src="`/img/thumbs/${auth.user.image}`" alt="profile pic" srcset=""></div>
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
