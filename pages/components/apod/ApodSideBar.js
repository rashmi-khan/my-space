import React from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
function ApodSideBar({ handleToggleImage,image_data }) {
  return (
    <div className="sidebar text-white">
      <div onClick={handleToggleImage} className="bgOverlay"></div>
      <div className="sidebarContent">
        <h1 className="">{image_data.title}</h1>
        <h2 className="text-white">Description </h2> 
        <p>{image_data.explanation}</p>
        <button onClick={handleToggleImage} className="text-white font-bold">
          <ArrowRightIcon size={22}/>
        </button>
      </div>
    </div>
  );
}

export default ApodSideBar;
