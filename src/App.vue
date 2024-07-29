<template>
  <q-layout class="theme-1" view="hHh lpr lFr">
    <q-btn flat round dense class="profile" icon="account_circle" @click="menu = !menu">
      <q-menu v-model="menu" v-if="menu" class="menuLog">
        <q-list>
          <q-item clickable v-ripple @click="logout">
            <q-item-section>
              <q-item-label>Log out</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
    <router-view />
  </q-layout>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from './components/layouts/Header.vue';
import 'quasar/dist/quasar.css';
import searchCriterias from './components/searchCriterias/searchCriterias.vue';
import { QBtn, QMenu, QList, QItem, QItemSection, QItemLabel } from 'quasar';
import { mapMutations, useStore } from 'vuex';

@Options({
  components: {
    Header,
    searchCriterias,
    QBtn,
    QMenu,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
  },
  computed: {
    ...mapMutations(['setConnected']),
  }
})
export default class App extends Vue {
  menu = false;
  store = useStore();

  logout() {
    this.store.commit('setConnected', false);
    this.$router.push('/login');
    console.log('Logged out');
  }
}
</script>

<style scoped>
.profile {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #93a84c;
}

.profile:hover {
  background-color: white;
}

.menuLog {
  top: 40px !important;
}
</style>
