// complete
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

function MenuElem({link,titel,id}) {
    // const menuRef=useRef()
    // useEffect(()=>{
    //     const menu = menuRef.current;
    //     const menuItem = document.querySelector(`#${id}`);
    //     console.log(menuItem)

    //     const mouseEnter =()=>{
    //         gsap.to(menuItem,{
    //             duration:0.3,
    //             width:"100%"
    //         })
    //     }
    //     const mouseLeave =()=>{
    //         gsap.to(menuItem,{
    //             duration:0.3,
    //             width:"0%"
    //         })
    //     }
    //     menu.addEventListener("mouseenter", mouseEnter);
    //     menu.addEventListener("mouseleave", mouseLeave);
    //     return ()=>{
    //         menu.removeEventListener("mouseenter", mouseEnter);
    //         menu.removeEventListener("mouseleave", mouseLeave);
    //     }

    //  },[]
    // )
  return (
    <div>
        <a className=" menuElem w-full cursor-pointer h-[10vh] bg-[#111] text-white relative flex hover:text-black" href={`${link}`}>
            <div id='slide' className="border z-40 bg-white w-4 h-[10vh] absolute"></div>
        <div id={`${id}`} className="  h-[10vh] w-full border uppercase  text-4xl font-semibold px-[3vh] py-[1vh] transition-all duration-300 flex"><div className="elemTitel z-50">{titel}</div></div>
        </a>
    </div>
  )
}

export default MenuElem