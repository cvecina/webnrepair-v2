<template>
  <InputText :placeholder="placeholder" v-model="searchQuery" />
</template>
<script setup>
import InputText from "primevue/inputtext";
import { ref, watch } from "vue";
const searchQuery = ref("");
const emit = defineEmits(["search"]);
const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
});
// emit the searchQuery value to the parent component
watch(
  () => searchQuery.value,
  (value) => {
    emit("search", value);
  }
);
</script>