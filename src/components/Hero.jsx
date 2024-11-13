import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { BsArrowUpRight } from "react-icons/bs";


function Hero() {

    const [hover, setHover] = useState(false);
    return (
        <>
            <div data-scroll data-scroll-section data-scroll-speed="-.5" className='z-hero'>
                <div className='py-40 px-16 z-hero'>
                    {["we create", "eye-opening", "presentations"].map((item, idx) => (
                        <div key={idx} className='flex '>
                            {idx === 1 && (
                                <motion.div initial={{ width: "0vw" }} animate={{ width: "9vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 0.3 }} className="w-[9vw] h-[12vh] rounded-lg bg-red-900 ">
                                    <img className='w-full h-full rounded-lg' src="https://img.freepik.com/free-photo/vestrahorn-mountains-sunset-stokksnes-iceland_335224-574.jpg?size=626&ext=jpg&ga=GA1.1.1762988217.1717187454&semt=ais_hybrid" alt="" />
                                </motion.div>
                            )}
                            <h1 className=' text-9xl uppercase   font-["bebas_neue"] leading-[7vw]' key={idx}>{item}</h1>
                        </div>
                    ))}

                </div>
                <div className='w-full border-[1px] border-zinc-400 -mt-[30px]'></div>
                <div className='flex items-center justify-between py-4 px-16 gap-[80px]  pb-[114px]'>
                    <div className='w-2/3 flex items-center justify-between'>
                        {["For public and private companies", "From the first pitch to IPO"].map((item, idx) => (
                            <>
                                <p className='font-light'>{item}</p>
                            </>
                        ))}
                    </div>
                    <div className='w-1/3 flex items-center justify-end gap-1 group'>
                        <button className='uppercase border-[1px] py-[2px] px-3 font-normal rounded-full group-hover:bg-slate-400 transition ease-in-out duration-700'> Start The Project</button>
                        <div className='w-8 h-8 rounded-full border-[1px] flex items-center justify-center group-hover:bg-slate-400 transition ease-in-out duration-700 '><BsArrowUpRight size={18} /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
