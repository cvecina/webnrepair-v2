<template>
  <loginRepository
    @sign-in="signIn"
    @error="errorLogin"
    :showResetPassword="true"
    :showRegister="true"
    @register="register"
    @reset-password="resetPassword"
  ></loginRepository>
</template>

<script setup>
import { loginRepository } from "@/componentsFromRepository";
import { useLogin } from "@/composables/login";
const { signIn, register, errorLogin, isLoading, resetPassword } = useLogin();
</script>