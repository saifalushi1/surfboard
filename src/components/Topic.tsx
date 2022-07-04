import { useState } from 'react';
import CreateTopic from './CreateTopic';
import ITopicDetails from '../interfaces';

//im thinking it might be best for Topic.tsx to just be the state holder
//and show the list of topics with their title, time estimate, and a text description
const Topic = (): JSX.Element => {
  const [topics, setTopics] = useState<ITopicDetails[] | null>(null);

  const createTopic = (title: string, time: string, text: string) => {
    const temp: ITopicDetails = {
      title: title,
      timeEST: time,
      description: text
    };
    setTopics((x) => [...(x as any[]), temp]);
  };

  return (
    <>
      <CreateTopic createTopic={createTopic} />
    </>
  );
};

export default Topic;
