<script setup>
import footerVue from "@/components/footer.vue";
</script>

<style scoped>
@import "../static/css/component.css";
@import "../static/css/explore.css";
</style>

<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="description"
        content="Discover the beauty of art from every angle on Virtus' Explore page, where all the content comes together to provide an immersive exploration experience."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Explore</title>
      <link rel="icon" href="../static/img/icon.png" />
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
      <div class="navbar w-full block bg-center bg-cover bg-no-repeat">
        <div class="w-full grid place-items-center">
          <div class="h-full w-19/20 flex">
            <div class="h-full w-1/4 grid place-items-center">
              <a href="/" class="logo">
                <img
                  src="../static/img/logo-white.png"
                  alt="Virtus Logo"
                  width="225"
                />
              </a>
              <a href="/" class="icon">
                <img src="../static/img/icon.png" alt="" width="100" />
              </a>
            </div>
            <div class="h-full w-3/4 flex-center-end">
              <div class="avatar h-full w-3/40 grid place-items-center">
                <a href="/not-logged-in">
                  <img src="../static/img/avatar.png" alt="" width="50" />
                </a>
              </div>
              <div
                class="hamburger-menu-parent z-10 h-full w-3/40 grid place-items-center"
              >
                <abbr title="Menu">
                  <input
                    type="checkbox"
                    name=""
                    id="hamburger-menu"
                    class="absolute flex h-1-875-r w-1-875-r opacity-0 z-10 cursor-pointer"
                  />
                  <span class="hamburger-menu bg-d9d9d9"></span>
                  <span class="hamburger-menu bg-d9d9d9"></span>
                  <span class="hamburger-menu bg-d9d9d9"></span>
                </abbr>
              </div>
            </div>
            <div class="overlay fixed h-full w-1/2 inset-0 z-30"></div>
          </div>
        </div>
        <div class="search-explore w-full grid place-items-center">
          <div class="h-full w-9/10 block">
            <div class="h-2/5 w-full flex items-end justify-center">
              <p
                class="text-white text-center cursor-default font-bold text-5xl"
              >
                Resources for creative <br />
                minds to grow and develop
              </p>
            </div>
            <div class="h-1/5 w-full grid place-items-center">
              <p
                class="text-white text-center cursor-default font-medium text-2xl"
              >
                Explore art galleries to spark your creativity and expand your
                art perspective.
              </p>
            </div>
            <div class="h-2/5 w-full flex items-start justify-center">
              <input
                type="search"
                name=""
                id=""
                placeholder="Discover the miracle..."
                class="outline-none rounded-full h-1/4 w-3/4"
                style="padding: 0 1.5rem"
              />
            </div>
          </div>
        </div>
      </div>
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