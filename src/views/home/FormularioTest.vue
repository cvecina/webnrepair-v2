<template>
  <FormularioRepository
    :listaDeFormulario="listaDeFormulario"
    :datosEditar="datosEditar"
    :buttons="buttons"
    @save="enviar"
    @cancel="cancel"
  ></FormularioRepository>
</template>
<script setup>
import { FormularioRepository } from "@/componentsFromRepository";
import { useFormulario } from "@/composables/formulario";

const { datosEditar, enviar, cancel } = useFormulario();

// todo esto vendría de límites
let listaDeFormulario = [
  {
    campo: "name",
    tipo: "InputText",
    label: "Nombre",
    mandatory: true,
    type: "text",
  },
  {
    campo: "surname",
    tipo: "InputText",
    label: "Apellido",
    mandatory: true,
    type: "text",
  },
  {
    campo: "edad",
    tipo: "InputText",
    label: "Edad",
    mandatory: false,
    type: "number",
  },
  {
    campo: "email",
    tipo: "InputText",
    label: "Email",
    mandatory: false,
    type: "email",
  },
  // {
  //   campo: "fecha",
  //   tipo: "Calendar",
  //   label: "Fecha",
  // },
];

let buttons = [
  { class: "m-2", click: "save", label: "Save" },
  { class: "m-2", click: "cancel", label: "Cancel" },
];
</script>