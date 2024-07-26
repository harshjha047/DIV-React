import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import Elem2 from "./Elem2";

function Elem1() {
  return (
    <>
      <div className="h-[100vh] w-[100%] flex justify-evenly items-center bg-[#111]">
        <div className="h-[80vh] w-[80vw] flex ">
          <div className="h-[80vh] w-[40vw]  flex flex-col justify-between text-violet-50">
            <div className="">
              Exlusive inside into <br />
              "DEVELOPMENT & Innovation"
            </div>
            <div className="text-base w-2/3">
              Here are four key points about Artificial Intelligence (AI) that
              can help you understand its significance and impact:
            </div>
          </div>

          <div className="h-[80vh] w-[40vw] relative ">
            <Elem2
              id="a"
              image="https://deep-image.ai/_next/static/media/app-info-generator.bf08e63e.webp"
              titel="Automation and Efficiency "
            />
            <Elem2
              id="b"
              image="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
              titel="Versatility and Adaptability"
            />
            <Elem2
              id="c"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKTezalux1__3KwbJ1Bt-WnQQkW82G1Nwy6g&s"
              titel="Data Analysis and Insights"
            />
            <Elem2
              id="d"
              image="https://th.bing.com/th/id/OIG4.LgUj9FIjzUbdTSMn0mRg"
              titel="Ethical and Societal Implications"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Elem1;
