<script setup>
import TodoList from './components/TodoList.vue'
</script>

<template>
  <main>
    <TodoList class="todolist"/>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10%;
}

.todolist {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
}
</style>
