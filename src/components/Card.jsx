import React from 'react'

const Card = ({ image_icon, title, count }) => {
    return (
        <div className="bg-[#0A06F4] text-white flex items-center justify-between p-5 rounded-[25px] shadow-lg hover:scale-105 transition-transform duration-300">
            {/* Text */}
            <div>
                <p className="text-xl text-white">{title}</p>
                <h2 className="text-5xl font-semibold mt-4">{count}</h2>
            </div>

            {/*  Icon */}
            <div className=" p-3 rounded-full flex items-center justify-center">
                <img src={image_icon} alt="icon" className="h-[80px] w-[80px] brightness-0 invert" />
            </div>
        </div>
    )
}

export default Card
