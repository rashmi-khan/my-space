// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const urls = [
    {
      title: "The Mice Galaxies",
      url: "https://www.youtube.com/watch?v=KzwBOJi0PA4",
      description:
        "The Mice Galaxies are a colliding pair of galaxies, that will eventually merge into a single galaxy. They’re located about 300 million light-years away in the constellation Coma Berenices.",
    },
    {
      title: "ARP 140",
      url: "https://www.youtube.com/watch?v=urmFYr2GJHE",
      description:
        "This data sonification of Arp 140 shows a pair of interacting galaxies. The leftmost galaxy is a barred spiral galaxy known as NGC 275, and the right-side galaxy is a lenticular galaxy called NGC 274.",
    },
  ];

  // "https://www.youtube.com/watch?v=urmFYr2GJHE",

  res.status(200).json(urls);
}
