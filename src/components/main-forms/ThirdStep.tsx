import React from 'react';
import GroupWrapper from '../elements/GroupWrapper';
import CharacterBlock from '../elements/CharacterBlock';
import ScrollToTopOnMount from '../../utilites/ScrollToTopOnMount';
import { dataThird as data } from '../../data';

const ThirdStep = () => {
  return (
    <div className="step-wrapper">
      <ScrollToTopOnMount />
      <form className="form">
        <GroupWrapper data={data} />
        <CharacterBlock />
      </form>
    </div>
  );
};

export default ThirdStep;
