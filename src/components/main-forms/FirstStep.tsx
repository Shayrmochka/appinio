import React from 'react';
import './Steps.css';
import ScrollToTopOnMount from '../../utilites/ScrollToTopOnMount';
import GroupWrapper from '../elements/GroupWrapper';

import { dataFirst as data } from '../../data';

const FirstStep = () => {
  return (
    <div className="step-wrapper">
      <ScrollToTopOnMount />
      <form className="form">
        <GroupWrapper data={data} />
      </form>
    </div>
  );
};

export default FirstStep;
