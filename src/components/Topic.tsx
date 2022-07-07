import { useState } from 'react';
import CreateTopic from './CreateTopic';
import { ITopicDetails } from '../interfaces';

//im thinking it might be best for Topic.tsx to just be the state holder
//and show the list of topics with their title, time estimate, and a text description
const Topic = (): JSX.Element => {
  const [topics, setTopics] = useState<Array<ITopicDetails>>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = (): void => {
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  const createTopic = (title: string, time: string, text: string) => {
    const temp: ITopicDetails = {
      title: title,
      timeEST: time,
      description: text
    };
    setTopics((x) => [...x, temp]);
  };

  const showTopics = topics.map((item, index) => {
    return (
      <div key={index}>
        <h4>{item.title}</h4>
        <br />
        <span>Time EST: {item.timeEST}</span>
        <br />
        <p>{item.description}</p>
      </div>
    );
  });

  return (
    <>
      {showTopics}

      {isOpen && (
        <>
          <div className="overlay"></div>
          <div className="modal">
            <header className="modal__header">
              <h2>New Topic</h2>
              <button onClick={closeModal} className="close-button">
                &times;
              </button>
            </header>
            <main className="modal__main">
              <CreateTopic createTopic={createTopic} />
            </main>
          </div>
        </>
      )}

      <h2>Create A New Topic</h2>
      <button className="button" onClick={openModal}>
        Open Modal
      </button>
    </>
  );
};

export default Topic;
