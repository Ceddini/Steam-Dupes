<template>
  <div id="nav" class="w-full bg-blue-400 text-white mb-8">
    <router-link to="/">Home</router-link>
  </div>
  <router-view />
</template>

<style>
body,
html {
  background: #f3f3f3;
}
#nav > a {
  display: inline-block;

  @apply p-4;
  @apply bg-blue-400;
}
#nav > a:hover {
  @apply bg-blue-500;
}
</style>
