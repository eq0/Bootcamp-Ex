<template>
  <NuxtLayout name="auth">
    <div class="flex flex-col gap-4 bg-white rounded-2xl p-4">
      <h1>Register Page</h1>
      <input v-model="username" placeholder="Username" class="p-2 border rounded-xl" />
      <input v-model="password" placeholder="Password" type="password" class="p-2 border rounded-xl" />
      
      <button @click="register(username, password)" class="bg-blue-500 rounded-xl py-2">Register</button>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: ['guest']
})

const username = ref("");
const password = ref("");

const { register } = useAuth()
</script>
