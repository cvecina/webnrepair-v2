<template>
  <div v-if="loading"><Loader :loading="loading"></Loader></div>
  <div v-if="!loading">
    <!-- {{ bookingSystemStore?.activityList.data }} -->

    <!-- <div
      style="border: 5px solid red"
      v-for="activity in bookingSystemStore?.activityList.data"
      :key="activity"
    >
      <br />
      <h1>{{ activity.title }}</h1>
      <br />
      {{ activity.description }}
      <br>
      {{ activity.media }}
      <br>
      {{ activity.activityId }}
      <br />
    </div> -->


    <CardListRepository
      :data="bookingSystemStore?.supplierListParsed"
      ></CardListRepository>
      <!-- :data="bookingSystemStore.activities" -->
  </div>
</template>
<script setup>
import { CardListRepository } from "@/componentsFromRepository";
import { onMounted, ref } from "vue";
import { useBookingSystemStore } from "@/stores";
import { Loader } from "@/components";

const loading = ref(false);

const bookingSystemStore = useBookingSystemStore();

const camposHijo = ref({
  titulo: "x",
});



onMounted(async () => {
  loading.value = true;
  let publicKey = import.meta.env.VITE_EXPERIENCE_PUBLIC_KEY;
  let secretKey = import.meta.env.VITE_EXPERIENCE_SECRET_KEY;

  await bookingSystemStore.getActivityList();
  await bookingSystemStore.getSupplierList();
  loading.value = false;
});
</script>