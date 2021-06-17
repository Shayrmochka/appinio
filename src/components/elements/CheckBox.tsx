import React, { useContext } from 'react';
import { UserDataContext } from '../../context/UserDataContext';

interface CheckBoxProps {
  e: any;
  render: any;
  form: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ e, form, render }) => {
  const { handleClick, userData } = useContext(UserDataContext);

  return (
    <>
      <input
        key={e.id}
        className="checkboxes__item"
        type="checkbox"
        id={e.id}
        name={e.name}
        value={e.value}
        checked={userData[form][e.name].text === e.value ? true : false}
        defaultChecked={false}
        // onChange={(e) => {
        //   handleChange(e);
        // }}
        onClick={(event) => handleClick(event, form, render)}
      />
      <label className="checkboxes__label" htmlFor={e.id}>
        {e.label}
      </label>
    </>
  );
};

export default CheckBox;
