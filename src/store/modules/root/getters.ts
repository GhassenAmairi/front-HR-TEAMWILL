import { ROOT_STORE } from '@/store/constants';
import { GetterTree } from 'vuex';
import { RootGettersTypes, RootState } from './../../interfaces';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment 
// @ts-ignore
export const getters: GetterTree<RootState, RootState> & RootGettersTypes = {
  [ROOT_STORE.GETTERS.GET_VERSION]: (state: RootState): string => {
    return state.version ? state.version : '';
  },


 

};
