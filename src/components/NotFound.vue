<template>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div
      class="flex flex-column lg:flex-row justify-content-center align-items-center gap-7"
    >
      <div class="text-center lg:text-right">
        <div class="mt-6 mb-3 font-bold text-6xl text-900">{{$t("pageNotFoundTitle")}}</div>
        <p class="text-700 text-3xl mt-0 mb-6">
          {{ $t("pageNotFound") }}
        </p>
        <Button
          type="button"
          label="Go back to home page"
          class="p-button-outlined"
          @click="$router.push('/')"
        ></Button>
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=2000"
          alt="Image"
          class="w-full md:w-28rem"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import Button from "primevue/button";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>