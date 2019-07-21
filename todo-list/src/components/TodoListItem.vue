<template>
  <div v-bind:class="{checkClass:checked}">
    <input type="checkbox" v-model="checked" v-on:change="handleSelect" />
    <span
      v-bind:contenteditable="true"
      v-on:blur="editName"
      v-on:keydown.enter="updateTaskName"
      v-text="changeField"
    ></span>
  </div>
</template>
<script>
export default {
  name: "TodoListItem",
  props: ["itemName", "itemIndex", "isChecked"],
  data: function() {
    return {
      checked: this.isChecked,
      changeField: this.itemName
    };
  },
  methods: {
    handleSelect: function() {
      this.$emit("handle-select", this.checked, this.itemIndex);
    },
    editName: function(event) {
      this.isNameEdiable = true;
      this.changeField = event.target.innerText;
      this.$emit("update-task-name", this.changeField, this.itemIndex);
    },
    updateTaskName: function() {
      this.$el.querySelector("span").blur();
      this.$emit("update-task-name", this.changeField, this.itemIndex);
    }
  }
};
</script>

