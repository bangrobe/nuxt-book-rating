<template>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg">
      <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
        Sign in to your account
      </h1>
      <form action="" class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
        <div>
          <label for="email" class="text-sm font-medium">Email</label>

          <div class="relative mt-1">
            <input
              type="email"
              id="email"
              class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter email"
              v-model="email"
            />

            <span class="absolute inset-y-0 right-4 inline-flex items-center">
              <span class="absolute inset-y-0 right-4 inline-flex items-center">
                <Icon name="material-symbols:alternate-email" />
              </span>
            </span>
          </div>
        </div>

        <div>
          <label for="password" class="text-sm font-medium">Password</label>

          <div class="relative mt-1">
            <input
              type="password"
              id="password"
              class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter password"
              v-model="password"
            />

            <span class="absolute inset-y-0 right-4 inline-flex items-center">
              <Icon name="material-symbols:password" />
            </span>
          </div>
        </div>

        <button
          type="submit"
          @click.prevent="handleSubmit"
          class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        >
          Sign in
        </button>

        <p class="text-center text-sm text-gray-500">
          No account?
          <NuxtLink class="underline" to="/signup">Sign up</NuxtLink>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const email = ref("");
const password = ref("");
const isLoading = ref(false);
const handleSubmit = () => {
  signIn();
};
const signIn = async () => {
  isLoading.value = true;
  try {
    const response = await $fetch("http://localhost:1337/api/auth/local", {
      method: "POST",
      body: {
        identifier: email.value,
        password: password.value,
      },
    });
    console.log(response);
    router.push('/')
  } catch (error: any) {
    console.log(error);
  }
  isLoading.value = false;
};
</script>
