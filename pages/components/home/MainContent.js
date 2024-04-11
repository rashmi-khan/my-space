

import useSWR from "swr";
import NasaAbout from "./NasaAbout";
import NasaDetails from "./NasaDetails";

export default function MainContent() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const url = "https://api.spacexdata.com/v4/company";
  const { data: company, error } = useSWR(url, fetcher);
  if (!company)
    return <div className="text-center">Loading company data...</div>;
  if (error)
    return <div className="text-center">Failed to load company data</div>;
  return (
    <>
      <section className="showcase">
        <div className="overlay">
          <article className="text-white">
            <h1 className="heading text-center capitalize mb-15">
              Explore SPACE
            </h1>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto mt-10 lg:gap-20 px-5">
              <NasaAbout/>
              <NasaDetails/>
              <article>
                <ul>
                  <h2 className="font-bold border-b-2 border-white text-xl mb-3 pb-2 uppercase tracking-wider">
                    About{" "}
                  </h2>
                  <li className="mb-1">{company.name} was founded by</li>
                  <li className="mb-1">{company.founder} in the year</li>
                  <li className="mb-1">{company.founded}.</li>
                </ul>
              </article>
              <article>
                <h2 className="font-bold border-b-2 border-white text-xl mb-3 pb-2 uppercase tracking-wider">
                  Details{" "}
                </h2>
                <p>{company.summary}</p>
              </article>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
