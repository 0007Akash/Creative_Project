import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";

function About() {
    return (
        <>
            <div className='w-full bg-[#cdea69]  py-20 rounded-t-2xl relative'>
                <div className='w-full px-16 '>
                    <p className='text-zinc-800 text-6xl leading-[60px] tracking-normal '>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</p>
                </div>
                <div className='w-full border-b-[1px] border-zinc-500 py-10'></div>
                <div className=' w-full py-5 px-16 flex'>
                    <div className='w-1/2'>
                        <p className='text-zinc-800 text-lg'>What you can expect:</p>
                    </div>
                    <div className='w-1/2 flex flex-col gap-6'>
                        <p className='text-zinc-800 text-lg w-[20vw] '>
                            We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                        <p className='text-zinc-800 text-lg  w-[20vw]'>
                            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                    </div>
                </div>
                <div className='w-full border-b-[1px] border-zinc-500 py-10'></div>
                <div className='flex w-full py-5 h-[70vh] px-16 '>
                    <div className='w-1/2 '>
                        <h1 className='text-zinc-800 text-[56px] tracking-tighter'>Our approach:</h1>
                        <div className='bg-zinc-800 w-[12vw] px-6 py-5 rounded-full flex items-center gap-4 relative group mt-4'>
                            <button className='  text-sm uppercase font-semibold group'>Read More  </button>
                            <div className='w-fit h-fit bg-white rounded-full text-xl px-3 py-3 absolute right-3 group-hover:scale-100 scale-50 transition ease-linear duration-200 '>
                                <BsArrowUpRight fill='black' />
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2  rounded-2xl h-full '>
                        <img className='rounded-2xl w-full h-full' src="https://img.freepik.com/free-photo/two-young-businessman-having-successful-meeting-restaurant_158595-5247.jpg?size=626&ext=jpg&ga=GA1.1.1762988217.1717187454&semt=ais_hybrid" alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default About
