import React from 'react'
import { FaEye } from 'react-icons/fa'

const Deals = () => {
return (
    <>
        <div className='deals flex flex-col justify-center items-center'>
        <h3 className='font-[900] text-[12px] leading-[20px] text-center px-[15px] py-[5px] bg-[#FF6633]/10 text-[#FF6633] rounded-[15px]'>DEALS</h3>
        <h2 className='background-text relative w-full font-[700] text-[36px] leading-[60px] text-center py-[65px] text-[#4D5E80]'>Our Best Deals for Today</h2>
        <p className='font-[500] text-[14px] leading-[30px] text-center text-[#7D8FB3]  max-w-[700px]'>Real estate is "property consisting of land and the buildings on it, along with its natural resources such as crops, minerals or water, immovable property of this nature</p>
        <div className='flex flex-wrap gap-[63px] justify-center my-[60px]  max-w-[650px]'>
            <h3 className='text-[#FF6633] font-[900] text-[13px] leading-[25px] border-b-[3px] border-[#FF6633]'>House</h3>
            <h3 className='text-[#7D8FB3] font-[900] text-[13px] leading-[25px]'>Appartament</h3>
            <h3 className='text-[#7D8FB3] font-[900] text-[13px] leading-[25px]'>Office</h3>
            <h3 className='text-[#7D8FB3] font-[900] text-[13px] leading-[25px]'>Warehouse</h3>
            <h3 className='text-[#7D8FB3] font-[900] text-[13px] leading-[25px]'>Parking</h3>
            <h3 className='text-[#7D8FB3] font-[900] text-[13px] leading-[25px]'>Commercial</h3>
        </div>
        <div className='flex flex-col lg:flex-row gap-[30px]'>
            <div className='flex flex-col gap-[30px] lg:mt-[60px]'>
            <div className='deal liked relative bg-[white] rounded-[10px] overflow-hidden'>
                <img src='Image.png' alt=''/>
                <div className='buttons flex gap-[10px] absolute'>
                <button className='flex justify-between gap-[5px] items-center text-[10px] font-[900] leading-[20px] py-[3px] pr-[10px] pl-[5px] bg-[#00000080] text-[white] rounded-[5px] h-[30px]'>
                    <FaEye/>
                    <h3>65</h3>
                </button>
                <button className='text-[10px] font-[900] leading-[20px] py-[5px] px-[10px] bg-[#00000080] text-[white] rounded-[5px] h-[30px]'>
                    <h3>1995</h3>
                </button>
                </div>
                <div className='p-[30px]'>
                <div className='mb-[20px]'>
                    <h3 className='text-[#6B7A99] font-[700] text-[16px] leading-[30px] mb-[10px]'>Modern Glass House</h3>
                    <p className='text-[#6B7A99] font-[700] text-[16px] leading-[30px]'>$ 1,625,000</p>
                </div>
                <div>
                    <h3 className='text-[#ADB8CC] font-[700] text-[13px] leading-[25px] mb-[15px]'>14 Patrick Brem Ct. Mahwah, NJ07430</h3>
                    <p className='text-[#ADB8CC] font-[700] text-[12px] leading-[20px]'>3 Beds  -  2 baths  -  3,450 sqft</p>
                </div>
                </div>
            </div>
            <div className='deal relative bg-[white] rounded-[10px] overflow-hidden'>
                <img src='Image (1).png' alt=''/>
                <div className='buttons flex gap-[10px] absolute'>
                <button className='flex justify-between gap-[5px] items-center text-[10px] font-[900] leading-[20px] py-[3px] pr-[10px] pl-[5px] bg-[#00000080] text-[white] rounded-[5px] h-[30px]'>
                    <FaEye/>
                    <h3>65</h3>
                </button>
                <button className='text-[10px] font-[900] leading-[20px] py-[5px] px-[10px] bg-[#00000080] text-[white] rounded-[5px] h-[30px]'>
                    <h3>1995</h3>
                </button>
                </div>
                <div className='p-[30px]'>
                <div className='mb-[20px]'>
                    <h3 className='text-[#6B7A99] font-[700] text-[16px] leading-[30px] mb-[10px]'>Townhouse in the center</h3>
                    <p className='text-[#6B7A99] font-[700] text-[16px] leading-[30px]'>$ 225,000</p>
                </div>
                <div>
                    <h3 className='text-[#ADB8CC] font-[700] text-[13px] leading-[25px] mb-[15px]'>9832 Hidden Valley Way</h3>
                    <p className='text-[#ADB8CC] font-[700] text-[12px] leading-[20px]'>2 Beds  -  1 baths  -  2,300 sqft</p>
                </div>
                </div>
            </div>
            <div className='deal relative bg-[white] rounded-[10px] overflow-hidden'>
                <img src='Image (2).png' alt=''/>
                <div className='buttons flex gap-[10px] absolute'>
                <button className='flex justify-between gap-[5px] items-center text-[10px] font-[900] leading-[20px] py-[3px] pr-[10px] pl-[5px] bg-[#00000080] text-[white] rounded-[5px] h-[30px]'>
                    <FaEye/>
                    <h3>65</h3>
                </button>
                <button className='text-[10px] font-[900] leading-[20px] py-[5px] px-[10px] bg-[#00000080] text-[white] rounded-[5px] h-[30px]'>
                    <h3>1995</h3>
                </button>
                </div>
                <div className='p-[30px]'>
                <div className='mb-[20px]'>
                    <h3 className='text-[#6B7A99] font-[700] text-[16px] leading-[30px] mb-[10px]'>Townhouse in the center</h3>
                    <p className='text-[#6B7A99] font-[700] text-[16px] leading-[30px]'>$ 225,000</p>
                </div>
                <div>
                    <h3 className='text-[#ADB8CC] font-[700] text-[13px] leading-[25px] mb-[15px]'>9832 Hidden Valley Way</h3>
                    <p className='text-[#ADB8CC] font-[700] text-[12px] leading-[20px]'>2 Beds  -  1 baths  -  2,300 sqft</p>
                </div>
                </div>
            </div>
            </div>
            <div className='flex flex-col gap-[30px]'>
            <div className='deal relative bg-[white] rounded-[10px] overflow-hidden'>
                <img src='Image (3).png' alt=''/>
                <div className='buttons flex gap-[10px] absolute'>
                <button className='flex justify-between gap-[5px] items-center text-[10px] font-[900] leading-[20px] py-[3px] pr-[10px] pl-[5px] bg-[#00000080] text-[white] rounded-[5px] h-[30px]'>
                    <FaEye/>
                    <h3>65</h3>
                </button>
                <button className='text-[10px] font-[900] leading-[20px] py-[5px] px-[10px] bg-[#00000080] text-[white] rounded-[5px] h-[30px]'>
                    <h3>1995</h3>
                </button>
                </div>
                <div className='p-[30px]'>
                <div className='mb-[20px]'>
                    <h3 className='text-[#6B7A99] font-[700] text-[16px] leading-[30px] mb-[10px]'>House on the Lake</h3>
                    <p className='text-[#6B7A99] font-[700] text-[16px] leading-[30px]'>$ 225,000</p>
                </div>
                <div>
                    <h3 className='text-[#ADB8CC] font-[700] text-[13px] leading-[25px] mb-[15px]'>14 Patrick Brem Ct. Mahwah, NJ07430</h3>
                    <p className='text-[#ADB8CC] font-[700] text-[12px] leading-[20px]'>3 Beds  -  2 baths  -  3,450 sqft</p>
                </div>
                </div>
            </div>
            <div className='deal relative bg-[white] rounded-[10px] overflow-hidden'>
                <img src='Image (4).png' alt=''/>
                <div className='buttons flex gap-[10px] absolute'>
                <button className='flex justify-between gap-[5px] items-center text-[10px] font-[900] leading-[20px] py-[3px] pr-[10px] pl-[5px] bg-[#00000080] text-[white] rounded-[5px] h-[30px]'>
                    <FaEye/>
                    <h3>65</h3>
                </button>
                <button className='text-[10px] font-[900] leading-[20px] py-[5px] px-[10px] bg-[#00000080] text-[white] rounded-[5px] h-[30px]'>
                    <h3>1995</h3>
                </button>
                </div>
                <div className='p-[30px]'>
                <div className='mb-[20px]'>
                    <h3 className='text-[#6B7A99] font-[700] text-[16px] leading-[30px] mb-[10px]'>Townhouse in the center</h3>
                    <p className='text-[#6B7A99] font-[700] text-[16px] leading-[30px]'>$ 225,000</p>
                </div>
                <div>
                    <h3 className='text-[#ADB8CC] font-[700] text-[13px] leading-[25px] mb-[15px]'>9832 Hidden Valley Way</h3>
                    <p className='text-[#ADB8CC] font-[700] text-[12px] leading-[20px]'>2 Beds  -  1 baths  -  2,300 sqft</p>
                </div>
                </div>
            </div>
            <div className='deal relative bg-[white] rounded-[10px] overflow-hidden'>
                <img src='Image (5).png' alt=''/>
                <div className='buttons flex gap-[10px] absolute'>
                <button className='flex justify-between gap-[5px] items-center text-[10px] font-[900] leading-[20px] py-[3px] pr-[10px] pl-[5px] bg-[#00000080] text-[white] rounded-[5px] h-[30px]'>
                    <FaEye/>
                    <h3>65</h3>
                </button>
                <button className='text-[10px] font-[900] leading-[20px] py-[5px] px-[10px] bg-[#00000080] text-[white] rounded-[5px] h-[30px]'>
                    <h3>1995</h3>
                </button>
                </div>
                <div className='p-[30px]'>
                <div className='mb-[20px]'>
                    <h3 className='text-[#6B7A99] font-[700] text-[16px] leading-[30px] mb-[10px]'>Flat in Center City</h3>
                    <p className='text-[#6B7A99] font-[700] text-[16px] leading-[30px]'>$ 225,000</p>
                </div>
                <div>
                    <h3 className='text-[#ADB8CC] font-[700] text-[13px] leading-[25px] mb-[15px]'>9832 Hidden Valley Way</h3>
                    <p className='text-[#ADB8CC] font-[700] text-[12px] leading-[20px]'>2 Beds  -  1 baths  -  2,300 sqft</p>
                </div>
                </div>
            </div>
            </div>
            <div className='flex flex-col gap-[30px] lg:mt-[110px]'>
            <div className='deal relative bg-[white] rounded-[10px] overflow-hidden'>
                <img src='Image (6).png' alt=''/>
                <div className='buttons flex gap-[10px] absolute'>
                <button className='flex justify-between gap-[5px] items-center text-[10px] font-[900] leading-[20px] py-[3px] pr-[10px] pl-[5px] bg-[#00000080] text-[white] rounded-[5px] h-[30px]'>
                    <FaEye/>
                    <h3>65</h3>
                </button>
                <button className='text-[10px] font-[900] leading-[20px] py-[5px] px-[10px] bg-[#00000080] text-[white] rounded-[5px] h-[30px]'>
                    <h3>1995</h3>
                </button>
                </div>
                <div className='p-[30px]'>
                <div className='mb-[20px]'>
                    <h3 className='text-[#6B7A99] font-[700] text-[16px] leading-[30px] mb-[10px]'>Townhouse in the center</h3>
                    <p className='text-[#6B7A99] font-[700] text-[16px] leading-[30px]'>$ 225,000</p>
                </div>
                <div>
                    <h3 className='text-[#ADB8CC] font-[700] text-[13px] leading-[25px] mb-[15px]'>14 Patrick Brem Ct. Mahwah, NJ07430</h3>
                    <p className='text-[#ADB8CC] font-[700] text-[12px] leading-[20px]'>3 Beds  -  2 baths  -  3,450 sqft</p>
                </div>
                </div>
            </div>
            <div className='deal relative bg-[white] rounded-[10px] overflow-hidden'>
                <img src='Image (7).png' alt=''/>
                <div className='buttons flex gap-[10px] absolute'>
                <button className='flex justify-between gap-[5px] items-center text-[10px] font-[900] leading-[20px] py-[3px] pr-[10px] pl-[5px] bg-[#00000080] text-[white] rounded-[5px] h-[30px]'>
                    <FaEye/>
                    <h3>65</h3>
                </button>
                <button className='text-[10px] font-[900] leading-[20px] py-[5px] px-[10px] bg-[#00000080] text-[white] rounded-[5px] h-[30px]'>
                    <h3>1995</h3>
                </button>
                </div>
                <div className='p-[30px]'>
                <div className='mb-[20px]'>
                    <h3 className='text-[#6B7A99] font-[700] text-[16px] leading-[30px] mb-[10px]'>Townhouse in the center</h3>
                    <p className='text-[#6B7A99] font-[700] text-[16px] leading-[30px]'>$ 225,000</p>
                </div>
                <div>
                    <h3 className='text-[#ADB8CC] font-[700] text-[13px] leading-[25px] mb-[15px]'>9832 Hidden Valley Way</h3>
                    <p className='text-[#ADB8CC] font-[700] text-[12px] leading-[20px]'>2 Beds  -  1 baths  -  2,300 sqft</p>
                </div>
                </div>
            </div>
            <div className='deal relative bg-[white] rounded-[10px] overflow-hidden'>
                <img src='Image (8).png' alt=''/>
                <div className='buttons flex gap-[10px] absolute'>
                <button className='flex justify-between gap-[5px] items-center text-[10px] font-[900] leading-[20px] py-[3px] pr-[10px] pl-[5px] bg-[#00000080] text-[white] rounded-[5px] h-[30px]'>
                    <FaEye/>
                    <h3>65</h3>
                </button>
                <button className='text-[10px] font-[900] leading-[20px] py-[5px] px-[10px] bg-[#00000080] text-[white] rounded-[5px] h-[30px]'>
                    <h3>1995</h3>
                </button>
                </div>
                <div className='p-[30px]'>
                <div className='mb-[20px]'>
                    <h3 className='text-[#6B7A99] font-[700] text-[16px] leading-[30px] mb-[10px]'>Flat in Center City</h3>
                    <p className='text-[#6B7A99] font-[700] text-[16px] leading-[30px]'>$ 225,000</p>
                </div>
                <div>
                    <h3 className='text-[#ADB8CC] font-[700] text-[13px] leading-[25px] mb-[15px]'>9832 Hidden Valley Way</h3>
                    <p className='text-[#ADB8CC] font-[700] text-[12px] leading-[20px]'>2 Beds  -  1 baths  -  2,300 sqft</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </>
)
}

export default Deals