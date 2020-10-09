<template>
  <div>
    <v-card v-for="article in articles" :key="article._id">
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ article.title }}</h3>
          <div>{{ article.body }}</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn color="primary">{{ article.author }}</v-btn>
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
    let articles = await $axios.$get("/api/articles");
    return {
      articles,
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
