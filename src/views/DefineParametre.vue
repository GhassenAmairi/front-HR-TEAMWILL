<template>
  <div class="DefineParametre">

    <div class="row">
      <criterias-list></criterias-list>

      <div class="col-md-8">
        <div class="content">
          <br />
          <h1 class="text-center">Define more parameters to refine the results</h1>
          <br />
          <div class="parameter-option">
            <q-item tag="label" v-ripple>
              <q-item-section>
                <q-item-label class="labeli">Include only jobs that are open to work</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-toggle color="grey" v-model="openToWork" val="include only job"  @change="updateOpenToWork"/>
              </q-item-section>
            </q-item>
          </div>
          <div class="parameter-option">
            <q-item tag="label" v-ripple>
              <q-item-section>
                <q-item-label class="labeli">Should we try to retrieve the contacts emails ?</q-item-label>
                <q-item-label caption>If successfully retrieved, we will send you an email available for the job and for
                  export</q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-toggle color="green" left-label v-model="contactsEmails" val="should retrieve information emails" />
              </q-item-section>
            </q-item>
          </div>
          <div class="parameter-option currently ">
            <q-item tag="label" v-ripple class="row">
              <q-item-section class="col">
                <q-item-label class="labeli" style="color: aliceblue;">CONTACTS CURRENTLY IN OUR DATABASE
                </q-item-label>
                <q-item-label caption style="color: beige;">This number might increase after we consult additional data
                  sources</q-item-label>
              </q-item-section>
              <q-item-section side top class="col contactsNumber">
                126
              </q-item-section>
            </q-item>
          </div>


          <div class="q-pa-md">
            <q-btn  class="full-width" label="View Contacts" style="background-color: #201246; color: aliceblue ; border-radius: 6px;" />


          </div>
          <div class="q-pa-md q-gutter-sm" style="position: absolute;">
              <q-item-section @click="$router.push('/dashbord')">
                <button style="color: grey;">
                  <q-icon name="keyboard_arrow_left" style="color: grey;"/>
                  Back
                </button>
              </q-item-section>
            </div>
          <div class="button-group text-center">
            <q-btn class="continue" text-color="white" label="Continue" href="/defineJob" >
            <q-icon name="keyboard_arrow_right" style="color: white;"/>
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ref } from 'vue';
import CriteriasList from '@/components/criteriasList.vue';
import { QBtn } from 'quasar';
import { useStore } from 'vuex';
@Options({
  components: {
    CriteriasList,
    QBtn
  }
})
export default class DefineParametreView extends Vue {
  selection = ref();
  private store = useStore();
    get openToWork() {
    return  this.store.state.openToWork;
  }
  get contactsEmails() {
    return  this.store.state.contactsEmails;
  }
  updateOpenToWork(value: boolean) {
    console.log("updateOpenToWork", value);
    this.store.dispatch('updateOpenToWork', true);
  }
}
</script>

<style scoped lang="scss">
.dashboard {
  padding: 20px;
  background-color: #f8f9fa;
}

.nav-pills .nav-link {
  margin-bottom: 10px;
  border-radius: 5px;


}

.nav-pills .nav-link.active {
  background-color: #fff;
  color: white;
}

h1 {
  margin-bottom: 20px;
}

.parameter-option {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
}

.button-group {
  margin-top: 20px;
}

.content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 110%;
}

.content-left {
  background-color: rgb(147, 168, 76);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.nav-pills .nav-link a {
  margin-bottom: 10px;
  border-radius: 5px;
  background: #fff;



}

.theme-1 a {
  color: #fff;
}

.labeli {
  font-size: larger;
  font-weight: 500;
}

.currently {
  background-color: #93a84c;
}

.contactsNumber {
  font-size: xx-large;
  color: azure;
  font-weight: 700;
}
.continue{
  background-color: #93a84c;
  color: aliceblue;
  border-radius: 6px;
  position: absolute;
  right : 0;
  text-decoration: none !important;
}
</style>