import { useParams } from 'react-router-dom';
import Rah from './Rah';

const TestMe = () => {
  const { id } = useParams();

  return (
    <>
      TEST{id}
      <Rah />
    </>
  );
};

export default TestMe;
