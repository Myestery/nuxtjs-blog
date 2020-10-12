<template>
  <div>
    <!-- <v-card v-for="blog in blogs" :key="blog._id">
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ blog.title }}</h3>
          <div>{{ blog.body }}</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn color="primary">{{ blog.author }}</v-btn>
        <v-btn color="primary">text</v-btn>
      </v-card-actions>
    </v-card> -->
    <v-card class="mx-auto" max-width="400" v-for="blog in blogs" :key="blog._id">
      <v-img
        class="white--text align-end"
        height="200px"
        src="/img/jp.jpg"
      >
        <v-card-title>{{ blog.title}}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

      <v-card-text class="text--primary">
       {{blog.body}}
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text>{{blog.User.name.firstname}}</v-btn>

        <v-btn color="orange" text>{{blog.User.name.surname}}</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    $axios,
  }) {
    let blogs = await $axios.$get("/api/blogs");
    return {
      blogs,
    };
  },
  components: {
    Logo,
    VuetifyLogo,
  },
  data() {
    return {};
  },
};
</script>
