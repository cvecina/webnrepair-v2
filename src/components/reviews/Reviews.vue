<template>
  <div class=" px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-medium text-2xl mb-5"><h3>Reviews</h3></div>
    <div class="grid -mt-3 -ml-3 -mr-3">
      <div
        v-for="(review, index) in reviews"
        :key="index"
        class="col-12 xl:col-4"
      >
        <div class="p-2">
          <div class="shadow-2 p-4 surface-card" style="border-radius: 1rem">
            <div class="flex">
              <div class="flex flex-column w-9 pr-4">
                <span class="mb-4 text-900 font-medium">{{ review.name }}</span>
                <span class="mb-3">
                  <i
                    v-for="star in 4"
                    :key="star"
                    class="pi pi-star-fill text-yellow-500 mr-1"
                  ></i>
                  <i class="pi pi-star-fill text-300"></i>
                </span>
                <p class="text-700 m-0 p-0 line-height-3">
                  {{ review.content }}
                </p>
              </div>
              <div class="w-3 flex align-items-start justify-content-end">
                <img :src="review.image1" class="w-full" />
              </div>
            </div>
            <div
              class="border-top-1 surface-border pt-3 mt-3 flex align-items-center"
            >
              <img
                :src="review.image2"
                class="w-3rem h-3rem flex-shrink-0 mr-3"
              />
              <div>
                <span class="block mb-2 text-900 font-medium">{{
                  review.productTitle
                }}</span>
                <p class="text-600 m-0 p-0 text-sm">{{ review.productType }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  <script setup>
import { ref } from "vue";
const reviews = ref([
  {
    name: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image1: "https://media.v2.siweb.es/uploaded_thumb_seo/75ced0231b30d5bbba39592fef39e64d/fotografia_curriculum_foto_linkedin_corporativa_madrid_002.jpg",
    image2: "https://www.gdcbusiness.com/archives/uploads/2019/06/dise%C3%B1o-web-pwa.png",
    productTitle: "Product Title",
    productType: "Product Type",
  },
  {
    name: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image1: "https://i1.wp.com/sangiaophotography.com/wp-content/uploads/2019/01/Fotos-profesionales-para-curriculum-023-20190111-1803.jpg?resize=1024%2C675&ssl=1",
    image2: "https://www.gdcbusiness.com/archives/uploads/2019/06/dise%C3%B1o-web-pwa.png",
    productTitle: "Product Title",
    productType: "Product Type",
  },
  {
    name: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image1: "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/btg/curiosidades.batanga.com/files/7-excelentes-consejos-para-escribir-tu-curriculum-vitae-05.jpg",
    image2: "https://www.gdcbusiness.com/archives/uploads/2019/06/dise%C3%B1o-web-pwa.png",
    productTitle: "Product Title",
    productType: "Product Type",
  },
]);
</script>