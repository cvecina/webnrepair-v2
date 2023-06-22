<template>
  <div v-if="loading"><Loader :loading="loading"></Loader></div>
  {{ bookingSystemStore?.bookingList }}
  <div v-if="!loading">
    <Dialog
      v-model:visible="selected"
      modal
      header="Selected table"
      :style="{ width: '50vw' }"
    >
      <DataTableRepository
        :data="bookingSystemStore?.availabilityList.data"
        :camposTabla="camposTabla"
        :buttons="buttonsTable"
        @reservar="reservarActividad"
        :showCreate="false"
      ></DataTableRepository>
    </Dialog>

    <CardListRepository
      :data="bookingSystemStore?.activityListParsed"
      :buttons="buttons"
      @onShowAvailability="onShowAvailability"
    ></CardListRepository>
    <!-- :data="bookingSystemStore.activities" -->
  </div>
  <Button @click="cancelarBooking('boo_fec5eef1-29b1-4dc8-be09-48f674ba2764')">Cancel</Button>
</template>
<script setup>
import {
  CardListRepository,
  DataTableRepository,
} from "@/componentsFromRepository";
import { onMounted, ref } from "vue";
import { useBookingSystemStore } from "@/stores";
import { Loader } from "@/components";
import Dialog from "primevue/dialog";
import { useRouter } from "vue-router";
import Button from "primevue/button";
const router = useRouter();
const loading = ref(false);

const buttons = [
  {
    label: "Ver disponibilidad",
    icon: "pi pi-calendar-plus",
    class: "p-button-success",
    click: "onShowAvailability",
  },
];

const cancelarBooking = async (bookingId) => {
  loading.value = true;
  await bookingSystemStore.cancelBooking(bookingId);
  loading.value = false;
};

const camposTabla = ref([
  // {campo: "activityId", label: "ID"},
  { campo: "localDate", label: "Fecha" },
  { campo: "localTime", label: "Hora" },
  { campo: "maximumCapacity", label: "Capacidad máxima" },
  { campo: "availableCapacity", label: "Capacidad disponible" },
]);

const buttonsTable = [
  {
    label: "Reservar",
    icon: "pi pi-calendar-plus",
    class: "p-button-success",
    click: "reservar",
  },
];

const reservarActividad = async (data) => {
  router.push(
    "setBooking/" +
      data.supplierId +
      "/" +
      data.activityId +
      "/" +
      data.optionId +
      "/" +
      data.localDate
  );
  bookingSystemStore.ticketCategoriesTemp = data.ticketCategories;
  // await bookingSystemStore.setBooking(data.supplierId, data.activityId, data.optionId, data.localDate, data.ticketCategories);
};

const selected = ref(false);
const datosParaTabla = ref();
const onShowAvailability = async (indexCard) => {
  loading.value = true;
  let datosCarta = bookingSystemStore.activityList.data[indexCard];
  const supplierId = datosCarta.supplierId;
  const activityId = datosCarta.activityId;
  await bookingSystemStore.getAvailability(supplierId, activityId);
  selected.value = true;
  console.error("onShowAvailability", datosCarta);
  loading.value = false;
};

const bookingSystemStore = useBookingSystemStore();

const camposHijo = ref({
  titulo: "x",
});

onMounted(async () => {
  loading.value = true;
  // let publicKey = import.meta.env.VITE_EXPERIENCE_PUBLIC_KEY;
  // let secretKey = import.meta.env.VITE_EXPERIENCE_SECRET_KEY;

  await bookingSystemStore.getActivityList();
  await bookingSystemStore.getSupplierList();
  await bookingSystemStore.getBooking();
  loading.value = false;
});
</script>