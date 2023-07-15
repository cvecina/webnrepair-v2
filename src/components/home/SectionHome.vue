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
      <div class="m-2" style="height: 250px !important;">
        <p
          v-if="description"
          class="line-height-3 mt-0 mb-7 p-0 text-white text-2xl"
          ref="typedText"
        ></p>
      </div>
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
import { defineProps, ref, onMounted, nextTick } from "vue";
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

const typedText = ref(null);
const aText = ref([]);

onMounted(() => {
  if (props.description) {
    aText.value = [props.description];
    nextTick(() => {
      typewriter();
    });
  }
});

const typewriter = () => {
  let iSpeed = 70; // time delay of print out
  let iIndex = 0; // start printing array at this position
  let iArrLength = aText.value[0].length; // the length of the text array
  let iScrollAt = 20; // start scrolling up at this many lines
  let iTextPos = 0; // initialize text position
  let sContents = ""; // initialize contents variable

  const destination = typedText.value;

  const type = () => {
    sContents = " ";
    let iRow = Math.max(0, iIndex - iScrollAt);

    while (iRow < iIndex) {
      sContents += aText.value[iRow++] + "<br />";
    }

    if (destination) {
      destination.innerHTML =
        sContents + aText.value[iIndex].substring(0, iTextPos) + "_";
    }

    if (iTextPos++ === iArrLength) {
      iTextPos = 0;
      iIndex++;

      if (iIndex !== aText.value.length) {
        iArrLength = aText.value[iIndex].length;
        setTimeout(type, 500);
      }
    } else {
      setTimeout(type, iSpeed);
    }
  };

  type();
};
</script>
