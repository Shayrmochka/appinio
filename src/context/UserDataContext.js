import { createContext } from 'react';

function noop(element, event, canvas) {}

export const UserDataContext = createContext({
  userData: [],
  setUserData: noop,
  handleChange: noop,
  handleChangeSelect: noop,
  //handleChangeDate: noop,
  handleClick: noop,
  handleCanvas: noop,
});
// setUserData({
//   ...userData,
//   [element.name]: {
//     x: event.pageX - canvas.offsetLeft,
//     y: event.pageY - canvas.offsetTop,
//   },
// });
