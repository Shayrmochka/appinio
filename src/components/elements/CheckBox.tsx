import React from 'react';

interface CheckBoxProps {
  e: any;
  handleCheckBox: (event: any) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ e, handleCheckBox }) => {
  return (
    <>
      <input
        key={e.id}
        className="checkboxes__item"
        type="checkbox"
        id={e.id}
        name={e.name}
        value={e.value}
        defaultChecked={false}
        onChange={(e) => handleCheckBox(e)}
      />
      <label className="checkboxes__label" htmlFor={e.name}>
        {e.label}
      </label>
    </>
  );
};

export default CheckBox;
