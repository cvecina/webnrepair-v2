<template>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="font-bold text-900 text-3xl mb-3 text-center">
        ¿Qué hacemos?
    </div>
    <div class="text-700 text-center mb-3">
        En WebnRepair ofrecemos una amplia gama de servicios informáticos
        para particulares y empresas.
    </div>
    <div class="flex flex-wrap">
      <div class="w-full lg:w-6 xl:w-3 p-5 cards">
        <img src="/pc1.png" alt="Image" class="w-full imageAbout gradient-cards" />
        <div class="mt-3 mb-2 font-medium text-900 text-xl">
          Montaje a medida
        </div>
        <span class="text-700 line-height-3"
          >Montaje de ordenadores de todo tipo (Gaming, oficina, etc.) a medida para el usuario. Elaboramos prototipos adecuados a tu presupuesto y necesidades.
          <br>
          <br>
          </span
        >
        <a
          tabindex="0"
          class="text-blue-500 font-medium flex align-items-center mt-2"
        >
          <Button class="pulse" @click="contactFromAbout('build')">Me interesa</Button>
          
        </a>
      </div>

      <div class="w-full lg:w-6 xl:w-3 p-5 cards">
        <div>
        <img src="/pc4.png" alt="Image" class="w-full imageAbout gradient-cards" />
        </div>
        <div class="mt-3 mb-2 font-medium text-900 text-xl">
          Reparacion y mantenimiento de equipos 
        </div>
        <span class="text-700 line-height-3"
          >¿Tu pc o portátil no funciona o no tiene el rendimiento esperado? Realizamos reparaciones, modding y mantenimiento adecuados para
           garantizar el óptimo funcionamiento de estos.
           <br>
           <br>
        </span>
        <a
          tabindex="0"
          class="text-blue-500 font-medium flex align-items-center mt-2"
        >
          <Button class="pulse" @click="contactFromAbout('repair')">Me interesa</Button>
          
        </a>
      </div>
      
      <div class="w-full lg:w-6 xl:w-3 p-5 cards">
        <div>
          <img src="/pc3.png" alt="Image" class="w-full imageAbout gradient-cards"/>
        </div> 
        <div class="mt-3 mb-2 font-medium text-900 text-xl">
          Diseño y desarrollo de aplicaciones web
        </div>
        <span class="text-700 line-height-3"
          >Diseñamos tu web a medida o con un gestor de contenidos y la alojamos
          en nuestros propios servidores.
          <br>
          <br>
          <br>
          </span
        >
        <a
          tabindex="0"
          class="text-blue-500 font-medium flex align-items-center mt-2"
        >
          <Button class="pulse" @click="contactFromAbout('design')">Me interesa</Button>
          
        </a>
      </div>

      <div class="w-full lg:w-6 xl:w-3 p-5 cards">
        <img src="/pc2.png" alt="Image" class="w-full imageAbout gradient-cards" />
        <div class="mt-3 mb-2 font-medium text-900 text-xl">
          Formateo de ordenadores
        </div>
        <span class="text-700 line-height-3"
          >Limpieza, formateo y optimización de ordenadores de sobremesa y portátiles. Plataformamiento de equipos, integración o cambio de Sistema Operativo. <br> <br>
          
          </span
        >
        <a
          tabindex="0"
          class="text-blue-500 font-medium flex align-items-center mt-2"
        >
          <Button class="pulse" @click="contactFromAbout('format')">Me interesa</Button>
          
        </a>
      </div>
      
    </div>
  </div>
</template>
<script setup>
import Button from 'primevue/button'
import { useRouter } from 'vue-router'
import { useContactStore } from '@/stores';
const router = useRouter();
const contactStore = useContactStore();
const contactFromAbout = async (service) => {
  await contactStore.setAbout(service)
  router.push('/contact')
}


</script>
<style>
/* the imageAbout class has border radius and bottom gradient and all the same width and height */

.imageAbout {
  border-top-right-radius: 1rem 1rem;
  border-top-left-radius: 1rem 1rem;
  height: 300px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  margin-bottom: 1rem;
}

</style>