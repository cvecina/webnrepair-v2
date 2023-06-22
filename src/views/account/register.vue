<template>
  <div>
    <registerRepository
      @sign-up="signUp"
      @error="errorRegister"
      @login="login"
      :showPassword="true"
      :showName="true"
      :showLogin="true"
      :showConfirmPassword="true"
      regex=""
    ></registerRepository>
  </div>
</template>

<script setup>
import { registerRepository } from "@/componentsFromRepository";
import { useRegister } from "@/composables/register";
const { signUp, login, errorRegister, isLoading  } = useRegister();
</script>