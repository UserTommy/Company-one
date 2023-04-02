import React, { useState } from 'react'
import Link from 'next/link';
import { IoIosConstruct } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai'
import { RiSendPlaneLine } from 'react-icons/ri'
import { IoMdCall } from 'react-icons/io'
import { HiMail } from 'react-icons/hi'
import { FaBars } from 'react-icons/fa'

const Landing = () => {
    const [bar, setBar] = useState(false)
    console.log(bar )
return (
    <>
        <div className="landing text-white z-0 flex justify-center">
        <div className="flex justify-between pt-[65px]  z-10 absolute container px-[20px]">
        <div className='flex-1 flex gap-[10px] sm:gap-[35px]'>
            <IoIosConstruct size={'18px'}/>
            <h3 className='font-[700]'>Consturctor</h3>
        </div>
        <div className='flex-1 flex flex-col items-end md:hidden'>
            <FaBars className='cursor-pointer' onClick={() => {setBar(!bar)}}/>
            {bar && (<div>
                <div className='flex-1 items-center gap-[10px] flex'>
                    <AiOutlineSearch size={'17.05px'} opacity={'50%'}/>
                    <input className='bg-transparent outline-none placeholder:text-white-50% text-[14px] leading-[30px] font-medium w-[100px]' placeholder='Search' type={'search'}></input>
                </div>
                <div className='flex-1 flex-col gap-[10px] justify-between text-[13px] font-[700] leading-[25px] flex'>
                    <Link href={'/#'}>About</Link>
                    <Link href={'/#'}>Servics</Link>
                    <Link href={'/#'}>Reviews</Link>
                    <Link href={'/#'}>Contacts</Link>
                </div>
                <div className='flex-1 text-[14px] font-[700] leading-[30px] flex'>
                    Get in Touch
                </div>
            </div>)}
        </div>
        <div className='flex-1 items-center gap-[20px] hidden md:flex'>
            <AiOutlineSearch size={'17.05px'} opacity={'50%'}/>
            <input className='bg-transparent outline-none placeholder:text-white-50% text-[14px] leading-[30px] font-medium' placeholder='Search' type={'search'}></input>
        </div>
        <div className='flex-1 gap-[10px] justify-between text-[13px] font-[700] leading-[25px] hidden md:flex'>
            <Link href={'/#'}>About</Link>
            <Link href={'/#'}>Servics</Link>
            <Link href={'/#'}>Reviews</Link>
            <Link href={'/#'}>Contacts</Link>
        </div>
        <div className='flex-1 justify-end text-[14px] font-[700] leading-[30px] hidden md:flex'>
            Get in Touch
        </div>
        </div>
        <div className='landing-content container flex flex-col z-10 absolute mt-[300px] sm:mt-[250px] justify-center items-center px-[20px]'>
        <button className='rounded-full bg-[#FF6633] h-[30px] py-[5px] px-[15px] text-[12px] font-[900] leading-[20px]'>REAL ESTATE</button>
        <p className='mt-[65px] font-[400] text-[46px] sm:text-[64px] text-center leading-[50px] sm:leading-[90px]'>Invest on Real Estate with Our Company</p>
        <ul className='flex justify-evenly mt-[50px] sm:mt-[125px] flex-col sm:flex-row container gap-[20px]'>
            <li className='flex gap-[30px] justify-center items-center'>
            <RiSendPlaneLine size={'16.69px'}/>
            <p className='font-[700] text-[13px] leading-[25px]'>225 S 1st St Brooklyn, NY 11211</p>
            </li>
            <li className='flex gap-[30px] justify-center items-center'>
            <IoMdCall size={'17.96px'}/>
            <p className='font-[700] text-[13px] leading-[25px]'>(929) 356-0147</p>
            </li>
            <li className='flex gap-[30px] justify-center items-center'>
            <HiMail size={'20px'}/>
            <p className='font-[700] text-[13px] leading-[25px]'>hotel@gmail.com</p>
            </li>
        </ul>
        </div>
    </div>
    <button href={'#our-story'} className='show-more rounded-full text-[14px] py-[15px] px-[35px] font-[900] leading-[30px] bg-white text-[#6B7A99] absolute z-10'>Show More</button>
    </>
)
}

export default Landing