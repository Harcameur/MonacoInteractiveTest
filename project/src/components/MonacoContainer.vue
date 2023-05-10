<script setup lang="ts">
import * as monaco from "monaco-editor";
import { onMounted } from "vue";
import { semanticStore } from '../stores/semanticStore';

const store  = semanticStore();

const legend = {
	tokenTypes: [
		"comment",
		"string",
		"keyword",
		"number",
		"regexp",
		"operator",
		"namespace",
		"type",
		"struct",
		"class",
		"interface",
		"enum",
		"typeParameter",
		"function",
		"member",
		"macro",
		"variable",
		"parameter",
		"property",
		"label",
	],
	tokenModifiers: [
		"declaration",
		"documentation",
		"readonly",
		"static",
		"abstract",
		"deprecated",
		"modification",
		"async",
	],
};

monaco.languages.registerDocumentSemanticTokensProvider("plaintext", {
	getLegend: function () {
		return legend;
	},
	provideDocumentSemanticTokens: function (model, lastResultId, token) {
		return store.monacoProvider;
	},
    releaseDocumentSemanticTokens: function (resultId) {},
});


const props = defineProps(['content'])
onMounted(() => {
    const comp = document.getElementById("EditorContainer");
    if(comp){
        console.log("init");
        const editor = monaco.editor.create(comp, {
            value: props.content? props.content : "",
            theme: "vs-dark",
            glyphMargin: true,
            "semanticHighlighting.enabled": true,
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