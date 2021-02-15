<template>
  <div class="mb-12">
    <games-list />
  </div>
</template>

<script>
// @ is an alias to /src
import GamesList from "@/components/GamesList.vue";

export default {
  name: "Home",
  components: {
    GamesList
  }
};
</script>
