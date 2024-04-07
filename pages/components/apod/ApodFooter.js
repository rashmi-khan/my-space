import React from "react";
import { InfoCircledIcon } from "@radix-ui/react-icons";

function ApodFooter(props) {
  const{showImg, handleToggleImage}=props
  return (
    <>
      <div className="bgGradient">
        <h1 className="text-white ">APOD(Astronomy Picture Of the Day)</h1>
        <h4 className="text-white ">The Brutal Martian Planet</h4>
      </div>
      <button onClick={handleToggleImage}className="text-white ">
        <InfoCircledIcon />
      </button>
    </>
  );
}

export default ApodFooter;
