<template>
  <loginRepository
    @sign-in="signIn"
    @error="errorLogin"
    :showResetPassword="false"
    :showRegister="false"
    @reset-password="resetPassword"
    ></loginRepository>
  </template>
    <!-- @register="register" -->

<script setup>
import { loginRepository } from "@/componentsFromRepository";
import { useLogin } from "@/composables/login";
const { signIn, register, errorLogin, isLoading, resetPassword } = useLogin();
</script>