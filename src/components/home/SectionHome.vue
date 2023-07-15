<template>
  <div class="flex flex-wrap">
    <div
      class="w-full md:w-6 px-4 py-8 md:px-6 lg:px-8"
      style="
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.42),
            rgba(0, 0, 0, 0.42)
          ),
          linear-gradient(246.36deg, #111b8d 15.22%, #1d0053 65.22%);
      "
    >
      <div class="text-4xl text-white mb-3 font-medium">
        {{ title }}
      </div>
      <p
        v-if="description"
        class="line-height-3 mt-0 mb-7 p-0 text-white text-2xl"
      >
        {{ description }}
      </p>
      <Button
        v-if="button"
        :label="buttonLabel"
        class="p-button-secondary text-2xl"
      ></Button>
    </div>
    <div
      v-if="image"
      class="w-full md:w-6 bg-no-repeat bg-cover"
      style="min-height: 400px"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>
  </div>
</template>
<script setup>
import Button from "primevue/button";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  button: {
    type: Boolean,
    required: false,
    default: true,
  },
  buttonLabel: {
    type: String,
    required: false,
    default: "READ STORY",
  },
  image: {
    type: String,
    required: false,
  },
});
</script>