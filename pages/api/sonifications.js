export default function handler(req, res) {
  const urls = [
    {
      title: "Listen to the Universe (Documentary Trailer)",
      url: "https://www.youtube.com/watch?v=FmzZFEYVfEw&t=29s",
      description:
        "NASA is famous for beautiful space images, but did you know you can listen to them? Go behind the scenes with the team that creates “sonifications,” translations of data into sound, and learn how meaningful they are to people who are blind or low-vision. ",
    },

    {
      title: "Sonification of Ghostly Cosmic Hand",
      url: "https://www.youtube.com/watch?v=FGs7jjM2UHo",
      description:
        "MSH 15-52 is a cloud of energized particles blown away from a dead, collapsed star. This image includes X-rays from the Imaging X-ray Polarimetry Explorer, or IXPE, (purple) as well as Chandra (orange, green, and blue). These data have been combined with infrared data from the Dark Energy Plane Survey 2 (red and blue).",
    },

    {
      title: "Sonification of Phantom Galaxy",
      url: "https://www.youtube.com/watch?v=2dgle5maku8",
      description:
        "Messier 74 is a spiral galaxy like our Milky Way, which is seen face-on from Earth’s vantage point some 32 million light-years away. X-rays from Chandra (purple) have been combined with an infrared view of M74 from NASA’s James Webb Space Telescope (green, yellow, red, and magenta) as well as optical data from NASA’s Hubble Space Telescope (orange, cyan, and blue). In sonifying these data, a clockwise-moving radar-like scan starts around 12 o’clock.",
    },

    {
      title: "Sonification of Jellyfish Nebula",
      url: "https://www.youtube.com/watch?v=NqBfQeJqkfU&t=1s",
      description:
        "IC 443 is a supernova remnant, or the debris of an exploded star, which astronomers have nicknamed the Jellyfish Nebula. A visual composite image of IC 443 includes X-rays from NASA’s Chandra X-ray Observatory and German ROSAT X-ray telescope (blue) along with radio data from the NSF’s Very Large Array (green) and optical data from the Digitized Sky Survey (red). The sonification of IC 443 begins with a top-down scan as the brightness of the data is correlated to the volume of the sound.",
    },

    {
      title: "Butterfly Nebula",
      url: "https://www.youtube.com/watch?v=GR_KWvtyUbM&t=1s",
      description:
        "This spectacular Hubble image of the Butterfly Nebula shows a colorful view of star death. The wings of the butterfly are regions of gas heated to more than 36,000° F (about 20,000° C) that are tearing across space at more than 600,000 miles an hour (966,000 kph)!",
    },

    {
      title: "Abell 370",
      url: "https://www.youtube.com/watch?v=zMxFM0KXrO0&t=5s",
      description:
        "Several hundred galaxies reside within the core of galaxy cluster Abell 370, located approximately 4 billion light-years away from Earth. The mass of the galaxies distorts space, and magnifies and bends the light coming from distant background galaxies. This effect, called gravitational lensing, makes it possible to see extremely distant objects.",
    },
    {
      title: "Cosmic Reef",
      url: "https://youtube.com/watch?v=8l44_uOS0RQ",
      description:
        "Hubbles 30th anniversary image of the Cosmic Reef shows two nebulae, NGC 2014 and NGC 2020. Located in the Large Magellanic Cloud, a satellite galaxy to our own Milky Way, the Cosmic Reef is 163,000 light-years away",
    },
    {
      title: "Twin Galaxies AM 2026-424",
      url: "https://www.youtube.com/watch?v=IHdLGA146sg&t=14s",
      description:
        "This Hubble image of two galaxies colliding resembles a face. The “eyes” are the bright cores of the two galaxies, and the outline of the face is a ring of young, blue stars.",
    },

    {
      title: "Lensing Galaxy Cluster",
      url: "https://www.youtube.com/watch?v=H-Ci_YwfH04&t=1s",
      description:
        "The immense gravity created by massive clusters of galaxies can distort and magnify the light of much farther objects behind them, an effect called gravitational lensing.",
    },

    {
      title: "Caldwell 73",
      url: "https://youtube.com/watch?v=NiwUc0Lxak8",
      description:
        "Located 40,000 light-years from Earth in the constellation Columba, this globular cluster is called Caldwell 73 or NGC 1851. A globular cluster is a spherical group of stars that are gravitationally bound to each other, with most of the stars concentrated at the cluster’s center.",
    },

    {
      title: "Hoag's Object",
      url: "https://youtube.com/watch?v=Xo3HajfkrKQ",
      description:
        "Stretching over 100,000 light-years across, the galaxy dubbed Hoag’s Object is slightly larger than our own home galaxy, the Milky Way. The blue ring is dominated by clusters of young, massive stars, while the yellow nucleus consists of mostly older stars. In this sonification, a clockwise radar scan transforms data in the image into sound. Bright light is represented with louder volume, and light farther from the center is higher-pitched.",
    },
    {
      title: "Cat's Eye Nebula",
      url: "https://youtube.com/watch?v=HfFoUWm3NDA",
      description:
        "When a star like the Sun begins to run out of helium to burn, it will blow off huge clouds of gas and dust. These outbursts can form spectacular structures such as the one seen in the Cat's Eye Nebula. ",
    },

    {
      title: "The Whirlpool Galaxy",
      url: "https://www.youtube.com/watch?v=kM2_Zq7DqUo",
      description:
        "The Whirlpool Galaxy (M51) is named for its face-on orientation to Earth, which reveals its winding spiral arms. The sonification begins at the top of the image and moves radially around the image in a clockwise direction. For more information on this sonification, visit the Chandra Observatory's sonification page.",
    },
    {
      title: "The Mice Galaxies",
      url: "https://www.youtube.com/watch?v=KzwBOJi0PA4",
      description:
        "The Mice Galaxies are a colliding pair of galaxies, that will eventually merge into a single galaxy. They’re located about 300 million light-years away in the constellation Coma Berenices.",
    },

    {
      title: "Pillars of Creation",
      url: "https://youtube.com/watch?v=ayAYDVvjs_E",
      description:
        "These pillars of gas and dust in the Eagle Nebula are regions of starbirth. The aptly named Pillars of Creation hide newborn stars in their wispy columns. Stretching roughly 4 to 5 light-years, the towers are a relatively small feature of the entire Eagle Nebula, which spans 70 by 55 light-years.",
    },
    {
      title: "ARP 140",
      url: "https://www.youtube.com/watch?v=urmFYr2GJHE",
      description:
        "This data sonification of Arp 140 shows a pair of interacting galaxies. The leftmost galaxy is a barred spiral galaxy known as NGC 275, and the right-side galaxy is a lenticular galaxy called NGC 274.",
    },
  ];

  res.status(200).json(urls);
}
