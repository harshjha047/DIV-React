import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useEffect } from "react";

function Elem2({ id, titel, image }) {
  useEffect(() => {
    const element = document.querySelector(`#${id}`);

    const handleMouseEnter = (dets) => {
      console.log(dets);
      gsap.to(`.${id}`, {
        duration: 0.4,
        opacity: 1,
        scale: 1,
      });
    };

    const handleMouseMove = (dets) => {
      const rect = element.getBoundingClientRect();
      gsap.to(`.${id}`, {
        x: dets.clientX - rect.x - 50,
        y: dets.clientY - rect.y - 55,
        // ease: "elastic.out(1.2,0.1)"
      });
    };

    const handleMouseLeave = (dets) => {
      console.log(dets);
      gsap.to(`.${id}`, {
        duration: 0.4,
        opacity: 0,
        scale: 0,
      });
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  

  return (
    <>
      <div id={id} className={`w-full bji h-[20vh] pt-[2vh] relative `}>
        
        <div
          className={`${id} absolute  flex justify-evenly items-center opacity-0 scale-0 h-[7vw] w-[7vw] bg-green-500 bg-[url('https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp')] bg-[url('${image}')] bg-cover bg-center bg-no-repeat rounded-full`}
        ></div>
        <h2 className="text-2xl text-white">{titel}</h2>
      </div>
    </>
  );
}

export default Elem2;
