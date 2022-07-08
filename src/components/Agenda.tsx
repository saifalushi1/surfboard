import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { IMeetingDetails } from '../interfaces';
import CreateMeeting from './CreateMeeting';

//agenda will act as the apps home where you can go to different meetings and then
// within those meetings contain the topics, etc...
const Agenda = (): JSX.Element => {
  const computerSpacesRef = useRef([]);
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
    return (
      <Link to={`meeting/${index}`} key={index}>
        <div
          key={index}
          className={`${index} ajshdahsdjk`}
          // ref={(element) => {
          //   // computerSpacesRef.current[index] = element;
          // }}
        >
          <h4>{item.title}</h4>
          <br />
          <span>Date: {item.date}</span>
          <br />
          <span>
            Starts At: {item.startTime} - Ends At: {item.endTime}{' '}
          </span>
        </div>
      </Link>
    );
  });

  const noMeetings = () => {
    return <h3>You currently have no meetings</h3>;
  };

  return (
    <>
      {!meetings ? noMeetings : showMeetings}
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

      <Link to="test/1">
        <button>TEST ROUTE 1</button>
      </Link>
    </>
  );
};

export default Agenda;
