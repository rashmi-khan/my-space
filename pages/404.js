import Link from "next/link";
import React from "react";

function Error() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center h-screen">
        <h1 className="text-2xl text-white p-6">Error 404: Page Not Found</h1>
        <Link href="/" className="btn">
          &larr;Back to HomePage
        </Link>
      </section>
    </>
  );
}

export default Error;
