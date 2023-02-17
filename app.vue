<template>
  <div class="flex flex-col h-screen">
    <NuxtLoadingIndicator/>
    <HeaderNavbar />
    <main class="bg-gray-100 flex-grow">
      <div class="container md:max-w-screen-xl mx-auto py-4 px-4 md:px-6 lg:px-8">
        <NuxtPage />
      </div>
    </main>
  </div>
</template>
