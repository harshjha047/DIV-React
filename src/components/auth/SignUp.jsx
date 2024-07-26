// complete
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const hendleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/create", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include' // Include credentials (cookies)
      });
      const data = await response.json();
      console.log(data);

      if (response.ok && data.redirectTo) {
        navigate(data.redirectTo); // Redirect to the profile page
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  


  return (
    <div className="h-[120vh] w-full flex pt-[5vh] bg-[#f1f1f1]">
            <div
            id="aboutCover"
            className=" absolute bg-white h-[2px] w-[0px] bottom-0  mix-blend-difference"
          ></div>
      <div className="h-full w-[50vw] flex justify-center items-center">
        <div className="h-[96vh] w-[70%] flex justify-center items-center rounded-xl overflow-hidden">
          <div className="h-[96vh] w-full bg-no-repeat bg-center bg-cover bg-[url('https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg')]">
            <div className="w-full h-full backdrop-blur-md flex justify-evenly items-center">
              <div className="text-white flex justify-evenly items-center flex-col">
                <p>Already have an account?</p>
                <Link
                  className="bg-white p-2 flex justify-center items-center font-semibold w-32 rounded-full m-4 text-black"
                  to="/login"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full justify-between flex w-1/2 flex-col">
        <div className="w-full h-[35vh] flex items-center font-bold text-[110px] text-black">
          Sign Up
        </div>

        <div className="border-zinc-950 border-t-2 border-l-2 h-[80vh] w-full flex justify-evenly items-center">
          <form
            method="post"
            onSubmit={handleSubmit}
            className="flex justify-evenly items-center flex-col h-full w-[66%]"
          >
            <div className="flex flex-col justify-evenly items-center bg-transparent w-[70%] h-3/4">
              <input
                className="outline-none flex flex-col bg-transparent border-b-2 w-full border-black"
                name="name"
                placeholder="Full Name"
                type="text"
                // value={name}
                onChange={hendleForm}
              />
              <input
                className="outline-none flex flex-col bg-transparent border-b-2 w-full border-black"
                name="email"
                placeholder="Email"
                type="email"
                // value={email}
                onChange={hendleForm}
              />
              <input
                className="outline-none flex flex-col bg-transparent border-b-2 w-full border-black"
                name="password"
                placeholder="Password"
                type="password"
                // value={password}
                onChange={hendleForm}
              />
              <button
                type="submit"
                className="w-full rounded-full bg-[#01B7FF] text-white p-3 m-1 font-semibold"
                // onClick={}
              >
                Sign Up
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
  );
}

export default SignUp;
