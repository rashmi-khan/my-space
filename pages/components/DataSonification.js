import React from "react";

function datasonification() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const url = "/api/sonifications";
  const { data: videos, error } = useSWR(url, fetcher);
  console.log(videos);
  if (!videos)
    return <div className="text-center">Loading Sonification Data...</div>;

  if (error)
    return <div className="text-center">Failed to Sonification Data </div>;

  return (
    <div>
      <h1 className="text-white">DATA</h1>
    </div>
  );
}

export default datasonification;
