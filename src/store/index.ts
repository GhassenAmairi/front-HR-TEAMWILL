import { createStore } from "vuex";
//import { RootState } from "@/store/interfaces";

import { loginForm } from "@/types";




export default  createStore({
state: {
    loginForm : loginForm,
    activiteComponent: "",
    criterias : {
        NextStep : "profil"
    }
},

mutations: {
    setLogin(state,{username,password}) {
        state.loginForm.username = username;
        state.loginForm.password = password;
        console.log(state.loginForm);
        
    }
},
actions: { 
    async loginWithCredentials({ commit, state }) {
        try {
            const response = await fetch('http://localhost:8000/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(state.loginForm),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error during login:", error);
        }
    },

},
});
