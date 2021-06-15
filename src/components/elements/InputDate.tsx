import React, { useContext } from 'react';
import { UserDataContext } from '../../context/UserDataContext';
import Select from 'react-select';
import { DatePicker, DatePickerInput } from 'rc-datepicker';
import 'moment/locale/it.js';

interface InputDateProps {
  element: any;
  status: any;
}

const InputDate: React.FC<InputDateProps> = ({ element, status }) => {
  const { userData, handleChange } = useContext(UserDataContext);

  return (
    <div className="inputs__wrapper">
      <input
        key={element.name}
        className="inputs__item"
        name={element.name}
        min="1900-01-01"
        max="2021-01-01"
        //disabled={!status}
        value={userData[element.name]}
        id={element.name}
        type={element.type}
        required
        onChange={handleChange}
      />
    </div>
  );
};

export default InputDate;
