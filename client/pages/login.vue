<style scoped>
@import "../static/css/component.css";
@import "../static/css/login.css";
</style>

<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login</title>
      <link rel="icon" href="../static/img/icon.png" />
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
      <div
        class="h-full w-1/2"
        style="background-image: linear-gradient(to left, #faeed1, #dac69a)"
      >
        <div class="h-1/6 w-full grid place-items-center">
          <div class="h-full w-9/10 flex">
            <div class="h-full w-2/5 flex items-end justify-center">
              <div class="h-4/5 w-full grid place-items-center">
                <img src="../static/img/logo-black.png" alt="" />
              </div>
            </div>
            <div class="h-full w-3/5 flex items-end justify-start">
              <div class="h-4/5 w-full flex items-center justify-start">
                <div class="vertical"></div>
                <p class="text-gray-950 text-3xl cursor-default font-semibold">
                  &nbsp; Login
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-full w-1/2 grid place-items-center">
        <img src="../static/img/login.png" alt="" width="600" />
      </div>
    </body>
  </html>
</template>