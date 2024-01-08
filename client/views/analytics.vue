<script setup>
import headerVue from "../src/header.vue";
import footerVue from "../src/footer.vue";
</script>

<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="description"
        content="Watch growth and engagement with your work with informative data visualizations on the Virtus Analytics page."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Analytics</title>
      <link rel="icon" href="../static/img/icon.png" />
      <link rel="stylesheet" href="../static/css/component.css" />
      <link rel="stylesheet" href="../static/css/analytics.css" />
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
      <headerVue />
    </body>
    <footerVue />
    <script
      type="text/javascript"
      src="../static/js/hamburger-menu.js"
    ></script>
  </html>
</template>