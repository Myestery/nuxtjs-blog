<template>
  <div>
    <v-card max-width="1000" class="mx-auto" outlined>
      <v-list-item three-line to="/">
        <v-list-item-avatar
          ><img
            :src="`/img/thumbs/${blog.User.image}`"
            alt="profile pic"
            srcset=""
        /></v-list-item-avatar>
        <v-list-item-content>
          <div class="overline">{{ blog.User.name.firstname }}</div>
          <v-list-item-title class="headline mb-1">
            <v-card-title>{{ blog.title }}</v-card-title>
          </v-list-item-title>
          <v-card>
            <v-card-text>
              {{ blog.body }}
            </v-card-text>
          </v-card>
          <v-img class="white--text align-end" src="/img/jp.jpg"> </v-img>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn icon color="pink" @click="Like" >
          <v-icon>mdi-heart</v-icon> </v-btn
        ><span>{{ blog.likes.length }}</span>
        <v-btn icon>
          <v-icon @click="commenting = true">mdi-comment-plus</v-icon> </v-btn
        ><span>{{ blog.comments.length }}</span>
      </v-card-actions>
    </v-card>
    <CommentBox
      @comment="commentHandler"
      :active="commenting"
      @close="commenting = false"
    />
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  async asyncData({ $axios, route }) {
    let blog = await $axios.$get(`/api/blogs/${route.params.id}`);
    return {
      blog,
    };
  },
  data() {
    return {
      commenting: false,
    };
  },
  computed: {
    ...Vuex.mapState(["auth"]),
  },
  methods: {
    commentHandler(comment) {
      this.$axios.$post(`/api/blogs/${this.$route.params.id}/comment`, {
        comment,
        id: this.$route.params.id,
      });
    },
    async Like() {
      this.blog = await this.$axios.$post(`/api/blogs/${this.$route.params.id}/like`);
    },
  },
};
</script>
