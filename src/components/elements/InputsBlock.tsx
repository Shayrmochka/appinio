import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserDataContext } from '../../context/UserDataContext';
import Input from './Input';
import InputDate from './InputDate';
import InputSelect from './InputSelect';

interface InputsBlockProps {
  blockTitle: string;
  elements: any;
  style: string;
  link: any;
  addMore: boolean;
  form: string;
}

const InputsBlock: React.FC<InputsBlockProps> = ({
  blockTitle,
  elements,
  style,
  link,
  addMore,
  form,
}) => {
  const { userData, setUserData } = useContext(UserDataContext);
  const [rows, setRows] = useState([1]);

  const addRow = (event: any) => {
    event.preventDefault();
    setUserData({
      thirdStep: {
        ...userData['thirdStep'],
        [`5-name-first-${rows.length + 1}`]: {
          // ...userData['thirdStep'][`${rows.length+1}-country`],
          text: '',
          error: false,
        },
        [`5-country-first-${rows.length + 1}`]: {
          text: '',
          error: false,
        },
        [`5-date-from-first-${rows.length + 1}`]: {
          text: '',
          error: false,
        },
        [`5-date-to-first${rows.length + 1}`]: {
          text: '',
          error: false,
        },
      },
    });
    setRows([...rows, rows.length + 1]);
  };

  const deleteRow = (event: any) => {
    event.preventDefault();
    const deleted = rows.filter((e) => e !== rows.length);
    setRows(deleted);
  };

  const checkType = (element: any) => {
    if (element.type === 'date') {
      return (
        <InputDate
          key={element.name}
          element={element}
          status={true}
          //status={renderFor ? !!userData[form][renderFor].text : true}
          form={form}
        />
      );
    } else if (element.type === 'select') {
      return (
        <InputSelect
          key={element.name}
          element={element}
          status={true}
          //status={renderFor ? !!userData[form][renderFor].text : true}
          form={form}
        />
      );
    }

    return (
      <Input
        key={element.name}
        element={element}
        //status={renderFor ? !!userData[form][renderFor].text : true}
        status={true}
        form={form}
      />
    );
  };
  return (
    <div className={`form__group ${style} group`}>
      <p className="group__title">
        {blockTitle}{' '}
        {link && (
          <strong>
            <Link
              to={{
                pathname: `https://${link}`,
              }}
              target="_blank"
            >
              {link}
            </Link>
          </strong>
        )}
      </p>
      <div className="group__inputs inputs">
        {rows.map((e) => elements.map((element: any) => checkType(element)))}
      </div>
      {addMore && (
        <div className="buttons__wrapper">
          <button className="button__delete" onClick={deleteRow}>
            Delete row
          </button>
          <button className="button__add" onClick={addRow}>
            Add row
          </button>
        </div>
      )}
    </div>
  );
};

export default InputsBlock;
