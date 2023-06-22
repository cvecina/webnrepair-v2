<script setup>
import { ref } from "vue";
import { defineProps } from "vue";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import returnResetPassword from "../utils/returnResetPasword.js";

// import { bindExpression } from "@babel/types";
const email = ref("");
const password = ref("");
const password2 = ref("");
const options = ref({
  showEmail: props.showEmail,
  showConfirmPassword: props.showConfirmPassword,
  regex: props.regex,
});
console.error(options.value);
const returnResetPassword2 = () => {
  const dato = returnResetPassword(
    email.value,
    password.value,
    password2.value,
    options.value
  );
  if (dato) {
    console.error(dato);
    emit(dato.header, dato.data);
  }
};

const emit = defineEmits(["resetPassword", "error"]);

const props = defineProps({
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
    required: false,
    default: true,
  },
  showConfirmPassword: {
    type: Boolean,
    required: false,
    default: true,
  },
  title: {
    type: String,
    required: false,
    default: "Reset Password",
  },
  emailLabel: {
    type: String,
    required: false,
    // default: "Email",
  },
  emailPlaceholder: {
    type: String,
    required: false,
    default: "Email",
  },
  passwordLabel: {
    type: String,
    required: false,
    // default: "Password",
  },
  placeholderPassword: {
    type: String,
    required: false,
    default: "Password",
  },
  confirmPasswordLabel: {
    type: String,
    required: false,
    // default: "Confirm Password",
  },
  placeholderConfirmPassword: {
    type: String,
    required: false,
    default: "Confirm Password",
  },
  buttonLabel: {
    type: String,
    required: false,
    default: "Reset Password",
  },
  logo: {
    type: String,
    required: false,
    default: "",
  },
  regex: {
    type: String,
    required: false,
    default: "",
  },
});
</script>
<template>
  <div class="col-12 mvh100">
    <div class="col-12 text-center mb-3">
      <div v-if="logo != ''">
        <a href="/">
          <img class="" style="width: 80px" :src="logo" alt="logo" />
        </a>
      </div>
    </div>
    <div class="col-12 mvh100">
      <div class="col-12 text-center mb-3">
        <div v-if="showTitle" class="clamp-font-h2">
          <h2>{{ title }}</h2>
        </div>
      </div>
    </div>
    <div class="col-12 text-center poscenter mb-3">
      <div v-if="showEmail">
        <label for="email">{{ emailLabel }}</label>
        <InputText
          data-testid="email-input"
          type="email"
          id="email"
          :placeholder="emailPlaceholder"
          v-model="email"
        />
      </div>
      <br />

      <div v-if="showPassword">
        <label for="password">{{ passwordLabel }}</label>
        <InputText
          type="password"
          id="password"
          data-testid="password-input"
          :placeholder="placeholderPassword"
          v-model="password"
        />
      </div>
      <br />

      <div v-if="showConfirmPassword">
        <label for="password2">{{ confirmPasswordLabel }}</label>
        <InputText
          type="password"
          data-testid="confirm-password-input"
          id="password2"
          :placeholder="placeholderConfirmPassword"
          v-model="password2"
        />
      </div>
      <br />

      <div v-if="showButton">
        <Button
          type="submit"
          data-testid="reset-password-button"
          @click="returnResetPassword2()"
          >{{ buttonLabel }}</Button
        >
      </div>
    </div>
  </div>
</template>