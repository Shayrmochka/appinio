import React, { useContext } from 'react';
import { UserDataContext } from '../../context/UserDataContext';
import Select from 'react-select';
import { DatePicker, DatePickerInput } from 'rc-datepicker';
import 'moment/locale/it.js';

interface InputProps {
  element: any;
  status: any;
}

const Input: React.FC<InputProps> = ({ element, status }) => {
  const { userData, handleChange } = useContext(UserDataContext);
  const options = [
    {
      value: {
        id: 'test',
        text: 'text',
      },
      label: 'Chocolate',
    },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  const date = '2015-06-26';
  return (
    <div className="inputs__wrapper">
      <input
        key={element.name}
        className="inputs__item"
        name={element.name}
        disabled={!status}
        value={userData[element.name]}
        id={element.name}
        type={element.type}
        required
        onChange={handleChange}
        //defaultValue="qwe"
      />
      <label className="inputs__label">{element.placeholder}</label>
    </div>
  );
};

export default Input;
