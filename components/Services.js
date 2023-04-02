import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BiBuildingHouse } from 'react-icons/bi'
import { ImOffice } from 'react-icons/im'
import { FaWarehouse } from 'react-icons/fa'
import { TbParking } from 'react-icons/tb'

const Services = () => {
return (
    <>
        <div className='services flex flex-col justify-center items-center'>
        <h3 className='font-[900] text-[12px] leading-[20px] text-center px-[15px] py-[5px] bg-[#3361FF]/10 text-[#3361FF] rounded-[15px]'>SERVICES</h3>
        <h2 className='background-text relative w-full font-[700] text-[36px] leading-[60px] text-center py-[65px] text-[#4D5E80]'>Services for Maximum Efficiency</h2>
        <p className='font-[500] text-[14px] leading-[30px] text-center text-[#7D8FB3]  max-w-[700px]'>We have developed a unique space where you can work and create. We thought of everything to the smallest detail. You will be able to conduct your business, conduct meetings, meetings</p>
        <div className='flex flex-wrap justify-center gap-[30px] 2xl:gap-[60px] w-full mt-[60px]'>
            <div className='flex flex-col gap-[40px] items-center'>
            <div className='bg-[white] p-[10px] w-[120px] h-[120px] flex justify-center items-center rounded-[50%]'>
                <AiOutlineHome size={'44px'} color={'#3361FF'}/>
            </div>
            <p className='font-[700] text-[13px] leading-[25px] text-center text-[#4D5E80]'>House</p>
            </div>
            <div className='flex flex-col gap-[40px] items-center'>
            <div className='bg-[white] p-[10px] w-[120px] h-[120px] flex justify-center items-center rounded-[50%]'>
                <BiBuildingHouse size={'44px'} color={'#FFCB33'}/>
            </div>
            <p className='font-[700] text-[13px] leading-[25px] text-center text-[#4D5E80]'>Appartament</p>
            </div>
            <div className='flex flex-col gap-[40px] items-center'>
            <div className='bg-[white] p-[10px] w-[120px] h-[120px] flex justify-center items-center rounded-[50%]'>
                <ImOffice size={'44px'} color={'#3361FF'}/>
            </div>
            <p className='font-[700] text-[13px] leading-[25px] text-center text-[#4D5E80]'>Office</p>
            </div>
            <div className='flex flex-col gap-[40px] items-center'>
            <div className='bg-[white] p-[10px] w-[120px] h-[120px] flex justify-center items-center rounded-[50%]'>
                <FaWarehouse size={'44px'} color={'#29CC39'}/>
            </div>
            <p className='font-[700] text-[13px] leading-[25px] text-center text-[#4D5E80]'>Warehouse</p>
            </div>
            <div className='flex flex-col gap-[40px] items-center'>
            <div className='bg-[white] p-[10px] w-[120px] h-[120px] flex justify-center items-center rounded-[50%]'>
                <TbParking size={'44px'} color={'#3361FF'}/>
            </div>
            <p className='font-[700] text-[13px] leading-[25px] text-center text-[#4D5E80]'>Parking</p>
            </div>
        </div>
        </div>
    </>
)
}

export default Services