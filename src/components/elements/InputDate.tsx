import React, { useContext } from 'react';
import { UserDataContext } from '../../context/UserDataContext';
import 'moment/locale/it.js';

interface InputDateProps {
  element: any;
  status: any;
  form: string;
}

const InputDate: React.FC<InputDateProps> = ({ element, status, form }) => {
  const { userData, handleChange } = useContext(UserDataContext);

  return (
    <div className="inputs__wrapper">
      <input
        key={element.name}
        className="inputs__item inputs--date"
        name={element.name}
        min="1900-01-01"
        max="2021-01-01"
        //disabled={!status}
        value={userData[form][element.name].text}
        id={element.name}
        type={element.type}
        //required
        onChange={(event) => handleChange(event, form)}
      />
      <label className="inputs__label inputs--date-label">
        {element.placeholder}
      </label>
      {userData[form][element.name].error && (
        <p className="error-message">{element.placeholder} cannot be empty*</p>
      )}
    </div>
  );
};

export default InputDate;
