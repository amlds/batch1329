<script>
const removeItem = (items, index) => {
  return [...items.slice(0, index), ...items.slice(index + 1)];
};

import TodoForm from './TodoForm.vue';

export default {
  components: {
    TodoForm,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    addItem(newItem) {
      this.items = [...this.items, { text: newItem, done: false }];
    },
    removeItem(index) {
      this.items = removeItem(this.items, index);
    },
  },
};
</script>

<template>
  <div>
    <h1>Ma todolist</h1>
    <todo-form @add="addItem"></todo-form>
    <ul class="todolist">
      <li class="todo" v-for="(item, index) in items" :key="index">
        <div>
          <input type="checkbox" v-model="item.done">
          <span :class="{ done: item.done }">{{ item.text }}</span>
      </div>
        <button @click="removeItem(index)">Supprimer</button>
      </li>
    </ul>
  </div>
</template>

<style>
.done {
  text-decoration: line-through;
}

.todo {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  box-sizing: border-box;
  transition: background-color 0.2s ease-in-out;
}

.todo:hover {
  background-color: #d6d6d6;
}

</style>