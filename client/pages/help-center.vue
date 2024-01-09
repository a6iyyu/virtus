<script setup>
import headerVue from "@/components/header.vue";
import footerVue from "@/components/footer.vue";
</script>

<style scoped>
@import "../static/css/component.css";
@import "../static/css/help-center.css";
</style>

<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="description"
        content="Get complete guidance at the Virtus Help Center, ensuring a seamless and satisfying art shopping experience for every customer."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Help Center</title>
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