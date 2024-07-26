import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";

function Page4({ id, title, dis, thumbnail, video }) {
  const page4VideoRef = useRef(null);

  useGSAP(() => {});
  useEffect(() => {
    const over = page4VideoRef.current;
    // const over = document.querySelector(`#${id}`);

    const overVid = () => {
      over.style.opacity = 1;
      over.play();
    };
    const notOverVid = () => {
      over.style.opacity = 0;
      over.load();
    };
    over.addEventListener("mouseenter", overVid);
    over.addEventListener("mouseleave", notOverVid);
    return () => {
      over.removeEventListener("mouseenter", overVid);
      over.removeEventListener("mouseleave", notOverVid);
    };
  }, []);
  
  return (
    <div className="bg-[#fff] text-black">
      <div className="h-[75vh] w-full flex justify-center  items-center ">
        <div className="h-[80%] w-[80%] flex justify-between items-center">
          <div className="h-full w-[26%] border-t-2 border-black">
            <div className=" flex items-center font-semibold text-3xl h-1/6">
              {title}
            </div>
            <div className=" h-5/6 pt-6">{dis}</div>
          </div>
          <div className="h-full w-[70%] relative ">
            <img
              src={`${thumbnail}`}
              alt=""
              className={`h-full w-full bg-cover absolute bg-center bg-no-repeat object-cover`}
            />
            <video
              ref={page4VideoRef}
              id={id}
              className="h-full w-full object-cover opacity-0 absolute z-30"
              muted
              src={`${video}`}
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page4;
