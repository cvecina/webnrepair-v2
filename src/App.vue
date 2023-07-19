<script setup>
import Alert from "@/components/Alert.vue";
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";

import ConfirmDialog from "primevue/confirmdialog";
import { useFavicon } from '@vueuse/core';

const icon = useFavicon()

icon.value = '/logoMini.png' // change current icon
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
  <Footer></Footer>
  <Alert />
</template>