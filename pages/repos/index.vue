<script setup lang="ts">
const { pending, data: repos } = await useLazyFetch("/api/repos");
</script>

<template>
  <div>
    <h1>Repos</h1>
    <div v-if="pending">Loading ...</div>
    <div v-else>
      <div v-for="repo in repos">
        {{ repo.name }}
        <hr />
      </div>
    </div>
    <hr />
    <NuxtLink to="/repos/nuxt3-demo"
      >See specific repo information (nuxt3-demo)</NuxtLink
    >
    <br />
    <NuxtLink to="/"> Go Back</NuxtLink>
  </div>
</template>
