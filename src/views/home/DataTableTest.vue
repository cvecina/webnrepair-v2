<template>
  <DataTableRepository
    :data="dataTable"
    :showSearch="true"
    title="Varios"
    :camposTabla="camposTabla"
    :pagination="true"
    :counter="true"
    :buttons="buttons"
    @edit="edit"
    @remove="remove"
    @create="create"
  />
</template>
  <script setup lang="ts">
import { useDatatable } from "@/composables/datatable.js";
import { DataTableRepository } from "@/componentsFromRepository";

const llamada = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";
const listaFija = [
  { icon: "😀", value: "😀", id: 1 },
  { icon: "😁", value: "😁", id: 2 },
  { icon: "😂", value: "😂", id: 3 },
  { icon: "🤣", value: "🤣", id: 4 },
];
const res = "response.data.results";

const buttons = [
  {
    icon: "pi pi-pencil",
    class: "p-button-rounded p-button-success p-mr-2",
    click: "edit",
  },
  {
    icon: "pi pi-trash",
    class: "p-button-rounded p-button-warning p-mr-2",
    click: "remove",
  },
];

const camposTabla = [
  { campo: "icon", label: "icon" },
  { campo: "url", label: "url" },
];

// composable
const data = {
  listaFija: listaFija,
  // llamada: llamada,
  // res: res,
};

const { t, edit, remove, create, dataTable } = useDatatable(data);
</script>