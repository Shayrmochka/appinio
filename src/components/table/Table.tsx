import React, { useState } from 'react';
import './Table.css';

function Table() {
  const [rows, setRows] = useState([1]);

  const addRow = (event: any) => {
    event.preventDefault();
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
                  <input name={`${e}-country`} id={`${e}-country`} />
                </td>
                <td>From</td>
                <td>
                  <input name={`${e}-from`} id={`${e}-from`} />
                </td>
                <td rowSpan={2}>
                  <input name={`${e}-persons`} id={`${e}-persons`} />
                </td>
                <td rowSpan={2}>
                  <input name={`${e}-address`} id={`${e}-address`} />
                </td>
              </tr>
              <tr>
                <td>To</td>
                <td>
                  <input name={`${e}-to`} id={`${e}-to`} />
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
