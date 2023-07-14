<script>
const InputText = defineAsyncComponent(() => import("primevue/inputtext"));
const Dropdown = defineAsyncComponent(() => import("primevue/dropdown"));
const Checkbox = defineAsyncComponent(() => import("primevue/checkbox"));
const Calendar = defineAsyncComponent(() => import("primevue/calendar"));
const InputSwitch = defineAsyncComponent(() => import("primevue/inputswitch"));
const MultiSelect = defineAsyncComponent(() => import("primevue/multiselect"));
const Textarea = defineAsyncComponent(() => import("primevue/textarea"));
const InputNumber = defineAsyncComponent(() => import("primevue/inputnumber"));
// import InputText from "primevue/inputtext";
// import Dropdown from "primevue/dropdown";
// import Checkbox from "primevue/checkbox";
// import Calendar from "primevue/calendar";
// import InputSwitch from "primevue/inputswitch";
// import MultiSelect from 'primevue/multiselect';

export default {
  components: {
    InputText,
    Dropdown,
    Checkbox,
    Calendar,
    InputSwitch,
    MultiSelect,
    InputNumber,
    Textarea,
  },
};
</script>

<template>
  <!-- eslint-disable -->

  <Card
    style="max-width: 35em; background: rgb(232, 249, 250); margin-top: 5px"
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
      </div>
      <div
        v-if="showSubtitle"
        style="
          display: flex;
          align-items: center;
          padding-left: 15px;
          padding-right: 15px;
        "
      >
        <h4>{{ subtitle }}</h4>
      </div>
    </template>
    <template #content>
      <div class="col-12 mb-3">
        <div v-for="data in listaDeFormulario" :key="data">
          <!-- <div v-if="data.campo.includes('.')">
            {{ data.campo.split(".")[0] }}-----
            {{ data.campo.split(".")[1] }}
          </div> -->

          <div class="p-field">
            <label v-if="data?.labelExt" for="data.campo">{{
              data.labelExt
            }}</label>
            <br />
            <component
              v-if="data.tipo == 'Calendar'"
              :is="data.tipo"
              v-model="datosEditar[data.campo]"
              :style="data.style ? data.style : 'width: 25em'"
              class="m-2"
              :options="data.options"
              :optionLabel="optionLabel"
              touchUI="true"
              :optionValue="optionValue"
              :placeholder="data.label ? data.label : 'dd/mm/yy'"
              :type="data.type"
              :binary="true"
              dateFormat="dd/mm/yy"
              :value="time(datosEditar[data.campo])"
              @change="$emit('change', datosEditar)"
            >
              <!-- :value="data.value" -->
            </component>
            <!-- v-model="datosEditar[data.campo.split('.')[0]][data.campo.split('.')[1]]" -->
            <component
              v-else-if="data.campo.includes('.')"
              :is="data.tipo"
              v-model="
                datosEditar[data.campo.split('.')[0]][data.campo.split('.')[1]]
              "
              :style="data.style ? data.style : 'width: 25em'"
              :class="data.class"
              :placeholder="data.label ? data.label : '???'"
              :options="data.options"
              :optionLabel="optionLabel"
              :optionValue="optionValue"
              :type="data.type"
              :binary="true"
              autoResize
              rows="5"
              cols="30"
              @change="$emit('change', datosEditar)"
            >
            </component>
            <component
              v-else
              :is="data.tipo"
              v-model="datosEditar[data.campo]"
              :style="data.style ? data.style : 'width: 25em'"
              :class="data.class"
              :placeholder="data.label ? data.label : '???'"
              :options="data.options"
              :optionLabel="optionLabel"
              :optionValue="optionValue"
              :type="data.type"
              :binary="true"
              autoResize
              rows="5"
              cols="30"
              @change="$emit('change', datosEditar)"
            >
            </component>
            <i v-if="data?.mandatory" style="color: red">*</i>
          </div>
        </div>
      </div>
      <br />
      <div>
        <Button
          v-for="btn in props.buttons"
          :disabled="btn.disabled"
          :key="btn"
          :icon="btn.icon"
          :class="btn.class"
          @click="$emit(btn.click, datosEditar)"
        >
          {{ btn.label }}
        </Button>
      </div>
    </template>
  </Card>
</template>

<script setup>
/* eslint-disable */

import { time } from "@/filters/time.js";
import Button from "primevue/button";
import Card from "primevue/card";
import { defineAsyncComponent } from "vue";

import { useI18n } from "vue-i18n";
import { ref, watch } from "vue";

const { t } = useI18n();
const emit = defineEmits(["save", "cancel"]);

watch(
  () => props.datosEditar,
  (newValue) => {
    datosEditar.value = newValue;
  }
);

const props = defineProps({
  title: {
    type: String,
    default: "Formulario",
    required: false,
  },
  subtitle: {
    type: String,
    default: "counter",
    required: false,
  },
  optionLabel: {
    type: String,
    default: "label",
    required: false,
  },
  optionValue: {
    type: String,
    default: "value",
    required: false,
  },
  buttons: {
    type: Array,
    default: [],
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
  showSubtitle: {
    type: Boolean,
    default: false,
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

const save = () => {
  emit("save", datosEditar.value);
};

const cancel = () => {
  emit("cancel");
};
</script>