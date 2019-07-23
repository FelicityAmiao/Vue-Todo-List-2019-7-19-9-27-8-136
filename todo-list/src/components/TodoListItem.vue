<template>
  <div v-bind:class="{checkClass:checked}">
    <input type="checkbox" v-model="checked" v-on:change="handleSelect" />
    <span
      v-bind:contenteditable="true"
      v-on:blur="editName"
      v-on:keydown.enter="updateTaskName"
    >{{changeField}}</span>
  </div>
</template>
<script>
export default {
  name: "TodoListItem",
  props: {
    listItem: Object
  },
  data: function() {
    return {
      checked: this.listItem.checked,
      changeField: this.listItem.taskName
    };
  },
  methods: {
    handleSelect: function() {
      this.$store.state.todolist.filter(
        item => item.number === this.listItem.number
      )[0].checked = this.checked;
    },
    editName: function(event) {
      this.isNameEdiable = true;
      this.changeField = event.target.innerText;
      this.updateName(this.changeField, this.listItem.number);
    },
    updateTaskName: function() {
      this.$el.querySelector("span").blur();
      this.updateName(this.changeField, this.listItem.number);
    },
    updateName: function(changedName, itemIndex) {
      this.$store.state.todolist.filter(
        item => item.number === itemIndex
      )[0].taskName = changedName;
    }
  }
};
</script>

