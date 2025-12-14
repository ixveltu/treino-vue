<template>
  <div>
    <h1>Teste</h1>
    <div v-if="newsItem">
      <p>ID: {{ newsItem.id }}</p>
      <h2>{{ newsItem.title }}</h2>
      <p>{{ newsItem.summary }}</p>
    </div>

    <div v-else>
      <p>A carregar notícia ou notícia não encontrada...</p>
    </div>
  </div>
</template>

<script>
import { useNewsStore } from "@/stores/news";
import { mapActions, mapState } from "pinia";

export default {
  data() {
    return {};
  },
  async mounted() {
    await this.fetchAllNews();
  },
  methods: {
    ...mapActions(useNewsStore, ["fetchAllNews"]),
  },
  computed: {
    ...mapState(useNewsStore, ["news", "getNewsById"]),

    newsItem() {
      const id = this.$route.params.id;

      return this.getNewsById(id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
