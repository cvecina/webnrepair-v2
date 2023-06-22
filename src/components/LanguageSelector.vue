<template>
  <span
    class="p-3 mr-2 cencen"
    :class="languageStore.language.class"
    @click="activateDialog()"
  ></span>
  <Dialog
    v-model:visible="visibleDialog"
    :closable="true"
    :modal="true"
    :dismissableMask="true"
  >
    <SelectButton
      v-model="languageStore.language.code"
      :options="languages"
      optionLabel="icon"
      optionValue="code"
    >
      <template #option="slotProps">
        <div>
          <span
            class="p-4 m-4"
            :class="slotProps.option.class"
            @click="selectLanguage(slotProps.option)"
          >
          </span>
        </div>
      </template>
    </SelectButton>
  </Dialog>
</template>

<script setup>
import SelectButton from "primevue/selectbutton";
import Dialog from "primevue/dialog";
import { useI18n } from "vue-i18n";
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useLanguageStore } from "@/stores";
const languageStore = useLanguageStore();
const { languages } = storeToRefs(languageStore);
onMounted(async () => {
  const { locale } = useI18n();
  languageStore.setLanguage(locale.value);
});
const activateDialog = () => {
  visibleDialog.value = true;
};
const selectLanguage = (value) => {
  languageStore.setLanguage(value.code);
  visibleDialog.value = false;
};
const visibleDialog = ref(false);
</script>

<style scoped src="@/assets/css/flag-icon.css"></style>
