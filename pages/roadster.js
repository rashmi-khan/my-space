import React from "react";
import useSWR from "swr";
import { useState } from "react";

function Roadster() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const url = "https://api.spacexdata.com/v4/roadster";
  const { data: data, error } = useSWR(url, fetcher);

  const [img, setImg] = useState(0);

  if (!data) return <div className="text-center">Loading Roadster Data...</div>;

  if (error)
    return <div className="text-center">Failed to get Roadster Data </div>;

    return (
    <section className="py-12 max-width ">
      <h1 className="heading text-center mb-11 ">Tesla Roadster</h1>
      <div>
        <article>
          <div className="flex flex-col">
            <img src={data.flickr_images[img]} alt="Tesla Roadster" />
            <ul className="flex items-center justify-start gap-3 flex-wrap my-4">
              {data.flickr_images.map((image, index) => (
                <li key={index} onClick={() => setImg(index)}>
                  <img src={image} alt="Tesla Roadster" className="w-20" />
                </li>
              ))}
            </ul>
            <div>
              <p className="text-white opacity-75 ">{data.details}</p>
              <ul className="text-white opacity-75 text-sm mt-5 grid gri-cols-1 gap-3 md:grid-cols-2 md:mt-10 ">
                <li>
                  Launch Date: {new Date(data.launch_date_utc).toDateString()}
                </li>
                <li> Lauch Mass: {data.launch_mass_kg} kg</li>
                <li>Days Since Launch: {data.period_days} days</li>
                <li>Speed: {data.speed_kph} kph</li>
                <li>Distance From The Earth: {data.earth_distance_km} km</li>
                <li>
                  <a
                    href={data.wikipedia}
                    className="underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Wikipedia
                  </a>
                </li>
                <li>
                  <a
                    href={data.video}
                    className="underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    YouTube Video
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Roadster;
