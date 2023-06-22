<template>
    <div class="loader" v-if="loading">
      <div class="spinner">
        <i class="pi pi-spin pi-spinner"></i>
      </div>
      <div class="message">{{ message }}</div>
    </div>
  </template>
  
  <script setup>
const props = defineProps({
      loading: {
        type: Boolean,
        required: true,
        default: false,
      },
      message: {
        type: String,
        default: 'Loading...',
      },
    })
  </script>
  
  <style scoped>
  .loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .spinner {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .message {
    font-size: 1.2rem;
  }
  </style>
  