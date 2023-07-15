<template>
  <SectionHome
    title="Pruebas"
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur provident mollitia ducimus ratione fuga veritatis repellat hic ad repudiandae quia."
    image="https://img.freepik.com/vector-gratis/fondo-neon-placa-circuito_23-2148335792.jpg"
    :button="true"
    buttonLabel="Contacta con nosotros"
  />

  <Reviews></Reviews>
</template>
<script setup lang="ts">
import { SectionHome, Reviews } from "@/components";
</script>