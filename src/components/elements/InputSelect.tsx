import React, { useContext, useState } from 'react';
import { UserDataContext } from '../../context/UserDataContext';
import Select from 'react-select';
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector';

interface InputSelectProps {
  element: any;
  status: any;
}

const InputSelect: React.FC<InputSelectProps> = ({ element, status }) => {
  const { userData, handleChangeSelect } = useContext(UserDataContext);
  // const options = [
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' },
  // ];

  // return (
  //   <div className="inputs__wrapper">
  //     <Select
  //       options={options}
  //       name={element.name}
  //       key={element.name}
  //       inputId="qwe"
  //       onChange={handleChangeSelect}
  //       inputProps={{ id: 'fieldId' }}
  //       inputID="qwe"
  //       // defaultInputValue={
  //       //   element.placeholder === 'Town/city'
  //       //     ? userData.defaultCountry
  //       //     : userData.defaultCity
  //       // }
  //       placeholder={element.placeholder}
  //     />
  //   </div>
  // );

  return (
    <div className="inputs__wrapper inputs__wrapper--short">
      <CountryDropdown
        classes="inputs__item inputs__item--short"
        value={userData[element.country]}
        onChange={(val) => handleChangeSelect(val, element.country)}
      />
      <RegionDropdown
        classes="inputs__item inputs__item--short"
        country={userData[element.country]}
        value={userData[element.region]}
        onChange={(val) => handleChangeSelect(val, element.region)}
      />
    </div>
  );
};

export default InputSelect;
