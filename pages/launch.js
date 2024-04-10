import React from "react";
import ReactPlayer from "react-player";
import InfoLaunch from "./components/spacexlaunch/InfoLaunch";
import HeaderLaunch from "./components/spacexlaunch/HeaderLaunch";
export default function launch() {
  return (
    <div >
      <HeaderLaunch />
      <InfoLaunch />
    </div>
  );
}

