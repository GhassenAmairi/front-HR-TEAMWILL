<template>
  <q-layout class="theme-1" view="hHh lpr lFr">
    <Header />
    <!-- <sideBar /> -->
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </q-layout>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from './components/layouts/Header.vue';


// import SideBar from './shared/SideBar.vue';

@Options({
  components: {
    Header,
    // SideBar,
  },
})
export default class App extends Vue {}
</script>
