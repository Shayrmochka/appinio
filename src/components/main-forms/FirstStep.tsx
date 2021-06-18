import React from 'react';
import './Steps.css';
import ScrollToTopOnMount from '../../utilites/ScrollToTopOnMount';
import GroupWrapper from '../elements/GroupWrapper';

import { dataFirst as data } from '../../data';

interface FirstStepProps {
  handleSubmit: (event: any) => void;
}

const FirstStep = ({ handleSubmit }: FirstStepProps) => {
  return (
    <div className="step-wrapper">
      <ScrollToTopOnMount />
      <form className="form" id="firstStep" onSubmit={handleSubmit} noValidate>
        <GroupWrapper data={data} />
      </form>
    </div>
  );
};

export default FirstStep;
