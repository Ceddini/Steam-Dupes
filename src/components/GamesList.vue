<template>
  <div class="container max-w-6xl mx-auto">
    <label>
      <span class="text-sm block text-gray-500">Suche</span>
      <input
        type="text"
        name="search"
        id="search"
        class="border border-gray-300 px-3 mb-8 py-1 w-full rounded focus:outline-none focus:border-blue-500"
        autofocus
        autocomplete="off"
        v-model="search"
      />
    </label>

    <game-card
      v-for="game in filteredGames"
      :key="game.appid"
      :game="game"
      :filter="search"
    />
  </div>
</template>

<script>
import games from "@/json/games.min.json";
import GameCard from "./GameCard";

export default {
  name: "GamesList",
  components: {
    GameCard
  },
  created: function() {
    this.sortGames();
  },
  data: function() {
    return {
      games: games,
      search: ""
    };
  },
  methods: {
    sortGames: function() {
      this.games.sort((a, b) =>
        // a.appid > b.appid ? 1 : b.appid > a.appid ? -1 : 0
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
    }
  },
  computed: {
    filteredGames: function() {
      return this.games.filter(game =>
        game.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
};
</script>
