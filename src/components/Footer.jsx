import React from 'react'

function Footer() {
    return (
        <div className='w-full h-screen bg-zinc-800 py-16 px-16 flex sticky top-0'>
            <div className='w-1/2'>
                {["eye-", "opening"].map((item, idx) => (
                    <h1 className='font-["bebas_neue"] uppercase text-[8vw]  leading-[7vw] tracking-wide font-[600]'>{item}</h1>
                ))}
            </div>
            <div className='w-1/2'>
                {["presentations"].map((item, idx) => (
                    <h1 className='font-["bebas_neue"] uppercase text-[8vw]  leading-[7vw] tracking-wide font-[600]'>{item}</h1>
                ))}
                <div className='flex flex-col my-10'>
                    {["Instagram", "Behance", "Facebook", "Linkedin"].map((item, idx) => (
                        <a className='underline' href="#">{item}</a>
                    ))}
                </div>
                <div className='flex flex-col'>
                    {["Khadesari Dubauli", "Barhalganj, Gorakhpur"].map((item, idx) => (
                        <a className='underline ' href="#">{item}</a>
                    ))}
                </div>
                <div className='flex flex-col my-10'>
                    {["infoakash0113@gmail.com"].map((item, idx) => (
                        <a className='underline ' href="#">{item}</a>
                    ))}
                </div>
                <div className='mt-60 flex justify-between '>
                    <h3 className='text-zinc-400'>© ochi design 2024. Legal Terms</h3>
                    <h3 className='text-zinc-400'>Website by Akash Yadav</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer
