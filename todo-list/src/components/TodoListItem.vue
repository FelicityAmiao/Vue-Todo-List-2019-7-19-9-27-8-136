<template>
    <div v-bind:class="{checkClass:checked}">
        <input type="checkbox" v-model="checked" v-on:change="handleSelect"/> {{itemName}}
    </div>
</template>
<script>
export default {
    name: "TodoListItem",
    props: ["itemName", "itemIndex", "isChecked"],
    data: function() {
        return {
            checked: this.isChecked
        }
    },
    methods: {
        handleSelect: function() {
            this.$emit('handle-select', this.checked, this.itemIndex);
        }
    }
}
</script>

