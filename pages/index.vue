<template>
  <div>
    <v-card v-for="blog in blogs" :key="blog._id">
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
