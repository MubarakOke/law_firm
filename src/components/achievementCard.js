import React from 'react'
import Approval from '../assets/approval.png'

function achievementCard({value, info}) {
  return (
    <div className="h-[250px] bg-[#F6F6F6] w-[290px] px-[25px]">
        <div className="flex justify-center">
            <div className="flex flex-col items-center text-['PT Serif]">
                <img className="mt-[25px]" src={Approval} alt="approval"/>
                <div className="mt-[7px] text-[30px] text-[#BB9338]">$ {value}</div>
                <div className="mt-[5px] text-[18px] mb-[18px] text-center w-[150px]">{info}</div>
            </div>
        </div>
    </div>
  )
}

export default achievementCard