<template>
  <form @submit.prevent="addItem">
    <label for="title">Title</label>
    <input
      type="text"
      placeholder="Title"
      v-model="title"
      name="title"
      required
    />
    <label for="imageurl">imageurl</label>
    <input
      type="text"
      placeholder="image url"
      v-model="imageUrl"
      name="image"
      required
    />
    <label for="author">author</label>
    <input
      type="text"
      placeholder="author"
      v-model="author"
      name="author"
      required
    />
    <label for="category">category</label>
    <input
      type="text"
      placeholder="category"
      v-model="category"
      name="category"
    />
    <label for="summary">summary</label>
    <input
      type="text"
      placeholder="summary"
      v-model="summary"
      name="summary"
      required
    />
    <label for="views">views</label>
    <input
      type="number"
      min="0"
      max="100000000"
      v-model="views"
      name="views"
      required
    />

    <button type="submit">Adicionar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      imageUrl: "",
      author: "",
      category: "",
      summary: "",
      views: 0,
    };
  },
  methods: {
    addItem() {
      const newsItem = {
        id: self.crypto.randomUUID(),
        title: this.title,
        imageUrl: this.imageUrl,
        author: this.author,
        category: this.category,
        summary: this.summary,
        views: this.views,
      };

      this.$emit("add-news-item", newsItem);
    },
  },
};
</script>

<style lang="scss" scoped></style>
