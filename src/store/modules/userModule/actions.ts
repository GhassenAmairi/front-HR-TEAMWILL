import { USER_STORE } from '@/store/constants';
import { RootState, UserActionsTypes, UserState } from '@/store/interfaces';
import { ActionTree } from 'vuex';

export const actions: ActionTree<UserState, RootState> & UserActionsTypes = {
  [USER_STORE.ACTIONS.UPDATE_ROWS]({ commit }, payload: any) {
    commit(USER_STORE.MUTATIONS.SET_ROWS, payload);
  },
  [USER_STORE.ACTIONS.UPDATE_COLUMNS]({ commit }, payload: any) {
    commit(USER_STORE.MUTATIONS.SET_COLUMNS, payload);
  },
};
