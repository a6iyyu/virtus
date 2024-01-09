<script setup>
import headerVue from "@/components/header.vue";
import footerVue from "@/components/footer.vue";
</script>

<style scoped>
@import "../static/css/component.css";
@import "../static/css/limited-editions.css";
</style>

<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="description"
        content="Experience visual exclusivity with Limited Editions at Virtus - a collection of premium contents that bring out the beauty of art with a special touch."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Limited Editions</title>
      <link rel="icon" href="../static/img/icon.png" />
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
      <router-view>
        <headerVue />
      </router-view>
    </body>
    <router-view>
      <footerVue />
    </router-view>
    <script
      type="text/javascript"
      src="../static/js/hamburger-menu.js"
    ></script>
  </html>
</template>