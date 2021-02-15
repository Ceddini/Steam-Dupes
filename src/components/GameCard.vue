<template>
  <div class="shadow rounded bg-white px-4 mb-2">
    <div class="flex items-center justify-between pt-4">
      <div>
        <img
          :src="getGameIcon(game.appid, game.img_icon_url)"
          class="inline-block mr-2"
        />
        <span v-html="highlightedName" class="highlightedName"></span>
      </div>
      <a
        href="#"
        class="rounded bg-blue-500 px-3 text-white py-1"
        onclick="alert('Coming soon.')"
      >
        Schlüssel anfordern
      </a>
    </div>
    <hr class="mt-2" />
    <div class="pb-3">
      <small class="text-gray-700">
        <span class="text-gray-400">App Id:</span>
        {{ game.appid }}
      </small>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameCard",
  props: ["game", "filter"],
  methods: {
    getGameIcon: function(appid, img_icon_url) {
      return (
        "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/" +
        appid +
        "/" +
        img_icon_url +
        ".jpg"
      );
    }
  },
  computed: {
    highlightedName: function() {
      if (this.filter === "") return this.game.name;
      return this.game.name.replace(
        new RegExp("(" + this.filter + ")", "gi"),
        "<em>$1</em>"
      );
    }
  }
};
</script>
<style>
.highlightedName > em {
  @apply not-italic;
  @apply text-red-500;
}
</style>
