import React from 'react'

function FeaturedProjects() {
    return (
        <div className='w-full  py-20 px-16'>
            <div>
                <h1 className='text-[50px] font-thin'>Featured Projects</h1>
            </div>
            <div className='w-full h-[1px]  border-[1px] border-zinc-700 my-10'>
            </div>
            <div className='w-full h-full flex gap-5'>
                <div className='w-1/2 h-[70vh]'>
                    <div className='w-full h-full rounded-xl overflow-hidden hover:scale-95 transition ease-in-out duration-1000'>
                        <img
                            className='w-full h-full rounded-xl hover:scale-110 transition ease-in-out duration-1000'
                            src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className='w-1/2 h-[70vh]'>
                    <div className='w-full h-full rounded-xl overflow-hidden hover:scale-95 transition ease-in-out duration-1000'>
                        <img
                            className='w-full h-full rounded-xl hover:scale-110 transition ease-in-out duration-1000'
                            src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                            alt=""
                        />
                    </div>
                </div>

            </div>
            <div className='w-full h-full flex gap-5 mt-16'>
                <div className='w-1/2 h-[70vh]'>
                    <div className='w-full h-full rounded-xl overflow-hidden hover:scale-95 transition ease-in-out duration-1000'>
                        <img
                            className='w-full h-full rounded-xl hover:scale-110 transition ease-in-out duration-1000'
                            src="https://cdn.pixabay.com/photo/2022/11/14/20/14/compass-7592447_640.jpg"

                            alt=""
                        />
                    </div>
                </div>
                <div className='w-1/2 h-full'>
                    <div className='w-full h-[70vh] rounded-xl overflow-hidden hover:scale-95 transition ease-in-out duration-1000 '>
                        <img
                            className='w-full h-full rounded-xl hover:scale-110 transition ease-in-out duration-1000'
                            src="https://cdn.pixabay.com/photo/2024/05/26/19/51/tiger-8789372_640.jpg"
                            alt=""
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FeaturedProjects
