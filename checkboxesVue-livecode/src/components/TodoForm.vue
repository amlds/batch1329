<script>
  export default {
    data() {
      return {
        newItem: '',
      };
    },
    methods: {
      addItem() {
        if (this.newItem.trim() !== '') {
          this.$emit('add', this.newItem.trim());
          this.newItem = '';
        }
      },
    },
  };
</script>

<template>
  <form @submit.prevent="addItem">
    <input v-model="newItem" type="text" placeholder="Ajouter une tâche">
    <button type="submit">Ajouter</button>
  </form>
</template>


<style>
form {
  display: flex;
  margin-bottom: 1rem;
}

input[type='text'] {
  flex: 1;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  box-shadow: 0 0 0 1px #ccc;
}

input[type='text']:focus {
  outline: none;
  box-shadow: 0 0 0 1px #007aff;
}

button[type='submit'] {
  background-color: #007aff;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin-left: 0.5rem;
  cursor: pointer;
}

button[type='submit']:hover {
  background-color: #0062cc;
}
</style>