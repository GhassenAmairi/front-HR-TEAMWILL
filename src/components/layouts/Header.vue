<template>
  <q-header elevated style="background-color: #93a84c">
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleLeftDrawer"
      />

      <q-toolbar-title> Teamwill </q-toolbar-title>
      <!-- <div class="q-ml-md"> -->
      <div class="q-mr-sm user">username</div>
      <q-avatar size="ld" icon="person">
        <q-menu>
        <q-list>
          <q-item clickable>
            <q-item-section >
              <q-btn @click="$router.push('/Login')">login</q-btn>
            </q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>legout</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>change password</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>account</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
      </q-avatar>
      
      <!-- </div> -->

      <div>
        <q-btn
          @click="logout"
          class="gt-xs ExitToApp"
          size="12px"
          flat
          dense
          round
          icon="logout"
        ></q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Header extends Vue {
  logout() {
    console.log('logout');
  }
  toggleLeftDrawer() {
    console.log('toggleLeftDrawer');
  }
}
</script>

<style scoped>
.q-btn-dropdown .q-badge {
  background-color: #027be3;
  /* Couleur du badge */
  font-size: 14px;
  /* Taille de police */
  border-radius: 50%;
  /* Forme du badge */
  height: 20px;
  /* Hauteur du badge */
  width: 20px;
  /* Largeur du badge */
  margin-left: -5px;
  /* Positionnement horizontal du badge */
  margin-top: -10px;
  /* Positionnement vertical du badge */
}

.q-btn-dropdown .q-badge__content {
  font-weight: bold;
  /* Poids de la police */
  line-height: 1;
  /* Hauteur de ligne */
  padding: 0;
  /* Marge intérieure */
}

.q-btn-dropdown .q-badge--primary .q-badge__content {
  color: #fff;
  /* Couleur du texte */
}

.dropdown-btn {
  border-radius: 50%;
  /* Forme du badge */
  height: 20px;
  /* Hauteur du badge */
  width: 20px;
  /* Largeur du badge */
  background: url('@/assets/images/avatar.png');
}
</style>
