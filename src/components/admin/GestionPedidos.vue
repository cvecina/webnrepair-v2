<script setup>
import { ref, watch, onMounted, computed } from "vue";
import {
  DataTableRepository,
  FormularioRepository,
} from "@/componentsFromRepository";
import Dialog from "primevue/dialog";
import { usePedidosStore } from "@/stores";
import gql from "graphql-tag";
import { useSubscription } from "@vue/apollo-composable";
import Pedidos from "@/limits/Pedidos";

const pedidosStore = usePedidosStore();
const camposTabla = ref([
  // { campo: "fecha", label: "Fecha" },
  { campo: "titulo", label: "Título" },
  { campo: "descripcion", label: "Descripción" },
  { campo: "precio", label: "Precio" },
  { campo: "categoria", label: "Categoria" },
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
  pedidosStore.selected = data;
};

const remove = (data) => {
  console.error("remove", data);
};

const create = () => {
  tipo.value = "crear";
  showForm.value = true;
};

onMounted(async () => {
  // make a fake list of pedidos
});

const showForm = ref(false);

const tipo = ref("");

const camposForm = ref([
  // {
  //   campo: "fecha",
  //   tipo: "Calendar",
  //   label: "Fecha del pedido",
  //   type: "date",
  // },
  { campo: "categoria", tipo: "InputText", label: "Categoria", type: "text" },
  // { campo: "estado", tipo: "InputText", label: "Estado", type: "text" },
  { campo: "precio", tipo: "InputNumber", label: "Precio", type: "number" },
  {
    campo: "descripcion",
    tipo: "Textarea",
    label: "Descripción",
    type: "text",
  },
  { campo: "titulo", tipo: "InputText", label: "Titulo", type: "text" },
]);

const buttonsForm = ref([
  { class: "m-2", click: "save", label: "Guardar" },
  { class: "m-2", click: "cancel", label: "Cancelar" },
]);

const saveCreate = async (data) => {
  console.error("saveCreate", data);
  await pedidosStore.saveCreate(data);
  showForm.value = false;
  pedidosStore.new = {};
};

const saveEdit = async (data) => {
  console.error("saveEdit", data);
  await pedidosStore.saveEdit(data);
  showForm.value = false;
  pedidosStore.selected = {};
};

let subscription = gql(Pedidos().querys.principal);

const { result } = useSubscription(subscription);
const getPedidos = computed(() => {
  if (result.value) {
    pedidosStore.setStore(result.value.pedidos);
  }
  return result.value;
});

onMounted(async () => {
  watch(getPedidos, () => {
    // dataBoats.value = newValue.boats;
  });
});
</script>
<template>
  <DataTableRepository
    title="Pedidos"
    :showCreate="true"
    :camposTabla="camposTabla"
    :data="pedidosStore.dataFiltrados"
    :buttons="buttonsDataTable"
    @edit="edit"
    @remove="remove"
    @create="create"
  ></DataTableRepository>
  <Dialog v-model:visible="showForm" modal class="flex p-2 align-center">
    <FormularioRepository
      v-if="tipo === 'crear'"
      title="Crear pedido"
      :listaDeFormulario="camposForm"
      :buttons="buttonsForm"
      :datosEditar="pedidosStore.new"
      @save="saveCreate"
      @cancel="
        showForm = false;
        pedidosStore.new = {};
      "
    ></FormularioRepository>
    <FormularioRepository
      v-if="tipo === 'editar'"
      title="Editar pedido"
      :listaDeFormulario="camposForm"
      :buttons="buttonsForm"
      :datosEditar="pedidosStore.selected"
      @save="saveEdit"
      @cancel="
        showForm = false;
        pedidosStore.selected = {};
      "
    ></FormularioRepository>
  </Dialog>
</template>