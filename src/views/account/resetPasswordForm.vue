<template>
  <div>
    <resetPasswordRepository
      :title="title"
      :showEmail="false"
      :showPassword="true"
      :showConfirmPassword="false"
      :emailLabel="placeholderEmail"
      @reset-password="resetPasswordEmit"
      @error="errorReset"
      regex=""
      :logo="logo"
    ></resetPasswordRepository>
  </div>
  <!-- regex="" -->
</template>
  
  <script setup>
import { resetPasswordRepository } from "@/componentsFromRepository";
import { useChangePassword } from "@nhost/vue";
import { watchEffect } from "vue";
import { useAlertStore } from "@/stores";
const alertStore = useAlertStore();

const { changePassword, isLoading, isSuccess, isError, error } =
  useChangePassword();

watchEffect(() => {
  if (isSuccess.value) {
    alertStore.success("Contraseña cambiada correctamente.");
    // se podría hacer signOut o redirigir a inicio
  }
  if (isError.value) {
    alertStore.error(error.value.message);
  }
  console.error(isLoading.value, isSuccess.value, isError.value, error.value);
});

const errorRegex = (data) => {
  alertStore.error(data.error);
  console.error(data);
  // all functionality
};

const logo =
  "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png";

const resetPasswordEmit = async (data) => {
  await changePassword(data.password);
};

const errorReset = (data) => {
  alertStore.error(data.error);
};
</script>
  
  <style>
</style>