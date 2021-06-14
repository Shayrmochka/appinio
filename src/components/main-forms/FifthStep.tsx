import ScrollToTopOnMount from '../../utilites/ScrollToTopOnMount';
import './Steps.css';

import GroupWrapper from '../elements/GroupWrapper';

import { dataFifth as data } from '../../data';

const FifthStep = () => {
  return (
    <div className="step-wrapper">
      <ScrollToTopOnMount />
      <form className="form">
        <GroupWrapper data={data} />
      </form>
    </div>
  );
};

export default FifthStep;
