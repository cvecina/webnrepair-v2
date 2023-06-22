<template>
  <DashboardRepository
    title="Prueba"
    :showDataTable="true"
    :showCharts="true"
    :dataForTable="tableCache"
    :camposTabla="camposTabla"
    :showHeaderDataTable="true"
    :listaGraficos="listaGraficos"
    :listOfFilters="dataForChart"
    @filter="changeFilter"
    :setFilterName="getFilters"
  />
</template>

<script setup lang="ts">
import { DashboardRepository } from "@/componentsFromRepository";
import { useDashboard } from "@/composables/dashboard.js";

const llamada = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";
const res = "response.data.results";

const filterArray = ["name", "url"];
const camposTabla = [
  { campo: "name", label: "name" },
  { campo: "url", label: "url" },
  // { campo: "title", label: "Title" },
];

const data = {
  llamada: llamada,
  res: res,
  filterArray: filterArray,
  camposTabla: camposTabla,
};

const {
  alertStore,
  tableCache,
  listaGraficos,
  dataForChart,
  getFilters,
  changeFilter,
} = useDashboard(data);
</script>