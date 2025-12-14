<template>
  <div>
    <h1>News</h1>
    <button @click="$router.go(-1)">Go Back</button>
    <button @click="$router.push({ path: '/' })">Go Home by Path</button>
    <button @click="$router.push({ name: 'home' })">Go Home by Name</button>
    <h1 v-if="loading">Loading</h1>
    <AddNews @add-news-item="addNewsItem" />

    <h2>All News</h2>
    <div v-for="newsSingle in news" :key="newsSingle.id">
      <NewsItem @delete-news="deleteSingleNews" :item="newsSingle" />
    </div>
  </div>
</template>

<script>
import AddNews from "@/components/AddNews.vue";
import NewsItem from "@/components/NewsItem.vue";
import { useNewsStore } from "@/stores/news";
import { mapActions, mapState } from "pinia";

export default {
  data() {
    return {
      /* store: useNewsStore, */
    };
  },
  components: {
    NewsItem,
    AddNews,
  },
  computed: {
    ...mapState(useNewsStore, ["news", "loading", "getNews"]),
  },
  methods: {
    ...mapActions(useNewsStore, [
      "fetchAllNews",
      "deleteSingleNews",
      "addNewsItem",
    ]),
  },
  async mounted() {
    await this.fetchAllNews();
  },
};
</script>

<style scoped></style>
