// complete
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import "./App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const scrollRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    var tl = gsap.timeline();
    tl.from("#page1", {
      opacity: 0,
      duration: 0.2,
      delay: 0.2,
    });
    tl.from("#page1", {
      transform: "scaleX(0.7) scaleY(0.1) translateY(70%)",
      borderRadius: "500px",
      duration: 1,
      ease: "expo.out",
    });
    tl.from("header", {
      opacity: 0,
      delay: -0.2,
    });
    tl.from("#page1 h1, #page1 p, #page1 div", {
      y:10,
      opacity: 0,
      duration: 0.1,
      stagger: 0.2,
    });
    tl.to("#aboutCover", {
      width: "100%",
      duration: 0.5,
    });
    tl.to("#aboutCover", {
      height: "100%",
      // duration: 1,
      delay: -0.2,
    });
    tl.from("#aboutus", {
      opacity: 0,
      duration: 0.1,
      stagger: 0.2,
    });
    tl.from("#aboutCover", {
      height: "100%",
      duration: 0.5,
    });
    tl.to("#aboutCover", {
      width: "0",
      duration: 0.5,
    });

  });
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    scroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scrollTo.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: scrollRef.current.style.transform ? 'transform' : 'fixed',
    });

    ScrollTrigger.addEventListener('refresh', () => scroll.update());
    ScrollTrigger.refresh();

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
  

  

  return (
    <>
          <Header />
          <div className=" " data-scroll-container ref={scrollRef}>
          <section data-scroll-section>
          <main id="main">
            <Outlet />
          </main>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
