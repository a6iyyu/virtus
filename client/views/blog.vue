<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="description"
        content="Get exclusive insights into the latest artworks, product launches and most anticipated art events on the Virtus Blog."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Blog</title>
      <link rel="icon" href="../static/img/icon.png" />
      <link rel="stylesheet" href="../static/css/component.css" />
      <link rel="stylesheet" href="../static/css/blog.css" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css"
      />
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
      <!-- <%- include("header") %> -->
      <div class="h-12 w-full"></div>
      <div class="h-fit w-full grid place-items-center">
        <p class="text-gray-900 text-center text-5xl cursor-default font-bold">
          Crafting Stories, Painting Dreams.
        </p>
      </div>
      <div class="h-6 w-full"></div>
      <div class="h-fit w-full grid place-items-center">
        <div class="w-9/10">
          <p
            class="text-gray-900 text-center text-2xl cursor-default font-medium"
          >
            Explore the vibrant world of art, discover artist stories, and
            unleash your creativity with Virtus Blog's inspiring narratives and
            insightful features.
          </p>
        </div>
      </div>
      <div class="h-12 w-full"></div>
      <div class="blog-slides grid place-items-center h-96 w-full">
        <div class="splide splide__1 h-full w-9/10">
          <div class="splide__track h-full py-6">
            <div class="splide__list">
              <!-- <%- include("blog-slider") %> <%- include("blog-slider") %> <%-
              include("blog-slider") %> <%- include("blog-slider") %> <%-
              include("blog-slider") %> <%- include("blog-slider") %> <%-
              include("blog-slider") %> <%- include("blog-slider") %> <%-
              include("blog-slider") %> <%- include("blog-slider") %> -->
            </div>
          </div>
        </div>
      </div>
      <div class="h-16 w-full"></div>
      <div class="filtered-menu grid place-items-center h-20 w-full">
        <div class="splide splide__2 h-full w-9/10">
          <div class="splide__track h-full">
            <div class="splide__list splide__list__2">
              <a class="splide__slide grid place-items-center" href="">
                <div
                  class="filtered-box grid place-items-center h-full w-19/20 overflow-hidden rounded-50px"
                  style="background-color: #ded0b6"
                >
                  <p class="font-bold">All</p>
                </div>
              </a>
              <a class="splide__slide grid place-items-center" href="">
                <div
                  class="filtered-box grid place-items-center h-full w-19/20 overflow-hidden rounded-50px"
                  style="background-color: #ded0b6"
                >
                  <p class="font-bold">Artist</p>
                </div>
              </a>
              <a class="splide__slide grid place-items-center" href="">
                <div
                  class="filtered-box grid place-items-center h-full w-19/20 overflow-hidden rounded-50px"
                  style="background-color: #ded0b6"
                >
                  <p class="font-bold">Company</p>
                </div>
              </a>
              <a class="splide__slide grid place-items-center" href="">
                <div
                  class="filtered-box grid place-items-center h-full w-19/20 overflow-hidden rounded-50px"
                  style="background-color: #ded0b6"
                >
                  <p class="font-bold">Event</p>
                </div>
              </a>
              <a class="splide__slide grid place-items-center" href="">
                <div
                  class="filtered-box grid place-items-center h-full w-19/20 overflow-hidden rounded-50px"
                  style="background-color: #ded0b6"
                >
                  <p class="font-bold">Knowledge</p>
                </div>
              </a>
              <a class="splide__slide grid place-items-center" href="">
                <div
                  class="filtered-box grid place-items-center h-full w-19/20 overflow-hidden rounded-50px"
                  style="background-color: #ded0b6"
                >
                  <p class="font-bold">Recent</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="h-16 w-full"></div>
    </body>
    <!-- <%- include("footer") %> -->
    <script type="text/javascript" src="../static/js/blog.js"></script>
    <script
      type="text/javascript"
      src="../static/js/hamburger-menu.js"
    ></script>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"
    ></script>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-auto-scroll@0.5.3/dist/js/splide-extension-auto-scroll.min.js"
    ></script>
  </html>
</template>