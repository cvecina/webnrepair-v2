<script setup>
import {ref, watch, onMounted} from 'vue';
import { DataTableRepository } from "@/componentsFromRepository";


const listaPedidos = ref([]);

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
    console.error("edit", data);
};

const remove = (data) => {
    console.error("remove", data);
};

const create = () => {
    alert("holaaa")
};



onMounted(async () => {
    // make a fake list of pedidos
    listaPedidos.value = [
        {
            id: 1,
            fecha: '2021-10-01',
            cliente: 'Juan',
            estado: 'pendiente',
            precio: 100,
            descripcion: 'Reparar pantalla'
        },
        {
            id: 2,
            fecha: '2021-10-02',
            cliente: 'Pedro',
            estado: 'pendiente',
            precio: 200,
            descripcion: 'Reparar pantalla'
        },
        {
            id: 3,
            fecha: '2021-10-03',
            cliente: 'Maria',
            estado: 'pendiente',
            precio: 300,
            descripcion: 'Reparar pantalla'
        },
        {
            id: 4,
            fecha: '2021-10-04',
            cliente: 'Ana',
            estado: 'pendiente',
            precio: 400,
            descripcion: 'Reparar pantalla'
        },
        {
            id: 5,
            fecha: '2021-10-05',
            cliente: 'Luis',
            estado: 'pendiente',
            precio: 500,
            descripcion: 'Reparar pantalla'
        },
        {
            id: 6,
            fecha: '2021-10-06',
            cliente: 'Juan',
            estado: 'pendiente',
            precio: 600,
            descripcion: 'Reparar pantalla'
        },
        {
            id: 7,
            fecha: '2021-10-07',
            cliente: 'Pedro',
            estado: 'pendiente',
            precio: 700,
            descripcion: 'Reparar pantalla'
        },
        {
            id: 8,
            fecha: '2021-10-08',
            cliente: 'Maria',
            estado: 'pendiente',
            precio: 800,
            descripcion: 'Reparar pantalla'
        },
        {
            id: 9,
            fecha: '2021-10-09',
            cliente: 'Ana',
            estado: 'pendiente',
            precio: 900,
            descripcion: 'Reparar pantalla'
        },
        {
            id: 10,
            fecha: '2021-10-10',
            cliente: 'Luis',
            estado: 'pendiente',
            precio: 1000,
            descripcion: 'Reparar pantalla'
        },
    ];
});

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
</template>