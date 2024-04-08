import React from "react";
import { InfoCircledIcon } from "@radix-ui/react-icons";

function ApodFooter({ showImg, handleToggleImage, image_data }) {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col justify-items-start">
          <h1 className="text-white text-4xl p-1 uppercase tracking-wide">
            APOD(Astronomy Picture Of the Day)
          </h1>
          <h4 className="text-white text-2xl p-1">{image_data.title}</h4>
        </div>
        <button
          onClick={() => handleToggleImage(true)}
          className="text-white  "
        >
          <InfoCircledIcon />
        </button>
      </div>
    </>
  );
}

export default ApodFooter;
