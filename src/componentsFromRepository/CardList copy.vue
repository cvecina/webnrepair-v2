<template>
  <div class="card m-5 grid flex justify-content-center align-content-center">
    <div
      class="col-12 md:col-6 lg:col-3"
      v-for="card in data"
      :key="card"
      style="width: 30em"
    >
      <!-- {{ card }} -->
      <Card>
        <template #title>{{ card.title }}</template>
        <template #content>
          <p>
            {{ card.description }}
          </p>
          {{ card.highlights }}
          <br />
          {{ card }}
          <br />
          <br />
          <br />
          <br />
          {{ card.itinerary }}
          <br />
          {{ card.inclusions }}
          <br />
          {{ card.exclusions }}
          <br />
          {{ card.importantInfo }}
          <br />
          {{ card.destination }}
          <br />
          {{ card.language }}
          <br />
          {{ card.categories }}
          <br />
          {{ card.meetingPoints }}
          <br />
          {{ card.rating }}
          <br />
          {{ card.route }}
          <br />
          {{ card.options }}
          <!-- {{ card.media.images.gallery }} -->
          <div v-if="card.media.images.gallery">
            <div v-for="img in card.media.images.gallery" :key="img">
              <br />
              {{ img }}
              <br />
            </div>
            <Carousel
              :value="card.media.images.gallery"
              :numVisible="imgVisible"
              :numScroll="imgScroll"
            >
              <template #item="slotProps">
                <div
                  class="border-1 surface-border border-round m-2 text-center py-5 px-3"
                >
                  <div>
                    <img :src="slotProps.data?.link" alt="Card image" />
                  </div>
                  <div v-if="props.buttons">
                    <Button
                      v-for="btn in props.buttons"
                      :key="btn"
                      :icon="btn.icon"
                      :class="btn.class"
                      @click="$emit(btn.click, datosEditar)"
                    >
                      {{ btn.label }}
                    </Button>
                  </div>
                </div>
              </template>
            </Carousel>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
<script setup>
import Card from "primevue/card";
import Carousel from "primevue/carousel";

const getKeys = (obj) => {
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