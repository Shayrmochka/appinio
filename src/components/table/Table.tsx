import React from 'react';
import './Table.css';

function Table() {
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
          <tr>
            <td rowSpan={2}>
              <input name="1-country" id="1-country" />
            </td>
            <td>From</td>
            <td>
              <input name="1-from" id="1-from" />
            </td>
            <td rowSpan={2}>
              <input name="1-persons" id="1-persons" />
            </td>
            <td rowSpan={2}>
              <input name="1-address" id="1-address" />
            </td>
          </tr>
          <tr>
            <td>To</td>
            <td>
              <input name="1-to" id="1-to" />
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>
              <input name="2-country" id="2-country" />
            </td>
            <td>From</td>
            <td>
              <input name="2-from" id="2-from" />
            </td>
            <td rowSpan={2}>
              <input name="2-persons" id="2-persons" />
            </td>
            <td rowSpan={2}>
              <input name="2-address" id="2-address" />
            </td>
          </tr>
          <tr>
            <td>To</td>
            <td>
              <input name="2-to" id="2-to" />
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>
              <input name="3-country" id="3-country" />
            </td>
            <td>From</td>
            <td>
              <input name="3-from" id="3-from" />
            </td>
            <td rowSpan={2}>
              <input name="3-persons" id="3-persons" />
            </td>
            <td rowSpan={2}>
              <input name="2-address" id="2-address" />
            </td>
          </tr>
          <tr>
            <td>To</td>
            <td>
              <input name="3-to" id="3-to" />
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>
              <input name="4-country" id="4-country" />
            </td>
            <td>From</td>
            <td>
              <input name="4-from" id="4-from" />
            </td>
            <td rowSpan={2}>
              <input name="4-persons" id="4-persons" />
            </td>
            <td rowSpan={2}>
              <input name="4-address" id="4-address" />
            </td>
          </tr>
          <tr>
            <td>To</td>
            <td>
              <input name="4-to" id="4-to" />
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>
              <input name="5-country" id="5-country" />
            </td>
            <td>From</td>
            <td>
              <input name="5-from" id="5-from" />
            </td>
            <td rowSpan={2}>
              <input name="5-persons" id="5-persons" />
            </td>
            <td rowSpan={2}>
              <input name="5-address" id="5-address" />
            </td>
          </tr>
          <tr>
            <td>To</td>
            <td>
              <input name="5-to" id="5-to" />
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>
              <input name="6-country" id="6-country" />
            </td>
            <td>From</td>
            <td>
              <input name="6-from" id="6-from" />
            </td>
            <td rowSpan={2}>
              <input name="6-persons" id="6-persons" />
            </td>
            <td rowSpan={2}>
              <input name="6-address" id="6-address" />
            </td>
          </tr>
          <tr>
            <td>To</td>
            <td>
              <input name="6-to" id="6-to" />
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>
              <input name="7-country" id="7-country" />
            </td>
            <td>From</td>
            <td>
              <input name="7-from" id="7-from" />
            </td>
            <td rowSpan={2}>
              <input name="7-persons" id="7-persons" />
            </td>
            <td rowSpan={2}>
              <input name="7-address" id="7-address" />
            </td>
          </tr>
          <tr>
            <td>To</td>
            <td>
              <input name="7-to" id="7-to" />
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>
              <input name="8-country" id="8-country" />
            </td>
            <td>From</td>
            <td>
              <input name="8-from" id="8-from" />
            </td>
            <td rowSpan={2}>
              <input name="8-persons" id="8-persons" />
            </td>
            <td rowSpan={2}>
              <input name="8-address" id="8-address" />
            </td>
          </tr>
          <tr>
            <td>To</td>
            <td>
              <input name="8-to" id="8-to" />
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>
              <input name="9-country" id="9-country" />
            </td>
            <td>From</td>
            <td>
              <input name="9-from" id="9-from" />
            </td>
            <td rowSpan={2}>
              <input name="9-persons" id="9-persons" />
            </td>
            <td rowSpan={2}>
              <input name="9-address" id="9-address" />
            </td>
          </tr>
          <tr>
            <td>To</td>
            <td>
              <input name="9-to" id="9-to" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
