<template>
  <div>
    <resetPasswordRepository
      :title="title"
      :showEmail="true"
      :showPassword="false"
      :showConfirmPassword="false"
      :emailLabel="placeholderEmail"
      @reset-password="resetPasswordEmit"
      @error="errorReset"
      :logo="logo"
    ></resetPasswordRepository>
  </div>
</template>

<script setup>
import { resetPasswordRepository } from "@/componentsFromRepository";
import { useResetPassword } from "@nhost/vue";
import { watchEffect } from "vue";
import { useAlertStore } from "@/stores";
const alertStore = useAlertStore();

const { resetPassword, isLoading, isSent, isError, error } = useResetPassword({
  // redirectTo: "http://127.0.0.1:5173/#/reset-password-form", //-> need redirect to
});

watchEffect(() => {
  if (isSent.value) {
    alertStore.success(
      "Revisa tu correo electrónico para restablecer tu contraseña."
    );
  }
  if (isError.value) {
    alertStore.error(error.value.message);
  }
  console.log(isLoading.value, isSent.value, isError.value, error.value);
});

const errorRegex = (data) => {
  alertStore.error(data.error);
  console.error(data);
  // all functionality
};

const logo =
  "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png";

const resetPasswordEmit = async (data) => {
  console.error("reset", data);
  await resetPassword(data.email);
};

const errorReset = (data) => {
  alertStore.error(data.error);
};
</script>

<style>
</style>