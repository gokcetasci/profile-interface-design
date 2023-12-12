import React, { useState } from 'react';
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

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
                  <span key={timeIndex} className="text-[12px] bg-red-100 text-primary font-bold p-2 mb-2 rounded-lg hover:bg-primary hover:text-white transition duration-300 ease-in-out">{time}</span>
                ))
              : appointmentTimes[getDayAbbreviation(date)].slice(0, 4).map((time, timeIndex) => (
                  <span key={timeIndex} className="text-[12px] bg-red-100 text-primary font-bold p-2 mb-2 rounded-lg hover:bg-primary hover:text-white transition duration-300 ease-in-out">{time}</span>
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

  return (
    <div className='mt-6'>
      <div className="flex flex-row justify-between ">
        <IoMdArrowDropleft onClick={showPreviousDates} className='text-primary w-6 h-6 mt-2 rounded-full bg-red-100/50 hover:bg-primary hover:text-white transition duration-300 ease-in-out' />
        {dateElements}
        <IoMdArrowDropright onClick={showNextDates} className='text-primary w-6 h-6 mt-2 rounded-full bg-red-100/50 hover:bg-primary hover:text-white transition duration-300 ease-in-outs'/>
      </div>
      <div className='flex justify-center items-center py-6'>
        <button onClick={toggleShowAllHours} className='text-primary text-[16px] font-bold underline'>
          {showAllHours ? 'Daha Az Saat Göster' : 'Daha Fazla Saat Göster'}
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
