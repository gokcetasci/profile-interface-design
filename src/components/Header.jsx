import React, { useState } from 'react';
import { BiSolidDownArrow } from "react-icons/bi";
import { TbStethoscope } from "react-icons/tb";

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='fixed-top py-0 h-[100px] w-screen bg-gray-100'>
            <div className='mx-[74px] px-3 py-2.5  flex flex-row h-[100px] items-center relative gap-3 justify-between '>
                <a className='mr-8'>
                    <img src="https://www.livemedy.com/images/logo.png" alt="Livemedy Logo" className='w-[205px] h-[45px]' />
                </a>
                <div className='text-[14px]	'>
                    <a href="" className='px-4 py-2'>Blog</a>
                    <a href="" className='px-4 py-2'>Hakkımızda</a>
                    <a href="" className='px-4 py-2'>İletişim</a>
                </div>
                <div id='dropdown' className='relative flex flex-row justify-center items-center h-[43px] mx-auto'>
                    <button onClick={toggleDropdown} className='px-4 py-2 flex flex-row font-semibold	text-sm	place-items-center '>
                        <img src="https://www.livemedy.com/app/dist/img/flag/Tr.png" alt="" className='w-[33px] h-[33px] mr-3' />
                        <span >TR</span>
                        <BiSolidDownArrow className='text-[#e74b3c] ml-[6px]' />
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
                <div className='flex flex-row pr-[8px] mr-[48px] ml-auto'>
                    <TbStethoscope className='text-[1.5rem] mr-[2px] 	'/>
                    <p className='text-'>KURUMLAR</p>
                </div>
                <div className='flex flex-row justify-center align-items-center text-[14px]'>
                    <a className='btn btn-lg btn-primary flex  justify-center items-center text-white rounded-0 rounded-start py-[8.5px] px-4 w-[90px] bg-[#e74b3c] ml-[1px] tracking-[-.3px] font-normal text-base rounded-l-md' href="">
                        Giriş
                    </a>
                    <a className='btn btn-lg btn-primary flex  justify-center items-center text-white rounded-0 rounded-start py-[8.5px] px-4 w-[90px] bg-[#e74b3c] ml-[1px] tracking-[-.3px] font-normal text-base rounded-r-md' href="">
                        Üye Ol
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
