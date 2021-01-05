<template>
  <div class="m-auto">
    <h1 class="text-center text-2xl">DC Heros {{ herosCount }}</h1>
    <ul>
      <li
        class="flex justify-between"
        v-for="(hero, index) in dcHeros"
        :key="hero.name"
      >
        <div>{{ hero.name }}</div>
        <button @click="removeHero(index)">x</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero()">
      <input class="border rounded" v-model="newHero" placeholder="Type Hero Name Here" />
      <button class="border rounded bg-gradient-to-t from-red-700 to-pink-400 text-sm text-white" type="submit">Add Hero</button>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    herosCount() {
      return this.dcHeros.length;
    },
  },
  data() {
    return {
      newHero: "",
      dcHeros: [
        { name: "arrow" },
        { name: "supergirl" },
        { name: "superman" },
        { name: "flash" },
      ],
    };
  },

  methods: {
    addHero() {
      if (this.newHero !== "") {
        this.dcHeros.unshift({ name: this.newHero });
        this.newHero = "";
      }
    },
    removeHero(index) {
      return (this.dcHeros = this.dcHeros.filter((hero, i) => i !== index));
    },
  },
};
</script>

<style></style>
