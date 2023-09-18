<script setup>
import { ref, watch, onMounted } from "vue";
import {
  DataTableRepository,
  FormularioRepository,
} from "@/componentsFromRepository";
import Dialog from "primevue/dialog";
import { usePedidosStore } from "@/stores";

const listaPedidos = ref([]);
const pedidosStore = usePedidosStore();
const camposTabla = ref([
  { campo: "fecha", label: "Fecha" },
  { campo: "cliente", label: "Cliente" },
  { campo: "estado", label: "Estado" },
  { campo: "precio", label: "Precio" },
  { campo: "descripcion", label: "Descripción" },
]);

const buttonsDataTable = ref([
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
  listaPedidos.value = [
    {
      id: 1,
      fecha: "2021-10-01",
      cliente: "Juan",
      estado: "pendiente",
      precio: 100,
      descripcion: "Reparar pantalla",
    },
    {
      id: 2,
      fecha: "2021-10-02",
      cliente: "Pedro",
      estado: "pendiente",
      precio: 200,
      descripcion: "Reparar pantalla",
    },
    {
      id: 3,
      fecha: "2021-10-03",
      cliente: "Maria",
      estado: "pendiente",
      precio: 300,
      descripcion: "Reparar pantalla",
    },
    {
      id: 4,
      fecha: "2021-10-04",
      cliente: "Ana",
      estado: "pendiente",
      precio: 400,
      descripcion: "Reparar pantalla",
    },
    {
      id: 5,
      fecha: "2021-10-05",
      cliente: "Luis",
      estado: "pendiente",
      precio: 500,
      descripcion: "Reparar pantalla",
    },
    {
      id: 6,
      fecha: "2021-10-06",
      cliente: "Juan",
      estado: "pendiente",
      precio: 600,
      descripcion: "Reparar pantalla",
    },
    {
      id: 7,
      fecha: "2021-10-07",
      cliente: "Pedro",
      estado: "pendiente",
      precio: 700,
      descripcion: "Reparar pantalla",
    },
    {
      id: 8,
      fecha: "2021-10-08",
      cliente: "Maria",
      estado: "pendiente",
      precio: 800,
      descripcion: "Reparar pantalla",
    },
    {
      id: 9,
      fecha: "2021-10-09",
      cliente: "Ana",
      estado: "pendiente",
      precio: 900,
      descripcion: "Reparar pantalla",
    },
    {
      id: 10,
      fecha: "2021-10-10",
      cliente: "Luis",
      estado: "pendiente",
      precio: 1000,
      descripcion: "Reparar pantalla",
    },
  ];
});

const showForm = ref(false);

const tipo = ref("");

const camposForm = ref([
  {
    campo: "fecha",
    tipo: "Calendar",
    label: "Fecha del pedido",
    type: "date",
  },
  { campo: "cliente", tipo: "InputText", label: "Cliente", type: "text" },
  { campo: "estado", tipo: "InputText", label: "Estado", type: "text" },
  { campo: "precio", tipo: "InputNumber", label: "Precio", type: "number" },
  {
    campo: "descripcion",
    tipo: "Textarea",
    label: "Descripción",
    type: "text",
  },
]);

const buttonsForm = ref([
  { class: "m-2", click: "save", label: "Guardar" },
  { class: "m-2", click: "cancel", label: "Cancelar" },
]);
</script>
<template>
  <DataTableRepository
    title="Pedidos"
    :showCreate="true"
    :camposTabla="camposTabla"
    :data="listaPedidos"
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
        createBoat = {};
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
        createBoat = {};
      "
    ></FormularioRepository>
  </Dialog>
</template>