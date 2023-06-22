<template>
  <div class="card m-5 grid flex justify-content-center align-content-center">
    <div
      class="col-12 md:col-6 lg:col-3"
      v-for="(card, index) in data"
      :key="card"
      style="width: 30em"
    >
      <!-- {{ card }} -->
      <Card>
        <template #title>{{ card.titulo }}</template>
        <template #content
          >{{ card.descripcion }}
          <br />
          <div v-if="card?.imagen">
            <img style="width: 12em; height: 12em" :src="card?.imagen" alt="" />
          </div>
          <div v-if="card?.carrousel?.length > 0">
            <Carousel
              :value="card.carrousel"
              :numVisible="imgVisible"
              :numScroll="imgScroll"
            >
              <template #item="slotProps">
                <div
                  class="border-1 surface-border border-round m-2 text-center py-5 px-3"
                >
                  <div>
                    <img
                      style="width: 12em; height: 12em"
                      :src="slotProps.data"
                      alt="Card image"
                    />
                  </div>
                </div>
              </template>
            </Carousel>
          </div>
          <div v-if="props.buttons">
            <Button
              v-for="btn in props.buttons"
              :key="btn"
              :icon="btn.icon"
              :class="btn.class"
              @click="$emit(btn.click, index)"
            >
              {{ btn.label }}
            </Button>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
<script setup>
import Card from "primevue/card";
import Carousel from "primevue/carousel";
import { onMounted } from "vue";
import Button from "primevue/button";

const getKeys = async (obj) => {
  const keys = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);

      if (typeof obj[key] === "object") {
        const subKeys = getKeys(obj[key]);
        keys.push(...subKeys.map((subKey) => `${key}.${subKey}`));
      }
    }
  }

  return keys;
};

// ejemplo data
/*
-titulo
-descripcion
*/

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  imgVisible: {
    type: Number,
    default: 1,
    required: false,
  },
  imgScroll: {
    type: Number,
    default: 1,
    required: false,
  },
  buttons: {
    type: Array,
    required: false,
  },
});
</script>