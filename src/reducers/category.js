// const INITIAL_STATE = {
//   categories: [],
// };

export const categories = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_CATEGORIES':
      return action.payload;
    default:
      return state;
  }
};
