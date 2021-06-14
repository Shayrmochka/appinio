import React, { useContext } from 'react';
import { UserDataContext } from '../../context/UserDataContext';
import Select from 'react-select';

interface InputSelectProps {
  element: any;
  status: any;
}

const InputSelect: React.FC<InputSelectProps> = ({ element, status }) => {
  const { userData, handleChangeSelect } = useContext(UserDataContext);
  const options = [
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <div className="inputs__wrapper">
      <Select
        options={options}
        name={element.name}
        key={element.name}
        inputId="qwe"
        onChange={handleChangeSelect}
        inputProps={{ id: 'fieldId' }}
        inputID="qwe"
        // defaultInputValue={
        //   element.placeholder === 'Town/city'
        //     ? userData.defaultCountry
        //     : userData.defaultCity
        // }
        placeholder={element.placeholder}
      />
    </div>
  );
};

export default InputSelect;
