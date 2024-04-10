import ReactPlayer from "react-player";
import useSWR from "swr";

export default function DataSonification() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const url = "/api/sonifications";
  const { data: videos, error } = useSWR(url, fetcher);
  console.log(videos);
  if (!videos)
    return <div className="text-center">Loading Sonification Data...</div>;

  if (error)
    return <div className="text-center">Failed to get Sonification Data </div>;

  return (
    <div>
      <section className=" py-12 max-width datason ">
        <article>
          <h1 className="heading text-center mb-11 ">Listen to the Universe</h1>
          <h2 className="text-white text-center text-2xl font-light pb-11">
            NASA is famous for beautiful space images, but did you know you can
            listen to them?
          </h2>
        </article>

        <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 px-5 text-white">
          {videos.map(({ url, title, description }) => {
            return (
              <div key={url}>
                <ReactPlayer
                  url={url}
                  width="100%"
                  height="400px"
                  controls={true}
                  key={url}
                />
                <div className="text-center ">
                  <h1 className="text-white font-light text-2xl pb-10 pt-10 ">
                    {title}
                  </h1>
                  <p className="text-white opacity-75 line-clamp-3  ">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}