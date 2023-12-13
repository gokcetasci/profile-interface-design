import React, { useState } from 'react';
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { IoRemoveOutline } from "react-icons/io5";

const appointmentTimes = {
  'Pzt': ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'],
  'Sal': ['09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'],
  'Çar': ['10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'],
  'Per': ['11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'],
  'Cum': ['11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'],
  'Cmt': [],
  'Pzr': [],
  // You can customize the hours as needed
};

function AppointmentCalendar() {
  const startDate = new Date(2023, 11, 12);
  const endDate = new Date(2023, 11, 31);
  const dateArray = [];
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    dateArray.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const [displayStartDate, setDisplayStartDate] = useState(0);
  const [showAllHours, setShowAllHours] = useState(false); // Added state for showing all hours
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const displayedDates = dateArray.slice(displayStartDate, displayStartDate + 4);

  const dateElements = (
    <div className="flex flex-row gap-5">
      {displayedDates.map((date, index) => (
        <div key={index} className="flex flex-col items-center">
          <span className='font-bold text-[16px]'>{getDayAbbreviation(date)}</span>
          <span className='text-[14px] text-gray-400'>{`${date.getDate()} ${getMonthName(date.getMonth())}`}</span>
          <div className="mt-3 flex flex-col">
            {showAllHours
              ? appointmentTimes[getDayAbbreviation(date)].map((time, timeIndex) => (
                <span key={timeIndex} className="text-[12px] bg-red-100 text-primary font-bold p-2 mb-2 rounded-lg hover:bg-primary hover:text-white transition duration-300 ease-in-out" onClick={() => handleTimeSlotClick(date, time)}>
                  {time}
                </span>
              ))
              : appointmentTimes[getDayAbbreviation(date)].slice(0, 4).map((time, timeIndex) => (
                <span key={timeIndex} className="text-[12px] bg-red-100 text-primary font-bold p-2 mb-2 rounded-lg hover:bg-primary hover:text-white transition duration-300 ease-in-out" onClick={() => handleTimeSlotClick(date, time)}>
                  {time}
                </span>
              ))}
          </div>
        </div>
      ))}
    </div>
  );

  const showPreviousDates = () => {
    if (displayStartDate > 0) {
      setDisplayStartDate(displayStartDate - 1);
    }
  };

  const showNextDates = () => {
    if (displayStartDate + 4 < dateArray.length) {
      setDisplayStartDate(displayStartDate + 1);
    }
  };

  const toggleShowAllHours = () => {
    setShowAllHours(!showAllHours);
  };

  const handleTimeSlotClick = (date, time) => {
    const selectedDate = new Date(date);
    const selectedDateTime = new Date(selectedDate.setHours(time.split(':')[0], time.split(':')[1]));
    setSelectedDateTime(selectedDateTime);
  };

  const [isCloseHovered, setCloseHovered] = useState(false);

  const handleMouseEnter = () => {
    setCloseHovered(true);
  };

  const handleMouseLeave = () => {
    setCloseHovered(false);
  };

  const Appoinmentalert = ({ onClose }) => (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white px-[30px] py-[40px] rounded-2xl max-w-[380px] relative shadow-xl">
        <div className='border-b mb-[20px] flex items-center justify-center'>
          <h1 className='font-bold text-[19px] pb-[20px]'>Online Randevu Özeti</h1>
        </div>
        <div className='flex flex-col  my-[30px] pb-[30px] border-b'>
          <div className='flex flex-row items-center '>
            <div className='flex flex-col w-2/4'>
              <div className='flex flex-row'>
                <FaCalendar className='text-red-600 mr-[5px]' />
                <p className='text-[14px] font-medium'>Tarih</p>
              </div>
              <p className='text-gray-600 text-[14px] mt-[10px]'>{selectedDateTime.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='flex flex-row'>
                <FaClock className='text-red-600 mr-[5px]' />
                <p className='text-[14px] font-medium'>Saat</p>
              </div>
              <p className='text-gray-600 text-[14px] mt-[10px]'>{selectedDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
          </div>
        </div>
        <div>
          <p className='text-[14px] text-gray-600 pb-[30px]'>Yukarıdaki bilgiler ile online randevu oluşturmak istediğinize emin misiniz?</p>
          <button className='bg-primary text-white flex flex-row justify-center items-center rounded-lg px-[28px] mt-[20px] w-full h-[56px] font-medium hover:bg-red-600'>
            Randevu Al
            <FaLongArrowAltRight className='ml-[15px]' />
          </button>
        </div>
        <button
          onClick={onClose}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`absolute -top-12 w-10 h-10 flex justify-center items-center shadow-xl rounded-full p-2 bg-${isCloseHovered ? 'primary' : 'white'} right-0`}
        >
          {isCloseHovered ? <IoRemoveOutline className='text-white w-5 h-5 ' /> : <MdClose className='text-primary w-5 h-5 ' />}
        </button>
      </div>
    </div>
  );

  return (
    <div className='mt-6'>
      <div className="flex flex-row justify-between ">
        <IoMdArrowDropleft onClick={showPreviousDates} className='text-primary w-6 h-6 mt-2 rounded-full bg-red-100/50 hover:bg-primary hover:text-white transition duration-300 ease-in-out' />
        {dateElements}
        <IoMdArrowDropright onClick={showNextDates} className='text-primary w-6 h-6 mt-2 rounded-full bg-red-100/50 hover:bg-primary hover:text-white transition duration-300 ease-in-outs' />
      </div>
      {selectedDateTime && <Appoinmentalert onClose={() => setSelectedDateTime(null)} />}
      <div className='flex justify-center items-center py-6'>
        <button onClick={toggleShowAllHours} className='text-primary text-[16px] font-bold underline'>
          {showAllHours ? 'Daha Az Saat Göster' : 'Daha Fazla Saat Göster'}
        </button>
      </div>
      <div className='flex justify-end mt-8'>
        <button type='button' className='rounded-md text-white bg-footerbuttonbg hover:bg-fbghover w-[110px] px-3 py-1.5 h-[37.6px] w-1/2'>
          Randevu
        </button>
      </div>
    </div>
  );
}

function getMonthName(month) {
  const monthNames = [
    'Oca',
    'Şub',
    'Mar',
    'Nis',
    'May',
    'Haz',
    'Tem',
    'Ağu',
    'Eyl',
    'Eki',
    'Kas',
    'Ara',
  ];
  return monthNames[month];
}

function getDayAbbreviation(date) {
  const dayNames = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Pzr'];
  return dayNames[date.getDay()];
}

export default AppointmentCalendar;
