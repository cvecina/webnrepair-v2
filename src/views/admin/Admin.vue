<template>
  <h1>Administración WebnRepair</h1>
  <TabView>
    <TabPanel header="Pedidos">
      <GestionPedidos></GestionPedidos>
    </TabPanel>
    <TabPanel header="Ratings">
     <GestionRatings></GestionRatings>
    </TabPanel>
    <TabPanel header="Header III">
    ya veremos
    </TabPanel>
  </TabView>
  <!-- <GestionRatings></GestionRatings> -->
</template>
<script setup>
import { useTitle } from '@vueuse/core'
import GestionRatings from "../../components/admin/GestionRatings.vue";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import { GestionPedidos } from "@/components";
const title = useTitle()

title.value = "Admin - Web & Repair"
</script>