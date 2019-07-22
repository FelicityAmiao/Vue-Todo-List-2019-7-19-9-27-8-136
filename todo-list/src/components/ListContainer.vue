<template>
  <div>
    <ol class="todoList">
      <li v-for="item in showFilteredTodoList" v-bind:key="item.number">
        <todo-list-item
          v-bind:listItem="item"
          v-on:handle-select="handleSelectOperator"
          v-on:update-task-name="updateName"
        ></todo-list-item>
      </li>
    </ol>
  </div>
</template>
<script>
import TodoListItem from "./TodoListItem.vue";
export default {
  name: "ListContainer",
  components: {
    TodoListItem
  },
  props: {
    todoList: Array,
    filterTodolistItem: Function
  },
  data() {
    return {
      showFilteredTodoList: this.todoList
    };
  },
  watch: {
    todoList: function() {
      this.showFilteredTodoListItem();
    },
    filterTodolistItem: function() {
      this.showFilteredTodoListItem();
    }
  },
  methods: {
    showFilteredTodoListItem: function() {
      this.showFilteredTodoList = this.filterTodolistItem(this.todoList);
    },
    handleSelectOperator: function(checked, itemIndex) {
      this.todoList.filter(
        item => item.number === itemIndex
      )[0].checked = checked;
    },
    updateName: function(changedName, itemIndex) {
      this.todoList.filter(
        item => item.number === itemIndex
      )[0].taskName = changedName;
    }
  }
};
</script>

