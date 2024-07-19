import {
  RootActions,
  RootGetters,
  RootMutations,
  UserActions,
  UserGetters,
  UserMutations,
} from './enums';

export const ROOT_STORE = {
  GETTERS: RootGetters,
  MUTATIONS: RootMutations,
  ACTIONS: RootActions,
};
export const USER_STORE = {
  GETTERS: UserGetters,
  MUTATIONS: UserMutations,
  ACTIONS: UserActions,
};
export const CRITERIA_STORE = {
  GETTERS: RootGetters,
  MUTATIONS: RootMutations,
  ACTIONS: RootActions,
};