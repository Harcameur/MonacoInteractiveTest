<script setup lang="ts">
import { semanticStore } from '../stores/semanticStore';

const store  = semanticStore();
</script>
<template>
    <h2>Insert the json</h2>
    <textarea 
        id="txt"
        v-model="store.semanticContent">
    </textarea>
</template>

<style scoped>
    #txt{
        height: 200px;
        width: 500px;
    }
</style>


