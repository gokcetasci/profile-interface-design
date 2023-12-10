import React, { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa6';
import { GoShare } from 'react-icons/go';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { PiMapPinFill } from "react-icons/pi";
import { GiWorld, GiZigzagCage } from "react-icons/gi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { BiSolidUserRectangle } from "react-icons/bi"
import { PiStudentFill } from "react-icons/pi";

function ProfileDetail() {
    const [isShareOpen, setShareOpen] = useState(false);
    const [isGoShareClicked, setGoShareClicked] = useState(false);

    const handleShareClick = () => {
        setShareOpen(!isShareOpen);
        setGoShareClicked(!isGoShareClicked);
    };

    const [selectedTitle, setSelectedTitle] = useState('genel');

    // İçerikleri tutan nesne
    const content = {
        genel: {
            interest: (
                <>
                    <p className='mb-2'>Kaygi - Panik Atak</p>
                    <p className='mb-2'>Baglanma Sorunlari - Bas Etme Becerileri</p>
                    <p className='mb-2'>Fobiler - Sosyal Kaygi - Özgüven Problemleri - Saglik Kaygisi - Uyku Bozuklugu</p>
                    <p className='mb-2'>Depresyon, Bagimlilik - Stres - Öfke Kontrolü</p>
                    <p className='mb-2'>Obsesif Kompulsif Bozukluk - Ebeveynlik</p>
                    <p className='mb-2'>İliski Problemleri - Degersizlik - Kendini Tanima</p>
                </>
            ),
            universityanddate: (
                <>
                    <div className='flex flex-row justify-between'>
                        <p>Okan Üniversitesi</p>
                        <p>2018</p>
                    </div>
                    <hr className='my-2  border-light opacity-100' />
                    <div className='flex flex-row justify-between'>
                        <p>İstanbul Bilgi Üniversitesi</p>
                        <p>2016</p>
                    </div>
                </>
            ),
            worktitle: (
                <>
                    <p>Klinik Psikolog</p>
                </>
            ),
            workplace: (
                <>
                    <p>Home office</p>
                </>
            ),
            experiencetime: (
                <>
                    <p>Eylül 2021 - Halen</p>
                </>
            )
        },
        sosyal: (
            <div className='px-12 my-12'>
                <div className='flex flex-col items-center justify center'>
                    <FaCamera className='w-[52px] h-[52px] text-gray-400/50 mb-3' />
                    <p className='font-medium text-opacity-[0.75]'>Sağlık profesyoneli henüz paylaşım yapmadı.</p>
                </div>
            </div>
        ),
    };

    // Başlık tıklama işlemi
    const handleTitleClick = (title) => {
        setSelectedTitle(title);
    };

    return (
        <div className='pt-[30px] pb-[50px] bg-mainbgcolor bg-opacity-[.7] '>
            <div className='px-3 mx-[74px] flex flex-row gap-[40px]' >
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
                            <div className='flex flex-row w-full items-center gap-[1rem] leading-[1] place-content-end mt-auto relative text-pdicon' >
                                <a href=''>
                                    <FaRegHeart className='text-[14px]' />
                                </a>
                                <div style={isGoShareClicked ? { border: '1px solid #0F2557', borderRadius: '4px' } : { border: '1px solid transparent' }} >
                                    <button onClick={handleShareClick} className='p-1' >
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

                <div className='w-full flex flex-col '>
                    <div className='flex flex-row text-[24px] items-center justify-center  ' style={{ boxSizing: 'border-box' }}>
                        <button
                            onClick={() => handleTitleClick('genel')}
                            className={`flex flex-row  items-center justify-center py-[5px] w-2/4  ${selectedTitle === 'genel' ? 'border-b-[3px] border-[#0f2557]' : 'border-b-[2.5px] border-[#dee2e6]'
                                }`}
                        >
                            <BiSolidUserRectangle className='mr-2 w-8 h-8' />
                            <span className='font-medium'>Genel</span>
                        </button>
                        <button
                            onClick={() => handleTitleClick('sosyal')}
                            className={`flex flex-row items-center justify-center py-[5px] w-2/4 ${selectedTitle === 'sosyal' ? 'border-b-[3px] border-[#0f2557]' : 'border-b-[2.5px] border-[#dee2e6]'
                                }`} style={{ boxSizing: 'border-box' }}
                        >
                            <FaCamera className='mr-2 w-6 h-6 ' />
                            <span className='font-medium' >Sosyal</span>
                        </button>
                    </div>
                    <div className='pt-8'>
                        {selectedTitle === 'genel' && (
                            <>
                                <div className='mb-8 pb-2 '>
                                    <div className='mb-4 flex flex-row text-pdicon '>
                                        <div className='mr-2'>
                                            <svg width="18.85" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.8182 9C21.8182 8.72917 21.7102 8.49479 21.4943 8.29688C21.2784 8.09896 21.0227 8 20.7273 8C20.4318 8 20.1761 8.09896 19.9602 8.29688C19.7443 8.49479 19.6364 8.72917 19.6364 9C19.6364 9.27083 19.7443 9.50521 19.9602 9.70312C20.1761 9.90104 20.4318 10 20.7273 10C21.0227 10 21.2784 9.90104 21.4943 9.70312C21.7102 9.50521 21.8182 9.27083 21.8182 9ZM24 9C24 9.64583 23.7983 10.224 23.3949 10.7344C22.9915 11.2448 22.4659 11.6094 21.8182 11.8281V18C21.8182 19.6562 21.071 21.0703 19.5767 22.2422C18.0824 23.4141 16.2841 24 14.1818 24C12.0795 24 10.2812 23.4141 8.78693 22.2422C7.29261 21.0703 6.54545 19.6562 6.54545 18V15.9375C4.68182 15.7292 3.125 15.0625 1.875 13.9375C0.625 12.8125 0 11.5 0 10V2C0 1.72917 0.107955 1.49479 0.323864 1.29688C0.539773 1.09896 0.795455 1 1.09091 1C1.15909 1 1.25 1.01042 1.36364 1.03125C1.55682 0.71875 1.82386 0.46875 2.16477 0.28125C2.50568 0.09375 2.875 0 3.27273 0C3.875 0 4.3892 0.195312 4.81534 0.585938C5.24148 0.976562 5.45455 1.44792 5.45455 2C5.45455 2.55208 5.24148 3.02344 4.81534 3.41406C4.3892 3.80469 3.875 4 3.27273 4C2.89773 4 2.53409 3.90625 2.18182 3.71875V10C2.18182 11.1042 2.71591 12.0469 3.78409 12.8281C4.85227 13.6094 6.13636 14 7.63636 14C9.13636 14 10.4205 13.6094 11.4886 12.8281C12.5568 12.0469 13.0909 11.1042 13.0909 10V3.71875C12.7386 3.90625 12.375 4 12 4C11.3977 4 10.8835 3.80469 10.4574 3.41406C10.0312 3.02344 9.81818 2.55208 9.81818 2C9.81818 1.44792 10.0312 0.976562 10.4574 0.585938C10.8835 0.195312 11.3977 0 12 0C12.3977 0 12.767 0.09375 13.108 0.28125C13.4489 0.46875 13.7159 0.71875 13.9091 1.03125C14.0227 1.01042 14.1136 1 14.1818 1C14.4773 1 14.733 1.09896 14.9489 1.29688C15.1648 1.49479 15.2727 1.72917 15.2727 2V10C15.2727 11.5 14.6477 12.8125 13.3977 13.9375C12.1477 15.0625 10.5909 15.7292 8.72727 15.9375V18C8.72727 19.1042 9.26136 20.0469 10.3295 20.8281C11.3977 21.6094 12.6818 22 14.1818 22C15.6818 22 16.9659 21.6094 18.0341 20.8281C19.1023 20.0469 19.6364 19.1042 19.6364 18V11.8281C18.9886 11.6094 18.4631 11.2448 18.0597 10.7344C17.6562 10.224 17.4545 9.64583 17.4545 9C17.4545 8.16667 17.7727 7.45833 18.4091 6.875C19.0455 6.29167 19.8182 6 20.7273 6C21.6364 6 22.4091 6.29167 23.0455 6.875C23.6818 7.45833 24 8.16667 24 9Z" fill="#0F2557" />
                                            </svg>

                                        </div>
                                        <h1 className='text-[18px] font-medium'>Klinik İlgi Alanları</h1>
                                    </div>

                                    <div className='bg-white shadow-[0_.5rem_1rem_rgba(0,0,0,.15)] p-4 text-[12px] rounded-md'>
                                        {content[selectedTitle].interest}
                                    </div>
                                </div>
                                <div className='mb-8 pb-2 '>
                                    <div className='mb-4 flex flex-row text-pdicon '>
                                        <div className='mr-2'>
                                            <PiStudentFill className='w-7 h-7' />
                                        </div>
                                        <h1 className='text-[18px] font-medium'>Eğitim Bilgileri</h1>
                                    </div>

                                    <div className='bg-white shadow-[0_.5rem_1rem_rgba(0,0,0,.15)] p-4 text-[12px] rounded-md'>
                                        {content[selectedTitle].universityanddate}
                                    </div>
                                </div>
                                <div></div>
                                <div className='mb-8 pb-2 '>
                                    <div className='mb-4 flex flex-row text-pdicon '>
                                        <div className='mr-2'>
                                            <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.14286 17.5714V18.4286C5.14286 18.5446 5.10045 18.6451 5.01562 18.7299C4.9308 18.8147 4.83036 18.8571 4.71429 18.8571H3.85714C3.74107 18.8571 3.64062 18.8147 3.5558 18.7299C3.47098 18.6451 3.42857 18.5446 3.42857 18.4286V17.5714C3.42857 17.4554 3.47098 17.3549 3.5558 17.2701C3.64062 17.1853 3.74107 17.1429 3.85714 17.1429H4.71429C4.83036 17.1429 4.9308 17.1853 5.01562 17.2701C5.10045 17.3549 5.14286 17.4554 5.14286 17.5714ZM5.14286 14.1429V15C5.14286 15.1161 5.10045 15.2165 5.01562 15.3013C4.9308 15.3862 4.83036 15.4286 4.71429 15.4286H3.85714C3.74107 15.4286 3.64062 15.3862 3.5558 15.3013C3.47098 15.2165 3.42857 15.1161 3.42857 15V14.1429C3.42857 14.0268 3.47098 13.9263 3.5558 13.8415C3.64062 13.7567 3.74107 13.7143 3.85714 13.7143H4.71429C4.83036 13.7143 4.9308 13.7567 5.01562 13.8415C5.10045 13.9263 5.14286 14.0268 5.14286 14.1429ZM8.57143 14.1429V15C8.57143 15.1161 8.52902 15.2165 8.4442 15.3013C8.35938 15.3862 8.25893 15.4286 8.14286 15.4286H7.28571C7.16964 15.4286 7.0692 15.3862 6.98438 15.3013C6.89955 15.2165 6.85714 15.1161 6.85714 15V14.1429C6.85714 14.0268 6.89955 13.9263 6.98438 13.8415C7.0692 13.7567 7.16964 13.7143 7.28571 13.7143H8.14286C8.25893 13.7143 8.35938 13.7567 8.4442 13.8415C8.52902 13.9263 8.57143 14.0268 8.57143 14.1429ZM5.14286 10.7143V11.5714C5.14286 11.6875 5.10045 11.7879 5.01562 11.8728C4.9308 11.9576 4.83036 12 4.71429 12H3.85714C3.74107 12 3.64062 11.9576 3.5558 11.8728C3.47098 11.7879 3.42857 11.6875 3.42857 11.5714V10.7143C3.42857 10.5982 3.47098 10.4978 3.5558 10.4129C3.64062 10.3281 3.74107 10.2857 3.85714 10.2857H4.71429C4.83036 10.2857 4.9308 10.3281 5.01562 10.4129C5.10045 10.4978 5.14286 10.5982 5.14286 10.7143ZM15.4286 17.5714V18.4286C15.4286 18.5446 15.3862 18.6451 15.3013 18.7299C15.2165 18.8147 15.1161 18.8571 15 18.8571H14.1429C14.0268 18.8571 13.9263 18.8147 13.8415 18.7299C13.7567 18.6451 13.7143 18.5446 13.7143 18.4286V17.5714C13.7143 17.4554 13.7567 17.3549 13.8415 17.2701C13.9263 17.1853 14.0268 17.1429 14.1429 17.1429H15C15.1161 17.1429 15.2165 17.1853 15.3013 17.2701C15.3862 17.3549 15.4286 17.4554 15.4286 17.5714ZM12 14.1429V15C12 15.1161 11.9576 15.2165 11.8728 15.3013C11.7879 15.3862 11.6875 15.4286 11.5714 15.4286H10.7143C10.5982 15.4286 10.4978 15.3862 10.4129 15.3013C10.3281 15.2165 10.2857 15.1161 10.2857 15V14.1429C10.2857 14.0268 10.3281 13.9263 10.4129 13.8415C10.4978 13.7567 10.5982 13.7143 10.7143 13.7143H11.5714C11.6875 13.7143 11.7879 13.7567 11.8728 13.8415C11.9576 13.9263 12 14.0268 12 14.1429ZM8.57143 10.7143V11.5714C8.57143 11.6875 8.52902 11.7879 8.4442 11.8728C8.35938 11.9576 8.25893 12 8.14286 12H7.28571C7.16964 12 7.0692 11.9576 6.98438 11.8728C6.89955 11.7879 6.85714 11.6875 6.85714 11.5714V10.7143C6.85714 10.5982 6.89955 10.4978 6.98438 10.4129C7.0692 10.3281 7.16964 10.2857 7.28571 10.2857H8.14286C8.25893 10.2857 8.35938 10.3281 8.4442 10.4129C8.52902 10.4978 8.57143 10.5982 8.57143 10.7143ZM15.4286 14.1429V15C15.4286 15.1161 15.3862 15.2165 15.3013 15.3013C15.2165 15.3862 15.1161 15.4286 15 15.4286H14.1429C14.0268 15.4286 13.9263 15.3862 13.8415 15.3013C13.7567 15.2165 13.7143 15.1161 13.7143 15V14.1429C13.7143 14.0268 13.7567 13.9263 13.8415 13.8415C13.9263 13.7567 14.0268 13.7143 14.1429 13.7143H15C15.1161 13.7143 15.2165 13.7567 15.3013 13.8415C15.3862 13.9263 15.4286 14.0268 15.4286 14.1429ZM12 10.7143V11.5714C12 11.6875 11.9576 11.7879 11.8728 11.8728C11.7879 11.9576 11.6875 12 11.5714 12H10.7143C10.5982 12 10.4978 11.9576 10.4129 11.8728C10.3281 11.7879 10.2857 11.6875 10.2857 11.5714V10.7143C10.2857 10.5982 10.3281 10.4978 10.4129 10.4129C10.4978 10.3281 10.5982 10.2857 10.7143 10.2857H11.5714C11.6875 10.2857 11.7879 10.3281 11.8728 10.4129C11.9576 10.4978 12 10.5982 12 10.7143ZM15.4286 10.7143V11.5714C15.4286 11.6875 15.3862 11.7879 15.3013 11.8728C15.2165 11.9576 15.1161 12 15 12H14.1429C14.0268 12 13.9263 11.9576 13.8415 11.8728C13.7567 11.7879 13.7143 11.6875 13.7143 11.5714V10.7143C13.7143 10.5982 13.7567 10.4978 13.8415 10.4129C13.9263 10.3281 14.0268 10.2857 14.1429 10.2857H15C15.1161 10.2857 15.2165 10.3281 15.3013 10.4129C15.3862 10.4978 15.4286 10.5982 15.4286 10.7143ZM12 22.2857H17.1429V6.85714H13.7143V7.28571C13.7143 7.64286 13.5893 7.94643 13.3393 8.19643C13.0893 8.44643 12.7857 8.57143 12.4286 8.57143H6.42857C6.07143 8.57143 5.76786 8.44643 5.51786 8.19643C5.26786 7.94643 5.14286 7.64286 5.14286 7.28571V6.85714H1.71429V22.2857H6.85714V19.2857C6.85714 19.1696 6.89955 19.0692 6.98438 18.9844C7.0692 18.8996 7.16964 18.8571 7.28571 18.8571H11.5714C11.6875 18.8571 11.7879 18.8996 11.8728 18.9844C11.9576 19.0692 12 19.1696 12 19.2857V22.2857ZM12 6.42857V2.14286C12 2.02679 11.9576 1.92634 11.8728 1.84152C11.7879 1.7567 11.6875 1.71429 11.5714 1.71429H10.7143C10.5982 1.71429 10.4978 1.7567 10.4129 1.84152C10.3281 1.92634 10.2857 2.02679 10.2857 2.14286V3.42857H8.57143V2.14286C8.57143 2.02679 8.52902 1.92634 8.4442 1.84152C8.35938 1.7567 8.25893 1.71429 8.14286 1.71429H7.28571C7.16964 1.71429 7.0692 1.7567 6.98438 1.84152C6.89955 1.92634 6.85714 2.02679 6.85714 2.14286V6.42857C6.85714 6.54464 6.89955 6.64509 6.98438 6.72991C7.0692 6.81473 7.16964 6.85714 7.28571 6.85714H8.14286C8.25893 6.85714 8.35938 6.81473 8.4442 6.72991C8.52902 6.64509 8.57143 6.54464 8.57143 6.42857V5.14286H10.2857V6.42857C10.2857 6.54464 10.3281 6.64509 10.4129 6.72991C10.4978 6.81473 10.5982 6.85714 10.7143 6.85714H11.5714C11.6875 6.85714 11.7879 6.81473 11.8728 6.72991C11.9576 6.64509 12 6.54464 12 6.42857ZM18.8571 6V23.1429C18.8571 23.375 18.7723 23.5759 18.6027 23.7455C18.433 23.9152 18.2321 24 18 24H0.857143C0.625 24 0.424107 23.9152 0.254464 23.7455C0.0848214 23.5759 0 23.375 0 23.1429V6C0 5.76786 0.0848214 5.56696 0.254464 5.39732C0.424107 5.22768 0.625 5.14286 0.857143 5.14286H5.14286V1.28571C5.14286 0.928571 5.26786 0.625 5.51786 0.375C5.76786 0.125 6.07143 0 6.42857 0H12.4286C12.7857 0 13.0893 0.125 13.3393 0.375C13.5893 0.625 13.7143 0.928571 13.7143 1.28571V5.14286H18C18.2321 5.14286 18.433 5.22768 18.6027 5.39732C18.7723 5.56696 18.8571 5.76786 18.8571 6Z" fill="#0F2557" />
                                            </svg>
                                        </div>
                                        <h1 className='text-[18px] font-medium'>İş Yeri ve Deneyim</h1>
                                    </div>

                                    <div className='bg-white shadow-[0_.5rem_1rem_rgba(0,0,0,.15)] p-4 text-[12px] rounded-md'>
                                    <div className='flex flex-row gap-3 grid grid-cols-3'>
                                        <span>{content[selectedTitle].worktitle}</span>
                                        <span>{content[selectedTitle].workplace}</span>
                                        <span className='place-self-end'>{content[selectedTitle].experiencetime}</span>
                                    </div>
                                    </div>
                                </div>
                                <div></div>
                            </>
                        )}
                        {selectedTitle === 'sosyal' && <p>{content[selectedTitle]}</p>}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProfileDetail;
