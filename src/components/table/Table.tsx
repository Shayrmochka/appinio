import React, { useContext, useState } from 'react';
import { UserDataContext } from '../../context/UserDataContext';
import Input from '../elements/Input';
import InputDate from '../elements/InputDate';
import InputSelect from '../elements/InputDate';
import './Table.css';

function Table() {
  const { userData, setUserData } = useContext(UserDataContext);
  const [rows, setRows] = useState([1]);

  const addRow = (event: any) => {
    event.preventDefault();
    setUserData({
      thirdStep: {
        ...userData['thirdStep'],
        [`${rows.length + 1}-country`]: {
          // ...userData['thirdStep'][`${rows.length+1}-country`],
          text: '',
          error: false,
        },
        [`${rows.length + 1}-to`]: {
          text: '',
          error: false,
        },
        [`${rows.length + 1}-from`]: {
          text: '',
          error: false,
        },
        [`${rows.length + 1}-persons`]: {
          text: '',
          error: false,
        },
        [`${rows.length + 1}-address`]: {
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

  return (
    <div>
      <table className="iksweb">
        <tbody>
          <tr>
            <td rowSpan={2}>Country</td>
            <td colSpan={2}>Dates lived there</td>
            <td rowSpan={2}>
              Name(s) of person(s) included in this application who visited this
              country
            </td>
            <td rowSpan={2}>Last permanent address in that country</td>
          </tr>
          <tr>
            <td></td>
            <td>Month Year</td>
          </tr>

          {rows.map((e) => (
            <>
              <tr>
                <td rowSpan={2}>
                  <InputSelect
                    element={{
                      name: `${e}-country`,
                      placeholder: '',
                      type: 'select',
                    }}
                    status={true}
                    form={'thirdStep'}
                  />
                </td>
                <td>From</td>
                <td>
                  <InputDate
                    element={{
                      name: `${e}-from`,
                      placeholder: '',
                      type: 'date',
                    }}
                    status={true}
                    form={'thirdStep'}
                  />
                </td>
                <td rowSpan={2}>
                  <Input
                    element={{
                      name: `${e}-persons`,
                      placeholder: '',
                      //type: 'input',
                    }}
                    status={true}
                    form={'thirdStep'}
                  />
                </td>
                <td rowSpan={2}>
                  <Input
                    element={{
                      name: `${e}-address`,
                      placeholder: '',
                      //type: 'input',
                    }}
                    status={true}
                    form={'thirdStep'}
                  />
                </td>
              </tr>
              <tr>
                <td>To</td>
                <td>
                  <InputDate
                    element={{
                      name: `${e}-to`,
                      placeholder: '',
                      type: 'date',
                    }}
                    status={true}
                    form={'thirdStep'}
                  />
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>

      <div className="buttons__wrapper">
        <button className="button__delete" onClick={deleteRow}>
          Delete row
        </button>
        <button className="button__add" onClick={addRow}>
          Add row
        </button>
      </div>
    </div>
  );
}

export default Table;
