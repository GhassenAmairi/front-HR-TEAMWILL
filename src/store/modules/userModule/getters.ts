import { USER_STORE } from '@/store/constants';
import { RootState, UserGettersTypes, UserState } from '@/store/interfaces';
import { GetterTree } from 'vuex';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment 
// @ts-ignore
export const getters: GetterTree<UserState, RootState> & UserGettersTypes = {
  [USER_STORE.GETTERS.GET_ROWS]: (state: UserState) => {
    return state.tabRows;
  },
  [USER_STORE.GETTERS.GET_COLUMNS]: (state: UserState) => {
    return state.tabColumns;
  },
};
