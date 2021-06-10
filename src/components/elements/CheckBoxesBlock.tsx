import React from 'react';
import CheckBox from './CheckBox';

interface CheckBoxesBlockProps {
  blockTitle: any;
  elements: any;
  handleCheckBox: (e: any) => void;
  onClick: (e: any) => void;
}

const CheckBoxesBlock: React.FC<CheckBoxesBlockProps> = ({
  blockTitle,
  elements,
  handleCheckBox,
  onClick,
}) => {
  return (
    <div className="form__group group" onClick={(e) => onClick(e)}>
      <p className="group__title">{blockTitle}</p>
      <div className="group__checkboxes checkboxes">
        {elements.map((e: any) => (
          <CheckBox key={e.id} e={e} handleCheckBox={handleCheckBox} />
        ))}
      </div>
    </div>
  );
};

export default CheckBoxesBlock;
