<template>
  <EditOne
    @enviar-form="enviarForm"
    @cancel="cancel"
    @clean-form="cleanForm"
    cardTitle="Editar nsque"
    :camposEditar="camposEditar"
    :datosEditar="datosEditar"
  ></EditOne>
</template>

<script setup>
import EditOne from "@/componentsFromRepository/EditOne.vue";
import { Test } from "./Test";
import { ref } from "vue";
import { useAlertStore } from "@/stores";
const alertStore = useAlertStore();
const camposEditar = Test("sys").camposPrincipales;
const datosEditar = ref({});
const cleanForm = () => {
  datosEditar.value = {};
  alertStore.success("Formulario limpio");
};
const cancel = () => {
  window.history.back();
};

const enviarForm = () => {
    alertStore.success("Editado correctamente");
  console.error("datosEditar", datosEditar.value);
  //   consulta a bbdd
};
</script>

<style>
</style>