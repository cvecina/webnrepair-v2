<template>
  <div class="card md:flex md:justify-content-center">
    <Galleria
      :value="images"
      :responsiveOptions="responsiveOptions"
      :numVisible="numVisible"
      :circular="circular"
      containerStyle="max-width: 640px"
      :showItemNavigators="showNav || showBigDisplay"
    >
      <template v-if="showBigDisplay" #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="width: 100%; display: block"
        />
      </template>
      <template v-if="showSmallDisplay" #thumbnail="slotProps">
        <img
          :src="slotProps.item.thumbnailImageSrc"
          :alt="slotProps.item.alt"
          style="display: block"
        />
      </template>
    </Galleria>
  </div>
</template>

<script setup>
import Galleria from "primevue/galleria";
import { ref, onMounted } from "vue";
import axios from "axios";
onMounted(() => {
  axios.get(props.llamada).then((response) => {
    images.value = response.data.map((item) => {
      return {
        itemImageSrc: item.url,
        thumbnailImageSrc: item.thumbnailUrl,
        alt: item.title,
      };
    });
  });
});

const images = ref();

const props = defineProps({
  llamada: {
    type: String,
    required: true,
  },
  numVisible: {
    type: Number,
    required: false,
    default: 5,
  },
  circular: {
    type: Boolean,
    required: false,
    default: true,
  },
  showNav: {
    type: Boolean,
    required: false,
    default: true,
  },
  showBigDisplay: {
    type: Boolean,
    required: false,
    default: true,
  },
  showSmallDisplay: {
    type: Boolean,
    required: false,
    default: true,
  },
  responsiveOptions: {
    type: Array,
    required: false,
    default: () => [
      {
        breakpoint: "991px",
        numVisible: 4,
      },
      {
        breakpoint: "767px",
        numVisible: 3,
      },
      {
        breakpoint: "575px",
        numVisible: 1,
      },
    ],
  },
});
</script>