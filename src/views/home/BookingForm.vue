<template>
  <FormularioRepository
    :listaDeFormulario="camposForm"
    :buttons="buttons"
    @enviarBooking="enviarBooking"
  ></FormularioRepository>
  {{ bookingSystemStore.ticketCategoriesTemp }}
</template>
<script setup>
import { useRoute } from "vue-router";
import { useBookingSystemStore } from "@/stores";
import { onMounted, ref } from "vue";
import { Loader } from "@/components";
import { FormularioRepository } from "@/componentsFromRepository";
const bookingSystemStore = useBookingSystemStore();
const route = useRoute();

const camposForm = ref([
  {
    campo: "firstName",
    tipo: "InputText",
    label: "Nombre",
    mandatory: true,
    type: "text",
  },
  {
    campo: "lastName",
    tipo: "InputText",
    label: "Apellido",
    mandatory: true,
    type: "text",
  },
  {
    campo: "emailAddress",
    tipo: "InputText",
    label: "Email",
    mandatory: true,
    type: "email",
  },
  {
    campo: "phoneNumber",
    tipo: "InputText",
    label: "Teléfono",
    mandatory: true,
    type: "number",
  },
  {
    campo: "gender",
    tipo: "Dropdown",
    label: "Género",
    mandatory: true,
    options: [
      { label: "Masculino", value: "m" },
      { label: "Femenino", value: "f" },
    ],
  },
  {
    campo: "notes",
    tipo: "Textarea",
    label: "Notas",
    mandatory: false,
    type: "text",
  },
  {
    campo: "ticketCategories",
    tipo: "Dropdown",
    label: "Categoría de tickets",
    mandatory: true,
    optionLabel: "name",
    optioValue: "ticketCategoryId",
    options: bookingSystemStore.ticketCategoriesTemp,
  },
  {
    campo: "ticketCategories",
    tipo: "Dropdown",
    label: "Categoría de tickets",
    mandatory: true,
    optionLabel: "name",
    optioValue: "ticketCategoryId",
    options: bookingSystemStore.ticketCategoriesTemp,
  },
]);

let buttons = [
  { class: "m-2", click: "enviarBooking", label: "Save" },
  { class: "m-2", click: "cancelarBooking", label: "Cancel" },
];

// ticketCategories: bookingSystemStore.ticketCategoriesTemp,
const def = ref({
  supplierId: route.params.supplierId,
  activityId: route.params.activityId,
  optionId: route.params.optionId,
  localDate: route.params.localDate,
});

const enviarBooking = async (data) => {
    console.error("formulario", data);
  await bookingSystemStore.setBooking(
    def.value.supplierId,
    def.value.activityId,
    def.value.optionId,
    def.value.localDate,
    bookingSystemStore.ticketCategoriesTemp,
    data
  );
};
</script>