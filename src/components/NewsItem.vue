<template>
  <div>
    <p>{{ item.title }}</p>
    <img :src="item.imageUrl"></img>
    <p>{{ item.summary }}</p>
    <p>{{ item.author }}</p>
    <p>{{ item.category }}</p>
    <p>{{ item.views }}</p>
    <button @click="deleteNewsSingle">Delete</button>
    <router-link :to="`news/${item.id}`">Ver detalhe</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    deleteNewsSingle() {
      this.$emit("delete-news", Number(this.item.id));
    },
  },
};
</script>

<style scoped></style>
