<template>
  <header aria-label="Site Header" class="bg-white shadow-sm">
    <div
      class="mx-auto flex justify-between h-16 max-w-screen-xl items-center gap-8 container px-4 md:px-6 lg:px-8"
    >
      <NuxtLink to="/" class="block text-red-600 uppercase font-bold text-3xl">
        Book <span class="text-gray-900">Rating</span>
      </NuxtLink>
      <div class="flex items-center justify-end">
        <nav aria-label="Site Nav" class="hidden md:block">
          <ul class="flex items-center gap-6 text-sm"></ul>
        </nav>
        <div class="flex gap-1">
          <NuxtLink class="block px-5 py-1" to="/donate">
            <Icon name="mdi:cards-heart" class="text-2xl text-red-500"/> Donate
          </NuxtLink>
          <NuxtLink
            class="block px-5 py-1 rounded-sm bg-blue-500 text-white font-medium transition hover:bg-blue-700"
            to="/login"
            >Login</NuxtLink
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
