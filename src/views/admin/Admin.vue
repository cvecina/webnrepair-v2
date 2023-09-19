<template>
  <h1>Administración WebnRepair</h1>
  <TabView>
    <TabPanel header="Pedidos">
      <GestionPedidos></GestionPedidos>
    </TabPanel>
    <TabPanel header="Clientes">
      <Clientes></Clientes>
    </TabPanel>
    <TabPanel header="Ratings">
     <GestionRatings></GestionRatings>
    </TabPanel>
    <TabPanel header="Incidencias">
      <GestionIncidencias></GestionIncidencias>
    </TabPanel>
  </TabView>
  <!-- <GestionRatings></GestionRatings> -->
</template>
<script setup>
import { useTitle } from '@vueuse/core'
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import { GestionPedidos, GestionIncidencias, GestionRatings, Clientes } from "@/components";
const title = useTitle()

title.value = "Admin - Web & Repair"
</script>