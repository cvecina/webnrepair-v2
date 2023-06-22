<script lang="ts">
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Checkbox from "primevue/checkbox";

export default {
  components: {
    InputText,
    Dropdown,
    Checkbox,
  },
};
</script>
<template>
  <Card
    style="max-width: 35em; background: rgb(238, 225, 225); margin-top: 5px"
  >
    <template #header>
      <div
        v-if="showTitle"
        style="
          display: flex;
          align-items: center;
          padding-left: 15px;
          padding-right: 15px;
        "
      >
        <h1 style="flex-grow: 1">{{ title }}</h1>
        <!-- <Button style=" justify-content: center; align-items: center;">Editar</Button> -->
      </div>
    </template>
    <template #content>
      <div class="col-12 mb-3">
        <div v-for="data in listaDeFormulario" :key="data">
          <div class="p-field" v-if="data.mandatory == true">
            <component
              :is="data.tipo"
              :style="data.style ? data.style : 'width: 25em'"
              class="m-2"
              v-model="datosEditar[data.campo]"
              :placeholder="data.label ? data.label : '???'"
              :options="data.options"
              :type="data.type"
              :binary="true"
            ></component>
          </div>
        </div>

        <div class="p-field">
          <Accordion
            class="m-2"
            v-if="nonMandatoryFields().length"
            style="width: 25em"
          >
            <AccordionTab :header="notMandatoryHeader">
              <div v-for="data in listaDeFormulario" :key="data">
                <div v-if="data.mandatory == false">
                  <component
                    :is="data.tipo"
                    :style="data.style ? data.style : 'width: 20em'"
                    class="m-2"
                    v-model="datosEditar[data.campo]"
                    :placeholder="data.label ? data.label : '???'"
                    :options="data.options"
                    :type="data.type"
                    :binary="true"
                  ></component>
                </div>
              </div>
            </AccordionTab>
          </Accordion>
        </div>
      </div>
      <br />
      <Button @click="saveProfile()">{{ $t("Save") }}</Button>
      <Button v-if="showCancelButton" @click="cancel()" class="ml-3">{{
        $t("Cancel")
      }}</Button>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Button from "primevue/button";
// import Dropdown from "primevue/dropdown";
import Card from "primevue/card";
// import InputText from "primevue/inputtext";
import { useI18n } from "vue-i18n";
import { ref } from "vue";
const { t } = useI18n();
const emit = defineEmits(["saveProfile", "cancel"]);

const nonMandatoryFields = () => {
  return props.listaDeFormulario.filter((data) => data.mandatory == false);
};

const props = defineProps({
  title: {
    type: String,
    default: "Profile",
    required: false,
  },
  listaDeFormulario: {
    type: Array,
    default: [],
    required: false,
  },
  datosEditar: {
    type: Object,
    default: {},
    required: false,
  },
  notMandatoryHeader: {
    type: String,
    default: "Not mandatory",
    required: false,
  },
  showTitle: {
    type: Boolean,
    default: true,
    required: false,
  },
  showCancelButton: {
    type: Boolean,
    default: false,
    required: false,
  },
  showMandatory: {
    type: Boolean,
    default: true,
    required: false,
  },
  showNotMandatory: {
    type: Boolean,
    default: true,
    required: false,
  },
  disabledNotMandatory: {
    type: Boolean,
    default: false,
    required: false,
  },
  mandatoryComponents: {
    type: Array,
    default: [],
    required: false,
  },
  componentListNotMandatory: {
    type: Array,
    default: [],
    required: false,
  },
});

const datosEditar = ref(props.datosEditar);

const saveProfile = () => {
  emit("saveProfile", datosEditar.value);
};

const cancel = () => {
  emit("cancel");
};
</script>