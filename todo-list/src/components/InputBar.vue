<template>
  <div>
    <div>
      <span>
        <input type="text" class="inputText" v-model="inputTaskName" v-on:keyup.enter="addItem" />
      </span>
      <div class="addButton" v-on:click="addItem">Add</div>
    </div>
    <br />
  </div>
</template>
<script>
let id = 0;
const getId = () => {
  return id++;
};
export default {
  name: "InpurBar",
  data() {
    return {
      inputTaskName: ''
    };
  },
  methods: {
    addItem: function() {
      this.$store.state.inputTaskName = this.inputTaskName;
      let taskItem = {
        taskName: this.$store.state.inputTaskName,
        number: getId(),
        checked: false
      };
      this.$store.state.todolist.push(taskItem);
      this.inputTaskName = '';
    }
  }
};
</script>

