import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <div className="bg-[#f4f6f6]  bottom-0 left-0 w-full  pt-[49px]">
            <div className='mx-[74px] px-[12px] text-basecolor'>
                <div className='flex flex-row mb-[50px]'>
                    <a href='/' className='mr-[132px] '>
                        <img src="https://www.livemedy.com/images/logo.png" alt="Livemedy Logo" className='w-[205px] h-[45px]' />
                    </a>
                    <div className='flex justify-center items-center text-[14px] tracking-wide	'>
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
                <div className='flex flex-row'>
                    <div className='flex flex-row ml-[337px] gap-[24px] items-end'>
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
                    <form action="" className='w-[337px] ml-auto tracking-wide	'>
                        <p className='mb-2 text-[14px]'>
                            Özel fırsatlar ve güncellemeler için bültenimize abone olun:
                        </p>
                        <div className='flex'>
                            <input  name='mail' type="email" placeholder='E-posta' required className='px-3 py-1.5 w-[228px] rounded-l-[0.375rem] border border-fiborder border-solid border focus:outline-none focus:border-fifocus focus:ring-fifocus  focus:ring-[0.25rem] focus:ring-opacity-25 focus:border-opacity-50

' />
                            <button type='button' className='rounded-r-md text-white bg-footerbuttonbg hover:bg-fbghover w-[110px] px-3 py-1.5 h-[37.6px]'>Gönder</button>
                        </div>

                    </form>
                </div>
                <div className="container mt-[55px] py-[20px] border-t border-solid border-[#d0d3d6] text-[12px]">
                    <div className="flex justify-between items-center">
                        <p className="text-gray-700">©2020 Livemedy Sağlık Platformu A.Ş. Tüm hakları saklıdır.</p>
                        <div className="flex gap-9 ml-auto">
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
