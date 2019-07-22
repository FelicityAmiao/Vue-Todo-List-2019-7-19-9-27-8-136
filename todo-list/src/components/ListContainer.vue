<template>
  <div>
    <ol class="todoList">
      <li v-for="item in showTodoList" v-bind:key="item.number">
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
    showType: String
  },
  data() {
    return {
      showTodoList: this.todoList
    };
  },
  watch: {
    todoList: function() {
      this.selectShowType();
    },
    showType: function() {
      this.selectShowType();
    }
  },
  methods: {
    selectShowType: function() {
      if (this.showType === "ALL") this.selectAllItems();
      if (this.showType === "Active") this.selectActiveItems();
      if (this.showType === "Complete") this.selectCompleteItems();
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
    },
    selectAllItems: function() {
      this.showTodoList = this.todoList;
    },
    selectActiveItems: function() {
      this.showTodoList = this.todoList.filter(item => !item.checked);
    },
    selectCompleteItems: function() {
      this.showTodoList = this.todoList.filter(item => item.checked);
    }
  }
};
</script>

