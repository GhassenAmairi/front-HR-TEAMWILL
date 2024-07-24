import { USER_STORE } from '@/store/constants';
import { UserMutationsTypes, UserState } from '@/store/interfaces';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<UserState> & UserMutationsTypes = {
  [USER_STORE.MUTATIONS.SET_ROWS](state: UserState, payload) {
    state.tabRows = payload;
  },
  [USER_STORE.MUTATIONS.SET_COLUMNS](state: UserState, payload) {
    state.tabColumns = payload;
  },
};
