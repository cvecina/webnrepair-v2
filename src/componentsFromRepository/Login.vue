<template>
  <div class="col-12 mvh100">
    <div class="col-12 text-center mb-3">
      <h1 v-if="showTitle">{{ title }}</h1>
    </div>
  </div>
  <div class="col-12 text-center poscenter mb-3">
    <div class="p-field" v-if="showEmail">
      <!-- <label for="email">{{ emailLabel }}</label> -->
      <InputText id="email" type="email" :placeholder="emailLabel" v-model="email" />
    </div>
    <br>
    <div class="p-field" v-if="showPassword">
      <!-- <label for="password">{{ passwordLabel }}</label> -->
      <InputText type="password" id="password" :placeholder="passwordLabel" v-model="password" />
    </div>
    <br>
    <div class="p-field" v-if="showButton">
      <Button @click="signIn()">{{ buttonLabel }}</Button>
    </div>
    <br>
    <div class="p-field" v-if="showResetPassword">
      <!-- <Button @click="resetPassword()">{{ labelResetButton }}</Button> -->
      <a href="#" class="button-link" @click.prevent="resetPassword">{{ labelResetButton }}</a>

    </div>
    <div class="p-field" v-if="showRegister">
      <a href="#" class="button-link" @click.prevent="register">{{ labelRegisterButton }}</a>
      <!-- <Button @click="register()">{{ labelRegisterButton }}</Button> -->
    </div>
  </div>
</template>
  <script setup>
import { ref } from "vue";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import returnSignIn from "../utils/returnSignIn.js";

const signIn = () => {
  const data = returnSignIn(email.value, password.value, options.value);
  if (data) {
    emit(data.header, data.data);
  }
};

const resetPassword = () => {
  emit("resetPassword");
};

const register = () => {
  emit("register");
};

const emit = defineEmits(["signIn", "errorLogin", "resetPassword", "register"]);
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "Sign In",
  },
  emailLabel: {
    type: String,
    required: false,
    default: "Email",
  },
  passwordLabel: {
    type: String,
    required: false,
    default: "Password",
  },
  confirmPasswordLabel: {
    type: String,
    required: false,
    default: "Confirm password",
  },
  buttonLabel: {
    type: String,
    required: true,
    default: "Sign In",
  },
  showButton: {
    type: Boolean,
    required: false,
    default: true,
  },
  showTitle: {
    type: Boolean,
    required: false,
    default: true,
  },
  showEmail: {
    type: Boolean,
    required: false,
    default: true,
  },
  showPassword: {
    type: Boolean,
    required: true,
    default: true,
  },
  showResetPassword: {
    type: Boolean,
    required: false,
    default: false,
  },
  showRegister: {
    type: Boolean,
    required: false,
    default: false,
  },
  labelRegisterButton: {
    type: String,
    required: false,
    default: "Register",
  },
  labelResetButton: {
    type: String,
    required: false,
    default: "Reset password",
  },
});

const email = ref("");
const password = ref("");
const options = ref({
  showEmail: props.showEmail,
  showPassword: props.showPassword,
});
</script>