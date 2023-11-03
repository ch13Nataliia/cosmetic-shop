import axios from 'axios';
const { host = 'http://localhost:3000' } = process.env;

export const BASKETS_ENDPOINT = `${host}/api/v2/baskets/`;

export const fetchUserBasket = async () => {
  const { data } = await axios(`${BASKETS_ENDPOINT}own`);
  console.log('fetchUserBasket data', data);
  return data;
};

export const addToBasket = async (itemID) => {
  console.log('addToBasket', itemID);
  const response = await axios({
    method: 'POST',
    url: `${BASKETS_ENDPOINT}own`,
    data: { itemID },
  });
  return response.data;
};

export const removeItemFromBasket = async (itemID) => {
  return await axios({
    method: 'DELTE',
    url: `${BASKETS_ENDPOINT}own/${itemID}`,
  });
};

export const emptyBasket = async () => {
  return await axios({
    method: 'DELETE',
    url: `${BASKETS_ENDPOINT}own/all`,
  });
};

export const addBasket = async (data) => {
  const response = await axios({
    method: 'POST',
    url: BASKETS_ENDPOINT,
    data,
  });
  return response.data;
};

export const updateBasket = async ({ id, data }) => {
  const response = await axios({
    method: 'PUT',
    url: `${BASKETS_ENDPOINT}${id}`,
    data,
  });
  return response.data;
};

export const deleteBasket = async (id) => {
  return await axios({
    method: 'DELETE',
    url: `${BASKETS_ENDPOINT}${id}`,
    data,
  });
};
