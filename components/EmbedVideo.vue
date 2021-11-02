<script setup>
const props = defineProps({
    url: String
});

</script>

<style scoped>
.container {
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
    position: relative;
    margin-top: var(--);
}
.iframe {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
}
</style>

<template>
    <div class="container">
        <iframe
            class="iframe"
            :src="props.url"
            scrolling="no"
            border="0"
            frameborder="no"
            framespacing="0"
            allowfullscreen="true"
        ></iframe>
    </div>
</template>