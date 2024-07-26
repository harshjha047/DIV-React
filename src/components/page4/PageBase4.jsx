import React from "react";
import Page4 from "./Page4";

function PageBase4() {
  const page4Data = [
    {
      id: "vid",
      title: "Rhea",
      dis: "Founded by Accern, a front-runner in No-Code NLP, Rhea stands as a personalized AI Associate designed to streamline FinTech workflows.",
      thumbnail: "https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65a93ac90b586168e5917ac8_Rhea%20-%20cover_horizontal_low.webp",
      video: "https://lazarev.kiev.ua/cases/la24/accern-rhea-cover-big.mp4",
    },
    {
      id: "a",
      title: "Aprotech",
      dis: "A media and events company that focuses on promoting and highlighting the achievements of Black innovators, entrepreneurs, and technologists.",
      thumbnail:"https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65cb66041ce86ac3784aaba1_Afrotech%20-%20cover_horizontal.webp",
      video: "https://lazarev.kiev.ua/cases/la24/afrotech-cover-big.mp4",
    },
  ];
  return (
    <div>
      {page4Data.map((data) => (
        <Page4
          key={data.id}
          id={data.id}
          title={data.title}
          dis={data.dis}
          thumbnail={data.thumbnail}
          video={data.video}
        />
      ))}
    </div>
  );
}

export default PageBase4;
