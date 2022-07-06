import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';

import 'react-datepicker/dist/react-datepicker.css';

const CreateMeeting = (): JSX.Element => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState<Date>();
  const [endTime, setEndTime] = useState<Date>();

  console.log(startDate);

  const isWeekday = (date: any) => {
    const day = date.getDay(date);
    return day !== 0 && day !== 6;
  };

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        // inline
        filterDate={isWeekday}
        dateFormat="yyyy/MM/dd"
      />

      {/* start Time */}
      <DatePicker
        selected={startTime}
        onChange={(startTime: Date) => setStartTime(startTime)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        minTime={setHours(setMinutes(new Date(), 0), 9)}
        maxTime={setHours(setMinutes(new Date(), 30), 17)}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
      {/* end Time */}
      <DatePicker
        selected={startTime}
        onChange={(endTime: Date) => setStartDate(endTime)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        //link this to start time sthey cant pick the same end time
        // minTime={setHours(setMinutes(new Date(), 0), parseInt(startTime))}
        maxTime={setHours(setMinutes(new Date(), 30), 17)}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
    </>
  );
};

export default CreateMeeting;
