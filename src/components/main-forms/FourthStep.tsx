import React from 'react';
import GroupWrapper from '../elements/GroupWrapper';
import ScrollToTopOnMount from '../../utilites/ScrollToTopOnMount';
import { dataFourth as data } from '../../data';

interface FourthStepProps {
  handleSubmit: (event: any) => void;
}

function FourthStep({ handleSubmit }: FourthStepProps) {
  return (
    <div className="step-wrapper">
      <ScrollToTopOnMount />
      <form className="form" id="fourthStep" onSubmit={handleSubmit} noValidate>
        <GroupWrapper data={data} />
      </form>
    </div>
  );
}

export default FourthStep;
