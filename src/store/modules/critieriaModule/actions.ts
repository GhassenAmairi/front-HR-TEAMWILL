
import { CRITERIA_STORE } from '@/store/constants';
import { RootState, Criteriastate, CriteriaActionTypes } from '@/store/interfaces'; // Correction des noms des interfaces
import { ActionTree ,Commit} from 'vuex';

export const actions:ActionTree<Criteriastate, RootState> & CriteriaActionTypes = {
    [CRITERIA_STORE.ACTIONS.UPDATE_ROWS]({ commit }: { commit: Commit }, payload) { 
        commit(CRITERIA_STORE.MUTATIONS.SET_ROWS, payload); 
      },
      [CRITERIA_STORE.ACTIONS.UPDATE_COLUMNS]({ commit }: { commit: Commit }, payload) { 
        commit(CRITERIA_STORE.MUTATIONS.SET_COLUMNS, payload);  
      },
      
};
