<template>
  <div class="layout">
    <header class="header" style="background-color: #93a84c">
      <div class="toolbar">
        <button class="btn menu-Btn" aria-label="Menu" @click="toggleLeftDrawer">
          <i class="material-icons">menu</i>
        </button>
        <div class="toolbar-title">Teamwill</div>
        <div class="user">username</div>
        <div class="avatar" @click="toggleMenu">
          <i class="material-icons">person</i>
          <div v-if="menuVisible" class="menu">
            <ul>
              <li @click="$router.push('/Login')">Login</li>
              <li @click="logout">Logout</li>
              <li>Change Password</li>
              <li>Account</li>
            </ul>
          </div>
        </div>
        <div class="ml-auto">
          <button class="btn" aria-label="Logout" @click="logout">
            <i class="material-icons">logout</i>
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Vue } from 'vue-class-component';

export default class Header extends Vue{
  menuVisible = ref(false);
   toggleMenu = () => {
    this.menuVisible.value = !this.menuVisible.value;
  };
  setup() {

    const toggleLeftDrawer = () => {
      console.log('toggleLeftDrawer');
    };

    const logout = () => {
      console.log('logout');
    };


    return {
      toggleLeftDrawer,
      logout,
    };
  }
}
</script>
<style scoped>
.layout {
  display: flex;
  flex-direction: column;
}

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.toolbar {
  display: flex;
  align-items: center;
  width: 100%;
}

.toolbar-title {
  font-weight: bold;
  margin-left: 1rem;
}

.user {
  font-size: 1rem;
  color: #ffffff;
  margin-left: auto;
  margin-right: 1rem;
}

.avatar {
  position: relative;
  cursor: pointer;
}

.menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 200px;
  z-index: 10;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  padding: 10px;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.menu li:hover {
  background-color: #dfe6e9;
}

.btn {
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  padding: 0;
  margin: 0;
}

.material-icons {
  font-size: 24px;
}
.menu-Btn{
  background-color: #93a84c !important;
}
.ml-auto {
  margin-left: auto;
}
</style>