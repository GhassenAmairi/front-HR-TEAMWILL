import { CRITERIA_STORE } from '@/store/constants';
import { CriteriaActionTypes, Criteriastate } from '@/store/interfaces';
import { MutationTree } from 'vuex';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment 
// @ts-ignore
export const mutations: MutationTree<Criteriastate> & CriteriaActionTypes = {
  [CRITERIA_STORE.MUTATIONS.SET_ROWS](state: Criteriastate, payload: string) {
    state.tabRows = payload;
  },
  [CRITERIA_STORE.MUTATIONS.SET_COLUMNS](state: Criteriastate, payload: string) {
    state.tabColumns = payload;
  },
};
