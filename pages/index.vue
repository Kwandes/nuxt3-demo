<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
const healthcheckResponse = await useFetch("/api/healthcheck", {});
</script>

<template>
  <div>
    <h1>Random Counter: {{ count }}</h1>
    <button @click="count++">Click Me</button>
    <br />
    <h2>Api status: {{ healthcheckResponse.data }}</h2>
    <NuxtLink to="/repos">See a list of repos</NuxtLink>
    <br />
    <NuxtLink to="/repos/nuxt3-demo"
      >See specific repo information (nuxt3-demo)</NuxtLink
    >
  </div>
</template>
