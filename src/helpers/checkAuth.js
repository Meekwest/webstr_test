import Cookies from 'js-cookie';
import store from '@store';

export const checkAuth = () => {
  const id = Cookies.get('userId');
  if (id) {
    store.commit('setAuth', true);
    return true;
  } else {
    store.commit('setAuth', false);
    return false;
  }
};