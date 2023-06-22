<template>
  <div class="flex justify-content-center align-items-center">
    <div
      class="cajaColoresPrimario m-2 flex justify-content-center align-items-center"
    >
      <p class="text-center">Primario</p>
    </div>
    <div
      class="cajaColoresSecundario m-2 flex justify-content-center align-items-center"
    >
      <p class="text-center">Secundario</p>
    </div>
    <div
      class="cajaColoresTercero m-2 flex justify-content-center align-items-center"
    >
      <p class="text-center">Tercero</p>
    </div>
    <div
      class="cajaColoresDanger m-2 flex justify-content-center align-items-center"
    >
      <p class="text-center">Danger</p>
    </div>
  </div>
  <span><strong>Textos!!!</strong></span>
  <h1>Prueba h1</h1>
  <h2>Prueba h2</h2>
  <h3>Prueba h3</h3>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus perspiciatis
    facere, ut sunt quo cupiditate delectus ea provident odit, nobis nihil nulla
    quaerat illo! Repudiandae et, neque nostrum aliquid odio nisi ratione rem
    recusandae consequatur nesciunt beatae corporis ipsum pariatur iusto rerum
    quasi repellat nam nobis mollitia? Odio, a sunt tenetur omnis, dolorem enim
    sit modi voluptate quia accusamus illo neque libero. Eum ut neque doloribus
    illum velit vitae quas iure rerum, nemo nostrum quidem possimus animi ullam
    consequatur autem. Corrupti consequatur laboriosam nisi perspiciatis? Dicta
    ipsa doloribus iste vero ut quod veniam nobis nostrum? Quis vel amet nulla.
    Debitis ratione provident ipsa, obcaecati recusandae, sunt magnam excepturi
    atque harum animi et impedit cumque a. Quos vel fuga officia recusandae
    aperiam sapiente neque cupiditate obcaecati similique accusantium, quam, quo
    exercitationem atque culpa illum quas cum dignissimos fugit. Laboriosam
    nihil ex molestiae. Laborum amet nemo error sed eligendi ad nam porro
    voluptatibus dicta harum enim blanditiis tempora et rem debitis repudiandae
    vel, commodi ullam ducimus aperiam beatae laudantium corporis cumque culpa!
    Quae, sed tenetur ratione laborum ullam sequi commodi totam iusto aperiam
    possimus doloremque consequatur dicta ea tempore temporibus veritatis enim
    fugit excepturi velit eius quod repudiandae earum esse. Debitis, minus?
  </p>
  <span><strong>Botones!!!</strong></span>
  <br />
  <Button class="m-2">Default</Button>
  <Button class="m-2" disabled>Disabled</Button>
  <Button class="m-2" severity="secondary">Secondary</Button>
  <Button class="m-2" severity="secondary" disabled>Secondary disabled</Button>
  <Button class="m-2" severity="danger">Danger</Button>
  <br />
  <span><strong>Enlaces!!!!</strong></span>
  <br />
  <a href="#">Enlace default</a>
  <br />
  <InputText class="m-2" placeholder="Default" />
  <br />
  <InputSwitch class="m-2" v-model="check" />
  <br>
  <Dropdown placeholder="Selecciona la ciudad test" v-model="selected" :options="cities" optionValue="code" optionLabel="name"></Dropdown>
  <br>
</template>
<script setup>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import InputSwitch from "primevue/inputswitch";
import Dropdown from "primevue/dropdown";
import { ref } from "vue";
import { useTitle } from "@vueuse/core";

const title = useTitle();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
])
const selected = ref(null);
const check = ref(false);

title.value = "Estilos"; // change current title
</script>