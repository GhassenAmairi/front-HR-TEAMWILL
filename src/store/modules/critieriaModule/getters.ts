import { CRITERIA_STORE } from '@/store/constants';
import { RootState, CriteriaActionTypes , Criteriastate } from '@/store/interfaces';
import { GetterTree } from 'vuex';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment 
// @ts-ignore
export const getters: GetterTree<Criteriastate, RootState> & CriteriaActionTypes  = {
  [CRITERIA_STORE.GETTERS.GET_ROWS]: (state:Criteriastate) => {
    return state.tabRows;
  },
  [CRITERIA_STORE.GETTERS.GET_COLUMNS]: (state: Criteriastate) => {
    return state.tabColumns;
  },
};
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
// @ts-ignore
export const getters: GetterTree <Criteriastate, stateJob> = {
    [CRITERIA_STORE.GETTERS.GET_ROWS]: (state: Criteriastate) => {
      return state.tabRows;
    },
    [CRITERIA_STORE.GETTERS.GET_COLUMNS]: (state: Criteriastate) => {
      return state.tabColumns;
    },
  }; 

