import React, { useState } from 'react';
import { MdPlayArrow } from "react-icons/md";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineGif } from "react-icons/hi2";
import { CiFaceSmile } from "react-icons/ci";
import { GoPaperclip } from "react-icons/go";

function Intercom() {

  const [selectedButton, setSelectedButton] = useState('home');

  const buttoncontent = {
    home: (
      <>
        <div className='px-9 pt-8 pb-[140px] h-[388px]'>
          <div className='flex flex-row justify-between items-center mb-[100px]'>
            <a href='/' className=''>
              <img src="https://www.livemedy.com/images/logo.png" alt="Livemedy Logo" className='w-[150px] h-[32px]' />
            </a>
            <img src="https://static.intercomassets.com/avatars/4960928/square_128/Gul_Zeynep_Genc_1-1623943666.png" alt="" className='w-10 h-10 rounded-full' />
          </div>
          <div>
            <p className='text-[32px] font-bold'>
              <span className='text-[#867979]'>Hi there 👋</span><br />
              How can we help?
            </p>

          </div>

        </div>
        <div>
          <div className='flex flex-row justify-between items-center bg-white px-[20px] py-4 rounded-[10px] shadow-[0_0_1px_rgba(0,0,0,.6)]  mt-[-115px] mx-4 mb-[125px]'>
            <div className='text-[14px]'>
              <p className='hover:text-primary transition duration-300 ease-in-out font-medium '>Send us a messages</p>
              <p className='text-[#737373]'>We'll be back online later today</p>
            </div>
            <div>
              <MdPlayArrow className='text-primary w-[24px] h-[24px]' />
            </div>
          </div>
        </div>
      </>
    ),
    messages: (
      <>
        <div className='h-[472px] relative'>
          <div className='flex flex-col items-center h-[64px] p-4 relative'>
            <h1 className='text-[18px] font-bold'>Messages</h1>
          </div>
          <div className='flex flex-col justify-center items-center mx-[35px] h-[380px] gap-[20px]'>
            <BiSolidMessageSquareDetail className='w-8 h-8' />
            <p className='text-[18px] font-bold'>
              No messages
            </p>
            <p className='text-[14px]'>
              Messages from the team will be shown here
            </p>
            <button onClick={() => handleButtonClick('sendmessages')} className='absolute bg-primary text-white flex flex-row justify-center items-center py-[10px] px-4 rounded-lg hover:bg-hoverred' style={{ top: '88%' }}>
              <span className='text-[14px] font-medium '>Send us a message</span>
              <MdPlayArrow className='text-white w-[20px] h-[20px] ml-4' />
            </button>
          </div>
        </div>
      </>
    ),
    sendmessages: (
      <>
        <div className='h-[550px] '>
          <div className='h-[214px] p-3'>
            <div className='flex flex-row items-center h-[48px] '>
              <button onClick={() => handleButtonClick('messages')} className='w-12 h-12 rounded-[10px] px-3 hover:bg-primary/25 transition duration-300 ease-in-out flex justify-center items-center'>
                <IoIosArrowBack className='text-primary w-[20px] h-[20px]' />
              </button>
              <h1 className='font-bold text-[18px] pl-24'>Livemedy</h1>
            </div>
            <div className='flex flex-col justify-center items-center px-[50px] py-3'>
              <img src="https://static.intercomassets.com/avatars/4960928/square_128/Gul_Zeynep_Genc_1-1623943666.png" alt="" className='w-16 h-16 rounded-full' />
              <p className='text-[16px] font-bold mt-3'>
                We'll be back online tomorrow
              </p>
              <p className='text-[14px] text-[#737373] mt-2'>
                Ask us anything, or share your feedback.
              </p>
            </div>
          </div>
          <div className="flex flex-col relative mt-[277px] ">
            <input
              type="text"
              className="border-t border-[#E4E4E7] border-opacity-[0.75] h-[56px] w-[396px] pl-[28px] pr-[100px] py-[18px] focus:outline-none text-[14px]"
              placeholder="Message..."
            />
            <div className="absolute flex flex-row  right-7 top-5 cursor-pointer">
              <HiOutlineGif className='w-4 h-4 text-gray-500 mr-2 hover:text-gray-700' />
              <CiFaceSmile className='w-4 h-4 text-gray-500 mr-2 hover:text-gray-700' />
              <GoPaperclip className='w-4 h-4 text-gray-500 hover:text-gray-700' />
            </div>
          </div>
        </div>
      </>

    ),
  };

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    
    <div className='relative bg-white border rounded-lg h-[552px] w-[400px] mx-auto shadow-[0_0_1rem_rgba(0,0,0,.2)]'>
      <div>
        {selectedButton === 'home' && buttoncontent[selectedButton]}
        {selectedButton === 'messages' && buttoncontent[selectedButton]}
        {selectedButton === 'sendmessages' && buttoncontent[selectedButton]}
      </div>
      {selectedButton !== 'sendmessages' && (
        <div className='flex flex-row h-[80px] border-t border-opacity-[0.75]'>
          <div className={`w-2/4 flex flex-col justify-center items-center px-[3px] py-[18px] ${selectedButton === 'home' ? 'text-primary' : 'text-basecolor hover:text-primary transition duration-300 ease-in-out'}`}>
            <button onClick={() => handleButtonClick('home')} className='flex flex-col justify-center items-center'>
              <RiHomeSmile2Fill className='w-6 h-6 mb-2' />
              <p className='text-[14px] font-medium'>Home</p>
            </button>
          </div>
          <div className={`w-2/4 flex flex-col justify-center items-center hover:text-primary transition duration-300 ease-in-out ${selectedButton === 'messages' ? 'text-primary' : 'text-basecolor'}`}>
            <button onClick={() => handleButtonClick('messages')} className='flex flex-col justify-center items-center'>
              <BiSolidMessageSquareDetail className='w-6 h-6 mb-2' />
              <p className='text-[14px] '>Messages</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Intercom;

