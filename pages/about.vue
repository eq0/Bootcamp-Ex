<template>
  <NuxtLayout>
    This is about page
  </NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: ['auth']
})
</script>

<style>

</style>