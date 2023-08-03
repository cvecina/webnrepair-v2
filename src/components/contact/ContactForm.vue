<template>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid">
      <div class="col-12 md:col-6">
        <div class="p-fluid pr-0 md:pr-6">
          <div class="field">
            <label for="name" class="font-medium mr-4">Tipo de consulta</label>
            <Dropdown
              id="tipo_consulta"
              :options="[
                { label: 'Montaje a medida', value: 'build' },
                {
                  label: 'Reparacion y mantenimiento de equipos',
                  value: 'repair',
                },
                {
                  label: 'Diseño y desarrollo de aplicaciones web',
                  value: 'design',
                },
                { label: 'Formateo de ordenadores', value: 'format' },
              ]"
              optionLabel="label"
              optionValue="value"
              class="py-3 px-2 text-lg"
              v-model="contactStore.new.tipo"
            />
          </div>
          <div class="field">
            <label for="name" class="font-medium">Name</label>
            <InputText
              id="name"
              type="text"
              class="py-3 px-2 text-lg"
              v-model="contactStore.new.name"
            />
          </div>
          <div class="field">
            <label for="email" class="font-medium">Email</label>
            <InputText
              id="email"
              type="text"
              class="py-3 px-2 text-lg"
              v-model="contactStore.new.email"
            />
          </div>
          <div class="field">
            <label for="tlf" class="font-medium">Número de teléfono *</label>
            <InputText
              id="tlf"
              type="text"
              class="py-3 px-2 text-lg"
              v-model="contactStore.new.tel"
            />
          </div>
          <div class="field">
            <label for="message" class="font-medium">Message</label>
            <Textarea
              id="message"
              :rows="6"
              :autoResize="true"
              class="py-3 px-2 text-lg"
              v-model="contactStore.new.message"
            ></Textarea>
          </div>
          <Button
            label="Enviar"
            icon="pi pi-send"
            class="w-auto mb-4"
            @click="sendMail"
          ></Button>
        </div>
      </div>
      <div
        class="col-12 md:col-6 bg-no-repeat bg-right-bottom"
        style="background-image: url('images/blocks/contact/contact-1.png')"
      >
        <div class="text-900 text-3xl font-medium mb-6">O si lo prefieres:</div>
        <div class="text-700 line-height-3 mb-6">
          Puedes contactar con nosotros a través de Email, móvil o redes
          sociales:
        </div>
        <!-- <a
          class="inline-flex align-items-center text-blue-600 font-bold no-underline cursor-pointer"
        >
          <span class="mr-3">View Address on Google Maps</span>
          <i class="pi pi-arrow-right"></i>
        </a> -->
        <ul class="list-none p-0 m-0 mt-6 text-700">
          <li class="flex align-items-center mb-4">
            <i class="pi pi-phone mr-3" style="font-size: 2rem"></i>
            <span>+123456789</span>
          </li>
          <li class="flex align-items-center mb-4">
            <i class="pi pi-whatsapp mr-3" style="font-size: 2rem"></i>
            <span>+123456789</span>
          </li>
          <!-- <li class="flex align-items-center mb-3">
            <i class="pi pi-twitter mr-3"></i>
            <span>@prime_ng</span>
          </li> -->
          <li class="flex align-items-center mb-4">
            <i class="pi pi-inbox mr-3" style="font-size: 2rem"></i>
            <span>webnrepair@gmail.com</span>
          </li>
          <li class="flex align-items-center mb-3">
            <i class="pi pi-instagram mr-3" style="font-size: 2rem"></i>
            <span>instagram.com/webnrepair/</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import { useRouter } from "vue-router";
import { useContactStore, useAlertStore } from "@/stores";
import { onMounted } from "vue";
const router = useRouter();
const contactStore = useContactStore();
const alertStore = useAlertStore();

const sendMail = async () => {
  await contactStore.sendMail();
  contactStore.new = {
    tipo: "",
    name: "",
    email: "",
    tel: "",
    message: "",
  };
  router.push("/");
};

onMounted(async() => {
  await contactStore.hello();
})
</script>