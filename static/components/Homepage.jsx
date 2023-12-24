import React from "react";
import Header from "./Header";
import { Footer, SVG } from "./footer";
import Helmet from "react-helmet";

const Head = () => {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="description"
        content="Discover the beauty of global art on Virtus, a marketplace and free-source that supports skilled artists from around the world. Buy, enjoy, and support their unique creativity now!"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Virtus | Create Your Masterpiece</title>
      <link rel="icon" href="img/icon.png" />
      <link rel="stylesheet" href="css/component.css" />
      <link rel="stylesheet" href="css/homepage.css" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-video@0.8.0/dist/css/splide-extension-video.min.css"
      />
      <script src="https://cdn.tailwindcss.com"></script>
    </Helmet>
  );
};

const Body = () => {
  return (
    <body>
      <div className="preloader fixed inset-0 h-screen w-full grid place-items-center">
        <div className="loader absolute grid place-items-center"></div>
      </div>
      <Header />
      <div className="tagline w-full grid place-items-center">
        <div className="w-19/20 h-full flex">
          <div className="tagline-parent h-9/10 w-3/5 flex-center-center">
            <div className="tagline-head h-3/5">
              <p className="text-4xl font-bold cursor-default">
                Virtus - Bringing the World's <br className="br1" />
                Art <br className="br2" />
                Masterpieces to You.
              </p>
              <br />
              <p className="text-2xl font-normal cursor-default">
                A Home for Art Connoisseurs to Discover <br className="br1" />
                the Beauty of <br className="br2" />
                the Infinite.
              </p>
              <br />
              <br />
              <br />
              <a className="find-more font-semibold text-1xl text-white rounded-50px cursor-pointer">
                FIND MORE
              </a>
            </div>
          </div>
          <div className="tagline-vector h-9/10 w-2/5 grid place-items-center">
            <img src="img/artist.png" alt="" width="350" />
          </div>
        </div>
      </div>
      <div className="finish-to-scroll h-12 w-full"></div>
      <div className="filtered-menu grid place-items-center h-20 w-full">
        <div className="splide splide__1 h-full w-9/10">
          <div className="splide__track h-full">
            <div className="splide__list splide__list__1">
              <a className="splide__slide grid place-items-center" href="">
                <div
                  className="img_box filtered-box grid place-items-center h-full w-19/20 overflow-hidden rounded-50px"
                  style="background-color: #ded0b6"
                >
                  <p className="font-bold">For You</p>
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div
                  className="img_box filtered-box grid place-items-center h-full w-19/20 overflow-hidden rounded-50px"
                  style="background-color: #ded0b6"
                >
                  <p className="font-bold">3D</p>
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div
                  className="img_box filtered-box grid place-items-center h-full w-19/20 overflow-hidden rounded-50px"
                  style="background-color: #ded0b6"
                >
                  <p className="font-bold">AI</p>
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div
                  className="img_box filtered-box grid place-items-center h-full w-19/20 overflow-hidden rounded-50px"
                  style="background-color: #ded0b6"
                >
                  <p className="font-bold">Abstract</p>
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div
                  className="img_box filtered-box grid place-items-center h-full w-19/20 overflow-hidden rounded-50px"
                  style="background-color: #ded0b6"
                >
                  <p className="font-bold">Animation</p>
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div
                  className="img_box filtered-box grid place-items-center h-full w-19/20 overflow-hidden rounded-50px"
                  style="background-color: #ded0b6"
                >
                  <p className="font-bold">Character</p>
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div
                  className="img_box filtered-box grid place-items-center h-full w-19/20 overflow-hidden rounded-50px"
                  style="background-color: #ded0b6"
                >
                  <p className="font-bold">Motion Graphics</p>
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div
                  className="img_box filtered-box grid place-items-center h-full w-19/20 overflow-hidden rounded-50px"
                  style="background-color: #ded0b6"
                >
                  <p className="font-bold">Photography</p>
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div
                  className="img_box filtered-box grid place-items-center h-full w-19/20 overflow-hidden rounded-50px"
                  style="background-color: #ded0b6"
                >
                  <p className="font-bold">Vector</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-8 w-full"></div>
      <div className="filtered-result w-full grid place-items-center">
        <div className="h-full w-9/10 block">
          <div className="h-1/2 w-full flex">
            <div className="square-image h-full w-9/12 grid place-items-center grid-cols-3">
              <a href="" className="bg-bbab8c h-5/6 w-5/6 rounded-15px"></a>
              <a href="" className="bg-bbab8c h-5/6 w-5/6 rounded-15px"></a>
              <a href="" className="bg-bbab8c h-5/6 w-5/6 rounded-15px"></a>
              <a href="" className="bg-bbab8c h-5/6 w-5/6 rounded-15px"></a>
              <a href="" className="bg-bbab8c h-5/6 w-5/6 rounded-15px"></a>
              <a href="" className="bg-bbab8c h-5/6 w-5/6 rounded-15px"></a>
            </div>
            <div className="long-image h-full w-3/12 grid place-items-center">
              <a href="" className="bg-bbab8c h-9/10 w-9/10 rounded-15px"></a>
            </div>
          </div>
          <div className="h-1/2 w-full flex">
            <div className="long-image h-full w-3/12 grid place-items-center">
              <a href="" className="bg-bbab8c h-9/10 w-9/10 rounded-15px"></a>
            </div>
            <div className="square-image h-full w-9/12 grid place-items-center grid-cols-3">
              <a href="" className="bg-bbab8c h-5/6 w-5/6 rounded-15px"></a>
              <a href="" className="bg-bbab8c h-5/6 w-5/6 rounded-15px"></a>
              <a href="" className="bg-bbab8c h-5/6 w-5/6 rounded-15px"></a>
              <a href="" className="bg-bbab8c h-5/6 w-5/6 rounded-15px"></a>
              <a href="" className="bg-bbab8c h-5/6 w-5/6 rounded-15px"></a>
              <a href="" className="bg-bbab8c h-5/6 w-5/6 rounded-15px"></a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-28 w-full grid place-items-center">
        <a
          href="/explore"
          className="more-result bg-bbab8c font-semibold text-1xl text-white rounded-50px cursor-pointer"
        >
          MORE RESULT
        </a>
      </div>
      <div className="h-8 w-full"></div>
      <div className="community h-80 w-full grid place-items-center">
        <div
          className="h-full w-9/10 flex-center-center rounded-35px"
          style="background-image: linear-gradient(to right, #202020, #333333)"
        >
          <div className="community-tagline h-full w-1/2 grid place-items-center">
            <div className="community-words h-3/4 w-full">
              <p className="text-white text-3xl font-semibold cursor-default">
                Access To Community
              </p>
              <br />
              <p className="text-white text-1xl font-medium cursor-default">
                Experience the transformative power of collaboration and mutual
                inspiration as you delve into Virtus Community Access, forging
                meaningful artistic connections.
              </p>
              <br />
              <br />
              <a
                href="/community"
                className="connect-here font-semibold text-white cursor-pointer"
              >
                Connect Here
              </a>
            </div>
          </div>
          <div className="community-image h-full w-2/5 flex-center-end">
            <img
              src="img/chat.png"
              alt="Community Chat"
              className="text-white"
              height="300"
              width="300"
            />
          </div>
        </div>
      </div>
      <div className="h-8 w-full"></div>
      <div className="h-12 w-full grid place-items-center">
        <div className="top-trending-parent h-full w-9/10 flex items-center">
          <img
            src="img/star.png"
            alt=""
            height="40"
            width="40"
            className="star"
          />
          <p className="text-3xl font-bold cursor-default">
            &nbsp; Top Trending Masterpieces
          </p>
        </div>
      </div>
      <div className="top-trending-words h-8 w-full grid place-items-center">
        <div className="h-full w-9/10 flex items-center">
          <p className="text-1xl font-medium cursor-default">
            Immerse Yourself in Top Trending Masterpieces. Unleash Creativity!
          </p>
        </div>
      </div>
      <div className="h-8 w-full"></div>
      <div className="grid place-items-center h-60 w-full">
        <div className="splide splide__2 h-full w-19/20">
          <div className="splide__track h-full">
            <div className="splide__list">
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box bg-bbab8c grid place-items-center h-full w-19/20 overflow-hidden rounded-50px">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box bg-bbab8c grid place-items-center h-full w-19/20 overflow-hidden rounded-50px">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box bg-bbab8c grid place-items-center h-full w-19/20 overflow-hidden rounded-50px">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box bg-bbab8c grid place-items-center h-full w-19/20 overflow-hidden rounded-50px">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box bg-bbab8c grid place-items-center h-full w-19/20 overflow-hidden rounded-50px">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box bg-bbab8c grid place-items-center h-full w-19/20 overflow-hidden rounded-50px">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box bg-bbab8c grid place-items-center h-full w-19/20 overflow-hidden rounded-50px">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box bg-bbab8c grid place-items-center h-full w-19/20 overflow-hidden rounded-50px">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box bg-bbab8c grid place-items-center h-full w-19/20 overflow-hidden rounded-50px">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-12 w-full"></div>
      <div className="top-artist-parent h-12 w-full grid place-items-center">
        <div className="h-full w-9/10 flex items-center">
          <img
            src="img/artist-icon.png"
            alt=""
            height="40"
            width="40"
            className="star"
          />
          <p className="text-3xl font-bold cursor-default">
            &nbsp; Top Trending Artists
          </p>
        </div>
      </div>
      <div className="top-artist-words h-8 w-full grid place-items-center">
        <div className="h-full w-9/10 flex items-center">
          <p className="text-1xl font-medium cursor-default">
            Canvas of Creativity, Diverse Expressions by Trending Artists.
          </p>
        </div>
      </div>
      <div className="h-8 w-full"></div>
      <div className="grid place-items-center h-60 w-full">
        <div className="splide splide__3 h-full w-19/20">
          <div className="splide__track h-full">
            <div className="splide__list">
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box bg-bbab8c grid place-items-center h-full w-19/20 overflow-hidden rounded-50px">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box bg-bbab8c grid place-items-center h-full w-19/20 overflow-hidden rounded-50px">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box bg-bbab8c grid place-items-center h-full w-19/20 overflow-hidden rounded-50px">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box bg-bbab8c grid place-items-center h-full w-19/20 overflow-hidden rounded-50px">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box bg-bbab8c grid place-items-center h-full w-19/20 overflow-hidden rounded-50px">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box bg-bbab8c grid place-items-center h-full w-19/20 overflow-hidden rounded-50px">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box bg-bbab8c grid place-items-center h-full w-19/20 overflow-hidden rounded-50px">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box bg-bbab8c grid place-items-center h-full w-19/20 overflow-hidden rounded-50px">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box bg-bbab8c grid place-items-center h-full w-19/20 overflow-hidden rounded-50px">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-8 w-full"></div>
      <div className="best-doujins-parent h-12 w-full grid place-items-center">
        <div className="h-full w-9/10 flex items-center">
          <img
            src="img/comic.png"
            alt=""
            height="40"
            width="40"
            className="star"
          />
          <p className="text-3xl font-bold cursor-default">
            &nbsp; Best Doujins
          </p>
        </div>
      </div>
      <div className="best-doujins-words h-8 w-full grid place-items-center">
        <div className="h-full w-9/10 flex items-center">
          <p className="text-1xl font-medium cursor-default">
            Selected artworks, unforgettable stories on every page.
          </p>
        </div>
      </div>
      <div className="grid place-items-center h-12-5-r w-full">
        <div className="splide splide__4 h-full w-19/20 grid place-items-center">
          <div className="splide__track h-full w-full">
            <div className="splide__list h-full w-full">
              <a
                className="splide__slide h-full w-full grid place-items-center"
                href=""
              >
                <div className="img_box img_box_4 bg-bbab8c grid place-items-center h-9/10 w-19/20 overflow-hidden">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box img_box_4 bg-bbab8c grid place-items-center h-9/10 w-19/20 overflow-hidden">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box img_box_4 bg-bbab8c grid place-items-center h-9/10 w-19/20 overflow-hidden">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box img_box_4 bg-bbab8c grid place-items-center h-9/10 w-19/20 overflow-hidden">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box img_box_4 bg-bbab8c grid place-items-center h-9/10 w-19/20 overflow-hidden">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box img_box_4 bg-bbab8c grid place-items-center h-9/10 w-19/20 overflow-hidden">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box img_box_4 bg-bbab8c grid place-items-center h-9/10 w-19/20 overflow-hidden">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box img_box_4 bg-bbab8c grid place-items-center h-9/10 w-19/20 overflow-hidden">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
              <a className="splide__slide grid place-items-center" href="">
                <div className="img_box img_box_4 bg-bbab8c grid place-items-center h-9/10 w-19/20 overflow-hidden">
                  <img src="" alt="" width="100" className="rounded-50px" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-8 w-full"></div>
      <div className="livestreaming-parent h-12 w-full grid place-items-center">
        <div className="h-full w-9/10 flex items-center">
          <img
            src="img/livestreaming.png"
            alt=""
            height="40"
            width="40"
            className="star"
          />
          <p className="text-3xl font-bold cursor-default">
            &nbsp; Watch Livestreaming
          </p>
        </div>
      </div>
      <div className="livestreaming-words h-8 w-full grid place-items-center">
        <div className="h-full w-9/10 flex items-center">
          <p className="text-1xl font-medium cursor-default">
            Immerse in the moment, experience art in real-time spectacles.
          </p>
        </div>
      </div>
      <div className="grid place-items-center h-full w-full">
        <div className="splide splide__5 h-95-p w-full grid place-items-center">
          <div className="splide__track h-full w-full grid place-items-center">
            <ul className="splide__list h-full w-full">
              <li
                className="splide__slide rounded-15px"
                data-splide-youtube="https://www.youtube.com/watch?v=cdz__ojQOuU"
              >
                <img src="https://cf.ltkcdn.net/dogs/images/orig/235430-2000x1332-australian-shepherd-puppy.jpg" />
              </li>
              <li
                className="splide__slide rounded-15px"
                data-splide-youtube="https://www.youtube.com/watch?v=cdz__ojQOuU"
              >
                <img src="https://cf.ltkcdn.net/dogs/images/orig/235430-2000x1332-australian-shepherd-puppy.jpg" />
              </li>
              <li
                className="splide__slide rounded-15px"
                data-splide-youtube="https://www.youtube.com/watch?v=cdz__ojQOuU"
              >
                <img src="https://cf.ltkcdn.net/dogs/images/orig/235430-2000x1332-australian-shepherd-puppy.jpg" />
              </li>
              <li
                className="splide__slide rounded-15px"
                data-splide-youtube="https://www.youtube.com/watch?v=cdz__ojQOuU"
              >
                <img src="https://cf.ltkcdn.net/dogs/images/orig/235430-2000x1332-australian-shepherd-puppy.jpg" />
              </li>
              <li
                className="splide__slide rounded-15px"
                data-splide-youtube="https://www.youtube.com/watch?v=cdz__ojQOuU"
              >
                <img src="https://cf.ltkcdn.net/dogs/images/orig/235430-2000x1332-australian-shepherd-puppy.jpg" />
              </li>
              <li
                className="splide__slide rounded-15px"
                data-splide-youtube="https://www.youtube.com/watch?v=cdz__ojQOuU"
              >
                <img src="https://cf.ltkcdn.net/dogs/images/orig/235430-2000x1332-australian-shepherd-puppy.jpg" />
              </li>
              <li
                className="splide__slide rounded-15px"
                data-splide-youtube="https://www.youtube.com/watch?v=cdz__ojQOuU"
              >
                <img src="https://cf.ltkcdn.net/dogs/images/orig/235430-2000x1332-australian-shepherd-puppy.jpg" />
              </li>
              <li
                className="splide__slide rounded-15px"
                data-splide-youtube="https://www.youtube.com/watch?v=cdz__ojQOuU"
              >
                <img src="https://cf.ltkcdn.net/dogs/images/orig/235430-2000x1332-australian-shepherd-puppy.jpg" />
              </li>
              <li
                className="splide__slide rounded-15px"
                data-splide-youtube="https://www.youtube.com/watch?v=cdz__ojQOuU"
              >
                <img src="https://cf.ltkcdn.net/dogs/images/orig/235430-2000x1332-australian-shepherd-puppy.jpg" />
              </li>
              <li
                className="splide__slide rounded-15px"
                data-splide-youtube="https://www.youtube.com/watch?v=cdz__ojQOuU"
              >
                <img src="https://cf.ltkcdn.net/dogs/images/orig/235430-2000x1332-australian-shepherd-puppy.jpg" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </body>
  );
};

const Homepage = () => {
  return (
    <div>
      <Head />
      <Header />
      <Body />
      <SVG />
      <Footer />
    </div>
  )
}

export default Homepage;