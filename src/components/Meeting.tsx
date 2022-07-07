import { useState } from 'react';
import { IMeetingDetails } from '../interfaces';
import CreateMeeting from './CreateMeeting';

//meeting will will contain the topics component and will act as the wrapper
const Meeting = (): JSX.Element => {
  const [meetings, setMeetings] = useState<Array<IMeetingDetails>>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = (): void => {
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  const createMeeting = (title: string, date: string, startTime: string, endTime: string): void => {
    const temp: IMeetingDetails = {
      title: title,
      date: date,
      startTime: startTime,
      endTime: endTime
    };

    setMeetings((x) => [...x, temp]);
  };

  const showMeetings = meetings.map((item, index) => {
    console.log('yoo');
    return (
      <div key={index}>
        <h4>{item.title}</h4>
        <br />
        <span>Date: {item.date}</span>
        <br />
        <span>
          Starts At: {item.startTime} - Ends At: {item.endTime}{' '}
        </span>
      </div>
    );
  });

  return (
    <>
      {showMeetings}

      {isOpen && (
        <>
          <div className="overlay"></div>
          <div className="modal">
            <header className="modal__header">
              <h2>New Meeting</h2>
              <button onClick={closeModal} className="close-button">
                &times;
              </button>
            </header>
            <main className="modal__main">
              <CreateMeeting createMeeting={createMeeting} />
            </main>
          </div>
        </>
      )}

      <h2>Create A New Meeting</h2>
      <button className="button" onClick={openModal}>
        Open Modal
      </button>
    </>
  );
};

export default Meeting;
