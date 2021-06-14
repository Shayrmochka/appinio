import React, { useContext } from 'react';
import { UserDataContext } from '../../context/UserDataContext';

interface CheckBoxProps {
  e: any;
  //handleChange: (event: any) => void;
  checked: any;
}

const CheckBox: React.FC<CheckBoxProps> = ({ e, checked }) => {
  const { handleChange, handleClick } = useContext(UserDataContext);

  return (
    <>
      <input
        key={e.id}
        className="checkboxes__item"
        //type="checkbox"
        type="radio"
        id={e.id}
        //checked={checked}
        name={e.name}
        value={e.value}
        defaultChecked={false}
        // onChange={(e) => {
        //   handleChange(e);
        // }}
        onClick={handleClick}
      />
      <label className="checkboxes__label" htmlFor={e.id}>
        {e.label}
      </label>
    </>
  );
};

export default CheckBox;
