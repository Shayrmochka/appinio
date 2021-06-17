import React from 'react';
import GroupWrapper from '../elements/GroupWrapper';
import CharacterBlock from '../elements/CharacterBlock';
import ScrollToTopOnMount from '../../utilites/ScrollToTopOnMount';
import { dataThird as data } from '../../data';
import { characterBlock } from '../../data';

interface ThirdStepProps {
  handleSubmit: (event: any) => void;
}

const ThirdStep = ({ handleSubmit }: ThirdStepProps) => {
  return (
    <div className="step-wrapper">
      <ScrollToTopOnMount />
      <form className="form" id="thirdStep" onSubmit={handleSubmit}>
        <GroupWrapper data={data} />
        <CharacterBlock characterBlock={characterBlock} />
      </form>
    </div>
  );
};

export default ThirdStep;
