<template>
  <div class="Login">
    <div class="login-page">
      <div class="login-container">
        <div class="q-pa-md">
          <q-item-section></q-item-section>
        </div>
        <div class="text-center text-grey-7 mb-4">
          <div class="login-image">
            <img src="@/assets/images/login.png" alt="Login image" />
          </div>
          <h3>Login</h3>
        </div>
        <div class="q-pa-md">
          <q-form @submit.prevent="onLogin">
            <div class="text-center text-grey-7 mb-4">
              <q-item-section>
                <q-input
                  standout
                  v-model="username"
                  type="text"
                  label="Username"
                  placeholder="Enter your username"
                  class="mb-3"
                  outlined
                  dense
                />
                <q-input
                  standout
                  v-model="password"
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  class="mb-3"
                  outlined
                  dense
                />
              </q-item-section>
            </div>
            <div class="text-center">
              <q-btn
                text-color="white"
                label="Se connecter"
                @click="login()"
                class="mb-3 color"
              />
              <div class="text-grey-8">
                Don't have an account yet?
                <a
                  href="#"
                  class="text-dark text-weight-bold"
                  style="text-decoration: none"
                >
                  Sign up.
                </a>
              </div>
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, reactive } from 'vue';
import { Options, Vue } from 'vue-class-component';
import axios from 'axios';
import { LoginResponnse } from '@/types';
import { useStore } from 'vuex';
import { mapState, mapActions } from 'vuex';
import { QBtn } from 'quasar';

@Options({
  computed: {
    ...mapState(['loginForm']),
    ...mapActions(['loginWithCredentials']),
  },
  components: {
    QBtn,
  },
})
export default class LoginView extends Vue {
  store = useStore();
  username = "";
  password = "";
  error = reactive({ value: "" });
  user: LoginResponnse = { token: "", access_token: "", token_type: "" };
  errorMessage = '';
  loggedIn = false;
  errors = '';
  message = '';

  mounted() {
    this.validateCredentials(this.username, this.password);
  }

  login() {
    this.store.commit('setLogin', { username: this.username, password: this.password });
    this.store.dispatch('loginWithCredentials');
  }

  async onLogin() {
    if (this.validateEmail(this.username) && this.validatePassword(this.password)) {
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
  }

  validateCredentials(username: string, password: string): boolean {
    const emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    const passwordRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    return emailRe.test(username) && passwordRe.test(password);
  }

  async loginWithCredentials(username: string, password: string) {
    try {
      const formData = {
        username: '',
        password: '',
        full_name: '',
        email: '',
        body: '',
      };
      const response = await axios.post('http://localhost:8000/token/', formData, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status !== 200) {
        throw new Error('Invalid username or password');
      }

      const data = await response.data();
      this.loggedIn = true;
      this.errors = '';
      this.$router.push('/dashbord');
    } catch (err) {
      this.errors = this.errors || (err as Error).message;
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

.login-container {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px #93a84c;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.text-grey-7 {
  color: #93a84c;
}

.q-btn {
  width: 100%;
}

.mb-3 {
  margin-bottom: 1rem;
}

.mb-4 {
  margin-bottom: 1.5rem;
}

.login-image {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.login-image img {
  max-width: 100%;
  height: auto;
}

.q-input {
  border: 1px solid #d1d5db;
  border-radius: 5px;
  padding: 10px;
}

.q-input::placeholder {
  color: #93a84c;
  opacity: 1; /* Show placeholder text with normal opacity */
}

.q-input:focus {
  border-color: #93a84c;
  box-shadow: 0 0 5px #93a84c;
}

.q-input .q-input__inner {
  background-color: #f9fafb;
}
.color{
  background-color: #93a84c;
  color: white;
}
</style>
