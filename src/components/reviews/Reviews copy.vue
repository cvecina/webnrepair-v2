<template>
  <div class="px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-medium text-2xl mb-5"><h3>Reviews</h3></div>
    <div class="grid -mt-3 -ml-3 -mr-3" v-if="reviews.length >= 1">
      <div
        v-for="(review, index) in reviews"
        :key="index"
        class="col-12 xl:col-4"
      >
        <div class="p-2">
          <div class="shadow-2 p-4 surface-card" style="border-radius: 1rem">
            <div class="flex">
              <div class="flex flex-column w-9 pr-4">
                <span class="mb-4 text-900 font-medium">{{ review.title }}</span>
           
                <p class="text-700 m-0 p-0 line-height-3">
                  {{ review.comentario }}
                </p>
                <span class="mb-3">
                  <Rating
                    v-model="review.rating"
                    :cancel="false"
                    readonly
                  ></Rating>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h3>No hay opiniones todavía...</h3>
    </div>
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