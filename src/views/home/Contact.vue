<template>
    <ContactForm></ContactForm>
</template>
<script setup>
import { ContactForm } from "@/components"
import { useTitle } from '@vueuse/core'

const title = useTitle()

title.value = "Contacto - Web & Repair"

</script>