<script setup lang="ts">
const { pending, data: repos } = await useLazyFetch("/api/repos");
</script>

<template>
  <div>
    <h1>Repos</h1>
    <div v-if="pending">Loading ...</div>
    <div v-else>
      <div v-for="repo in repos">
        <NuxtLink :to="{ path: `/repos/${repo.name}` }">{{
          repo.name
        }}</NuxtLink>
        <hr />
      </div>
    </div>
    <hr />

    <br />
    <NuxtLink to="/"> Go Back</NuxtLink>
  </div>
</template>
