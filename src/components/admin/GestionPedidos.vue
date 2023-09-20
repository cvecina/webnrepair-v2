<script setup>
import { ref, watch, onMounted, computed } from "vue";
import {
  DataTableRepository,
  FormularioRepository,
} from "@/componentsFromRepository";
import Dialog from "primevue/dialog";
import { usePedidosStore, useClientesStore } from "@/stores";
import gql from "graphql-tag";
import { useSubscription } from "@vue/apollo-composable";
import Pedidos from "@/limits/Pedidos";

const pedidosStore = usePedidosStore();
const clientesStore = useClientesStore();

const camposTabla = ref(Pedidos().camposTabla);
const buttonsDataTable = ref(Pedidos().buttonsDataTable);
const camposForm = ref(Pedidos().camposForm);
const buttonsForm = ref(Pedidos().buttonsForm);
let clientesSubscription = gql(Pedidos().querys.getClientes);

const edit = (data) => {
  console.error("edit", data);
  tipo.value = "editar";
  showForm.value = true;
  pedidosStore.selected = data;
  pedidosStore.selected.cliente = pedidosStore.selected.id_cliente;
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

const { result: clientesResult } = useSubscription(clientesSubscription);
const getClientes = computed(() => {
  if (clientesResult.value) {
    clientesStore.setStore(clientesResult.value.clientes);
  }
  return clientesResult.value;
});

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
  watch(getClientes, () => {
    // dataBoats.value = newValue.boats;
  });
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