<template>
  <div id="app">
    <div>
      <p>Jquery To Do List</p>
      <p>Simple Todo List with adding and filter by diff status.</p>
      <p>
        <span><input type="text" /></span>
        <span><button>Add</button></span>
      </p>
      <ul>
        <li v-for="(item, index) in todoItemCount" v-bind:key="index">
          <todo-list-item v-bind:itemName="taskName"></todo-list-item>
        </li>
      </ul>
      <p>
        <span>ALL </span>
        <span>Active </span>
        <span>complete </span>
      </p>
    </div>
  </div>
</template>

<script>
import TodoListItem from "./components/TodoListItem.vue"
export default {
  name: 'app',
  data: function() {
    return {
      todoItemCount: 1,
      taskName: 'default task name'
    }
  },
  components: {
    TodoListItem
  }
}
</script>

<style>
</style>
