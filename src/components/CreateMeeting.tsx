import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';

import 'react-datepicker/dist/react-datepicker.css';

const CreateMeeting = (): JSX.Element => {
  const [startDate, setStartDate] = useState(new Date());

  console.log(startDate);

  return (
    <DatePicker
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      inline
      showTimeSelect
      minTime={setHours(setMinutes(new Date(), 0), 9)}
      maxTime={setHours(setMinutes(new Date(), 30), 17)}
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
};

export default CreateMeeting;
