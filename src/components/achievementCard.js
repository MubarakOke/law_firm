import React from 'react'
import Approval from '../assets/approval.png'

function achievementCard({value, info}) {
  return (
    <div className="h-[304px] bg-[#F6F6F6] w-[357px] px-[32px]">
        <div className="flex justify-center">
            <div className="flex flex-col items-center text-['PT Serif]">
                <img className="mt-[32px]" src={Approval} alt="approval"/>
                <div className="mt-[13px] text-[49px] text-[#BB9338]">$ {value}</div>
                <div className="mt-[11px] text-[25px] mb-[25px] text-center w-[224px]">{info}</div>
            </div>
        </div>
    </div>
  )
}

export default achievementCard