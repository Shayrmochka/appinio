import React from 'react';

interface InputProps {
  e: any;
}

const Input: React.FC<InputProps> = ({ e }) => {
  return (
    <div className="inputs__wrapper">
      <input
        key={e.name}
        className="inputs__item"
        name={e.name}
        // placeholder={e.placeholder}
        // disabled={e.disabled}
        id={e.name}
        type="text"
        required
      />
      <label className="inputs__label">{e.placeholder}</label>
    </div>
  );
};

export default Input;
