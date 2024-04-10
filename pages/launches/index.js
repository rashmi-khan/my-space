import Link from "next/link";
import useSWR from "swr";

export default function Launches() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const url = `https://api.spacexdata.com/v4/launches`;
  const { data: launches, error } = useSWR(url, fetcher);
    console.log(launches)
  if (!launches)
    return <div className="text-center">Loading launch data...</div>;

  if (error)
    return <div className="text-center">Failed to load lauch data</div>;

  return (
    <div>
      <section className="py-32 max-width">
        <h1 className="heading text-center mb-10">Launches</h1>

        <div className="max-width grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-6 px-5">
          {launches.map(({ id, name, links, details }) => (
            <Link href={`/launches/${id}`} key={id} className="p-5 bg-zinc-900">
              {links.patch.small ? (
                <img src={links.patch.small} alt={name} />
              ) : (
                <img
                  src="https://images2.imgbox.com/40/e3/GypSkayF_o.png"
                  alt=""
                />
              )}
              <h2 className="font-bold text-white mt-5 mb-3 text-xl">{name}</h2>
              {details && (
                <p className="text-white opacity-75">{`${details.substring(
                  0,
                  50
                )}...`}</p>
              )}
            </Link>
          ))}
        </div>
      </section>{" "}
    </div>
  );
}
