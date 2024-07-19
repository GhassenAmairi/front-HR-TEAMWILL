import { ActionTree } from 'vuex';
import { RootActionsTypes, RootState } from '@/store/interfaces';
import { ROOT_STORE } from '@/store/constants';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment 
// @ts-ignore
export const action: ActionTree<RootState, RootState> & RootActionsTypes = {
  [ROOT_STORE.ACTIONS.UPDATE_VERSION]({ commit }, payload: string) {
    commit(ROOT_STORE.MUTATIONS.SET_VERSION, payload);
  },
  [ROOT_STORE.ACTIONS.FETCH_CRITERIAS]({ commit }, payload: string) {
    commit(ROOT_STORE.MUTATIONS.SET_criterias, payload);
  },
  
  
  
};
