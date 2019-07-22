<template>
  <div>
    <ul class="filters">
      <li v-on:click="selectAllItems" :class="{filterButton: isAllClicked}">ALL</li>
      <li v-on:click="selectActiveItems" :class="{filterButton: isActiveClicked}">Active</li>
      <li v-on:click="selectCompleteItems" :class="{filterButton: isCompleteClicked}">Complete</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      isAllClicked: true,
      isActiveClicked: false,
      isCompleteClicked: false
    }
  },
  methods: {
    selectAllItems: function() {
      const filterTodolistItem = (list) => {
        return list;
      }
      this.isAllClicked = true;
      this.isActiveClicked = false;
      this.isCompleteClicked = false;
      this.$emit('filter-todolist-item', filterTodolistItem);
    },
    selectActiveItems: function() {
      const filterTodolistItem = (list) => {
        return list.filter(item => !item.checked);
      }
      this.isActiveClicked = true;
      this.isAllClicked = false;
      this.isCompleteClicked = false;
      this.$emit('filter-todolist-item', filterTodolistItem);
    },
    selectCompleteItems: function() {
      const filterTodolistItem = (list) => {
        return list.filter(item => item.checked);
      }
      this.isAllClicked = false;
      this.isActiveClicked = false;
      this.isCompleteClicked = true;
      this.$emit('filter-todolist-item', filterTodolistItem);
    }
  }
};
</script>