import React, { FunctionComponent, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import setHours from 'date-fns/setHours';
import format from 'date-fns/format';
import setMinutes from 'date-fns/setMinutes';

import 'react-datepicker/dist/react-datepicker.css';

interface ICreateMeeting {
  createMeeting: (title: string, date: string, startTime: string, endTime: string) => void;
  closeModal: () => void;
}

const CreateMeeting: FunctionComponent<ICreateMeeting> = ({
  createMeeting,
  closeModal
}): JSX.Element => {
  const [title, setTitle] = useState<string>('');
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [endTime, setEndTime] = useState<Date>(new Date());
  const [x, setX] = useState([{ test: [] }, { test2: [] }, { test3: [] }]);

  const meetingInfo: [n: string, x: string, y: string, z: string] = [
    title,
    format(startDate, 'MMM-dd-yyyy'),
    format(startTime, 'k:m'),
    format(endTime, 'k:m')
  ];

  const isWeekday = (date: any) => {
    const day = date.getDay(date);
    return day !== 0 && day !== 6;
  };

  return (
    <>
      <input type="text" placeholder="Meeting Name" onChange={(e) => setTitle(e.target.value)} />
      <br />
      Day:
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        // inline
        filterDate={isWeekday}
        dateFormat="yyyy/MM/dd"
      />
      Start Time:
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
      End Time:
      <DatePicker
        selected={endTime}
        onChange={(endTime: Date) => setEndTime(endTime)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        //link this to start time sthey cant pick the same end time
        minTime={setHours(setMinutes(new Date(), 0), 8)}
        maxTime={setHours(setMinutes(new Date(), 30), 17)}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
      <button
        onClick={() => {
          createMeeting(...meetingInfo);
          closeModal();
        }}
      >
        Create Meeting
      </button>
    </>
  );
};

export default CreateMeeting;
