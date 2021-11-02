<template>
    <div class="container">
        <div
            class="tag"
            v-for="(tag, index) in tags"
            :key="tag"
            :style="{ backgroundColor: colors[index % colors.length] }"
        >{{ tag }}</div>
    </div>
</template>

<script>
export default {
    props: {
        tags: []
    },
    data() {
        return {
            colors: ["#42b983", "#f5b23d", "#00b5e5", "#fb7299", "#ff5722", "#009688"]
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
}
.tag {
    border-radius: 4px;
    padding: 0.5em 1em;
    font-size: 80%;
    font-weight: bold;
    color: white;
}
</style>