import React from 'react';
import './Steps.css';

import GroupWrapper from '../elements/GroupWrapper';

import { dataFirst as data } from '../../data';

const FirstStep = () => {
  const handleCheckBox = (event: any) => {
    const { id, checked } = event.target;
    // console.log(id, checked);
  };
  return (
    <div className="step-wrapper">
      <form className="form">
        <GroupWrapper data={data} handleCheckBox={handleCheckBox} />
      </form>
    </div>
  );
};

export default FirstStep;
