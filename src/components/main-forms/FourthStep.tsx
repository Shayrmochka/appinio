import React from 'react';
import GroupWrapper from '../elements/GroupWrapper';
import { dataFourth as data } from '../../data';

function FourthStep() {
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
}

export default FourthStep;
