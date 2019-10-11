import axios from 'axios';

export const fetchCategories = () => (dispatch) => {
  axios.get(`${process.env.REACT_APP_URL}/data/categories.json`).then((res) => {
    console.log(res.data);
    dispatch({
      type: 'RECEIVE_CATEGORIES',
      payload: res.data,
    });
  });
};
