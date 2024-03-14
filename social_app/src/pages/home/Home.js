import React from "react";

import "./home.css";
import Topbar from "../../components/topbar/Topbar";
import SlideBar from "../../components/slidebar/SlideBar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";

function home() {
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <SlideBar />
        <Feed />
        <RightBar />
      </div>
    </div>
  );
}

export default home;
