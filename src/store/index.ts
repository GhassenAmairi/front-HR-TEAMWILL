import { createStore } from "vuex";
import { jobsForm, loginForm, userForm } from "@/types";
import { availableFilters, selectedFilters } from "@/store/types";
import axios from "axios";
import createPersistedState from 'vuex-persistedstate';


export default  createStore({
    

state: {
    loginForm : loginForm,

    activiteComponent: "",
    criterias: {
      NextStep: "profil"
    },
    jobsForm: jobsForm,
    userForm: userForm,
    connected: false,
    dialog: false,
    currentFilter: 'geography' as keyof typeof availableFilters,
    selectedFilters: selectedFilters,
    availableFilters: availableFilters,
    name : "",
    program : "",
     description : "", 
     sender : "",
     source:  "",
     inputText : " ",
     document : "",

  },
  

mutations: {
  setConnected(state, connected: boolean) {
    state.connected = connected;
  },
    setLogin(state, { username, password }) {
      state.loginForm.username = username;
      state.loginForm.password = password;
      //console.log(state.loginForm);
    },
    setJobs(state, { id, title, description, category, location, job }) {
      state.jobsForm.id = id;
      state.jobsForm.title = title;
      state.jobsForm.description = description;
      state.jobsForm.category = category;
      state.jobsForm.location = location;
      state.jobsForm.job = job;
    },
    addJob(state, { id, title, description, category, location, job }) {
      state.jobsForm.id = id;
      state.jobsForm.title = title;
      state.jobsForm.description = description;
      state.jobsForm.category = category;
      state.jobsForm.location = location;
      state.jobsForm.job = job;
    },
    updateJob(state, { id, title, description, category, location, job }) {
      state.jobsForm.id = id;
      state.jobsForm.title = title;
      state.jobsForm.description = description;
      state.jobsForm.category = category;
      state.jobsForm.location = location;
      state.jobsForm.job = job;
    },
    deleteJob(state, { id, title, description, category, location, job }) {
      state.jobsForm.id = id;
      state.jobsForm.title = title;
      state.jobsForm.description = description;
      state.jobsForm.category = category;
      state.jobsForm.location = location;
      state.jobsForm.job = job;
    },
    get_byId_Jobs(state, {id,title,description,category,location,job}) {
        state.jobsForm.id = id;
        state.jobsForm.title = title;
        state.jobsForm.description = description;
        state.jobsForm.category = category;
        state.jobsForm.location = location;
        state.jobsForm.job = job;
    },
    setUser(state, {username,fullname,email,disabled,role}) {
        state.userForm.username =  username;
        state.userForm.fullname = fullname;
        state.userForm.email = email;
        state.userForm.disabled = disabled;
        state.userForm.role = role;
        

    },
    
    addUser(state, { username, fullname, email, disabled, role }) {
      state.userForm.username = username;
      state.userForm.fullname = fullname;
      state.userForm.email = email;
      state.userForm.disabled = disabled;
      state.userForm.role = role;
    },
    updateUser(state, { username, fullname, email, disabled, role }) {
      state.userForm.username = username;
      state.userForm.fullname = fullname;
      state.userForm.email = email;
      state.userForm.disabled = disabled;
      state.userForm.role = role;
    },
    deleteUser(state, { username, fullname, email, disabled, role }) {
      state.userForm.username = username;
      state.userForm.fullname = fullname;
      state.userForm.email = email;
      state.userForm.disabled = disabled;
      state.userForm.role = role;
    },
    setDialog(state, payload: boolean) {
      state.dialog = payload;
    },
    setCurrentFilter(state, payload: keyof typeof availableFilters) {
      state.currentFilter = payload;
    },
    addFilterOption(state, { filter, option }: { filter: keyof typeof selectedFilters, option: string }) {
      if (!state.selectedFilters[filter].includes(option)) {
        state.selectedFilters[filter].push(option);
      }
    },
    setInputText(state, text) {
        state.inputText = text;
        localStorage.setItem("inputText", text);
    },
    
    setName(state, name) {
        state.name = name;
    },

    setProgram(state, program) {
        state.program = program;
    },

    setDescription(state, description) {    
        state.description = description;
    },

    setSender(state, sender) {    
        state.sender = sender;
    },

    setSource(state, source) {

        state.source = source;
    },

    //tester un document simple pour save un variable en local interface
    setDocument(state, document) {
        state.document = document;
    },
},
actions: { 
    async loginWithCredentials({ commit, state }) {
      try {
        const response = await axios.post("http://localhost:8000/api/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(state.loginForm)
        });
        const data = await response.data;

        if (data.success) {
          commit("setConnected", true);
        } else {
          console.error("Login failed:", data.message);
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    },

    async fetchJobs({ commit, state }) {
      const response = await fetch('http://localhost:8000/api/jobs/');
      const data = await response.json();
      commit('setJobs', data);
    },
    async addJob({ commit, state }) {
      try {
        const response = await fetch('http://localhost:8000/jobs/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(state.jobsForm),
        });
        const data = response.json();
        console.log(data);
        commit('addJob', data);
      } catch (error) {
        console.error("Error during add job:", error);
      }
    },
    async updateJob({ commit , state} ) {
        try{
        const response = await axios.put(`http://localhost:8000/jobs/5eb7cf5a86d9755df3a6c593`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.jobsForm),

        });
        const data = response.data;
        console.log(data);
        commit('updateJob', data);
      } catch (error) {
        console.error("Error during update job:", error);
      }
    },
    async deleteJob({ commit ,state}) {
        try{
        const response =await axios.delete(`http://localhost:8000/jobs/5eb7cf5a86d9755df3a6c593`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
           // body: JSON.stringify(this.state.jobsForm),
        })
        const data = response.data;
        console.log(data);
        commit('deleteJob', data);
      } catch (error) {
        console.error("Error during delete job:", error);
      }
    },

    showOptions({ commit }, filter: keyof typeof availableFilters) {
      commit('setCurrentFilter', filter);
      commit('setDialog', true);
    },
    selectOption({ commit }, { filter, option }: { filter: keyof typeof selectedFilters, option: string }) {
      commit('addFilterOption', { filter, option });
      commit('setDialog', false);
    },

    saveDocument({ commit, state }) {
        commit('setDocument', state.document);
        localStorage.setItem('document', JSON.stringify(state.document));
    }
  },
  getters: {
    options: (state) => (filter: keyof typeof availableFilters): string[] => {
      return state.availableFilters[filter];
    },
    capitalizedFilter: (state) => {
      const value = state.currentFilter;
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  plugins: [
    createPersistedState({
      storage: window.localStorage,
    })
  ],
});
