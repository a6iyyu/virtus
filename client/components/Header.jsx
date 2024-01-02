import * as React from "react";
import ReactDOM from "react-dom/client";
import "../static/css/component.css";
import "../static/css/homepage.css";

const Header = () => {
  return (
    <div className="navbar w-full grid place-items-center">
      <div className="h-full w-19/20 flex">
        <div className="h-full w-1/4 grid place-items-center">
          <a href="/" className="logo">
            <img src="img/logo-black.png" alt="Virtus Logo" width="225" />
          </a>
          <a href="/" className="icon">
            <img src="img/icon.png" alt="" width="100" />
          </a>
        </div>
        <div className="h-full w-3/4 flex-center-end">
          <div className="search h-full grid place-items-center">
            <input
              type="search"
              name=""
              id=""
              className="search-box w-9/10 rounded-50px text-sm"
              placeholder="Search"
              style={{ padding: "0 20px" }}
            />
            <div className="search-icon grid place-items-center h-70-px rounded-50px cursor-pointer">
              <img src="img/search.png" alt="" width="35" id="search-icon" />
            </div>
          </div>
          <div className="avatar h-full w-3/40 grid place-items-center">
            <a href="/profile">
              <img src="img/avatar.png" alt="" width="50" />
            </a>
          </div>
          <div className="hamburger-menu-parent z-10 h-full w-3/40 grid place-items-center">
            <abbr title="Menu">
              <input
                type="checkbox"
                name=""
                id="hamburger-menu"
                className="absolute flex h-1-875-r w-1-875-r opacity-0 z-10 cursor-pointer"
              />
              <span className="hamburger-menu bg-d9d9d9"></span>
              <span className="hamburger-menu bg-d9d9d9"></span>
              <span className="hamburger-menu bg-d9d9d9"></span>
            </abbr>
          </div>
        </div>
        <div className="overlay fixed h-full w-1/2 inset-0 z-30"></div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("header")).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);