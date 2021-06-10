import React from 'react';
import GroupWrapper from '../elements/GroupWrapper';
import CharacterBlock from '../elements/CharacterBlock';
import { dataThird as data } from '../../data';

const ThirdStep = () => {
  const handleCheckBox = (event: any) => {
    const { id, checked } = event.target;
    //console.log(id, checked);
  };
  return (
    <div className="step-wrapper">
      <form className="form">
        <GroupWrapper data={data} handleCheckBox={handleCheckBox} />
        <CharacterBlock />
      </form>
    </div>
  );
};

export default ThirdStep;
