<script setup>
import Alert from "@/components/Alert.vue";
import Menu from "@/components/Menu.vue";

import ConfirmDialog from "primevue/confirmdialog";
</script>

<template>
  <Menu />
  <ConfirmDialog class="m-4 ConfGreen">
    <template #message="slotProps">
      <div class="flex p-4">
        <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
        <p class="pl-2">{{ slotProps.message.message }}</p>
      </div>
    </template>
  </ConfirmDialog>
  <router-view></router-view>
  <Alert />
</template>