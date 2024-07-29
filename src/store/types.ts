import { DispatchOptions } from 'vuex/types';
import { StoreActions, StoreGetters } from './interfaces';

export type CustomDispatch = {
  dispatch<K extends keyof StoreActions>(
    key: K,
    payload?: Parameters<StoreActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<StoreActions[K]>;
};

export type CustomRootGetter = {
  rootGetters: {
    [K in keyof StoreGetters]: ReturnType<StoreGetters[K]>;
  };
};
interface State {
  dialog: boolean;
  currentFilter: keyof typeof selectedFilters;
  availableFilters: typeof availableFilters;
  selectedFilters: {
    geography: string[];
    industry: string[];
    seniority: string[];
    function: string[];
    title: string[];
    company: string[];
    headcount: string[];
    revenue: string[];
  };
}
export const selectedFilters = {
  geography: [] as string[],
  industry: [] as string[],
  seniority: [] as string[],
  function: [] as string[],
  title: [] as string[],
  company: [] as string[],
  headcount: [] as string[],
  revenue: [] as string[],
};

export const availableFilters = {
  geography: ['USA', 'Canada','Tunisia'],
  industry: ['Technology', 'Finance'],
  seniority: ['Junior', 'Mid', 'Senior'],
  function: ['Engineering', 'Marketing'],
  title: ['Manager', 'Developer'],
  company: ['Google', 'Apple'],
  headcount: ['1-10', '11-50', '51-200'],
  revenue: ['<1M', '1M-10M', '10M+'],
};
