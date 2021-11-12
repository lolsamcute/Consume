import Vue from 'vue';
import Vuex from 'vuex';
import { axiosInstance } from 'src/boot/axios';

// import example from './module-example'

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
    state: {
      user: {
        email: '',
        phone_number: '',
        first_name: '',
        last_name: '',
        password: '',
      },
    },
    actions: {
      async login(_, payload) {
        const apiCall = await axiosInstance.post('/admin/login', payload);
        return apiCall;
      },
      async signup(_, payload) {
        const apiCall = await axiosInstance.post('/admin/register', payload);
        return apiCall;
      },
      async logout({ commit }) {
        commit('CLEAR_USER_DATA');
      },
    },
    mutations: {
      CLEAR_USER_DATA() {
        localStorage.clear();
      },
      SET_USER(state, payload) {
        state.user = payload;
      },
      SET_USER_STATUS(state, payload) {
        state.user.status = payload;
      },
    },
  });

  return Store;
}
