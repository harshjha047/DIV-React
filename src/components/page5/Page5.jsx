import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Page5() {
  useEffect(() => {
    const panal = document.querySelector("#panal");
    let flicker = true;

    const useCases = () => {
      if (flicker) {
        gsap.to(".uiuxPanal", {
          height: "30vh",
        });
        flicker = false;
      } else {
        gsap.to(".uiuxPanal", {
          height: "110vh",
        });
        flicker = true;
      }
    };
    const panal2 = document.querySelector("#panal2");
    let flicker2 = true;

    const useCases2 = () => {
      if (flicker2) {
        gsap.to(".uiuxPanal2", {
          height: "110vh",
        });
        flicker2 = false;
      } else {
        gsap.to(".uiuxPanal2", {
          height: "30vh",
        });
        flicker2 = true;
      }
    };
    handelScroll();
    document.scrollingElement.scrollTo(0, 0);
    panal.addEventListener("click", useCases);
    panal2.addEventListener("click", useCases2);
    return () => {
      panal.removeEventListener("click", useCases);
      panal2.removeEventListener("click", useCases2);
    };
  }, []);
  const handelScroll = () => {
    let tlTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: "#page5",
        // scroller: scrollRef.current,
          // markers: true,
        start: " top 100%",
        end: "bottom 100%",
        scrub: 2,
      },
    });
    tlTrigger.to("#scroller", {
      y: 1000,
    });
  };
  return (
    <div
      id="page5"
      className="w-full   bg-[#111] flex justify-center items-center text-white"
    >
      <div className=" flex justify-between h-full w-[80%] mb-[3vw]">
        <div
          id="scroller"
          className="Page5Left  h-full w-[20%] flex justify-center"
        >
          <div className=" absolute  px-2 mt-[4vh] bg-[#0BA34E] h-[7vh] rounded-3xl flex justify-center items-center font-medium text-sm w-[14vw]">
            Become a Client
          </div>
        </div>

        <div className="Page5Right  h-full w-[70%]">
          <div className="page5Right-section1 text-3xl pt-[4vh] pb-[1vw] border-b border-[#d3d3d371]">
            <span className=" w-full flex justify-end  ">
              
              We lead your startup at every step of its
            </span>
            <span className=" w-full flex justify-end  ">
              Lorem ipsum dolor sit amet consectetur
            </span>
            <span className=" w-full flex justify-end  ">
              
              adipisicing elit. Nulla obcaecati, enim asperiores nisi molestias
              aliquam saepe doloremque dolores distinctio eos ullam esse,
              accusamus cum inventore quo quos officia rem possimus ab at minus?
            </span>
          </div>
          <div className="uiuxPanal overflow-hidden ">
            <div
              id="panal"
              className="w-full h-[30vh] border-b border-[#d3d3d371] flex flex-col cursor-pointer"
            >
              <div className=" font-semibold text-5xl h-[50%] flex items-center">
                UI/UX Design
              </div>
              <div className=" flex h-[50%] ">
                <div className="border px-[3.6vh] flex items-center  h-[6.5vh] font-normal text-xs mx-[1px] rounded-3xl">
                  UX Audit
                </div>
                <div className="border px-[3.6vh] flex items-center  h-[6.5vh] font-normal text-xs mx-[1px] rounded-3xl">
                  UI Design
                </div>
                <div className="border px-[3.6vh] flex items-center  h-[6.5vh] font-normal text-xs mx-[1px] rounded-3xl">
                  UX Design
                </div>
                <div className="border px-[3.6vh] flex items-center  h-[6.5vh] font-normal text-xs mx-[1px] rounded-3xl">
                  UX Research
                </div>
              </div>
            </div>

            <div className="w-full h-[20vh] border-b border-[#d3d3d371] overflow-hidden flex justify-between relative py-[1vw] page5-elements">
              <div className="over"></div>
              <div className="w-[20%] h-full text-xl z-10">UX Audit</div>
              <div className=" w-[60%] h-full text-xs z-10">
                Ahead of shaking up the market with a product relaunch or UI/UX
                redesign, our researchers do UX auditing. It involves an
                evaluation of the digital interface from UX, marketing, and
                business standpoints, ultimately providing valuable
                recommendations for improvement.
              </div>
              <div className="w-[5%] h-full">
                
                <div className=" rotate-[-45deg] z-10">{">"}</div>
              </div>
            </div>
            <div className="w-full h-[20vh] border-b border-[#d3d3d371] overflow-hidden flex justify-between relative py-[1vw] page5-elements">
              <div className="over"></div>
              <div className="w-[20%] h-full text-xl z-10">UX Audit</div>
              <div className=" w-[60%] h-full text-xs z-10">
                Ahead of shaking up the market with a product relaunch or UI/UX
                redesign, our researchers do UX auditing. It involves an
                evaluation of the digital interface from UX, marketing, and
                business standpoints, ultimately providing valuable
                recommendations for improvement.
              </div>
              <div className="w-[5%] h-full">
                
                <div className=" rotate-[-45deg] z-10">{">"}</div>
              </div>
            </div>
            <div className="w-full h-[20vh] border-b border-[#d3d3d371] overflow-hidden flex justify-between relative py-[1vw] page5-elements">
              <div className="over"></div>
              <div className="w-[20%] h-full text-xl z-10">UX Audit</div>
              <div className=" w-[60%] h-full text-xs z-10">
                Ahead of shaking up the market with a product relaunch or UI/UX
                redesign, our researchers do UX auditing. It involves an
                evaluation of the digital interface from UX, marketing, and
                business standpoints, ultimately providing valuable
                recommendations for improvement.
              </div>
              <div className="w-[5%] h-full">
                
                <div className=" rotate-[-45deg] z-10">{">"}</div>
              </div>
            </div>
            <div className="w-full h-[20vh] border-b border-[#d3d3d371] overflow-hidden flex justify-between relative py-[1vw] page5-elements">
              <div className="over"></div>
              <div className="w-[20%] h-full text-xl z-10">UX Audit</div>
              <div className=" w-[60%] h-full text-xs z-10">
                Ahead of shaking up the market with a product relaunch or UI/UX
                redesign, our researchers do UX auditing. It involves an
                evaluation of the digital interface from UX, marketing, and
                business standpoints, ultimately providing valuable
                recommendations for improvement.
              </div>
              <div className="w-[5%] h-full">
                
                <div className=" rotate-[-45deg] z-10">{">"}</div>
              </div>
            </div>
          </div>
          <div className="uiuxPanal2  h-[30vh] overflow-hidden ">
            <div
              id="panal2"
              className="w-full h-[30vh] border-b border-[#d3d3d371] flex flex-col cursor-pointer"
            >
              <div className=" font-semibold text-5xl h-[50%] flex items-center">
                Product Design
              </div>
              <div className=" flex h-[50%] ">
                <div className="border px-[3.6vh] flex items-center  h-[6.5vh] font-normal text-xs mx-[1px] rounded-3xl">
                  UX Audit
                </div>
                <div className="border px-[3.6vh] flex items-center  h-[6.5vh] font-normal text-xs mx-[1px] rounded-3xl">
                  UI Design
                </div>
                <div className="border px-[3.6vh] flex items-center  h-[6.5vh] font-normal text-xs mx-[1px] rounded-3xl">
                  UX Design
                </div>
                <div className="border px-[3.6vh] flex items-center  h-[6.5vh] font-normal text-xs mx-[1px] rounded-3xl">
                  UX Research
                </div>
              </div>
            </div>
            <div className="w-full h-[20vh] border-b border-[#d3d3d371] overflow-hidden flex justify-between relative py-[1vw] page5-elements">
              <div className="over"></div>
              <div className="w-[20%] h-full text-xl z-10">UX Audit</div>
              <div className=" w-[60%] h-full text-xs z-10">
                Ahead of shaking up the market with a product relaunch or UI/UX
                redesign, our researchers do UX auditing. It involves an
                evaluation of the digital interface from UX, marketing, and
                business standpoints, ultimately providing valuable
                recommendations for improvement.
              </div>
              <div className="w-[5%] h-full">
                
                <div className=" rotate-[-45deg] z-10">{">"}</div>
              </div>
            </div>
            <div className="w-full h-[20vh] border-b border-[#d3d3d371] overflow-hidden flex justify-between relative py-[1vw] page5-elements">
              <div className="over"></div>
              <div className="w-[20%] h-full text-xl z-10">UX Audit</div>
              <div className=" w-[60%] h-full text-xs z-10">
                Ahead of shaking up the market with a product relaunch or UI/UX
                redesign, our researchers do UX auditing. It involves an
                evaluation of the digital interface from UX, marketing, and
                business standpoints, ultimately providing valuable
                recommendations for improvement.
              </div>
              <div className="w-[5%] h-full">
                
                <div className=" rotate-[-45deg] z-10">{">"}</div>
              </div>
            </div>
            <div className="w-full h-[20vh] border-b border-[#d3d3d371] overflow-hidden flex justify-between relative py-[1vw] page5-elements">
              <div className="over"></div>
              <div className="w-[20%] h-full text-xl z-10">UX Audit</div>
              <div className=" w-[60%] h-full text-xs z-10">
                Ahead of shaking up the market with a product relaunch or UI/UX
                redesign, our researchers do UX auditing. It involves an
                evaluation of the digital interface from UX, marketing, and
                business standpoints, ultimately providing valuable
                recommendations for improvement.
              </div>
              <div className="w-[5%] h-full">
                
                <div className=" rotate-[-45deg] z-10">{">"}</div>
              </div>
            </div>
            <div className="w-full h-[20vh] border-b border-[#d3d3d371] overflow-hidden flex justify-between relative py-[1vw] page5-elements">
              <div className="over"></div>
              <div className="w-[20%] h-full text-xl z-10">UX Audit</div>
              <div className=" w-[60%] h-full text-xs z-10">
                Ahead of shaking up the market with a product relaunch or UI/UX
                redesign, our researchers do UX auditing. It involves an
                evaluation of the digital interface from UX, marketing, and
                business standpoints, ultimately providing valuable
                recommendations for improvement.
              </div>
              <div className="w-[5%] h-full">
                
                <div className=" rotate-[-45deg] z-10">{">"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page5;
