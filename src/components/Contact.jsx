import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";

function Contact() {
    return (
        <div className='section w-full h-screen bg-[#cdea69] sticky top-0 '>
            <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full flex justify-center items-center flex-col'>
                {["ready", "to start", "the project?"].map((item, idx) => (
                    <h1 className='font-["bebas_neue"] uppercase text-[13vw]  leading-[11vw] tracking-wide font-[600] text-zinc-800'>{item}</h1>
                ))}
            </div>
            <div className='bg-zinc-800 w-[14vw] px-6 py-5 rounded-full flex items-center gap-4 absolute group mt-4 top-[85%] left-[50%] -translate-x-[50%]'>
                <button className='  text-sm uppercase font-semibold group'>Start the project  </button>
                <div className='w-fit h-fit bg-white rounded-full text-xl px-3 py-3 absolute right-3 group-hover:scale-100 scale-50 transition ease-linear duration-200 '>
                    <BsArrowUpRight fill='black' />
                </div>
            </div>

        </div>
    )
}

export default Contact
