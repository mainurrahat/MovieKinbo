import React from "react";

import trending from "../assets/trending.svg";
import newRelease from "../assets/newRelease.svg";
import comingSoon from "../assets/commingSoon.svg";
import favourite from "../assets/favourite.svg";
import watchLater from "../assets/watchLater.svg";

const Sidebar = () => {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="#"
          >
            <img src={trending} width="24" height="24" alt="Trending" />
            <span>Trending</span>
          </a>
        </li>

        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={newRelease} width="24" height="24" alt="New Releases" />
            <span>New Releases</span>
          </a>
        </li>

        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={comingSoon} width="24" height="24" alt="Coming Soon" />
            <span>Coming Soon</span>
          </a>
        </li>

        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={favourite} width="24" height="24" alt="Favourites" />
            <span>Favourites</span>
          </a>
        </li>

        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={watchLater} width="24" height="24" alt="Watch Later" />
            <span>Watch Later</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
