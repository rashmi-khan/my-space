import Link from "next/link";

export default function SingleLaunch({ id, name, links, details }) {

    return (
    <Link href={`/launches/${id}`} key={id} className="p-5 bg-stone-900">
      <img src={links.patch.small} alt={name} />
      <h2 className="font-bold text-white mt-5 mb-3 text-xl">{name}</h2>
      {details && (
        <p className="text-white opacity-75">{`${details.substring(0, 50)}...`}</p>
      )}
    </Link>
  );

}
