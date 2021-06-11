import React from 'react';
import CheckBox from './CheckBox';

interface CheckBoxesBlockProps {
  blockTitle: any;
  elements: any;
  style: any;
  handleCheckBox: (e: any) => void;
  onClick: (e: any) => void;
}

const CheckBoxesBlock: React.FC<CheckBoxesBlockProps> = ({
  blockTitle,
  elements,
  style,
  handleCheckBox,
  onClick,
}) => {
  return (
    <div className={`form__group ${style} group`} onClick={(e) => onClick(e)}>
      <p className="group__title">{blockTitle}</p>
      <div className="group__checkboxes checkboxes ">
        {elements.map((e: any) => (
          <CheckBox key={e.id} e={e} handleCheckBox={handleCheckBox} />
        ))}
      </div>
    </div>
  );
};

export default CheckBoxesBlock;
