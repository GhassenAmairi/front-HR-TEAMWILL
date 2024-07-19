import { Module, ModuleTree } from 'vuex';
import { RootState } from '@/store/interfaces';
import { getters } from './getters';
import { action } from './actions';
import { mutations } from './mutations';
import { state } from './state';
import userModule from '../userModule';

// Modules
const modules: ModuleTree<RootState> = {
  userModule,
};

const root: Module<RootState, RootState> = {
  state,
  getters,
  mutations,
  actions: action,
  modules,
};

export default root;
