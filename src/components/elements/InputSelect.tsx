import React, { useContext } from 'react';
import { UserDataContext } from '../../context/UserDataContext';

interface InputSelectProps {
  element: any;
  status: boolean;
  form: string;
}

const InputSelect: React.FC<InputSelectProps> = ({ element, status, form }) => {
  const { userData, handleChange } = useContext(UserDataContext);

  // const info = [
  //   {
  //     id: 'country-1',
  //     country: 'Belarus',
  //     cities: [
  //       {
  //         id: 'city-1',
  //         name: 'Minsk',
  //       },
  //       {
  //         id: 'city-2',
  //         name: 'Brest',
  //       },
  //     ],
  //   },
  //   {
  //     id: 'country-2',
  //     country: 'Russia',
  //     cities: [
  //       {
  //         id: 'city-1',
  //         name: 'Moscow',
  //       },
  //       {
  //         id: 'city-2',
  //         name: 'Pskov',
  //       },
  //     ],
  //   },
  // ];

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
        list="countries"
        onChange={(event) => handleChange(event, form)}
      />
      <label className="inputs__label">{element.placeholder}</label>
      {userData[form][element.name].error && (
        <p className="error-message">{element.placeholder} cannot be empty*</p>
      )}
      <datalist id="countries">
        <option value="USA" />
        <option value="Canada" />
      </datalist>
      {/* <datalist id="cities">
        <option value="Naples" />
        <option value="London" />
        <option value="Berlin" />
        <option value="New York" />
        <option value="Frattamaggiore" />
      </datalist> */}
    </div>
  );
};

export default InputSelect;
