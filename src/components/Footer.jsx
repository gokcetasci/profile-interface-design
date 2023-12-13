import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <div className="bg-[#f4f6f6]  bottom-0 left-0 w-full pt-[22px] lg:pt-[49px]">
            <div className='mx-0 md:mx-[74px] px-[12px] text-basecolor'>
                <div className='flex flex-row mb-[27px] lg:mb-[50px]'>
                    <a href='/' className='mr-[132px] '>
                        <img src="https://www.livemedy.com/images/logo.png" alt="Livemedy Logo" className='w-[205px] h-[45px]' />
                    </a>
                    <div className='flex justify-center items-center text-[14px] tracking-wide hidden lg:flex'>
                        <a href="" className='mr-[40px]'>
                            Hakkımızda
                        </a>
                        <a href="" className='mr-[40px]'>
                            Sıkça Sorulan Sorular
                        </a>
                        <a href="">
                            İletişim
                        </a>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row'>
                    <div className='flex flex-row ml-auto lg:ml-[337px] gap-[24px] items-end hidden lg:flex'>
                        <a href="" className="bg-primary w-[30px] h-[30px] rounded-full  text-white flex items-center justify-center ">
                            <FaTwitter />
                        </a>
                        <a href="" className="bg-primary w-[30px] h-[30px] rounded-full  text-white flex items-center justify-center">
                            <FaInstagram />
                        </a>
                        <a href="" className="bg-primary w-[30px] h-[30px] rounded-full  text-white flex items-center justify-center">
                            <FaFacebookF />
                        </a>
                        <a href="" className="bg-primary w-[30px] h-[30px] rounded-full  text-white flex items-center justify-center">
                            <FaLinkedinIn />
                        </a>
                    </div>
                    <form action="" className='w-full lg:w-[337px] lg:ml-auto tracking-wide	mb-[30px] lg:mb-0'>
                        <p className='mb-2 text-[12px] lg:text-[14px]'>
                            Özel fırsatlar ve güncellemeler için bültenimize abone olun:
                        </p>
                        <div className='flex'>
                            <input  name='mail' type="email" placeholder='E-posta' required className='px-3 py-1.5 w-full lg:w-[228px] rounded-l-[0.375rem] border border-fiborder border-solid border focus:outline-none focus:border-fifocus focus:ring-fifocus  focus:ring-[0.25rem] focus:ring-opacity-25 focus:border-opacity-50

' />
                            <button type='button' className='rounded-r-md text-white bg-footerbuttonbg hover:bg-fbghover w-[110px] px-3 py-1.5 h-[37.6px]'>Gönder</button>
                        </div>

                    </form>
                    <div className='flex flex-row  gap-[24px] items-end lg:hidden'>
                        <a href="" className="bg-primary w-[30px] h-[30px] rounded-full  text-white flex items-center justify-center ">
                            <FaTwitter />
                        </a>
                        <a href="" className="bg-primary w-[30px] h-[30px] rounded-full  text-white flex items-center justify-center">
                            <FaInstagram />
                        </a>
                        <a href="" className="bg-primary w-[30px] h-[30px] rounded-full  text-white flex items-center justify-center">
                            <FaFacebookF />
                        </a>
                        <a href="" className="bg-primary w-[30px] h-[30px] rounded-full  text-white flex items-center justify-center">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
                <div className="container  mt-[30px] lg:mt-[55px] py-0 lg:py-[20px] lg:border-t border-solid border-[#d0d3d6] text-[12px] ">
                    <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                        <p className="text-gray-700 hidden lg:flex">©2020 Livemedy Sağlık Platformu A.Ş. Tüm hakları saklıdır.</p>
                        <div className="flex flex-col lg:flex-row gap-[9px] lg:gap-9 lg:ml-auto mb-8 lg:mb-0">
                            <a href="#" className="text-gray-700 hover:text-blue-500">
                                Kullanım Koşulları            </a>
                            <a href="#" className="text-gray-700 hover:text-blue-500">
                                KVKK
                            </a>
                            <a href="">
                                Davranış Kuralları
                            </a>
                            <a href="">
                                Gizlilik Politikası
                            </a>
                        </div>
                        <p className="text-gray-700 lg:hidden mb-[20px] lg:mb-0">©2020 Livemedy Sağlık Platformu A.Ş. Tüm hakları saklıdır.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
