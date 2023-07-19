<template>
  <div
    class=" text-center px-4 py-8 md:px-6 lg:px-8 flex flex-column justify-center align-items-center"
    v-if="reviews.length >= 1"
  >
  <div class="font-bold text-300 text-3xl mb-8 text-center">
        Opiniones de nuestros clientes
    </div>
    <div class="flex flex-column md:flex-row">
      <div
        class="flex flex-grow-1 mb-4 md:mb-0 md:px-4 py-4 md:py-0"
        v-for="(review, index) in reviews"
        :key="index"
      >
        <div class="shadow-2 surface-card border-round relative">
          <img
            src="/icon_user.png"
            width="100"
            height="100"
            class="absolute left-50"
            style="margin-left: -50px; top: -50px"
          />

          <div
            class="px-4 pb-4 pt-8 relative flex flex-column justify-center align-items-center"
          >
            <Rating v-model="review.rating" :cancel="false" readonly></Rating>
            <br />
            <p
              class="text-900 font-italic line-height-3 text-lg m-0 pb-4 border-bottom-1 surface-border"
            >
              {{ review.comentario }}
            </p>

            <div class="text-900 font-semibold line-height-3 mt-4">
              {{ review.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h3>No hay opiniones todavía...</h3>
  </div>
</template>

  <script setup>
import Rating from "primevue/rating";
import { ref } from "vue";
const props = defineProps({
  reviews: {
    type: Array,
    required: true,
  },
});
// const reviews = ref([
//   {
//     name: "John Doe",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     image1:
//       "https://media.v2.siweb.es/uploaded_thumb_seo/75ced0231b30d5bbba39592fef39e64d/fotografia_curriculum_foto_linkedin_corporativa_madrid_002.jpg",
//     image2:
//       "https://www.gdcbusiness.com/archives/uploads/2019/06/dise%C3%B1o-web-pwa.png",
//     productTitle: "Product Title",
//     productType: "Product Type",
//   },
//   {
//     name: "John Doe",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     image1:
//       "https://i1.wp.com/sangiaophotography.com/wp-content/uploads/2019/01/Fotos-profesionales-para-curriculum-023-20190111-1803.jpg?resize=1024%2C675&ssl=1",
//     image2:
//       "https://www.gdcbusiness.com/archives/uploads/2019/06/dise%C3%B1o-web-pwa.png",
//     productTitle: "Product Title",
//     productType: "Product Type",
//   },
//   {
//     name: "John Doe",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     image1:
//       "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/btg/curiosidades.batanga.com/files/7-excelentes-consejos-para-escribir-tu-curriculum-vitae-05.jpg",
//     image2:
//       "https://www.gdcbusiness.com/archives/uploads/2019/06/dise%C3%B1o-web-pwa.png",
//     productTitle: "Product Title",
//     productType: "Product Type",
//   },
// ]);
</script>