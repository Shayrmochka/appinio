import React, { useCallback, useContext, useState } from 'react';
import { isTemplateExpression } from 'typescript';
import { UserDataContext } from '../../context/UserDataContext';
import CheckBox from './CheckBox';

interface CheckBoxesBlockProps {
  blockTitle: any;
  elements: any;
  style: any;
}

const CheckBoxesBlock: React.FC<CheckBoxesBlockProps> = ({
  blockTitle,
  elements,
  style,
}) => {
  const { userData } = useContext(UserDataContext);

  return (
    <div className={`form__group ${style} group`}>
      <p className="group__title">{blockTitle}</p>
      <div className="group__checkboxes checkboxes">
        {elements.map((e: any) => (
          <CheckBox key={e.id} e={e} checked={e.id === userData[e.name]} />
        ))}
      </div>
    </div>
  );
};

export default CheckBoxesBlock;
