import React from 'react'

const OurStory = () => {
return (
    <>
        <div id='our-story' className='our-story flex flex-col justify-center items-center'>
        <h3 className='font-[900] text-[12px] leading-[20px] text-center px-[15px] py-[5px] bg-[#29CC39]/10 text-[#29CC39] rounded-[15px]'>OUR STORY</h3>
        <h2 className='background-text relative w-full font-[700] text-[36px] leading-[60px] text-center py-[65px] text-[#4D5E80]'>We Will Find the Best Option</h2>
        <p className='font-[500] text-[14px] leading-[30px] text-center text-[#7D8FB3] max-w-[700px]'>Real estate is "property consisting of land and the buildings on it, along with its natural resources such as crops, minerals or water, immovable property of this nature; an interest vested in this (also) an item of real property, (more generally) buildings or housing in general.</p>
        <div className='lg:grid lg:grid-cols-3 lg:gap-[30px] flex flex-col gap-[20px] w-full mt-[50px]'>
            <div className='py-[35px] px-[10px] flex flex-col gap-[10px] items-center bg-[white]'>
            <h2 className='font-[500] text-[30px] leading-[50px] text-center text-[#4D5E80]'>15 Years</h2>
            <p className='font-[500] text-[14px] leading-[30px] text-center text-[#ADB8CC]'>In Business</p>
            </div>
            <div className='py-[35px] px-[10px] flex flex-col gap-[10px] items-center bg-[white]'>
            <h2 className='font-[500] text-[30px] leading-[50px] text-center text-[#4D5E80]'>$1 Billion</h2>
            <p className='font-[500] text-[14px] leading-[30px] text-center text-[#ADB8CC]'>Property Brokered</p>
            </div>
            <div className='py-[35px] px-[10px] flex flex-col gap-[10px] items-center bg-[white]'>
            <h2 className='font-[500] text-[30px] leading-[50px] text-center text-[#4D5E80]'>10,000</h2>
            <p className='font-[500] text-[14px] leading-[30px] text-center text-[#ADB8CC]'>Transactions</p>
            </div>
        </div>
        </div>
    </>
)
}

export default OurStory