<template>
    <h1 ref="elRef" :class="{ fadeIn: isInViewport }">只有开始相信自己，才能拥有真正的人生。</h1>
</template>

<style>
body {
    font-family: arial;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
}

h1 {
    background-image: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 33.33%,
        transparent 66.67%,
        transparent 100%
    );
    background-size: 300% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-position-x: 100%;
    transition: background-position-x 2s ease-in-out;
}

.fadeIn {
    background-position-x: 0%;
}
</style>

<script setup>
import { ref, onMounted } from "vue";

const elRef = ref(null);
const isInViewport = ref(false);
onMounted(() => {
    const el = elRef.value;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            isInViewport.value = e.intersectionRatio >= 1;
        })
    }, {
        threshold: 1
    })
    observer.observe(el);

    return () => {
        observer.unobserve(el);
    }
});
</script>

