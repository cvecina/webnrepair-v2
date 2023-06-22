<script setup>
import Menubar from "primevue/menubar";
import LanguageSelector from "@/components/LanguageSelector.vue";
import {DarkMode} from "@/components"
import { ref } from "vue";
import { useAuthenticated, useSignOut } from "@nhost/vue";
import { useRouter } from "vue-router";
const router = useRouter();

const isAuthenticated = useAuthenticated();
const { signOut } = useSignOut();

const items = ref([
  {
    label: "Home",
    icon: "pi pi-fw pi-file",
    to: `/`,
  },
  {
    label: "Login",
    icon: "pi pi-fw pi-pencil",
    to: `/login`,
    visible: () => !isAuthenticated.value,
  },
  {
    label: "Register",
    icon: "pi pi-fw pi-user",
    to: `/register`,
    visible: () => !isAuthenticated.value,
  },
  // {
  //   label: "Activity List",
  //   icon: "pi pi-fw pi-calendar",
  //   to: `/cardList`,
  // },
  // {
  //   label: "Category List",
  //   icon: "pi pi-fw pi-calendar",
  //   to: `/categorylist`,
  // },
  {
    label: "Estilos",
    icon: "pi pi-fw pi-calendar",
    to: `/estilos`,
  },
  // {
  //   label: "Reset Password",
  //   icon: "pi pi-fw pi-calendar",
  //   to: `/reset-password`,
  // },
  // {
  //   label: "DataTable TEST",
  //   icon: "pi pi-fw pi-calendar",
  //   to: `/data-table-test`,
  // },
  // {
  //   label: "Dashboard TEST",
  //   icon: "pi pi-fw pi-calendar",
  //   to: `/dashboard`,
  // },

  // {
  //   label: "Formulario",
  //   icon: "pi pi-fw pi-pencil",
  //   to: `/formulario`,
  // },
  // {
  //   label: "Gallery",
  //   icon: "pi pi-fw pi-pencil",
  //   to: `/gallery`,
  // },
  {
    label: "Settings",
    icon: "pi pi-fw pi-pencil",
    visible: () => isAuthenticated.value,
    items: [
      {
        label: "Profile",
        icon: "pi pi-fw pi-pencil",
        to: `/profile`,
        visible: () => isAuthenticated.value,
      },
      {
        label: "Change Password",
        icon: "pi pi-fw pi-refresh",
        to: `/reset-password-form`,
        visible: () => isAuthenticated.value,
      },
      {
        label: "Logout",
        command: () => handleSignOut(),
        icon: "pi pi-fw pi-sign-out",
        visible: () => isAuthenticated.value,
      },
    ],
  },
]);

const handleSignOut = async () => {
  signOut();
  router.push("/");
};
</script>

<template>
  <Menubar :model="items">
    <template #end>
      <div class="flex justify-content-center align-items-center">
      <DarkMode class="m-2"></DarkMode>
      <LanguageSelector></LanguageSelector>
    </div>
    </template>
  </Menubar>
</template>