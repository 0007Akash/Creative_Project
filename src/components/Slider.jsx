import React from 'react'
import { motion } from "framer-motion"

function Slider() {

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.01" className='z-second bg-[#004d43] py-[10vh] w-full flex whitespace-nowrap  -tracking-[15px] overflow-hidden rounded-tl-2xl rounded-tr-2xl'>
            <div className='flex  border-t-2 border-b-2'>
                <motion.div initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 7 }}>
                    <h1 className='text-[23vw]  leading-[250px] pt-9 uppercase font-["bebas_neue"]'>We are ochi</h1>
                </motion.div>
                <motion.div initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 7 }}>
                    <h1 className='text-[23vw] uppercase  leading-[250px] pt-9 font-["bebas_neue"]'>We are ochi</h1>
                </motion.div>
                <motion.div initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 7 }}>
                    <h1 className='text-[23vw] uppercase  leading-[250px] pt-9 font-["bebas_neue"]'>We are ochi</h1>
                </motion.div>
            </div>
        </div>
    )
}

export default Slider
