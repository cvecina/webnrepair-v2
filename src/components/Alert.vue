<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAlertStore } from "@/stores";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import { watch } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const toast = useToast();
const alertStore = useAlertStore();

const { alert } = storeToRefs(alertStore);

watch(
  () => alert.value,
  (value) => {
    toast.add({
      severity: value.type,
      summary: t(value.message),
      life: value.time,
    });
  }
);
</script>

<template>
  <Toast position="center"></Toast>

</template>