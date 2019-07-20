<template>
    <div>
        <input type="checkbox" /> {{itemName}}
    </div>
</template>
<script>
export default {
    name: "TodoListItem",
    props: ["itemName"],
}
</script>

