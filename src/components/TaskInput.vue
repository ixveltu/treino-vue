<template>
  <div>
    <input type="text" v-model="title" />
    <button @click="addTask">Add task</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addTask() {
      this.title = this.title.trim();

      if (this.title === "") {
        return;
      }

      this.$emit("add-task", this.title);

      this.title = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
