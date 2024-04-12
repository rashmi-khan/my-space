import Link from "next/link";
import React from "react";

function Error() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center notfound  h-screen">
        <div className="notfound bg-repeat">
          <h1 className="text-8xl text-bold text-red-800 mb-6"> 404</h1>
          <h2 className="text-8xl text-sky-400 mb-6">Whoops!</h2>
          <h3 className="text-2xl text-sky-200 mb-11">
            It seems you are lost in space....
          </h3>
          <Link href="/" className="btn text-red-950 ">
            &larr;Back to HomePage
          </Link>
        </div>
      </section>
    </>
  );
}

export default Error;
