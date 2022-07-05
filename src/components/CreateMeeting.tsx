import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const CreateMeeting = (): JSX.Element => {
  const [startDate, setStartDate] = useState(new Date());
  return <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />;
};

export default CreateMeeting;
