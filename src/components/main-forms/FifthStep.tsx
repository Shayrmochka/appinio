import ScrollToTopOnMount from '../../utilites/ScrollToTopOnMount';
import './Steps.css';

import GroupWrapper from '../elements/GroupWrapper';

import { dataFifth as data } from '../../data';

interface FifthStepProps {
  handleSubmit: (event: any) => void;
}

const FifthStep = ({ handleSubmit }: FifthStepProps) => {
  return (
    <div className="step-wrapper">
      <ScrollToTopOnMount />
      <form className="form" id="fifthStep" onSubmit={handleSubmit}>
        <GroupWrapper data={data} />
      </form>
    </div>
  );
};

export default FifthStep;
