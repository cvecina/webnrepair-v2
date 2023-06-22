<template>
  <div v-if="showCharts" class="card flex justify-content-center">
    <div v-for="knob in listaGraficos" :key="knob.title">
      <h3>{{ knob.title }}</h3>
      <Knob readonly v-model="knob.value" :color="knob.color" />
    </div>
  </div>
  <div class="card flex justify-content-center">
    <div v-for="drop in listaGraficos" :key="drop">
      <Dropdown
        v-if="showCharts"
        :options="setFilterName(drop.title)"
        optionLabel="option"
        @change="changeFilter"
      />
    </div>
  </div>

  <DataTableRepository
    v-if="showDataTable"
    :showCreate="false"
    :data="dataForTable"
    :camposTabla="camposTabla"
    :showTitle="showTitleDataTable"
    :showCounter="showCounterDataTable"
    :showHeader="showHeaderDataTable"
    :showSearch="showSearchDataTable"
    :showPagination="showPaginationDataTable"
  />
</template>

<script setup lang="ts">
import Knob from "primevue/knob";
import { DataTableRepository } from "@/componentsFromRepository";
import Dropdown from "primevue/dropdown";

const emit = defineEmits(["filter"]);

const changeFilter = (e) => {
  emit("filter", e.value);
};

const props = defineProps({
  setFilterName: {
    type: Function,
    required: false,
  },
  title: {
    type: String,
    default: "Dashboard",
  },
  showDataTable: {
    type: Boolean,
    default: true,
  },
  showTitleDataTable: {
    type: Boolean,
    default: true,
    required: false,
  },
  showCounterDataTable: {
    type: Boolean,
    default: true,
    required: false,
  },
  showHeaderDataTable: {
    type: Boolean,
    default: true,
    required: false,
  },
  showSearchDataTable: {
    type: Boolean,
    default: true,
    required: false,
  },
  showPaginationDataTable: {
    type: Boolean,
    default: true,
    required: false,
  },
  showCharts: {
    type: Boolean,
    default: true,
  },
  dataForTable: {
    type: Array,
    required: false,
  },
  camposTabla: {
    type: Array,
    required: false,
  },
  listaGraficos: {
    type: Array,
    required: false,
  },
  listOfFilters: {
    type: Array,
    required: false,
  },
});
</script>