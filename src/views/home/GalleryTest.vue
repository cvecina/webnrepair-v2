<template>
  <GalleryRepository
    :llamada="llamada"
    :showNav="false"
    :showBigDisplay="true"
  ></GalleryRepository>
</template>
<script setup>
import { GalleryRepository } from "@/componentsFromRepository";
const llamada = "https://jsonplaceholder.typicode.com/photos";
</script>