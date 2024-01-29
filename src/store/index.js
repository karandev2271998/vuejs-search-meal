import { createStore } from "vuex";
import state from "./state";
import * as actions from "./actions";
import * as mutations from "./mutations";
import * as getters from "./getters";
import createPersistedState from 'vuex-persistedstate';
const store = createStore({
  state,
  actions,
  mutations,
  getters,
});

createPersistedState({
  key: 'meal-detail', // You can customize the key used in local storage
  storage: window.localStorage, // Use local storage
})(store);

export default store;
