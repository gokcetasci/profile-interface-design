import React, { useState } from 'react';
import { BiSolidDownArrow } from "react-icons/bi";
import { TbStethoscope } from "react-icons/tb";

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='fixed-top py-0 h-[100px] w-screen bg-white'>
            <div className='mx-[74px] px-3 py-2.5  flex flex-row h-[100px] items-center relative justify-between w-[1320px}'>
                <a className='mr-8'>
                    <img src="https://www.livemedy.com/images/logo.png" alt="Livemedy Logo" className='w-[205px] h-[45px]' />
                </a>
                <div className='text-[14px]	font-normal text-basecolor'>
                    <a href="" className='px-4 py-2'>Blog</a>
                    <a href="" className='px-4 py-2'>Hakkımızda</a>
                    <a href="" className='px-4 py-2'>İletişim</a>
                </div>
                <div id='dropdown' className='relative flex flex-row justify-center items-center h-[43px] mx-auto text-basecolor'>
                    <button onClick={toggleDropdown} className='px-4 py-2 flex flex-row  place-items-center '>
                        <img src="https://www.livemedy.com/app/dist/img/flag/Tr.png" alt="" className='w-[33px] h-[33px] mr-3' />
                        <p className='text-[14px] text-basecolor'>TR</p>
                        <BiSolidDownArrow className='text-primary ml-[6px]' />
                    </button>
                    {isDropdownOpen && (
                        <div className='dropdown-content absolute top-full left-2 border rounded-md	py-[5px] min-w-[92px] mt-[2px] z-10 bg-white'>
                            {/* Dropdown content goes here */}
                            <a href="#" className='flex flex-row '>
                                <img src="https://www.livemedy.com/app/dist/img/flag/Tr.png" alt="" className='h-[33px] mr-4 px-[5px]' />TR
                            </a>
                            <a href="#" className='flex flex-row'>
                                <img src="https://www.livemedy.com/app/dist/img/flag/EN.png" alt="" className=' h-[33px] mr-4 px-[5px]' />ENG
                            </a>

                        </div>
                    )}
                </div>
                <div className='flex flex-row pr-[8px] mr-[48px] ml-auto  justify-center items-center'>
                    <a href="" className='flex flex-row'><svg width="18.85" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                        <path d="M21.8182 9C21.8182 8.72917 21.7102 8.49479 21.4943 8.29688C21.2784 8.09896 21.0227 8 20.7273 8C20.4318 8 20.1761 8.09896 19.9602 8.29688C19.7443 8.49479 19.6364 8.72917 19.6364 9C19.6364 9.27083 19.7443 9.50521 19.9602 9.70312C20.1761 9.90104 20.4318 10 20.7273 10C21.0227 10 21.2784 9.90104 21.4943 9.70312C21.7102 9.50521 21.8182 9.27083 21.8182 9ZM24 9C24 9.64583 23.7983 10.224 23.3949 10.7344C22.9915 11.2448 22.4659 11.6094 21.8182 11.8281V18C21.8182 19.6562 21.071 21.0703 19.5767 22.2422C18.0824 23.4141 16.2841 24 14.1818 24C12.0795 24 10.2812 23.4141 8.78693 22.2422C7.29261 21.0703 6.54545 19.6562 6.54545 18V15.9375C4.68182 15.7292 3.125 15.0625 1.875 13.9375C0.625 12.8125 0 11.5 0 10V2C0 1.72917 0.107955 1.49479 0.323864 1.29688C0.539773 1.09896 0.795455 1 1.09091 1C1.15909 1 1.25 1.01042 1.36364 1.03125C1.55682 0.71875 1.82386 0.46875 2.16477 0.28125C2.50568 0.09375 2.875 0 3.27273 0C3.875 0 4.3892 0.195312 4.81534 0.585938C5.24148 0.976562 5.45455 1.44792 5.45455 2C5.45455 2.55208 5.24148 3.02344 4.81534 3.41406C4.3892 3.80469 3.875 4 3.27273 4C2.89773 4 2.53409 3.90625 2.18182 3.71875V10C2.18182 11.1042 2.71591 12.0469 3.78409 12.8281C4.85227 13.6094 6.13636 14 7.63636 14C9.13636 14 10.4205 13.6094 11.4886 12.8281C12.5568 12.0469 13.0909 11.1042 13.0909 10V3.71875C12.7386 3.90625 12.375 4 12 4C11.3977 4 10.8835 3.80469 10.4574 3.41406C10.0313 3.02344 9.81818 2.55208 9.81818 2C9.81818 1.44792 10.0313 0.976562 10.4574 0.585938C10.8835 0.195312 11.3977 0 12 0C12.3977 0 12.767 0.09375 13.108 0.28125C13.4489 0.46875 13.7159 0.71875 13.9091 1.03125C14.0227 1.01042 14.1136 1 14.1818 1C14.4773 1 14.733 1.09896 14.9489 1.29688C15.1648 1.49479 15.2727 1.72917 15.2727 2V10C15.2727 11.5 14.6477 12.8125 13.3977 13.9375C12.1477 15.0625 10.5909 15.7292 8.72727 15.9375V18C8.72727 19.1042 9.26136 20.0469 10.3295 20.8281C11.3977 21.6094 12.6818 22 14.1818 22C15.6818 22 16.9659 21.6094 18.0341 20.8281C19.1023 20.0469 19.6364 19.1042 19.6364 18V11.8281C18.9886 11.6094 18.4631 11.2448 18.0597 10.7344C17.6563 10.224 17.4545 9.64583 17.4545 9C17.4545 8.16667 17.7727 7.45833 18.4091 6.875C19.0455 6.29167 19.8182 6 20.7273 6C21.6364 6 22.4091 6.29167 23.0455 6.875C23.6818 7.45833 24 8.16667 24 9Z" fill="#E74B3C" />
                    </svg>
                    <p className='text-[14px] font-medium text-basecolor'>KURUMLAR</p></a>
                </div>
                <div className='flex flex-row justify-center align-items-center '>
                    <a className='  flex  justify-center text-[16px]  items-center 
                    text-white rounded-0 rounded-start py-[8.5px] px-4 w-[90px]  bg-primary ml-[1px]  
                    font-normal  rounded-l-md hover:bg-hoverred' href="">
                        Giriş
                    </a>
                    <a className=' flex  justify-center text-[16px]  items-center 
                    text-white rounded-0 rounded-start py-[8.5px] px-4 w-[90px] bg-primary ml-[1px]  
                    font-normal  rounded-r-md hover:bg-hoverred' href="">
                        Üye Ol
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
