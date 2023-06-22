<template>
  <!-- <Button @click="toggleDark()">Toggle Dark</Button> -->
  <InputSwitch v-model="isDark" />
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
import Button from "primevue/button";
import InputSwitch from 'primevue/inputswitch';
const isDark = useDark({
  selector: "body",
  valueDark: "dark",
  valueLight: "light",
});
const toggleDark = useToggle(isDark);
</script>

<style>
</style>