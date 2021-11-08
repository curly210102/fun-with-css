<template>
    <h1 :data-content="content">{{ content }}</h1>
</template>

<style>
body {
    font-family: arial;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background: #000;
}

h1 {
    content: attr(data-content);
    background-image: linear-gradient(
        90deg,
        hsla(339, 100%, 55%, 1) 0%,
        hsla(197, 100%, 64%, 1) 100%
    );
    -webkit-background-clip: text;
    color: transparent;
    clip-path: circle(1.5em at 0% center);
    -webkit-clip-path: circle(1.5em at 0% center);
    animation: spotlight 5s infinite;
}

@keyframes spotlight {
    0% {
        clip-path: circle(1.5em at 0% center);
        -webkit-clip-path: circle(1.5em at 0% center);
    }
    50% {
        clip-path: circle(1.5em at 100% center);
        -webkit-clip-path: circle(1.5em at 100% center);
    }
    100% {
        clip-path: circle(1.5em at 0% center);
        -webkit-clip-path: circle(1.5em at 0% center);
    }
}
</style>

<script setup>
const content = "要有信任别人的勇气";

</script>

