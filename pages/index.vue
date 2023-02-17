<template>
  <div>
    <div class="flex items-center gap-1">
      <Icon name="mdi:book-alert-outline" class="text-2xl text-gray-900"></Icon>
      <h2 class="text-2xl text-gray-900 font-medium">New Books</h2>
    </div>
    <div class="flex items-center h-100" v-if="pending">
      <h1>Loading</h1>
    </div>
    <div class="flex flex-col" v-else>
      <div v-for="book in books.data" :key="book.id">
        <div class="flex bg-white transition hover:shadow-sm my-2">
          <div v-if="book.attributes.cover?.data">
            <img
              :src="book.attributes.cover?.data.attributes.url" class="w-32 object-fill" alt=""
            />
          </div>
          <div v-else>
            <img src="" alt="" />
          </div>

          <div class="px-4 py-2">
            <NuxtLink :to="`/book/${book.id}`">
              <h2>{{ book.attributes.title }}</h2>
            </NuxtLink>
            <ClientOnly>
              <Editor :content="book.attributes.info" />
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  data: books,
  pending,
  error,
} = await useFetch("http://localhost:1337/api/books?populate=*");
</script>

<style scoped></style>
