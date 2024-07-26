import React from "react";
import ProfileCard from "./ProfileCard";
import Logout from "../auth/Logout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  // const [user, setUser] = useState(null);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     try {
  //       const response = await axios.post("http://localhost:3000/profile", {}, { withCredentials: true });
  //       setUser(response.data);
  //     } catch (error) {
  //       navigate("/login");
  //     }
  //   };

  //   fetchProfile();
  // }, [navigate]);

  // console.log(user)

  // if (!user) return <div className="h-[100vh] flex justify-center items-center w-fill bg-[#111] text-white text-9xl">Loading...</div>;


  return (
    <div className=" pt-[12vh] flex items-center flex-col bg-[#111] text-white">
            {/* <div
            id="aboutCover"
            className=" absolute bg-white h-[2px] w-[0px] bottom-0  mix-blend-difference"
          ></div> */}
      <div className="w-[80%]">
        <div className="w-[80vw] h-full line z-20 overflow-hidden">
          <div className="h-[85vh] w-[100%] flex relative items-center  border-b-2">
            <div className="h-[100%] w-[20%] bg-[#0BA35E] "></div>
            <div className="h-[85vh] w-[60%]  flex items-center justify-center absolute">
              <div className="h-[75vh] w-[75vh]  ">
                <img
                  src="https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
                  // https://i.ibb.co/2YwXRn4/IMG-20240308-105214-721.jpg
                  alt=""
                  className="h-[75vh] w-[75vh]  object-cover"
                />
              </div>
            </div>
            <div className="h-[100%] w-[80%] flex ">
              <div className="h-[100%] w-[50%] "></div>
              <div className="h-[100%] flex justify-evenly flex-col w-[50%] ">
                <div className=" h-[75vh] flex justify-between flex-col w-[100%]">
                  <div className="w-full h-[%]  flex items-start ">
                    <div className="bg-white px-[2vh] py-[0.4vh] text-black font-semibold">
                    <Logout />
                    </div>
                  </div>
                  <div className="w-full h-[55%] flex justify-evenly items-center flex-col ">
                    <div className="w-full h-[30%] text-6xl font-me]dium ">
                      {/* {`${user.name}`} */} Harsh Jha
                    </div>
                    <div className="w-full h-[50%] ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sapiente. Quia a exercitationem porro, libero sapiente incidunt harum quisquam provident saepe labore error velit id esse rem architecto ipsum voluptas? 
                    </div>
                    <div className="w-full h-[20%] flex items-center ">
                      <a href="/profile/edit">
                      <span className=" rounded-3xl  px-[2vh] py-[0.7vh] bg-[#FFF] font-medium text-black ">
                        Edit
                      </span>
                      </a>
                      <span className=" rounded-3xl ml-[1vw] px-[2vh] py-[0.4vh] bg-[#FFF] font-medium text-black ">
                        More
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-[30%] border text-8xl flex flex-col items-center p-[1vh] text-[#2b2b2b] font-semibold">
                    admin
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
      <div className="w-[80%] ">
        <ProfileCard />
      </div>
    </div>
  );
};

export default Profile;
