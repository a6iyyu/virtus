<script setup>
import headerVue from "@/components/header.vue";
import footerVue from "@/components/footer.vue";
</script>

<style scoped>
@import "../static/css/component.css";
@import "../static/css/not-logged-in.css";
</style>

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
      <title>Oops!</title>
      <link rel="icon" href="../static/img/icon.png" />
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
      <router-view>
        <headerVue />
      </router-view>
      <div class="oops w-full grid place-items-center">
        <div class="h-full flex">
          <div class="h-full w-5/12 grid place-items-center">
            <div class="h-1/3 w-full">
              <p
                class="text-gray-950 text-justify text-5xl cursor-default font-semibold"
                data-aos="fade-up"
              >
                Hold Up!
              </p>
              <br />
              <p
                class="text-gray-950 text-justify text-1xl cursor-default font-light"
                data-aos="fade-up"
              >
                You are not logged in to view this page. Please
                <a
                  href="/login"
                  class="underline italic hover:text-gray-800"
                  style="transition: all 0.3s ease-in-out"
                  >login</a
                >
                or
                <a
                  href="/register"
                  class="underline italic hover:text-gray-800"
                  style="transition: all 0.3s ease-in-out"
                  >register</a
                >&nbsp;if you don't have an account yet.
              </p>
            </div>
          </div>
          <div class="h-full w-1/12"></div>
          <div class="h-full w-6/12 flex items-center justify-end">
            <img
              src="../static/img/secure.png"
              alt="Secure"
              width="450"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
      <div class="h-12 w-full"></div>
    </body>
    <router-view>
      <footerVue />
    </router-view>
    <script
      type="text/javascript"
      src="../static/js/hamburger-menu.js"
    ></script>
    <script
      type="text/javascript"
      src="https://unpkg.com/aos@next/dist/aos.js"
    ></script>
    <script type="text/javascript">
      AOS.init();
    </script>
  </html>
</template>