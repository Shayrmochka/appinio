import React from 'react';
import Input from './Input';

interface InputsBlockProps {
  blockTitle: any;
  elements: any;
}

const InputsBlock: React.FC<InputsBlockProps> = ({ blockTitle, elements }) => {
  return (
    <div className="form__group group">
      <p className="group__title">{blockTitle}</p>
      <div className="group__inputs inputs">
        {elements.map((e: any) => (
          <Input key={e.name} e={e} />
        ))}
      </div>
    </div>
  );
};

export default InputsBlock;
