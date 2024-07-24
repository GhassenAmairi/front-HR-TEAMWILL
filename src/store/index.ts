
import { createStore, Store } from 'vuex';
import root from "./modules/root";


interface RootState {
  openToWork: boolean;
  contactsEmails: boolean;
  activiteComponent: string;
}

export const store = createStore<RootState>({
  state: {
    openToWork: true,
    contactsEmails: false,
    activiteComponent: '',
  },
  mutations: {
    setOpenToWork(state, value: boolean) {
      state.openToWork = value;
    },
    setContactsEmails(state, value: boolean) {
      state.contactsEmails = value;
    },
  },
  actions: {
    updateOpenToWork({ commit }, value: boolean) {
      commit('setOpenToWork', value);
    },
    updateContactsEmails({ commit }, value: boolean) {
      commit('setContactsEmails', value);
    },
  },
  modules: {},
});

export default store;
