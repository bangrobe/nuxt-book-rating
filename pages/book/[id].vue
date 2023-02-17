<template>
  <div class="flex items-center text-center" v-if="pending">Loading</div>
  <article class="grid grid-cols-1 md:grid-cols-2 mb-4" v-else>
    <div class="flex justify-center">
      <img
        :src="book.data.attributes.cover?.data.attributes.url"
        class="md:w-[400px] w-full object-cover"
        alt=""
      />
    </div>
    <div>
      <div class="flex gap-4 justify-between">
        <h2>Book Info</h2>
      </div>
      <div class="flex flex-col">
        <h2>{{ book.data.attributes.title }}</h2>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const route = useRoute();
const {
  data: book,
  error,
  pending,
} = useFetch(`http://localhost:1337/api/books/${route.params.id}?populate=*`);
console.log(book.value);
</script>

<style scoped></style>
