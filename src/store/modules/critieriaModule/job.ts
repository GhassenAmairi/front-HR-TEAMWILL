import axios from 'axios';
import { Commit, } from 'vuex';

const state = {
  job: null ,
};

//const getters = {
  //isAuthenticated: (state: { job: string }) => !!state.job,
  //stateJob: (state: { job: string }) => state.job,
//};

//onst actions = {
//  async register({dispatch}: {dispatch:(arg:string)=> Promise<string>}, form :{username:string, password:string}) {
  //  await axios.post('register', form);
    //const JobForm = new FormData();
    //JobForm.append('username', form.username);
    //JobForm.append('password', form.password);
    //await dispatch('logIn');
  //},
//  async logIn({dispatch}: {dispatch:(arg:string)=> Promise<void>}, user:{username:string, password:string}) {
  //  await axios.post('login', user);
    //await dispatch('viewMe');
  //},
  //async viewMe({commit}:ActionContext) {
    //const {data} = await axios.get('Job/list');
    //await commit('setUser', data);
  //},
  // eslint-disable-next-line no-empty-pattern
  //async deleteJob({}, id:number) {
    //await axios.delete(`Job/${id}`);
  //},
  //async logOut({commit}:ActionContext) {
    //const job = null;
    //commit('logout', job);
 // }
//};
//interface ActionContext {
  //  commit:Commit;
//}
//interface JobState {
  //job: string | null;
//}
export interface Degree {
  level: string;
  major: string;
}

export interface Job {
  id: number;
  title: string;
  degree: Degree;
  description: string;
  skills: string[];
  lang: string[];
}

const mutations = {
 // setJob(state:JobState, username:string) {
   // state.job = username;
  //},
  //logout(state: JobState, job:string){
    //state.job = job;
  //},

  setJobs(state: { jobs: Job[] }, jobs: Job[]) {
    state.jobs = jobs;
  },
  setJob(state: { job: Job }, job: Job) {
    state.job = job;
  },
  addJob(state: { jobs: Job[] }, job: Job) {
    state.jobs.push(job);
  },
  updateJob(state: { jobs: Job[] }, updatedJob: Job) {
    const index = state.jobs.findIndex(job => job.id === updatedJob.id);
    if (index !== -1) {
      state.jobs.splice(index, 1, updatedJob);
    }
  },
  deleteJob(state: { jobs: Job[] }, jobId: number) {
    state.jobs = state.jobs.filter(job => job.id !== jobId);
  }
};

export const actions = {
  async fetchJobs({ commit }: { commit: Commit }) {
    const response = await axios.get('http://localhost:8000/jobs/');
    commit('setJobs', response.data);
  },
  async fetchJob({ commit }: { commit: Commit }, jobId: number) {
    const response = await axios.get(`http://localhost:8000/jobs/${jobId}`);
    commit('setJob', response.data);
  },
  async createJob({ commit }: { commit: Commit }, job: Job) {
    const response = await axios.post('http://localhost:8000/jobs/', job);
    commit('addJob', response.data);
  },
  async updateJob({ commit }: { commit: Commit }, job: Job) {
    const response = await axios.put(`http://localhost:8000/jobs/${job.id}`, job);
    commit('updateJob', response.data);
  },
  async deleteJob({ commit }: { commit: Commit }, jobId: number) {
    await axios.delete(`http://localhost:8000/jobs/${jobId}`);
    commit('deleteJob', jobId);
  }
};

export const getters = {
  jobs: (state: { jobs: Job[] }) => state.jobs,
  job: (state: { job: Job }) => state.job,
};


export default {
  state,
  getters,
  actions,
  mutations
};