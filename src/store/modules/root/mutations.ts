import { MutationTree } from 'vuex';
import { RootMutationsTypes, RootState } from './../../interfaces';
import { ROOT_STORE } from '@/store/constants';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment 
// @ts-ignore
export const mutations: MutationTree<RootState> & RootMutationsTypes = {
  [ROOT_STORE.MUTATIONS.SET_VERSION](state: RootState, payload: string) {
    state.version = payload;
  },
};
