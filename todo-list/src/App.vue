<template>
  <div id="app">
    <div class="mainPanel">
      <h2>Jquery To Do List</h2>
      <p class="briefIntro">
        <em>Simple Todo List with adding and filter by diff status.</em>
      </p>
      <div>
        <span><input type="text" class="inputText"/></span>
        <div class="addButton">Add</div>
      </div>
      <br>
      <ol class="todoList">
        <li v-for="(item, index) in todolist" v-bind:key="index">
          <todo-list-item v-bind:itemName="item.taskName"></todo-list-item>
        </li>
      </ol>
      <div>
        <ul class="filters">
          <li>ALL</li>
          <li>Active</li>
          <li>Complete</li>
        </ul>
      </div>
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
