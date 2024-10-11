<template>
  <div class="flex justify-between items-center bg-slate-300 mx-2 my-4 py-2 px-3 rounded-full h-12">

    <!-- Logo & Title -->
    <div class="flex basis-1/2 gap-2 items-center">
      <span class="w-8 h-8 bg-slate-900 rounded-full"></span>
      Welcome {{ currentUser }}
    </div>

    <!-- Navigations -->
     <div class="flex gap-2 basis-1/2">
      <NuxtLink v-for="nav in navs" :key="nav.name" class="bg-slate-300 hover:bg-slate-400 px-2 py-1 rounded-xl" :to="nav.route" active-class="bg-slate-500">
        {{ nav.name }}
      </NuxtLink>
     </div>

     <!-- Logout -->
      <button @click="logout">Logout</button>
  </div>
</template>

<script setup lang="ts">
const navs = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
]

const { logout, currentUser } = useAuth()

console.log(currentUser)
</script>
