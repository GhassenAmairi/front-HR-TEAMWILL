import { Module } from 'vuex';
import {  Criteriastate, CriteriaActionTypes } from '@/store/interfaces'; // Utilisez 'CriteriaState' au lieu de 'criteriastate'
import { getters } from './getters';
import { mutations } from './mutation';
import { state } from './state';
import { action } from '../root/actions';
import profil from "./profil";
import job from "./job";

// Module
const criterias: Module< Criteriastate, CriteriaActionTypes > = {
  namespaced: true,
  state,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
// @ts-ignore
  getters,
  mutations,
  action,
  job,
  profil
};

export default criterias;

