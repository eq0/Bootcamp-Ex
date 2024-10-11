<template>
    <NuxtLayout>
        This is body
    </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: ['auth']
})
</script>
