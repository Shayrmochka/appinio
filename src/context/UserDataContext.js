import { createContext } from 'react';

function noop(event) {}

export const UserDataContext = createContext({
  userData: '',
  handleChange: noop,
  handleChangeSelect: noop,
  //handleChangeDate: noop,
  handleClick: noop,
});
