import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Page3() {
  const playRef = useRef();

  useEffect(() => {
    const playButton = playRef.current;
    const video = document.querySelector("#video");
    const mouseEnter = () => {
      gsap.to("#watch", {
        opacity: 1,
        y: -10,
        duration: 0.5,
      });
    };
    const mouseLeave = () => {
      gsap.to("#watch", {
        opacity: 0,
        y: 20,
        duration: 0.5,
      });
    };
    const click = () => {
      video.play();
      gsap.to(video, {
        transform: "scaleX(1) scaleY(1)",
        opacity: 1,
        borderRadius: 0,
      });
    };
    const Click = () => {
      video.pause();
      gsap.to(video, {
        transform: "scaleX(0.75) scaleY(0)",
        opacity: 0,
        borderRadius: "50px",
      });
    };
    playButton.addEventListener("mouseenter", mouseEnter);
    playButton.addEventListener("mouseleave", mouseLeave);
    playButton.addEventListener("click", click);
    video.addEventListener("click", Click);
    return () => {
      video.removeEventListener("click", Click);
      playButton.removeEventListener("click", click);
      playButton.removeEventListener("mouseenter", mouseEnter);
      playButton.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);
  return (
    <div>
      <div className="h-[100vh] w-full">
        <div className="h-full relative w-full ">
          <video
            id="video"
            className="h-[100vh] z-50 object-cover absolute w-[100vw] scale-x-75 scale-y-0"
            src="https://videos.pexels.com/video-files/5585939/5585939-hd_1920_1080_25fps.mp4"
          ></video>
          <div className="w-full h-full flex-col bg-[url('https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
            <div
              ref={playRef}
              className="h-[10vw] w-[10vw] rounded-full bg-white cursor-pointer flex justify-center items-center"
            >
              <img
                className="m-[-1vh] h-[5vh] "
                src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Font_Awesome_5_solid_play.svg"
                alt=""
              />
            </div>
            <div
              id="watch"
              className="text-[10px] font-extrabold mt-5 opacity-0 bg-white px-3 p-1 rounded-3xl"
            >
              WATCH SHOWREEL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
