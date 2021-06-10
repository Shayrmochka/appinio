import React, { useEffect, useState } from 'react';
import GroupWrapper from '../elements/GroupWrapper';
import { dataSecond as data } from '../../data';
import './Steps.css';

const SecondStep = () => {
  const handleCheckBox = (event: any) => {
    const { id, checked } = event.target;
    //console.log(id, checked);
  };

  return (
    <div className="step-wrapper">
      <form className="form">
        <GroupWrapper data={data} handleCheckBox={handleCheckBox} />
      </form>
    </div>
  );
};

export default SecondStep;
