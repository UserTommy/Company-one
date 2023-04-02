import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { BiMessageDetail } from 'react-icons/bi'
import { HiMail } from 'react-icons/hi'
import { IoMdCall } from 'react-icons/io'

const Contact = () => {
return (
    <>
        <div className='contact bg-[#F2F3F5] py-[95px] flex flex-col justify-center items-center'>
        <h3 className='font-[900] text-[12px] leading-[20px] text-center px-[15px] py-[5px] bg-[#3361FF]/10 text-[#3361FF] rounded-[15px]'>CONTACTS</h3>
        <h2 className='background-text relative w-full font-[700] text-[36px] leading-[60px] text-center py-[65px] text-[#4D5E80]'>Get It Touch Now</h2>
        <p className='font-[500] text-[14px] leading-[30px] text-center text-[#7D8FB3] max-w-[700px]'>We have developed a unique space where you can work and create. We thought of everything to the smallest detail. You will be able to conduct your business, conduct meetings, meetings</p>
        <div className='flex flex-col md:flex-row flex-wrap justify-center gap-[30px] w-full px-[20px] md:px-[0] md:w-[670px] mt-[50px]'>
            <div className='flex justify-between items-center md:w-[320px] py-[15px] px-[30px] bg-[white] rounded-[30px]'>
            <input className='flex-1 outline-none' placeholder='First Name' type={'text'}/>
            <FaUserCircle size={'20px'} color={'#C3CAD9'}/>
            </div>
            <div className='flex justify-between items-center md:w-[320px] py-[15px] px-[30px] bg-[white] rounded-[30px]'>
            <input className='flex-1 outline-none' placeholder='Last Name' type={'text'}/>
            <FaUserCircle size={'20px'} color={'#C3CAD9'}/>
            </div>
            <div className='flex justify-between items-center md:w-[320px] py-[15px] px-[30px] bg-[white] rounded-[30px]'>
            <input className='flex-1 outline-none' placeholder='Email Address' type={'text'}/>
            <HiMail size={'20px'} color={'#C3CAD9'}/>
            </div>
            <div className='flex justify-between items-center md:w-[320px] py-[15px] px-[30px] bg-[white] rounded-[30px]'>
            <input className='flex-1 outline-none' placeholder='Phone Number' type={'text'}/>
            <IoMdCall size={'20px'} color={'#C3CAD9'}/>
            </div>
            <div className='flex w-full justify-between items-center py-[15px] px-[30px] bg-[white] rounded-[30px]'>
            <input className='flex-1 outline-none' placeholder='Your Message' type={'text'}/>
            <BiMessageDetail size={'20px'} color={'#C3CAD9'}/>
            </div>
            <button className='rounded-full py-[15px] px-[35px] bg-[#3361FF] text-[white] font-[900] text-[14px] leading-[30px]'>Send Request</button>
        </div>
        </div>
    </>
)
}

export default Contact