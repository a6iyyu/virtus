<template>
  <router-view class="navbar w-full grid place-items-center">
    <div class="h-full w-19/20 flex">
      <div class="h-full w-1/4 grid place-items-center">
        <router-link :to="{ name: 'homepage' }" class="logo">
          <img
            src="../static/img/logo-black.png"
            alt="Virtus Logo"
            width="225"
          />
        </router-link>
        <router-link :to="{ name: 'homepage' }" class="icon">
          <img src="../static/img/icon.png" alt="" width="100" />
        </router-link>
      </div>
      <div class="h-full w-3/4 flex-center-end">
        <div class="search h-full grid place-items-center">
          <input
            type="search"
            name=""
            id=""
            class="search-box w-9/10 rounded-50px text-sm"
            placeholder="Search"
            style="padding: 0 20px"
          />
          <div
            class="search-icon grid place-items-center h-70-px rounded-50px cursor-pointer"
          >
            <img
              src="../static/img/search.png"
              alt=""
              width="35"
              id="search-icon"
            />
          </div>
        </div>
        <div class="avatar h-full w-3/40 grid place-items-center">
          <router-link :to="{ name: 'not-logged-in' }">
            <img src="../static/img/avatar.png" alt="" width="50" />
          </router-link>
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
  </router-view>
</template>