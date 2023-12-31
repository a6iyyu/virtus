import * as React from "react";
import ReactDOM from "react-dom/client";

const SVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="inset-0"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#121212"
        fill-opacity="1"
        d="M0,224L24,202.7C48,181,96,139,144,128C192,117,240,139,288,138.7C336,139,384,117,432,138.7C480,160,528,224,576,218.7C624,213,672,139,720,117.3C768,96,816,128,864,154.7C912,181,960,203,1008,186.7C1056,171,1104,117,1152,85.3C1200,53,1248,43,1296,48C1344,53,1392,75,1416,85.3L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
      ></path>
    </svg>
  );
}

const Footer = () => {
  return (
    <footer className="h-96 w-full grid place-items-center">
      <div className="footer-parent h-full w-9/10 flex-center-center">
        <div className="footer-description h-full w-2/5 block">
          <img src="img/logo-white.png" alt="Virtus Logo" width="225" />
          <p className="text-white text-1xl cursor-default font-semibold">
            Discover beauty through our original artworks, ranging from
            paintings to digital creations.
          </p>
          <br />
          <div className="social-media h-fit w-full flex items-center justify-between">
            <a href="https://www.facebook.com">
              <img src="img/facebook.png" alt="" width="40" />
            </a>
            <a href="https://www.instagram.com/virtus.net">
              <img src="img/instagram.png" alt="" width="30" />
            </a>
            <a href="https://www.tiktok.com/@virtusnet">
              <img src="img/tiktok.png" alt="" width="30" />
            </a>
            <a href="https://www.twitter.com/VirtusNet">
              <img src="img/x.png" alt="" width="30" />
            </a>
            <a href="https://www.youtube.com">
              <img src="img/youtube.png" alt="" width="35" />
            </a>
          </div>
          <br />
          <p className="text-white text-1xl font-medium cursor-default">
            &copy; Natic Inc. 2024
          </p>
        </div>
        <div className="footer-menu h-full w-3/5 flex">
          <div className="h-full w-1/3 grid place-items-center">
            <div className="h-5/6 w-2/3">
              <p className="h-1/5 w-full text-2xl text-white grid place-items-center font-semibold cursor-default">
                Company
              </p>
              <div className="h-3/5 w-full grid place-items-center cursor-default">
                <a
                  href="/about-us"
                  className="block cursor-pointer font-medium py-2 text-white w-fit"
                >
                  About Us
                </a>
                <a
                  href="/blog"
                  className="block cursor-pointer font-medium py-2 text-white w-fit"
                >
                  Blog
                </a>
                <a
                  href="/services"
                  className="block cursor-pointer font-medium py-2 text-white w-fit"
                >
                  Services
                </a>
                <a
                  href="/terms-and-privacy"
                  className="block cursor-pointer font-medium py-2 text-white w-fit"
                >
                  Terms & Privacy
                </a>
              </div>
            </div>
          </div>
          <div className="h-full w-1/3 grid place-items-center">
            <div className="h-5/6 w-2/3">
              <p className="h-1/5 w-full text-2xl text-white grid place-items-center font-semibold cursor-default">
                Collection
              </p>
              <div className="h-3/5 w-full grid place-items-center cursor-default">
                <a
                  href="/explore"
                  className="block cursor-pointer font-medium py-2 text-white w-fit"
                >
                  Explore
                </a>
                <a
                  href="/limited-editions"
                  className="block cursor-pointer font-medium py-2 text-white w-fit"
                >
                  Limited Editions
                </a>
                <a
                  href="/profile"
                  className="block cursor-pointer font-medium py-2 text-white w-fit"
                >
                  Profile
                </a>
                <a
                  href="/saved"
                  className="block cursor-pointer font-medium py-2 text-white w-fit"
                >
                  Saved
                </a>
              </div>
            </div>
          </div>
          <div className="h-full w-1/3 grid place-items-center">
            <div className="h-5/6 w-2/3">
              <p className="h-1/5 w-full text-2xl text-white grid place-items-center font-semibold cursor-default">
                Support
              </p>
              <div className="h-9/20 w-full grid place-items-center cursor-default">
                <a
                  href="/analytics"
                  className="block cursor-pointer font-medium py-2 text-white w-fit"
                >
                  Analytics
                </a>
                <a
                  href="/careers"
                  className="block cursor-pointer font-medium py-2 text-white w-fit"
                >
                  Careers
                </a>
                <a
                  href="/help-center"
                  className="block cursor-pointer font-medium py-2 text-white w-fit"
                >
                  Help Center
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

ReactDOM.createRoot(document.getElementById("footer")).render(
  <React.StrictMode>
    <SVG />
    <Footer />
  </React.StrictMode>
);