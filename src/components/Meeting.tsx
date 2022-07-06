import { useState } from 'react';
import { IMeetingDetails } from '../interfaces';

//meeting will will contain the topics component and will act as the wrapper
const Meeting = (): JSX.Element => {
  const [meetings, setMeetings] = useState<object>({});

  const createMeeting = (title: string, date: Date, startTime: string, endTime: string) => {
    const temp: IMeetingDetails = {
      title: title,
      date: date,
      startTime: startTime,
      endTime: endTime
    };
  };
  return <></>;
};

export default Meeting;
