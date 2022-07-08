import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMeetingDetails } from '../interfaces';
import CreateMeeting from './CreateMeeting';
import Topic from './Topic';

export type meetingParams = {
  meetingId: string;
};

//meeting will will contain the topics component and will act as the wrapper
const Meeting = (): JSX.Element => {
  const { id } = useParams() as { id: string };

  return (
    <>
      <Topic meetingId={id} />
    </>
  );
};

export default Meeting;
