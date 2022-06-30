<script setup lang="ts">
const route = useRoute();
const { pending, data: repo } = await useLazyFetch(
  `/api/repos/${route.params.repoName}`
);
</script>

<template>
  <div>
    <h2>Repo name: {{ $route.params.repoName }}</h2>
    <div v-if="pending">Loading ...</div>
    <div v-else>
      Owner: {{ repo.owner.login }}
      <br />
      Description: {{ repo.description }}
      <br />
      Language: {{ repo.language }}
      <br />
      License: {{ repo.license.name }}
      <br />
      <NuxtLink :to="`${repo.html_url}`" target="_blank">
        {{ repo.html_url }}</NuxtLink
      >
    </div>
    <hr />
    <NuxtLink to="/repos"> Go Back</NuxtLink>
  </div>
</template>
