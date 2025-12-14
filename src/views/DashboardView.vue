<template>
  <div>
    <h1>Dashboard</h1>
    <router-link to="/dashboard/users">Users</router-link>
    <router-link to="/dashboard/news">News</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped></style>
