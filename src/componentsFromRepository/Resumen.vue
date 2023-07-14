<template>
  <div
    class="surface-card shadow-2 border-round flex p-3 flex-column md:flex-row"
  >
    <template v-for="item in items" :key="item">
      <router-link v-if="item.route"
        :to="item?.route"
        class="border-bottom-1"
        :class="[item.borderClass, 'surface-border', 'flex-auto', 'p-3']"
      >
        <div
          :class="[
            'border-bottom-1',
            item.borderClass,
            'surface-border',
            'flex-auto',
            'p-3',
          ]"
        >
          <div class="flex align-items-center mb-3">
            <i :class="item.iconClass"></i>
            <span class="text-500 font-medium">{{ item.title }}</span>
          </div>
          <span class="block text-900 font-medium mb-4 text-xl">{{
            item.value
          }}</span>
          <div class="flex align-items-center">
            <i :class="item.changeIconClass"></i>
            <span :class="item.changeValueClass">{{ item.changeValue }}</span>
          </div>
        </div>
      </router-link>
      <div v-else
          :class="[
            'border-bottom-1',
            item.borderClass,
            'surface-border',
            'flex-auto',
            'p-3',
          ]"
        >
          <div class="flex align-items-center mb-3">
            <i :class="item.iconClass"></i>
            <span class="text-500 font-medium">{{ item.title }}</span>
          </div>
          <span class="block text-900 font-medium mb-4 text-xl">{{
            item.value
          }}</span>
          <div class="flex align-items-center">
            <i :class="item.changeIconClass"></i>
            <span :class="item.changeValueClass">{{ item.changeValue }}</span>
          </div>
        </div>
    </template>
  </div>
</template>

  <script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>