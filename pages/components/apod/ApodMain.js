import React from "react";

function ApodMain({ image_data }) {
  return (
    <div className="flex flex-column">
      <img src={image_data.url} />
    </div>
  );
}

export default ApodMain;
