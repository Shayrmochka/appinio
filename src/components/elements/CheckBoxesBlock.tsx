import React, { useContext } from 'react';
import { UserDataContext } from '../../context/UserDataContext';
import CheckBox from './CheckBox';

interface CheckBoxesBlockProps {
  blockTitle: string;
  elements: any;
  style: string;
  form: string;
  render: any;
}

const CheckBoxesBlock: React.FC<CheckBoxesBlockProps> = ({
  blockTitle,
  elements,
  style,
  form,
  render,
}) => {
  const { userData } = useContext(UserDataContext);

  return (
    <div className={`form__group ${style} group`}>
      <p className="group__title">{blockTitle}</p>
      <div className="group__checkboxes checkboxes">
        {elements.map((e: any) => (
          <CheckBox key={e.id} e={e} form={form} render={render} />
        ))}

        {userData[form][elements[0].name].error && (
          <p className="error-message">Group cannot be empty*</p>
        )}
      </div>
    </div>
  );
};

export default CheckBoxesBlock;
