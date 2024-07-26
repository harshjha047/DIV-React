import React from 'react'

function ProfileCard() {
  return (
    <div>
        <div className="w-[80vw] h-[50vh]  flex justify-between bg-[#111] rounded-md my-[2vw] p-[1vh] ">
        <div className="w-[50%] h-[100%] overflow-hidden "><img src="https://cdn.dribbble.com/users/683081/screenshots/2728654/media/7bb2b47d0574d39b20354620e4fa50c8.png" alt="" className='h-full w-full object-cover rounded-xl'/></div>
        <div className="w-[38vw] h-[100%]  flex ">
            <div className=" w-[97%]">
            <div className="font-medium text-lg py-[1vh]">Some Project (Titel)</div>
            <div className="font-medium">Harsh Jha</div>
            <div className="text-sm">This is a discription(Discription)</div>
            </div>
            <div className=" w-[3%] text-xl flex justify-end">!</div>
        </div>
        </div>
    </div>
  )
}

export default ProfileCard