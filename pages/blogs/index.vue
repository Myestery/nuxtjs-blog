<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="400"
      v-for="blog in blogs"
      :key="blog._id"
    >
      <v-img class="white--text align-end" height="200px" src="/img/jp.jpg">
        <v-card-title>{{ blog.title }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

      <v-card-text class="text--primary">
        {{ blog.body }}
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text>{{ blog.User.name.firstname }}</v-btn>

        <v-btn color="orange" text>{{ blog.User.name.surname }}</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    let blogs = await $axios.$get("/api/blogs");
    return {
      blogs,
    };
  },
  data() {
    return {};
  },
};
</script>
