<template>
  <div class="col-12 mvh100">
    <div class="col-12 text-center mb-3">
      <h1 v-if="showTitle">{{ title }}</h1>
    </div>
  </div>
  <div class="col-12 text-center poscenter mb-3">
    <div class="p-field" v-if="showName">
      <!-- <label for="name">{{ nameLabel }}</label> -->
      <InputText
        id="name"
        type="name"
        :placeholder="nameLabel"
        v-model="name"
      />
    </div>
    <br />
    <div class="p-field" v-if="showEmail">
      <!-- <label for="email">{{ emailLabel }}</label> -->
      <InputText
        id="email"
        type="email"
        :placeholder="emailLabel"
        v-model="email"
      />
    </div>
    <br />
    <div class="p-field" v-if="showPassword">
      <!-- <label for="password">{{ passwordLabel }}</label> -->
      <InputText
        type="password"
        id="password"
        :placeholder="passwordLabel"
        v-model="password"
      />
    </div>
    <br />
    <div class="p-field" v-if="showConfirmPassword">
      <!-- <label for="confirmPassword">{{ confirmPasswordLabel }}</label> -->
      <InputText
        type="password"
        id="confirmPassword"
        :placeholder="confirmPasswordLabel"
        v-model="confirmPassword"
      />
    </div>
    <br />
    <div class="p-field" v-if="showButton">
      <Button @click="signUp()">{{ buttonLabel }}</Button>
    </div>
    <br />
    <div class="p-field" v-if="showLogin">
      <a href="#" class="button-link" @click.prevent="login">{{
        labelLoginButton
      }}</a>
    </div>
  </div>
</template>
      <script setup>
import { ref } from "vue";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import returnSignUp from "../utils/returnSignUp.js";

const signUp = () => {
  const data = returnSignUp(
    name.value,
    email.value,
    password.value,
    confirmPassword.value,
    props.regex,
    options.value
  );
  if (data) {
    emit(data.header, data.data);
  }
};

const login = () => {
  emit("login");
};

const emit = defineEmits(["signUp", "errorRegister", "login"]);
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "Sign Up",
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
    default: "Sign Up",
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
  showName: {
    type: Boolean,
    required: false,
    default: false,
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
  showConfirmPassword: {
    type: Boolean,
    required: false,
    default: false,
  },
  showResetPassword: {
    type: Boolean,
    required: false,
    default: false,
  },
  showLogin: {
    type: Boolean,
    required: false,
    default: false,
  },
  labelLoginButton: {
    type: String,
    required: false,
    default: "Login",
  },
  labelResetButton: {
    type: String,
    required: false,
    default: "Reset password",
  },
  nameLabel: {
    type: String,
    required: false,
    default: "Name",
  },
  regex: {
    type: String,
    required: false,
    default: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
  },
});

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const name = ref("");
const options = ref({
  showEmail: props.showEmail,
  showPassword: props.showPassword,
  showConfirmPassword: props.showConfirmPassword,
  showName: props.showName,
});
</script>