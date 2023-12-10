import React, { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa6';
import { GoShare } from 'react-icons/go';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { PiMapPinFill } from "react-icons/pi";
import { GiWorld } from "react-icons/gi";
import { MdAccountBalanceWallet } from "react-icons/md";
import AppointmentCalendar from './AppointmentCalendar';

function ProfileDetail() {
    const [isShareOpen, setShareOpen] = useState(false);
    const [isGoShareClicked, setGoShareClicked] = useState(false);

    const handleShareClick = () => {
        setShareOpen(!isShareOpen);
        setGoShareClicked(!isGoShareClicked);
    };


    return (
        <div className='pt-[30px] pb-[50px] bg-mainbgcolor bg-opacity-[.7] '>
            <div className='px-3 mx-[74px] ' >
                <div
                    className='align-self-start flex-shrink-0 shadow bg-white border-solid border-[#f8f8f8] rounded-[24px] p-[28px] w-[395px]'
                    style={{ boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)' }}
                >
                    <div className='mb-[20px] flex flex-row'>
                        <img
                            data-id='doctor-image'
                            src='https://www.livemedy.com/tr/files/download/950624a9-dd4b-406d-b34e-d52799db33ee'
                            alt='proflie-picture'
                            className='mr-[18px] border border-solid border-[3px] border-[#dee2e6] rounded-[0.5rem] w-[176px] h-[176px]'
                        />
                        <div className='flex flex-col align-self-strecth w-full	'>
                            <h3 className='text-[20px] mb-0 leading-[1.4] font-medium'>
                                Seda <br /> Odabaşı Dinç
                            </h3>
                            <span
                                data-id='doctor-title'
                                className='text-[#757a81] text-[13px] leading-[1.3] mb-[7px]'
                            >
                                Uzman, Klinik Psikoloji
                            </span>
                            <div className='flex flex-row w-full items-center gap-[1rem] leading-[1] place-content-end mt-auto relative text-pdicon'>
                                <a href=''>
                                    <FaRegHeart className='text-[14px]' />
                                </a>
                                <div>
                                    <button onClick={handleShareClick} className='p-1' style={isGoShareClicked ? { border: '1px solid #0F2557', borderRadius: '4px' } : {}}>
                                        <GoShare
                                            className={`text-[18px]`}

                                        />
                                    </button>
                                    {isShareOpen && (
                                        <div className='absolute -top-11 left-10 flex flex-row py-2 text-pdicon gap-2 bg-white px-4' style={{ boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)' }}>
                                            <a href='#'>
                                                <IoLogoWhatsapp className='w-6 h-6' />
                                            </a>
                                            <a href='#'>
                                                <FaFacebookF className='w-6 h-6' />
                                            </a>
                                            <a href='#'>
                                                <FaTwitter className='w-6 h-6' />
                                            </a>
                                            <a href='#'>
                                                <FaTelegram className='w-6 h-6' />
                                            </a>
                                            <a href='#'>
                                                <IoMdMail className='w-6 h-6' />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-[2px] mb-9'>
                        <div className='flex flex-col items-center justify-center px-1 py-4 w-1/3 bg-[#AFCAFF] bg-opacity-[.2] rounded-l-lg'>
                            <strong className='text-[14px] mb-[10px]'>Şehir</strong>
                            <div className='flex flex-row text-[16px] text-pdicon' >
                                <PiMapPinFill className='mr-[6px]' />
                                <span className='text-[12px]'>İstanbul</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center px-1 py-4 w-1/3 bg-[#AFCAFF] bg-opacity-[.2] '>
                            <strong className='text-[14px] mb-[10px]'>Diller</strong>
                            <div className='flex flex-row text-[16px] text-pdicon' >
                                <GiWorld className='mr-[6px]' /> 
                                <span className='text-[12px]'>TR</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center px-1 py-4 w-1/3 bg-[#AFCAFF] bg-opacity-[.2] rounded-r-lg'>
                            <strong className='text-[14px] mb-[10px]'>Ücret</strong>
                            <div className='flex flex-row text-[16px] text-pdicon' >
                                <MdAccountBalanceWallet className='mr-[6px]' />
                                <span className='text-[12px]'>8₺/dk</span>
                            </div>
                        </div>
                    </div>

                    <h4 className='text-[26px] text-#353539 mb-2'>Randevu Al</h4>
                    
                </div>
            </div>
        </div>
    );
}

export default ProfileDetail;
