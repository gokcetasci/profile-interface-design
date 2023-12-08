import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <div className="bg-[#f4f6f6] p-4">
            <div className='flex flex-row'>
                <a className='mr-8'>
                    <img src="https://www.livemedy.com/images/logo.png" alt="Livemedy Logo" className='w-[205px] h-[45px]' />
                </a>
                <div >
                    <a href="">
                    Hakkımızda
                    </a>
                    <a href="">
                    Sıkça Sorulan Sorular
                    </a>
                    <a href="">
                    İletişim
                    </a>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-row'>
                    <a href="">
                    <FaTwitter />
                    </a>
                    <a href="">
                    <FaInstagram />
                    </a>
                    <a href="">
                    <FaFacebookF />
                    </a>
                    <a href="">
                    <FaLinkedinIn />
                    </a>
                </div>
                <form action="">
                    <p>Özel fırsatlar ve güncellemeler için bültenimize abone olun:</p>
                    <div>
                        <input id='newsletteremail' name='mail' type="email" placeholder='E-posta' required/>
                        <button type='button'>Gönder</button>
                    </div>
                </form>
            </div>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <p className="text-gray-700">©2020 Livemedy Sağlık Platformu A.Ş. Tüm hakları saklıdı.</p>
                    <div className="flex space-x-4">
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
    );
}

export default Footer;
