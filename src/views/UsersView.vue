<template>
  <div>
    <h1>Users</h1>

    <h2>Tasks</h2>
    <TaskInput @add-task="addTask"></TaskInput>
    <h3>Completed Tasks</h3>
    <div v-for="task in tasks" :key="task.id">
      <div v-if="task.completed">
        <p>{{ task.title }}</p>
        <button @click="toggleTask(task.id)">
          {{ task.completed ? "Mark as To-Do" : "Mark as Complete" }}
        </button>
      </div>
    </div>
    <h3>To-Do</h3>
    <div v-for="task in tasks" :key="task.id">
      <div v-if="!task.completed">
        <p>{{ task.title }}</p>
        <button @click="toggleTask(task.id)">
          {{ task.completed ? "Mark as To-Do" : "Mark as Complete" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TaskInput from "@/components/TaskInput.vue";

export default {
  data() {
    return {
      tasks: [],
    };
  },
  mounted() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  },
  methods: {
    saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    addTask(description) {
      const task = {
        id: self.crypto.randomUUID(),
        title: description,
        completed: false,
      };

      this.tasks.unshift(task);

      this.saveTasks();
    },
    toggleTask(taskId) {
      const taskIndex = this.tasks.findIndex((task) => task.id === taskId);

      if (taskIndex !== -1) {
        this.tasks[taskIndex].completed = !this.tasks[taskIndex].completed;
        this.saveTasks();
      }
    },
  },
  components: {
    TaskInput,
  },
};
</script>

<style scoped></style>
