<template>
  <div id="app">
    <div>
      <p>Jquery To Do List</p>
      <p>Simple Todo List with adding and filter by diff status.</p>
      <p>
        <span><input type="text" /></span>
        <span><button>Add</button></span>
      </p>
      <ol>
        <li v-for="(item, index) in todolist" v-bind:key="index">
          <todo-list-item v-bind:itemName="item.taskName"></todo-list-item>
        </li>
      </ol>
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
      todolist: [
        {
          index: 1,
          taskName: 'default task Name'
        }
      ]
    }
  },
  components: {
    TodoListItem
  }
}
</script>

<style>
</style>
