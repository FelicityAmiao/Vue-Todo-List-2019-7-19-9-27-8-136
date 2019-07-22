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
      const callback = (list) => {
        return list;
      }
      this.$emit('get-show-type', callback);
    },
    selectActiveItems: function() {
      const callback = (list) => {
        return list.filter(item => !item.checked);
      }
      this.$emit('get-show-type', callback);
    },
    selectCompleteItems: function() {
      const callback = (list) => {
        return list.filter(item => item.checked);
      }
      this.$emit('get-show-type', callback);
    }
  }
};
</script>