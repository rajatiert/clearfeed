import React from 'react';

const Calendar = ({ currentMonth  , currYear}) => {
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
   
    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };


    const currentDate = new Date();
    
    
    const numDays = getDaysInMonth(currYear, currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currYear, currentMonth);
    const currentDay = currentDate.getDate();

    const dates = Array.from({ length: numDays }, (_, i) => i + 1);

    return (
        <div className="w-full">
            <div className="grid grid-cols-7 gap-4 text-black">
                {days.map((day, index) => (
                    <div key={index}>{day}</div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-4 items-center">
                {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                    <div key={`empty-${index}`}></div>
                ))}
                {dates.map((date, index) => (
                    <div key={index} className={date === currentDay && currentMonth === currentDate?.getMonth() ? ' bg-blue-500 text-white rounded-full max-w-[30px]' : ''}  >{date}</div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
