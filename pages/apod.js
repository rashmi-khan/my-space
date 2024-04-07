import React, { useState } from "react";
import ApodMain from "./components/apod/ApodMain";
import ApodFooter from "./components/apod/ApodFooter";
import ApodSideBar from "./components/apod/ApodSideBar";
import useSWR from "swr";
function apod() {
  const NASA_API_KEY=process.env.NEXT_PUBIC_NASA_API_KEY;
  const fetcher=(url)=>fetch(url).then((res)=>res.json());
  const url=`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
  const {data:image_data,error} = useSWR(url,fetcher)
  const [showImg, setshowImg] = useState(false);
  function handleToggleImage(){
    setshowImg(!showImg)
  }
  console.log('api is ',NASA_API_KEY )
  console.log(image_data)
  console.log(error)
  return (
    <>
      <ApodMain />
      {showImg && <ApodSideBar handleToggleImage={handleToggleImage} />}
      <ApodFooter handleToggleImage={handleToggleImage} />
    </>
  );
}

export default apod;
