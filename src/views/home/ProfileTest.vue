<template>
  <div class="card">
    <Splitter class="mb-5">
      <SplitterPanel class="flex align-items-center justify-content-center">
        <ProfileRepository
          :showTitle="true"
          :showCancelButton="true"
          :listaDeFormulario="listaDeFormulario"
          @save-profile="saveProfile"
          @cancel="cancel"
        />
      </SplitterPanel>
      <SplitterPanel class="flex align-items-center justify-content-center">
        <ProfileRepository
          :showTitle="true"
          :showCancelButton="true"
          :listaDeFormulario="listaDeFormulario"
          @save-profile="saveProfile"
          @cancel="cancel"
        />
      </SplitterPanel>
    </Splitter>
  </div>
</template>

<script setup lang="ts">
import { ProfileRepository } from "@/componentsFromRepository";
import { useProfile } from "@/composables/profile";

const { listaDeFormulario, saveProfile, cancel, Splitter, SplitterPanel } = useProfile();
</script>

<style>
</style>