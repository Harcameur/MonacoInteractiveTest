<script setup lang="ts">
import { semanticStore } from '../stores/semanticStore';

const store  = semanticStore()
</script>
<template>
    <div>
        <h2>Sequence Preview</h2>
        <p id="sequenceList">
            {{ store.semanticContent }}
        </p>
    </div>
</template>

<style scoped>
#sequenceList{
    white-space: pre;
}
</style>