import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'

const Footer = () => {
return (
    <>
        <div className='footer'>
        <div className='flex flex-col items-center gap-[30px] md:flex-row md:justify-between md:items-center my-[90px]'>
            <h2 className='flex-1 font-[700] text-[24px] leading-[30px] text-[#4D5E80]'>Constructor</h2>
            <div className='flex-1 flex justify-between w-full md:items-center text-[#7D8FB3]'>
            <div className='flex flex-col gap-[20px]'>
                <h3 className='font-[700] text-[13px] leading-[25px]'>Home</h3>
                <h3 className='font-[700] text-[13px] leading-[25px]'>About</h3>
            </div>
            <div className='flex flex-col gap-[20px]'>
                <h3 className='font-[700] text-[13px] leading-[25px]'>Gallery</h3>
                <h3 className='font-[700] text-[13px] leading-[25px]'>Barbers</h3>
            </div>
            <div className='flex flex-col gap-[20px]'>
                <h3 className='font-[700] text-[13px] leading-[25px]'>Services</h3>
                <h3 className='font-[700] text-[13px] leading-[25px]'>Contacts</h3>
            </div>
            </div>
            <div className='flex-1 flex md:justify-end w-full'>
            <div className='w-full md:w-fit'>
                <div className='text-[#3361FF] flex justify-between md:justify-start'>
                <AiFillStar size={'17px'}/>
                <AiFillStar size={'17px'}/>
                <AiFillStar size={'17px'}/>
                <AiFillStar size={'17px'}/>
                <AiFillStar size={'17px'}/>
                </div>
                <div className='flex md:gap-[20px] items-center mt-[15px] justify-between'>
                <h3 className='font-[700] text-[14px] leading-[30px] text-[#7D8FB3]'>5.244 Satisfied Customers</h3>
                <AiOutlineArrowRight color='#C3CAD9' size={'16px'} cursor={'pointer'}/>
                </div>
            </div>
            </div>
        </div>
        <div className='flex flex-col-reverse sm:flex-row gap-[20px] justify-between my-[30px] font-[700] text-[13px] leading-[25px] text-[#7D8FB3] text-center'>
            <h3>© 2030 Comapny. All Rights Reserved.</h3>
            <div className='flex justify-between items-center sm:w-[140px]'>
            <h3>Terms</h3>
            <h3>Privacy</h3>
            </div>
        </div>
        </div>
    </>
)
}

export default Footer