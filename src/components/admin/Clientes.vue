<script setup>
import { ref, watch, onMounted, computed } from "vue";
import {
  DataTableRepository,
  FormularioRepository,
} from "@/componentsFromRepository";
import Dialog from "primevue/dialog";
import { useClientesStore } from "@/stores";
import gql from "graphql-tag";
import { useSubscription } from "@vue/apollo-composable";
import Clientes from "@/limits/Clientes";

const listaClientes = ref([]);
const clientesStore = useClientesStore();
const camposTabla = ref([
  // { campo: "fecha", label: "Fecha" },
  { campo: "nombre", label: "Nombre" },
  { campo: "contacto", label: "contacto" },
]);

const buttonsDataTable = ref([
  {
    icon: "pi pi-pencil",
    class: "p-button-rounded p-button-success p-mr-2",
    click: "edit",
  },
  // {
  //   icon: "pi pi-trash",
  //   class: "p-button-rounded p-button-warning p-mr-2",
  //   click: "remove",
  // },
]);

const edit = (data) => {
  tipo.value = "editar";
  showForm.value = true;
  clientesStore.selected = data;
};

const remove = (data) => {
  console.error("remove", data);
};

const create = () => {
  tipo.value = "crear";
  showForm.value = true;
};

onMounted(async () => {
  // make a fake list of clientes
});

const showForm = ref(false);

const tipo = ref("");

const camposForm = ref([
  { campo: "nombre", tipo: "InputText", label: "Nombre", type: "text" },
  {campo: "tel", tipo: "InputText", label: "Tel", type: "text"},
  {campo: "email", tipo: "InputText", label: "Email", type: "text"},
]);

const buttonsForm = ref([
  { class: "m-2", click: "save", label: "Guardar" },
  { class: "m-2", click: "cancel", label: "Cancelar" },
]);

const saveCreate = async (data) => {
  console.error("saveCreate", data);
  await clientesStore.saveCreate(data);
  showForm.value = false;
  clientesStore.new = {};
};

const saveEdit = async (data) => {
  console.error("saveEdit", data);
  await clientesStore.saveEdit(data);
  showForm.value = false;
  clientesStore.selected = {};
};

let subscription = gql(Clientes().querys.principal);

const { result } = useSubscription(subscription);
const getClientes = computed(() => {
  if (result.value) {
    clientesStore.setStore(result.value.clientes);
  }
  return result.value;
});

onMounted(async () => {
  watch(getClientes, () => {
    // dataBoats.value = newValue.boats;
  });
});
</script>
<template>
  <DataTableRepository
    title="Clientes"
    :showCreate="true"
    :camposTabla="camposTabla"
    :data="clientesStore.dataFiltrados"
    :buttons="buttonsDataTable"
    @edit="edit"
    @remove="remove"
    @create="create"
  ></DataTableRepository>
  <Dialog v-model:visible="showForm" modal class="flex p-2 align-center">
    <FormularioRepository
      v-if="tipo === 'crear'"
      title="Crear cliente"
      :listaDeFormulario="camposForm"
      :buttons="buttonsForm"
      :datosEditar="clientesStore.new"
      @save="saveCreate"
      @cancel="
        showForm = false;
        clientesStore.new = {};
      "
    ></FormularioRepository>
    <FormularioRepository
      v-if="tipo === 'editar'"
      title="Editar cliente"
      :listaDeFormulario="camposForm"
      :buttons="buttonsForm"
      :datosEditar="clientesStore.selected"
      @save="saveEdit"
      @cancel="
        showForm = false;
        clientesStore.selected = {};
      "
    ></FormularioRepository>
  </Dialog>
</template>