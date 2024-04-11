import React, { useState } from "react";
import MainImage from "./components/apod/MainImage";
import Footer from "./components/apod/Footer";
import Details from "./components/apod/Details";
import useSWR from "swr";

function Apod() {
  const NASA_API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;
  const { data: image_data,error } = useSWR(url, fetcher);

  const [showDetail, setShowDetail] = useState(false);
  
  function handleToggleDetail() {
    setShowDetail(!showDetail);
  }
  

  return (
    <>
      { image_data? <MainImage  image_data={image_data}  /> : <h1 className="text-white">Loading....</h1>}
      {showDetail && <Details handleToggleDetail={handleToggleDetail} image_data={image_data}/>}
      {image_data && <Footer handleToggleDetail={handleToggleDetail} image_data={image_data}/>}
    </>
  );
}

export default Apod;
