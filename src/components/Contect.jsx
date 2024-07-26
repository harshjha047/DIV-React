import React from "react";
import { Link } from "react-router-dom";

function Contect() {
  return (
    <>
      <div className="h-[115vh] w-full flex bg-[#f1f1f1]">
        <div className="h-full w-[50vw] flex justify-center items-center">
          <div className="h-[96vh] w-[70%] flex justify-center items-center rounded-xl overflow-hidden">
            <div className="h-[96vh] w-full bg-no-repeat bg-center bg-cover bg-[url('https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg')]">
              <div className="w-full h-full backdrop-blur-md flex justify-evenly items-center">
                <div className="text-white flex justify-evenly items-center flex-col">
                  {/* <p>Already have an account?</p> */}
                  <Link
                    className="bg-white p-2 flex justify-center items-center font-semibold w-32 rounded-full m-4 text-black"
                    to="/"
                  >
                    HOME
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full justify-between flex w-1/2 flex-col">
          <div className="w-full h-[35vh] flex items-center font-bold text-[110px] text-black">
            Contect Us
          </div>
          <div className="border-zinc-950 border-t-2 border-l-2 h-[80vh] w-full flex justify-evenly items-center">
            <form
              onSubmit={""}
              className="flex justify-evenly items-center flex-col h-full w-[66%]"
            >
              <div className="flex flex-col justify-evenly items-center bg-transparent w-[70%] h-3/4">
                {/* {error && <p className="text-red-600 mt-8 text-center">{error}</p>} */}
                <input
                  type="text"
                  className="bg-[#fcfcfe00] w-10/12 text-black h-8 outline-none border-b-2 border-zinc-800 "
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  className="bg-[#fcfcfe00] w-10/12 text-black h-8 outline-none border-b-2 border-zinc-800 "
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="bg-[#fcfcfe00] w-10/12 text-black h-8 outline-none border-b-2 border-zinc-800 "
                  placeholder="Message"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#01B7FF] text-white p-3 m-1 font-semibold"
                >
                  Contect Us
                </button>
              </div>
            </form>
            <div className="h-3/4 w-[27%] flex justify-evenly flex-col">
              <div className="h-1/4 w-full">
                <h1 className="font-semibold text-3xl text-black">Help</h1>
                <p className="text-lg text-black">abcd@email.com</p>
              </div>
              <div className="h-1/4 w-full">
                <h1 className="font-semibold text-3xl text-black">Based In</h1>
                <p className="text-lg text-black">India</p>
              </div>
              <div className="h-1/4 w-3/4 flex justify-between items-center">
                <div className="h-[3vh] w-[3vh] bg-[url('https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg')] bg-no-repeat bg-center bg-cover"></div>
                <div className="h-[3vh] w-[3vh] bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg')] bg-no-repeat bg-center bg-cover"></div>
                <div className="h-[3vh] w-[3vh] bg-[url('https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg')] bg-no-repeat bg-center bg-cover"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contect;
