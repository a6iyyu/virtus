<script setup>
import header from "./header.vue";
import homepage from "../views/homepage.vue";
import footer from "./footer.vue";
import "../static/css/component.css";
import "../static/css/homapage.css";
</script>

<template>
  <header></header>
  <homepage />
  <footer></footer>
</template>

<script>
export default {
  name: "Homepage",
};
</script>