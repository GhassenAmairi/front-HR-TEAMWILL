import axios from 'axios';

const state  = {
    
  profils: null as Profils|null, 
  profil: null as Profil|null,
};

const getters = {
   

  stateProfils: (state:{profils:Profils|null ,profil:Profil|null}) => state.profils,
  
  stateProfil: (state:{profils:Profils|null ,profil:Profil|null}) => state.profil,
};
interface Profil {
  id: number;
  form:{
    profils: string;
    profil: string;}
}
interface Profils {
  id: number;
}
interface ActionContext {
    dispatch:(action:string, payload?:PayloadType |number)=> Promise<void>;
}
type PayloadType= string | number | Profil;
const actions = {
  async createProfil({dispatch}:ActionContext, profil:Profil) {
    await axios.post('profil', profil);
    await dispatch('getProfils');
  },
  async getProfils({commit}:{commit:(actions:string,data:Profils[])=>void}) {
    const{data}: {data:Profils[]} = await axios.get('profils');
    commit('setProfils', data);
  },
  async viewProfil({commit}:{commit:(actions:string,data:Profil)=>void}, id:number) {
    const {data} = await axios.get(`profil/${id}`);
    commit('setProfil', data);
  },
  // eslint-disable-next-line no-empty-pattern
  async updateprofil({}, profil:Profil) {
    await axios.patch(`note/${profil.id}`, profil.form);
  },
  // eslint-disable-next-line no-empty-pattern
  async deleteprofil({}, id:number) {
    await axios.delete(`profil/${id}`);
  }
};

const mutations = {
  setProfils(state:{ profils: Profils[] | null, profil: Profil | null }, profils:Profils[]) {
    state.profils = profils;
  },
  setProfil(state:{ profils: Profils[] | null, profil: Profil | null }, profils:Profil) {
    state.profil = profils;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};