import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Instagram = () => {
return (
    <>
        <div className='instagram flex flex-col justify-center items-center relative'>
        <h3 className='font-[900] text-[12px] leading-[20px] text-center px-[15px] py-[5px] bg-[#29CC39]/10 text-[#29CC39] rounded-[15px]'>INSTAGRAM</h3>
        <div className='absolute top-[50px] left-[0] p-[15px] text-[#C3CAD9] bg-[white] w-[60px] h-[60px] flex justify-center items-center rounded-[50%] cursor-pointer z-[1]'>
            <AiOutlineArrowLeft/>
        </div>
        <h2 className='background-text relative w-full font-[700] text-[36px] leading-[60px] text-center pt-[65px] pm-[32px] text-[#4D5E80]'>Listen to Our Customers @house</h2>
        <div className='absolute top-[50px] right-[0] p-[15px] text-[#C3CAD9] bg-[white] w-[60px] h-[60px] flex justify-center items-center rounded-[50%] cursor-pointer z-[1]'>
            <AiOutlineArrowRight/>
        </div>
        <div className='xl:grid xl:grid-cols-4 flex justify-center items-center flex-wrap gap-[30px] mt-[90px]'>
            <div className='insta-img'>
            <img src='/insta/Image.png'/>
            </div>
            <div className='insta-img'>
            <img src='/insta/Image (1).png'/>
            </div>
            <div className='insta-img'>
            <img src='/insta/Image (2).png'/>
            </div>
            <div className='insta-img'>
            <img src='/insta/Image (3).png'/>
            </div>
            <div className='insta-img'>
            <img src='/insta/Image (4).png'/>
            </div>
            <div className='insta-img'>
            <img src='/insta/Image (5).png'/>
            </div>
            <div className='insta-img'>
            <img src='/insta/Image (6).png'/>
            </div>
            <div className='insta-img'>
            <img src='/insta/Image (7).png'/>
            </div>
        </div>
        </div>
    </>
)
}

export default Instagram