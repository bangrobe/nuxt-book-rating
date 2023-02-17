<template>
  <QuillEditor theme="" :content="`${content.slice(0,100)}...`" content-type="html" readOnly />
</template>

<script setup>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
const props = defineProps ({
    content: {
        type: String,
        required: true,
    }
})
</script>
<style>
.ql-editor {
    padding: 0;
    white-space: normal;
}
</style>
