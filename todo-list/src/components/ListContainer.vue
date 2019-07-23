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
  data() {
    return {
      showFilteredTodoList: this.$store.state.todolist
    };
  },
  watch: {
    '$store.state.inputTaskName': function() {
      this.showFilteredTodoListItem();
    },
    '$store.state.filterTodolistItem': function() {
      this.showFilteredTodoListItem();
    }
  },
  methods: {
    showFilteredTodoListItem: function() {
      this.showFilteredTodoList = this.$store.state.filterTodolistItem(this.$store.state.todolist);
    },
    handleSelectOperator: function(checked, itemIndex) {
      this.$store.state.todolist.filter(
        item => item.number === itemIndex
      )[0].checked = checked;
    },
    updateName: function(changedName, itemIndex) {
      this.$store.state.todolist.filter(
        item => item.number === itemIndex
      )[0].taskName = changedName;
    }
  }
};
</script>

