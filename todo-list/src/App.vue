<template>
  <div id="app">
    <div class="mainPanel">
      <h2>Jquery To Do List</h2>
      <p class="briefIntro">
        <em>Simple Todo List with adding and filter by diff status.</em>
      </p>
      <div>
        <span>
          <input type="text" class="inputText" v-model="inputTaskName" v-on:keyup.enter="addItem" />
        </span>
        <div class="addButton" v-on:click="addItem">Add</div>
      </div>
      <br />
      <ol class="todoList">
        <li v-for="item in showTodoList" v-bind:key="item.number">
          <todo-list-item
            v-bind:itemName="item.taskName"
            v-bind:itemIndex="item.number"
            v-bind:isChecked="item.checked"
            v-on:handle-select="handleSelectOperator"
            v-on:update-task-name="updateName"
          ></todo-list-item>
        </li>
      </ol>
      <div>
        <ul class="filters">
          <li v-on:click="selectAllItems">ALL</li>
          <li v-on:click="selectActiveItems">Active</li>
          <li v-on:click="selectCompleteItems">Complete</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TodoListItem from "./components/TodoListItem.vue";
export default {
  name: "app",
  data: function() {
    return {
      inputTaskName: "",
      todolist: [],
      showTodoList: []
    };
  },
  methods: {
    addItem: function() {
      let item = {};
      item["number"] = this.todolist.length;
      item["taskName"] = this.inputTaskName;
      item["checked"] = false;
      this.todolist.push(item);
      this.selectAllItems();
      this.inputTaskName = "";
    },
    handleSelectOperator: function(checked, itemIndex) {
      this.todolist.filter(
        item => item.number === itemIndex
      )[0].checked = checked;
    },
    selectAllItems: function() {
      this.showTodoList = this.todolist;
    },
    selectActiveItems: function() {
      this.showTodoList = this.todolist.filter(item => !item.checked);
    },
    selectCompleteItems: function() {
      this.showTodoList = this.todolist.filter(item => item.checked);
    },
    updateName: function(changedName, itemIndex) {
      this.todolist.filter(
        item => item.number === itemIndex
      )[0].taskName = changedName;
    }
  },
  components: {
    TodoListItem
  }
};
</script>

<style>
</style>
