import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import { useNavigate } from 'react-router-dom';

function EditProfile() {
    const [form, setForm] = useState({});
  const navigate = useNavigate();

//   const handleForm = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:3000/", {
//         method: "POST",
//         body: JSON.stringify(form),
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include", // Include credentials (cookies)
//       });
//       const data = await response.json();
//       console.log(data);

//       if (response.ok && data.redirectTo) {
//         navigate(data.redirectTo); // Redirect to the profile page
//       } else {
//         console.error("Login failed:", data.error);
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//     }
//   };
  return (
    <div>
        <form >
        <div className=" pt-[12vh] flex items-center flex-col bg-[#111] text-white">
      <div className="w-[80%]">
        <div  className="w-[80vw] h-full line z-20 overflow-hidden">
        <div className="h-[85vh] w-[100%] flex relative items-center  border-b-2">
          <div className="h-[100%] w-[20%] bg-[#0BA35E] "></div>
          <div className="h-[85vh] w-[60%]  flex items-center justify-center absolute">
            <div className="h-[75vh] w-[75vh]  ">
                <input type="file" name='image' className="h-[75vh] w-[75vh]  object-cover bg-[#111] border" />
            </div>
          </div>
          <div className="h-[100%] w-[80%] flex ">
            <div className="h-[100%] w-[50%] "></div>
            <div className="h-[100%] flex justify-evenly flex-col w-[50%] ">
              <div className=" h-[75vh] flex justify-between flex-col w-[100%]">
                <div className="w-full h-[%]  flex items-start ">
                </div>
                <div className="w-full h-[55%] flex justify-evenly items-center flex-col ">
                  <div className="w-full h-[30%] text-6xl font-medium ">
                    <input type="text" name='name' placeholder='Full Name' className=' outline-none border bg-[#111] p-2 text-base' />
                  </div>
                  <div className="w-full h-[50%] border ">
                    <textarea name="discription" maxLength='290' rows='5' className='resize-none w-full outline-none border bg-[#111] p-2 text-base' id=""></textarea>
                  </div>
                  <div className="w-full h-[20%] flex items-center ">
                  
                    <span className=" rounded-3xl  px-[2vh] py-[0.4vh] bg-[#FFF] font-medium text-black ">
                        <button onClick={''}>Save</button>
                    </span>
                  </div>
                </div>
                <div className="w-full h-[30%] border text-8xl flex flex-col items-center p-[1vh] text-[#2b2b2b] font-semibold">
                  none
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
      </div>
      {/* <div className="w-[80%] ">
        <ProfileCard/>
      </div> */}
    </div>
    </form>
    </div>
  )
}

export default EditProfile