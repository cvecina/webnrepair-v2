<script setup>
/* eslint-disable */

import DataTable from "primevue/datatable";
import { selectContent } from "@/utils/selectContent";
import Column from "primevue/column";
import Dropdown from "primevue/dropdown";
import { ref, watch } from "vue";
import InputText from "primevue/inputtext";
import { FilterMatchMode, FilterOperator } from "primevue/api";
import Button from "primevue/button";
import { useAlertStore } from "@/stores";
const alertStore = useAlertStore();
const contador = ref(0);
const totalFiltrado = (event) => {
  contador.value = event.filteredValue.length;
};

watch(
  () => props.data,
  (value) => {
    contador.value = value.length;
  }
);

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
  },
});

const limite = ref(props.limite);

const emit = defineEmits(["limite"]);

watch(
  () => limite.value,
  (value) => {
    if (value == "All") {
      value = 1000000;
    }
    emit("limites", value);
  }
);
if (!props.showDropdownLimites) {
  limite.value = 1000000;
}

const copiarCarteras = async () => {
  await selectContent("tablaDefault", true);
  alertStore.success("Copiado al portapapeles");
};

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  showSearch: {
    type: Boolean,
    required: false,
    default: true,
  },
  title: {
    type: String,
    required: false,
    default: "Title",
  },
  camposTabla: {
    type: Array,
    required: true,
  },
  showPagination: {
    type: Boolean,
    required: false,
    default: true,
  },
  showCounter: {
    type: Boolean,
    required: false,
    default: true,
  },
  buttons: {
    type: Array,
    required: false,
    default: false,
  },
  showCreate: {
    type: Boolean,
    required: false,
    default: true,
  },
  showHeader: {
    type: Boolean,
    required: false,
    default: true,
  },
  showTitle: {
    type: Boolean,
    required: false,
    default: true,
  },
  limite: {
    type: Number,
    required: false,
    default: 100,
  },
  showDropdownLimites: {
    type: Boolean,
    required: false,
    default: false,
  },
  showCopyButton: {
    type: Boolean,
    required: false,
    default: false,
  },
  optionsLimites: {
    type: Array,
    required: false,
    default: () => [10, 20, 50, 100],
  },
});
</script>

<template>
  <div class="card">
    <!-- create one button -->
    <Button
      v-if="showCreate"
      @click="$emit('create')"
      icon="pi pi-plus"
      class="p-button-rounded p-button-success p-mr-2"
    />
    <DataTable
      v-model:filters="filters"
      @filter="totalFiltrado"
      :paginator="showPagination"
      :rows="10"
      :value="data"
      tableStyle="min-width: 50rem"
      id="tablaDefault"
    >
      <template #header v-if="showHeader">
        <div class="grid formgrid p-fluid">
          <h1 v-if="showTitle" class="field mb-12 col-12 md:col-6 sm:col-3">
            {{ title }}
          </h1>
          <h3 v-if="showCounter" class="field mb-12 col-12 md:col-3 sm:col-3">
            {{ contador }}
          </h3>
          <div v-if="showSearch" class="field mb-12 col-12 md:col-3 sm:col-3">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
                v-model="filters['global'].value"
                :placeholder="Filtrar"
              />
            </span>
          </div>
          <Dropdown
            v-if="props.showDropdownLimites"
            v-model="limite"
            :options="props.optionsLimites"
          ></Dropdown>
        </div>
        <Button v-if="showCopyButton" @click="copiarCarteras"
          >Copiar tabla</Button
        >
      </template>
      <Column
        v-for="itemx in camposTabla"
        :field="itemx?.campo"
        :header="$t(itemx?.label)"
        :key="itemx?.campo"
      >
        <template #body="slotProps" v-if="itemx.tipo == 'Boolean'">
          <span v-if="slotProps.data[itemx.campo] == true">Si</span>
          <span v-else>No</span>
        </template>
      </Column>
      <Column v-if="props.buttons" field="actions" :header="Acciones">
        <template #body="slotProps">
          <Button
            v-for="btn in props.buttons"
            :key="btn"
            :icon="btn.icon"
            :class="btn.class"
            @click="$emit(btn.click, slotProps.data)"
          >
          </Button>
        </template>
      </Column>
    </DataTable>
  </div>
</template>