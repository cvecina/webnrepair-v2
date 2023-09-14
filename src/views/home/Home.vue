<template>
  <SectionHome
    title="¿Quiénes somos?"
    description="Somos un grupo de técnicos y desarrolladores apasionados por el Hardware, Diseño/Desarrollo Web y las nuevas tecnologías. WebnRepair nace
    con la finalidad de ofrecer nuestro conocimiento y experiencia en estas áreas a modo de servicio, ofreciendo soluciones innovadoras y de calidad.
"
    image="https://img.freepik.com/vector-gratis/fondo-neon-placa-circuito_23-2148335792.jpg"
    :button="true"
    buttonLabel="Contacta con nosotros"
  />
  <SectionAbout></SectionAbout>
  <!-- <Reviews :reviews="opinionesStore.opiniones"></Reviews> --> <!-- Comentado checkear!!!! -->
</template>
<script setup lang="ts">
import { SectionHome, SectionAbout, Reviews } from "@/components";
import { useOpinionesStore } from "@/stores";
import { ref, computed, watch, onMounted } from "vue";
import gql from "graphql-tag";
import { useSubscription } from "@vue/apollo-composable";
import { useTitle } from '@vueuse/core'

const title = useTitle()

title.value = "Inicio - Web & Repair"

const opinionesStore = useOpinionesStore();

let subscription = gql`
  subscription MySubscription {
    opiniones {
      title
      comentario
      id
      rating
    }
  }
`;

const { result, loading } = useSubscription(subscription);
const getOpiniones = computed(() => {
  if (result.value) {
    opinionesStore.setOpiniones(result.value.opiniones);
  }

  return result.value;
});

onMounted(async () => {
  watch(getOpiniones, (newValue) => {});
});
</script>