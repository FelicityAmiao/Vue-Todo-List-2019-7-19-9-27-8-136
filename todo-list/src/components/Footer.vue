<template>
  <div>
    <ul class="filters">
      <li v-on:click="selectAllItems">ALL</li>
      <li v-on:click="selectActiveItems">Active</li>
      <li v-on:click="selectCompleteItems">Complete</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Footer",
  props: {
    showType: String
  },
  data() {
    return {
      listType: this.showType
    }
  },
  methods: {
    selectAllItems: function() {
      const filterTodolistItem = (list) => {
        return list;
      }
      this.$emit('filter-todolist-item', filterTodolistItem);
    },
    selectActiveItems: function() {
      const filterTodolistItem = (list) => {
        return list.filter(item => !item.checked);
      }
      this.$emit('filter-todolist-item', filterTodolistItem);
    },
    selectCompleteItems: function() {
      const filterTodolistItem = (list) => {
        return list.filter(item => item.checked);
      }
      this.$emit('filter-todolist-item', filterTodolistItem);
    }
  }
};
</script>