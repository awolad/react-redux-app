import axios from 'axios';

export const fetchCategories = async () => {
  const res = await axios.get(REACT_APP_URL . '/data/categories.json');
  return res.data;
};
