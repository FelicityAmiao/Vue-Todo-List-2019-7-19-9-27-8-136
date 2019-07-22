<template>
  <div>
    <InputBar @get-input-task-name="getInputTaskName"></InputBar>
    <ListContainer :todoList="todolist" :showFilter="showFilter"></ListContainer>
  </div>
</template>
<script>
let id = 0;
const getId = () => {
  return id++;
}

import InputBar from "./InputBar.vue";
import ListContainer from "./ListContainer.vue";
export default {
  name: "Body",
  components: {
    InputBar,
    ListContainer
  },
  props: {
    showFilter: Function
  },
  data() {
    return {
      todolist: [],
    };
  },
  methods: {
    getInputTaskName: function(inputTaskName) {
      let taskItem = {
        taskName: inputTaskName,
        number: getId(),
        checked: false
      };
      this.todolist.push(taskItem);
    }
  }
};
</script>