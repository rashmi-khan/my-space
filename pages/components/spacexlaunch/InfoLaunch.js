import ReactPlayer from "react-player";
import useSWR from "swr";

function InfoLaunch() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const url = `https://api.spacexdata.com/v4/launches/latest`;
  const { data:launchData, error } = useSWR(url, fetcher);
  console.log(launchData);
  function renderInfoLaunch() {
      return (
        <div className="container">
          <div className="row">
            <div className="grid grid-cols-2 gap-4">
              <h4 className="text-2xl text-white">
                SpaceX Latest Launch Information
              </h4>
              <h2 className="text-4xl text-white">{launchData.name}</h2>
              <h4 className="text-2xl text-white">Description</h4>
              <p>
                SpaceX Crew-5 was the fifth operational NASA Commercial Crew
                Program flight of a Crew Dragon spacecraft, and the eighth
                overall crewed orbital flight. The mission was successfully
                launched on 5 October 2022, with the aim of transporting four
                crew members to the International Space Station (ISS). The Crew
                Dragon spacecraft docked at the ISS on 6 October 2022 at 21:01
                UTC.
              </p>
              <button>More Info</button>
              <div className="grid grid-cols-2 gap-4">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${launchData.links.youtube_id}`}
                  width="100%"
                  height="415px"
                  controls={true}
                />
              </div>
            </div>
          </div>
        </div>
      );
  }
  if (!launchData)
    return <div className="text-center">Loading launch data...</div>;
  if (error)
    return <div className="text-center">Failed to load lauch data</div>;
  return (
    <section className="text-white">
      {renderInfoLaunch()}
    </section>
  );
}

export default InfoLaunch;
