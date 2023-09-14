<template>
    <h1>Gestión de ratings</h1>
      <Loader v-if="loading" :loading="loading" />
    <DataTableRepository
    v-if="!loading"
      title="Ratings"
      :showCreate="false"
      :camposTabla="camposTabla"
      :data="opinionesStore.opiniones"
      :buttons="buttonsDataTable"
      @edit="edit"
      @remove="remove"
    ></DataTableRepository>
  </template>
  <script setup>
  import { DataTableRepository } from "@/componentsFromRepository";
  import { ref, computed, watch, onMounted } from "vue";
  import gql from "graphql-tag";
  import { useSubscription } from "@vue/apollo-composable";
  import { useOpinionesStore } from "@/stores";
  import {Loader} from "@/components"
  
  const opinionesStore = useOpinionesStore();
  
  const camposTabla = ref([
    { campo: "activo", label: "Activo" },
    {campo: "title", label: "Título"},
    { campo: "comentario", label: "Comentario" },
    { campo: "rating", label: "Rating" },
  ]);
  
  const edit = (data) => {
    console.error("edit", data);
    opinionesStore.setActivoInactivo(data.id, !data.activo)
  };
  
  const remove = (data) => {
    console.error("remove", data);
  };
  
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
  
  let subscription = gql`
    subscription MySubscription {
      opiniones {
        activo
        comentario
        title
        id
        rating
      }
    }
  `;
  
  const { result, loading } = useSubscription(subscription);
  const getOpiniones = computed(() => {
    if (result.value) {
      opinionesStore.setOpiniones(result.value.opiniones);
    }
  
    return result.value;
  });
  
  onMounted(async () => {
    watch(getOpiniones, (newValue) => {});
  });
  </script>