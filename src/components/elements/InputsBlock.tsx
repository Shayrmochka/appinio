import React, { useContext } from 'react';
import { UserDataContext } from '../../context/UserDataContext';
import Input from './Input';
import InputDate from './InputDate';
import InputSelect from './InputSelect';

interface InputsBlockProps {
  blockTitle: any;
  elements: any;
  style: any;
  renderFor: any;
}

const InputsBlock: React.FC<InputsBlockProps> = ({
  blockTitle,
  elements,
  style,
  renderFor,
}) => {
  const { userData } = useContext(UserDataContext);

  console.log(userData[renderFor]);
  const checkType = (element: any) => {
    if (element.type === 'date') {
      return (
        <InputDate
          key={element.name}
          element={element}
          status={renderFor ? !!userData[renderFor] : true}
        />
      );
    } else if (element.type === 'select') {
      return (
        <InputSelect
          key={element.name}
          element={element}
          status={renderFor ? !!userData[renderFor] : true}
        />
      );
    }

    return (
      <Input
        key={element.name}
        element={element}
        status={renderFor ? !!userData[renderFor] : true}
      />
    );
  };
  return (
    <div
      className={`form__group ${style} ${
        renderFor && !userData[renderFor] && 'form__group--hidden'
      } group`}
    >
      <p className="group__title">{blockTitle}</p>
      <div className="group__inputs inputs">
        {elements.map((element: any) => checkType(element))}
      </div>
    </div>
  );
};

export default InputsBlock;
