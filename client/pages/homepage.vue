<script setup>
import headerVue from "@/components/header.vue";
import homepageSliderVue from "@/components/homepage-slider.vue";
import homepageSlider2 from "@/components/homepage-slider-2.vue";
import homepageSlider3 from "@/components/homepage-slider-3.vue";
import footerVue from "@/components/footer.vue";
</script>

<style scoped>
@import "../static/css/component.css";
@import "../static/css/homepage.css";
</style>

<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="description"
        content="Discover the beauty of global art on Virtus, a marketplace and free-source that supports skilled artists from around the world. Buy, enjoy, and support their unique creativity now!"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Virtus | Create Your Masterpiece</title>
      <link rel="icon" href="../static/img/icon.png" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-video@0.8.0/dist/css/splide-extension-video.min.css"
      />
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
      <div
        class="preloader fixed inset-0 h-screen w-full grid place-items-center"
      >
        <div class="loader absolute grid place-items-center"></div>
      </div>
      <router-view>
        <headerVue />
      </router-view>
      <div class="tagline w-full grid place-items-center">
        <div class="w-19/20 h-full flex">
          <div class="tagline-parent h-9/10 w-3/5 flex-center-center">
            <div class="tagline-head h-3/5">
              <p class="text-4xl font-bold cursor-default">
                Virtus - Bringing the World's <br class="br1" />
                Art <br class="br2" />
                Masterpieces to You.
              </p>
              <br />
              <p class="text-2xl font-normal cursor-default">
                A Home for Art Connoisseurs to Discover <br class="br1" />
                the Beauty of <br class="br2" />
                the Infinite.
              </p>
              <br /><br /><br />
              <a
                class="find-more font-semibold text-1xl text-white rounded-50px cursor-pointer"
              >
                FIND MORE
              </a>
            </div>
          </div>
          <div class="tagline-vector h-9/10 w-2/5 grid place-items-center">
            <img src="../static/img/artist.png" alt="" width="350" />
          </div>
        </div>
      </div>
      <div class="finish-to-scroll h-12 w-full"></div>
      <div class="filtered-menu grid place-items-center h-20 w-full">
        <div class="splide splide__1 h-full w-9/10">
          <div class="splide__track h-full">
            <div class="splide__list splide__list__1">
              <div class="splide__slide grid place-items-center" href="">
                <div
                  class="filtered-box grid place-items-center h-full w-19/20 overflow-hidden rounded-50px"
                  style="background-color: #ded0b6"
                >
                  <p class="font-bold">For You</p>
                </div>
              </div>
              <div class="splide__slide grid place-items-center" href="">
                <div
                  class="filtered-box grid place-items-center h-full w-19/20 overflow-hidden rounded-50px"
                  style="background-color: #ded0b6"
                >
                  <p class="font-bold">3D</p>
                </div>
              </div>
              <div class="splide__slide grid place-items-center" href="">
                <div
                  class="filtered-box grid place-items-center h-full w-19/20 overflow-hidden rounded-50px"
                  style="background-color: #ded0b6"
                >
                  <p class="font-bold">AI</p>
                </div>
              </div>
              <div class="splide__slide grid place-items-center" href="">
                <div
                  class="filtered-box grid place-items-center h-full w-19/20 overflow-hidden rounded-50px"
                  style="background-color: #ded0b6"
                >
                  <p class="font-bold">Abstract</p>
                </div>
              </div>
              <div class="splide__slide grid place-items-center" href="">
                <div
                  class="filtered-box grid place-items-center h-full w-19/20 overflow-hidden rounded-50px"
                  style="background-color: #ded0b6"
                >
                  <p class="font-bold">Animation</p>
                </div>
              </div>
              <div class="splide__slide grid place-items-center" href="">
                <div
                  class="filtered-box grid place-items-center h-full w-19/20 overflow-hidden rounded-50px"
                  style="background-color: #ded0b6"
                >
                  <p class="font-bold">Character</p>
                </div>
              </div>
              <div class="splide__slide grid place-items-center" href="">
                <div
                  class="filtered-box grid place-items-center h-full w-19/20 overflow-hidden rounded-50px"
                  style="background-color: #ded0b6"
                >
                  <p class="font-bold">Motion Graphics</p>
                </div>
              </div>
              <div class="splide__slide grid place-items-center" href="">
                <div
                  class="filtered-box grid place-items-center h-full w-19/20 overflow-hidden rounded-50px"
                  style="background-color: #ded0b6"
                >
                  <p class="font-bold">Photography</p>
                </div>
              </div>
              <div class="splide__slide grid place-items-center" href="">
                <div
                  class="filtered-box grid place-items-center h-full w-19/20 overflow-hidden rounded-50px"
                  style="background-color: #ded0b6"
                >
                  <p class="font-bold">Vector</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-8 w-full"></div>
      <div class="filtered-result w-full grid place-items-center">
        <div class="h-full w-9/10 block">
          <div class="h-1/2 w-full flex">
            <div
              class="square-image h-full w-9/12 grid place-items-center grid-cols-3"
            >
              <a href="" class="bg-bbab8c h-5/6 w-5/6 rounded-15px"></a>
              <a href="" class="bg-bbab8c h-5/6 w-5/6 rounded-15px"></a>
              <a href="" class="bg-bbab8c h-5/6 w-5/6 rounded-15px"></a>
              <a href="" class="bg-bbab8c h-5/6 w-5/6 rounded-15px"></a>
              <a href="" class="bg-bbab8c h-5/6 w-5/6 rounded-15px"></a>
              <a href="" class="bg-bbab8c h-5/6 w-5/6 rounded-15px"></a>
            </div>
            <div class="long-image h-full w-3/12 grid place-items-center">
              <a href="" class="bg-bbab8c h-9/10 w-9/10 rounded-15px"></a>
            </div>
          </div>
          <div class="h-1/2 w-full flex">
            <div class="long-image h-full w-3/12 grid place-items-center">
              <a href="" class="bg-bbab8c h-9/10 w-9/10 rounded-15px"></a>
            </div>
            <div
              class="square-image h-full w-9/12 grid place-items-center grid-cols-3"
            >
              <a href="" class="bg-bbab8c h-5/6 w-5/6 rounded-15px"></a>
              <a href="" class="bg-bbab8c h-5/6 w-5/6 rounded-15px"></a>
              <a href="" class="bg-bbab8c h-5/6 w-5/6 rounded-15px"></a>
              <a href="" class="bg-bbab8c h-5/6 w-5/6 rounded-15px"></a>
              <a href="" class="bg-bbab8c h-5/6 w-5/6 rounded-15px"></a>
              <a href="" class="bg-bbab8c h-5/6 w-5/6 rounded-15px"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="h-28 w-full grid place-items-center">
        <a
          href="/explore"
          class="more-result bg-bbab8c font-semibold text-1xl text-white rounded-50px cursor-pointer"
          style="box-shadow: 0.5rem 0.5rem 0.5rem #bebebe"
        >
          MORE RESULT
        </a>
      </div>
      <div class="h-8 w-full"></div>
      <div class="community h-80 w-full grid place-items-center">
        <div
          class="h-full w-9/10 flex-center-center rounded-35px"
          style="
            background-image: linear-gradient(to right, #202020, #333333);
            box-shadow: 1rem 1rem 1rem #bebebe;
          "
        >
          <div class="community-tagline h-full w-1/2 grid place-items-center">
            <div class="community-words h-3/4 w-full">
              <p class="text-white text-3xl font-semibold cursor-default">
                Access To Community
              </p>
              <br />
              <p class="text-white text-1xl font-medium cursor-default">
                Experience the transformative power of collaboration and mutual
                inspiration as you delve into Virtus Community Access, forging
                meaningful artistic connections.
              </p>
              <br />
              <br />
              <a
                href="/community"
                class="connect-here font-semibold text-white cursor-pointer"
              >
                Connect Here
              </a>
            </div>
          </div>
          <div class="community-image h-full w-2/5 flex-center-end">
            <img
              src="../static/img/chat.png"
              alt="Community Chat"
              class="text-white"
              height="300"
              width="300"
            />
          </div>
        </div>
      </div>
      <div class="h-8 w-full"></div>
      <div class="h-12 w-full grid place-items-center">
        <div class="top-trending-parent h-full w-9/10 flex items-center">
          <img
            src="../static/img/star.png"
            alt=""
            height="40"
            width="40"
            class="star"
          />
          <p class="text-3xl font-bold cursor-default">
            &nbsp; Top Trending Masterpieces
          </p>
        </div>
      </div>
      <div class="top-trending-words h-8 w-full grid place-items-center">
        <div class="h-full w-9/10 flex items-center">
          <p class="text-1xl font-medium cursor-default">
            Immerse Yourself in Top Trending Masterpieces. Unleash Creativity!
          </p>
        </div>
      </div>
      <div class="h-8 w-full"></div>
      <div class="grid place-items-center h-60 w-full">
        <div class="splide splide__2 h-full w-19/20">
          <div class="splide__track h-full py-4">
            <div class="splide__list">
              <router-view>
                <homepageSliderVue />
              </router-view>
            </div>
          </div>
        </div>
      </div>
      <div class="h-12 w-full"></div>
      <div class="top-artist-parent h-12 w-full grid place-items-center">
        <div class="h-full w-9/10 flex items-center">
          <img
            src="../static/img/artist-icon.png"
            alt=""
            height="40"
            width="40"
            class="star"
          />
          <p class="text-3xl font-bold cursor-default">
            &nbsp; Top Trending Artists
          </p>
        </div>
      </div>
      <div class="top-artist-words h-8 w-full grid place-items-center">
        <div class="h-full w-9/10 flex items-center">
          <p class="text-1xl font-medium cursor-default">
            Canvas of Creativity, Diverse Expressions by Trending Artists.
          </p>
        </div>
      </div>
      <div class="h-8 w-full"></div>
      <div class="grid place-items-center h-60 w-full">
        <div class="splide splide__3 h-full w-19/20">
          <div class="splide__track h-full py-4">
            <div class="splide__list">
              <router-view>
                <homepageSliderVue />
              </router-view>
            </div>
          </div>
        </div>
      </div>
      <div class="h-8 w-full"></div>
      <div class="best-doujins-parent h-12 w-full grid place-items-center">
        <div class="h-full w-9/10 flex items-center">
          <img
            src="../static/img/comic.png"
            alt=""
            height="40"
            width="40"
            class="star"
          />
          <p class="text-3xl font-bold cursor-default">&nbsp; Best Doujins</p>
        </div>
      </div>
      <div class="best-doujins-words h-8 w-full grid place-items-center">
        <div class="h-full w-9/10 flex items-center">
          <p class="text-1xl font-medium cursor-default">
            Selected artworks, unforgettable stories on every page.
          </p>
        </div>
      </div>
      <div class="grid place-items-center h-12-5-r w-full">
        <div class="splide splide__4 h-full w-19/20 grid place-items-center">
          <div class="splide__track h-full w-full">
            <div class="splide__list h-full w-full">
              <router-view>
                <homepageSlider2 />
              </router-view>
            </div>
          </div>
        </div>
      </div>
      <div class="h-8 w-full"></div>
      <div class="livestreaming-parent h-12 w-full grid place-items-center">
        <div class="h-full w-9/10 flex items-center">
          <img
            src="../static/img/livestreaming.png"
            alt=""
            height="40"
            width="40"
            class="star"
          />
          <p class="text-3xl font-bold cursor-default">
            &nbsp; Watch Livestreaming
          </p>
        </div>
      </div>
      <div class="livestreaming-words h-8 w-full grid place-items-center">
        <div class="h-full w-9/10 flex items-center">
          <p class="text-1xl font-medium cursor-default">
            Immerse in the moment, experience art in real-time spectacles.
          </p>
        </div>
      </div>
      <div class="grid place-items-center h-full w-full">
        <div class="splide splide__5 h-95-p w-full grid place-items-center">
          <div class="splide__track h-full w-full grid place-items-center">
            <ul class="splide__list h-full w-full">
              <router-view>
                <homepageSlider3 />
              </router-view>
            </ul>
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
    <script type="text/javascript" src="../static/js/homepage.js"></script>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"
    ></script>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-video@0.8.0/dist/js/splide-extension-video.min.js"
    ></script>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-auto-scroll@0.5.3/dist/js/splide-extension-auto-scroll.min.js"
    ></script>
  </html>
</template>