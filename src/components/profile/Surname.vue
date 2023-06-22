<template>
    <InputText style="width: 20em" placeholder="Surname" v-model="value" />
</template>
<script setup>
import InputText from "primevue/inputtext";
import { ref } from "vue";
const value = ref("");
</script>