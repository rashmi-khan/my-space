import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function FilmDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const url = `https://api.spacexdata.com/v4/launches/${id}`;
  const { data: singleLaunch, error } = useSWR(url, fetcher);
  
  if (!singleLaunch)
    return <div className="text-center">Loading Launch data...</div>;

  if (error)
    return <div className="text-center">Failed to load Launch data</div>;

  return (
    <>
      <section className="py-32 max-width grid grid-cols-1 gap-10 md:grid-cols-2">
        <article>
          {singleLaunch.links.patch.large ? (
            <img src={singleLaunch.links.patch.large} alt={singleLaunch.name} />
          ) : (
            <img src="https://images2.imgbox.com/40/e3/GypSkayF_o.png" alt="" />
          )}
        </article>

        <article>
          <h1 className="heading">{singleLaunch.name}</h1>
          <h2 className="text-white font-bold text-xl opacity-75 mt-2">
            Launch Date: {new Date(singleLaunch.date_local).toDateString()},{" "}
            {singleLaunch.success ? (
              <span className="text-emerald-500">Successful</span>
            ) : (
              <span className="text-rose-500">Failed</span>
            )}
          </h2>

          <p className="text-white opacity-75 my-10">{singleLaunch.details}</p>

          <ul className="text-white text-sm opacity-75 mb-8">
            <li className="mb-3">
              Fairings:{" "}
              {singleLaunch.fairings
                ? `${singleLaunch.fairings.reused ? "Reused" : "Not Reused"}`
                : "No Fairings Used"}
            </li>
            <li>
              Recovered:{" "}
              {singleLaunch.fairings
                ? `${
                    singleLaunch.fairings.recovered
                      ? "Fairings Recovered"
                      : "Fairings Not Recovered"
                  }`
                : "No Fairings Used"}
            </li>
          </ul>

          <ul className="flex flex-wrap items-center justify-start gap-8">
            <li>
              <a
                href={singleLaunch.links.webcast}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Watch Launch on YouTube
              </a>
            </li>
            <li>
              <Link
                href="/launches"
                className="text-white opacity-75 text-sm hover:opacity-100"
              >
                &larr; Back
              </Link>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}
