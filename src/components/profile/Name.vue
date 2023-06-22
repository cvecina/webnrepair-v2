<template>
    <InputText style="width: 25em" placeholder="Name" v-model="value" />
</template>
<script setup>
import InputText from "primevue/inputtext";
import { ref } from "vue";
const value = ref("");
</script>