<template>
    <div class = "Login">
        <!----<q-page>--->
            <div class="row login-page">
    <div class="col-12 col-md-4 col-lg-4 offset-md-4 offset-lg-4">
      <div class="q-pa-md">
        <q-item-section>
        
      </q-item-section>
      </div>
      <div class="text-center text-grey-7 mb-4">
        <div class = "login-image">
            <img src="@/assets/images/login.png" alt="Login image">
        </div> 
        <h3> login to scrpping des ressource Linkdin</h3>
      </div>

      <div class="q-pa-md">
       
        <q-form @submit.prevent="onLogin">
         
         <div class="text-center text-grey-7 mb-4">
          <q-item-section>
            <q-input standout v-model="username" type="text" label="username" class="mb-3" />
            <q-input standout v-model="password" type="password" label="Password" class="mb-3" />
          </q-item-section>

        </div>
        <div class="text-center">
            <q-btn color="primary" 
              text-color="white" 
              label="Se connecter" 
              
              @click="login()" 
              class="mb-3" 
              
                  />
            <div class="text-grey-8">Don't have an account yet?
              <a href="#" class="text-dark text-weight-bold" style="text-decoration: none">Sign
                up.</a>
            </div>  
        </div>
          
        </q-form>
        <div class="text-center mb-4">
                
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { computed } from 'vue';
import { Options, Vue } from 'vue-class-component';
import axios from 'axios';
import { LoginResponnse } from '@/types';
import { useStore } from 'vuex';
import {reactive} from 'vue';
import '@/store/services/Users/user';
import {} from '@/store/services/Users/user';
import { mapState, mapActions } from 'vuex';
@Options({
  computed: {
        ...mapState(['loginForm']),
        ...mapActions(['loginWithCredentials']),
    },

  })
export default class LoginView extends Vue {
 store = useStore();
  mounted() {
   
 
    this.validateCredentials(this.username,this.password)
  }
  login() {
            this.store.commit('setLogin', { username: this.username, password: this.password });
            this.store.dispatch('loginWithCredentials');
        }
  username = "";
  password = "";
  error = reactive({value:""});
  user : LoginResponnse ={token:"",access_token:"",token_type:""};
  errorMessage = '';
loggedIn = false;
  errors= '';
  message = '';
  
 form:{name:string,email:string,password:string}={name:"",email:"",password:""};
  setup() {
    const store = useStore();

    const id = computed({
      get() {
        return store.state.id;
      },
      set(value) {
        store.commit('setId', value);
      },
    });

    const userusername = computed({
      get() {
        return store.state.username;
      },
      set(value) {
        store.commit('setusername', value);
      },
    });

    const userPassword = computed({
      get() {
        return store.state.password;
      },
      set(value) {
        store.commit('setPassword', value);
      },
    });

    return { id, userusername, userPassword };
  }
/* eslint-disable */
  async submitUser(user: any ): Promise<void> {
    try {
      if (user.id) {
        const response = await axios.put<LoginResponnse>('http://localhost:8000/', user);
        console.log(response.data);
      } else {
        const response = await axios.post<LoginResponnse>('http://localhost:8000/', user);
        console.log(response.data);
      }
    } catch (error) {
      console.error('Error submitting user:', error);
    }
  }


  onLogin() {
    //console.log('Logging in with', this.email, this.password);
    if (this.validateEmail(this.username) && this.validatePassword(this.password)) {
      // Simulate an API call
      if (this.username === 'test@example.com' && this.password === 'password123') {
        this.$router.push('/dashboard');
      } else {
        this.errorMessage = 'Invalid email or password.';
      }
    } else {
      this.errorMessage = 'Please enter a valid email and password.';
    }
  }

  validateEmail(email: string): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return re.test(email);
  }

  validatePassword(password: string): boolean {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return re.test(password);
   // return password.length >= 6;
  }
  validateCredentials(username: string, password: string): boolean {
  const emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  const passwordRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  return emailRe.test(username) && passwordRe.test(password);
}
 async  loginWithCredentials(username: string, password: string) {
      try {
        const FormData =  {
     username: '',
      password: '',
      full_name: '',
      email: '',
      body: '',
   }
        const response = await axios.post('http://localhost:8000/token/', FormData, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          //body: JSON.stringify({ username: username, password: password })
        });

        if (response.status!== 200) {
          throw new Error('Invalid username or password');
        }

        const data = await response.data();
        console.log('Login successful:', data);
        this.loggedIn= true;
        this.errors = '';
        this.$router.push('/dashbord');
      } catch (err) {
        this.errors =   this.errors || (err as Error).message ;
      this.loggedIn = false;
      }
    }
  
  }

</script>

<style scoped lang="scss">
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
}

.q-form {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.text-grey-7 {
  color: #6c757d;
  text-align: center;
}

.q-btn {
  width: 100%;
}

.mb-3 {
  margin-bottom: 1rem;
}

.mb-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}

.login-image {
    height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}
.login-image img {
    max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
</style>