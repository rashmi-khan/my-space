import useSWR from "swr";
import SingleLaunch from "../components/launches/SingleLaunch";

export default function Launches() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const url = `https://api.spacexdata.com/v4/launches`;
  const { data: launches, error } = useSWR(url, fetcher);
  console.log(launches);
  if (!launches)
    return <div className="text-center">Loading launch data...</div>;

  if (error)
    return <div className="text-center">Failed to load lauch data</div>;

  return (
    <div className="launches bg-repeat">
      <section className="py-12 max-width ">
        <h1 className="heading text-center mb-10">Launches</h1>

        <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 px-20">
          {launches.slice(0,16).map(({ id, name, links, details }) => 
            <SingleLaunch id={id} name={name} links={links} details={details} key={id} />
          )}
        </div>
      </section>
    </div>
  );
}
