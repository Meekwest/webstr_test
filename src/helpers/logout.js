import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';

export const logout = () => {
  Cookies.remove('userId');
  useRouter().push('/login');
};