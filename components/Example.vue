
<script setup>
import { usePageData } from '@vuepress/client'
import { Repl, ReplStore } from '@vue/repl'
import '@vue/repl/style.css'

const props = defineProps({
  id: String
})

const page = usePageData();

const store = new ReplStore({});

const example = page.value.examples[props.id];

store.setFiles(example.files, example.main);

</script>

<style lang="scss">
.vue-repl {
  height: 80vh;
}
.vue-repl {
  .split-pane {
    flex-direction: column-reverse;

    .left,
    .right {
      flex: 1;
      width: 100% !important;
      overflow: hidden;
    }
    .iframe-container > div {
      height: 100%;
    }
  }
}
</style>

<template>
  <Repl :store="store" :showCompileOutput="false" :showImportMap="false" :autoResize="false" />
</template>