import React, { useContext } from 'react';
import { UserDataContext } from '../../context/UserDataContext';

import 'moment/locale/it.js';

interface InputProps {
  element: any;
  status: any;
  form: string;
}

const Input: React.FC<InputProps> = ({ element, status, form }) => {
  const { userData, handleChange } = useContext(UserDataContext);

  return (
    <div className="inputs__wrapper">
      <input
        key={element.name}
        className="inputs__item"
        name={element.name}
        disabled={!status}
        value={userData[form][element.name].text}
        id={element.name}
        type={element.type}
        //required
        onChange={(event) => handleChange(event, form)}
        // defaultValue="qwe"
      />
      <label className="inputs__label">{element.placeholder}</label>
      {userData[form][element.name].error && (
        <p className="error-message">{element.placeholder} cannot be empty*</p>
      )}
    </div>
  );
};

export default Input;
