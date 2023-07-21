import Cookies from 'js-cookie';

const state = {
  id: null,
  firstName: null,
  lastName: null,
  dob: null,
  city: null,
  email: null,
  login: null,
  auth: false
};

const getters = {

};

const actions = {
  saveUserInfo({ commit }, payload) {
    commit('setUserInfo', payload);
    // userId вместо, например, JWT токена, который бы лежал в куках.
    Cookies.set('userId', payload.id);
  }
};

const mutations = {
  setUserInfo: (state, payload) => {
    state.id = payload.id;
    state.firstName = payload.firstName;
    state.lastName = payload.lastName;
    state.dob = payload.dob;
    state.email = payload.email;
    state.login = payload.login;
    state.city = payload.city;
  },
  setAuth: (state, payload) => {
    state.auth = payload;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};