<script setup lang="ts">
import * as monaco from "monaco-editor";
import { onMounted } from "vue";
const props = defineProps(['content'])
onMounted(() => {
    const comp = document.getElementById("EditorContainer");
    if(comp){
        console.log("init");
        const editor = monaco.editor.create(comp, {
            value: props.content? props.content : "",
            theme: "vs-dark",
            glyphMargin: true,
    });
}
})



</script>

<template>
        <h1>Editor Renderning</h1><br>
        <div id="EditorContainer">
            <!-- editor div -->
        </div>
</template>

<style scoped>
#EditorContainer{
    width: 500px;
    height: 300px;
}
</style>