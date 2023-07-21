import { $host } from './index';
import Cookies from 'js-cookie';

export const auth = async (login, password) => {
  try {
    const { data } = await $host.get('/users', {
      params: {
        login,
        password
      }
    });
    return data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};

export const getUserInfoById = async () => {
  const id = Cookies.get('userId');
  try {
    const { data } = await $host.get('/users', {
      params: {
        id
      }
    });
    return data[0];
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};

export const changeUserInfoById = async (user) => {
  const { dob, city } = user;
  const id = Cookies.get('userId');
  try {
    const { data } = await $host.patch(`/users/${id}`, {
      city,
      dob
    });
    return data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};

export const getTicketsByUserId = async () => {
  const id = Cookies.get('userId');
  try {
    const { data } = await $host.get('/tickets', {
      params: {
        userId: id
      }
    });
    return data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};