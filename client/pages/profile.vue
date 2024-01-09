<script setup>
import footerVue from "@/components/footer.vue";
</script>

<style scoped>
@import "../static/css/component.css";
@import "../static/css/profile.css";
</style>

<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="description"
        content="Reveal yourself through your personal profile on Virtus, a place to share your art preferences and get recommendations for suitable works."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Your Profile</title>
      <link rel="icon" href="../static/img/icon.png" />
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body></body>
    <router-view>
      <footerVue />
    </router-view>
    <script
      type="text/javascript"
      src="../static/js/hamburger-menu.js"
    ></script>
  </html>
</template>