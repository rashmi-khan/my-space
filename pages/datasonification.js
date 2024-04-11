import useSWR from "swr";
import VideoPlayer from "./components/sonifications/VideoPlayer";

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

        <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 px-20">
          {videos.map(({ url, title, description }) => {
            return (
              <VideoPlayer url={url} title={title} description={description} />
            );
          })}
        </div>
      </section>
    </div>
  );
}
