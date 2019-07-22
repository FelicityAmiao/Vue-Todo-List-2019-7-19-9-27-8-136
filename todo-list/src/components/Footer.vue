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
      this.listType="ALL";
      this.$emit('get-show-type', this.listType);
    },
    selectActiveItems: function() {
      this.listType="Active";
      this.$emit('get-show-type', this.listType);
    },
    selectCompleteItems: function() {
      this.listType="Complete";
      this.$emit('get-show-type', this.listType);
    }
  }
};
</script>