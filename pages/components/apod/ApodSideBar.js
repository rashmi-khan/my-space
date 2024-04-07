import React from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
function ApodSideBar({ handleToggleImage }) {
  return (
    <div className="sidebar">
      <div onClick={handleToggleImage} className="bgOverlay"></div>
      <div className="sidebarContent">
        <h4 className="text-white ">The Brutal Martian Planet</h4>
        <div className="text-white ">
          <p>Description</p>
          <p>
            dkjnsdhgwyfgbwfhbcbeuifhgerfuiewfiubcsdhjcbshdbfewsuyfewbfbsdcnbshjfcbewuyf
          </p>
        </div>
        <button onClick={handleToggleImage} className="text-white font-bold">
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}

export default ApodSideBar;
