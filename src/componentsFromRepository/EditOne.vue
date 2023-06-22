<template>
  <div class="container" align="center">
    <Card class="m-4" style="background-color: aliceblue">
      <template #title> {{ cardTitle }} </template>
      <template #content>
        <div v-if="camposEditar">
          <div v-for="data in camposEditar" :key="data">
            <div class="p-field">
              <label :for="data">{{ data.campo }}</label>
              <br />
              <InputText
                v-if="data.tipo === 'InputText'"
                v-model="datosEditar[data.campo]"
              />
              <Calendar
                v-if="data.tipo === 'Calendar'"
                v-model="datosEditar[data.campo]"
              />
              <Dropdown
                v-if="data.tipo === 'lista'"
                v-model="datosEditar[data.campo]"
                :options="props.lista"
                optionLabel="label"
                optionValue="_id"
              />
              <Checkbox
                v-if="data.tipo === 'checkbox'"
                v-model="datosEditar[data.campo]"
                :binary="true"
              />
              <br />
            </div>
          </div>
          <Button class="mt-2 m-2" @click="enviarForm(datosEditar)">{{
            $t("Guardar")
          }}</Button>
          <Button class="mt-2 m-2" @click="cleanForm">{{
            $t("Reiniciar formulario")
          }}</Button>
          <Button class="mt-2 m-2" @click="cancel">{{
            $t("Volver al inicio")
          }}</Button>
        </div>
      </template>
    </Card>
  </div>
</template>
<script setup>
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";
import Dropdown from "primevue/dropdown";
import Checkbox from "primevue/checkbox";
import Button from "primevue/button";

// const datosEditar = ref({});

const props = defineProps({
  cardTitle: {
    type: String,
    required: true,
  },
  camposEditar: {
    type: Array,
    required: true,
  },

  lista: {
    type: Array,
    required: false,
  },
  datosEditar: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["enviarForm", "cleanForm", "cancel"]);

const enviarForm = (datosEditar) => {
  emit("enviarForm", datosEditar);
};

const cleanForm = () => {
  emit("cleanForm");
};

const cancel = () => {
  emit("cancel");
};
</script>