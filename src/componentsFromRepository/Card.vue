<template>
  <div class="surface-ground">
    <div class="grid">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="col-12 lg:col-4 p-3"
      >
        <div
          class="shadow-2 border-round surface-card mb-3 h-full flex-column justify-content-between flex"
        >
          <div class="p-4">
            <div class="flex align-items-center">
              <span
                class="inline-flex border-circle align-items-center justify-content-center"
                :class="card.iconBgClass"
              >
                <i :class="card.iconClass"></i>
              </span>
              <span class="text-900 font-medium text-2xl">{{
                card.titulo
              }}</span>
            </div>
            <div class="text-900 my-3 text-xl font-medium">
              {{ card.precioDefault }}
            </div>
            <p class="mt-0 mb-3 text-700 line-height-3">
              {{ card.descripcion }}
            </p>
          </div>
          <div class="px-4 py-3 surface-100 text-right">
            <Button
              icon="pi pi-arrow-right"
              iconPos="right"
              v-for="btn in props.buttons"
              :key="btn"
              :class="btn.class"
              @click="$emit(btn.click, card)"
            >
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  <script setup>
import Button from "primevue/button";

const props = defineProps({
  cards: {
    type: Array,
    required: true,
  },
  buttons: {
    type: Array,
    required: true,
  },
});
</script>