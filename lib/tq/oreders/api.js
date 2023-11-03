import axios from 'axios';
const { host = 'http://localhost:3000' } = process.env;

export const ORDERS_ENDPOINT = `${host}/api/v2/orders/`;

export const fetchOrders = async () => {
  const { data } = await axios(ORDERS_ENDPOINT);
  console.log(data);
  return data;
};

export const fetchUserOrders = async () => {
  const { data } = await axios(`${ORDERS_ENDPOINT}own`);
  console.log(data);
  return data;
};

export const addOrder = async (data) => {
  console.log('about to add', data);
  const response = await axios({
    method: 'POST',
    url: ORDERS_ENDPOINT,
    data,
  });
  return response.data;
};

export const updateOrder = async ({ id, ...data }) => {
  console.log('in api', id, data);
  const response = await axios({
    method: 'PUT',
    url: `${ORDERS_ENDPOINT}${_id}`,
    data,
  });
  return response.data;
};

export const deleteOrder = async (id) => {
  return await axios({
    method: 'DELETE',
    url: `${PRODUCTS_ENDPOINT}${id}`,
  });
};
