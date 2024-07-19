import Criteriastate  from '@/store/modules/critieriaModule';
import UserState  from '@/store/modules/userModule';
//import  RootActions  from './store/interfaces';
export interface RootState {
  version?: string;
  userModule?: UserState;
  activiteComponent?: string;
  criterias?: Criteriastate;
}
export interface RootGettersTypes {
  getCriterias(state: RootState): Criteriastate;
}
export interface RootMutationsTypes {
  SET_criterias(state: RootState, payload: Criteriastate): void;
}
export interface RootActionsTypes {
  fetchCriterias(state: RootState, payload: Criteriastate): void;
}
export interface StoreGetters {
  getUserModule(state: RootState): UserState;
}
export interface StoreActions {
  updateUserModule(state: RootState, payload: UserState): void;
}

export interface UserState {
  tabColumns?: any;
  tabRows?: any;
}
export interface UserGettersTypes {
  getRows(state: UserState): any;
  getColumns(state: UserState):
}
export interface UserMutationsTypes {
  SET_ROWS(state: UserState, payload: any): void;
  SET_COLUMNS(state: UserState, payload: any): void;
}
export interface UserActionsTypes {
  UPDATE_ROWS({ commit }:{commit: any}, payload: any): void;
  UPDATE_COLUMNS({ commit }:{commit: any}, payload: any): void;
}
export interface CriteriaActionTypes {
  UPDATE_ROWS({ commit }:{commit: any}, payload: any): void;
  UPDATE_COLUMNS({ commit }:{commit: any}, payload: any): void;
}
export interface Criteriastate {
  tabColumns?: any;
  tabRows?: any;
  NextStep?: any;
}

//export interface ExtendedRootActions extends RootActions {
  //UPDATE_COLUMNS: string;
//}
