<template>
  <div id="app">
    <div class="mainPanel">
      <h2>Jquery To Do List</h2>
      <p class="briefIntro">
        <em>Simple Todo List with adding and filter by diff status.</em>
      </p>
      <div>
        <span><input type="text" class="inputText" v-model="inputTaskName" v-on:keyup.enter="addItem"/></span>
        <div class="addButton" v-on:click="addItem">Add</div>
      </div>
      <br>
      <ol class="todoList">
        <li v-for="(item, index) in todolist" v-bind:key="index">
          <todo-list-item v-bind:itemName="item.taskName" v-bind:itemIndex="index" v-on:handle-select="handleSelectOperator"></todo-list-item>
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
      inputTaskName: '',
      todolist: []
    }
  },
  methods: {
    addItem: function() {
      let item = {};
      item['taskName'] = this.inputTaskName;
      item['checked'] = false;
      this.todolist.push(item);
      this.inputTaskName = '';
    },
    handleSelectOperator: function(checked, itemIndex) {
      this.todolist[itemIndex].checked = checked;
    }
  },
  components: {
    TodoListItem
  }
}
</script>

<style>
</style>
