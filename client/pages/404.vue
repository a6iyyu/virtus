<script setup>
import headerVue from "@/components/header.vue";
import footerVue from "@/components/footer.vue";
</script>

<style scoped>
@import "../static/css/component.css";
@import "../static/css/404.css";
</style>

<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>404: Not Found!</title>
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
  </html>
</template>