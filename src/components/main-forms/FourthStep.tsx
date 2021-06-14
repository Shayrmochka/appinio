import React from 'react';
import GroupWrapper from '../elements/GroupWrapper';
import ScrollToTopOnMount from '../../utilites/ScrollToTopOnMount';
import { dataFourth as data } from '../../data';

function FourthStep() {
  return (
    <div className="step-wrapper">
      <ScrollToTopOnMount />
      <form className="form">
        <GroupWrapper data={data} />
      </form>
    </div>
  );
}

export default FourthStep;
