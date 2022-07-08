import { useState, FunctionComponent } from 'react';
import { ITopicDetails } from '../interfaces';
import AutoTextArea from './componentUtils/AutoTextArea';

interface ICreateTopic {
  createTopic: (title: string, time: string, text: string) => void;
}

interface IProps {
  createTopic: (title: string, time: string, text: string) => void;
  meetingId: number;
}

const CreateTopic: FunctionComponent<IProps> = ({ createTopic, meetingId }): JSX.Element => {
  const [topicInfo, setTopicInfo] = useState<ITopicDetails>({
    title: '',
    timeEST: '',
    description: '',
    meetingId: meetingId
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTopic(topicInfo.title, topicInfo.timeEST, topicInfo.description);
    setTopicInfo({ title: '', timeEST: '', description: '', meetingId: meetingId });
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          id="title"
          type="text"
          placeholder="Enter A Title"
          value={topicInfo.title}
          onChange={(e) => {
            setTopicInfo((x) => ({ ...x, title: e.target.value }));
          }}
          required
        />
        <input
          id="time"
          type="number"
          placeholder="Time Est (Minutes)"
          value={topicInfo.timeEST}
          onChange={(e) => {
            setTopicInfo((x) => ({ ...x, timeEST: e.target.value }));
          }}
          min="5"
          max="120"
          pattern="\d+"
          required
        />

        <AutoTextArea
          onChange={(e) => {
            setTopicInfo((x) => ({ ...x, description: e.target.value }));
          }}
          value={topicInfo.description}
          placeholder="Enter a Description"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreateTopic;
