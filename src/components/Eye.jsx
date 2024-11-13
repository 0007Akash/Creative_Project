import React, { useEffect, useState } from 'react'

function Eye() {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (dets) => {
            let mouseX = dets.clientX;
            let mouseY = dets.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);

        })
    })
    return (
        <div className='w-full h-screen -z-40  flex items-center justify-center bg-zinc-800 overflow-hidden'>
            <div data-scroll data-scroll-section data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>

                <div className='w-fit h-[30%]  absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex gap-8'>
                    <div data-scroll data-scroll-speed="-0.1" className='w-60 h-full rounded-full bg-white  relative'>
                        <div className='w-[60%] h-[60%] bg-black rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line w-full h-6 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                                <div className=' h-full w-6 rounded-full bg-white'>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-scroll data-scroll-speed="-0.1" className='w-60 h-full rounded-full bg-white  relative'>
                        <div className='w-[60%] h-[60%] bg-black rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg) ` }} className='line w-full h-6 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '>
                                <div className=' h-full w-6 rounded-full bg-white'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Eye
