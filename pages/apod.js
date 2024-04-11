import React, { useState } from "react";
import ApodMain from "./components/apod/ApodMain";
import ApodFooter from "./components/apod/ApodFooter";
import ApodSideBar from "./components/apod/ApodSideBar";
import useSWR from "swr";

function Apod() {
  const NASA_API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;
  const { data: image_data,error } = useSWR(url, fetcher);

  const [showImg, setshowImg] = useState(false);
  function handleToggleImage() {
    setshowImg(!showImg);
  }
  

  return (
    <>
      { image_data? <ApodMain  image_data={image_data}  /> : <h1 className="text-white">Loading....</h1>}
      {showImg && <ApodSideBar handleToggleImage={handleToggleImage} image_data={image_data}/>}
      {image_data && <ApodFooter handleToggleImage={handleToggleImage} image_data={image_data}/>}
    </>
  );
}

export default Apod;
