<template>
    <h1 ref="root">绝望和希望之间的最佳桥梁，是一场良好的睡眠</h1>
</template>

<style>
body {
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}
h1 {
    --progress: 0;
    color: #fff;
    width: 50%;
    margin: 0 auto;
    font-size: 50px;
    font-family: Arial;
    background-image: linear-gradient(
        0deg,
        #42d392 calc(var(--progress) * 100%),
        #ffffff calc(var(--progress) * 100%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    transform: scale(clamp(1, calc((var(--progress) - 0.99) * 200), 1.3));
    transition: transform 300ms ease-in-out;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
const root = ref(null);

onMounted(() => {
    const el = root.value;
    let progress = 0;
    function run() {
        if (progress < 1) {
            progress += 0.01;
            el.style.setProperty("--progress", progress);
            setTimeout(run, 20);
        }
    }
    run();
})
</script>