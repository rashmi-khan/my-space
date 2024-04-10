import ReactPlayer from "react-player";
import useSWR from "swr";

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
      <section className="py-32 max-width">
        <h1 className="heading text-center mb-10">Launches</h1>

        <div className="max-width grid grid-cols-2 gap-1 md:grid-cols-4 lg:grid-cols-6 px-2">
          {videos.map(({url}) => (
            <ReactPlayer
              url={url}
              width="100%"
              height="415px"
              controls={true}
              key={url}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default datasonification;
