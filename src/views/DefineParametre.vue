<template>
    <div class = "DefineParametre">

      <div class="row">
    <div class="col-md-4">
      <div class="content-left">
        <nav class="nav nav-pills flex-column">
          <br />
          <a class="nav-link " href="accueil">What type of contacts do you want to find</a><br /><br />
          <a class="nav-link" href="dashbord">Please tell us more about your ideal job</a><br /><br />
          <a class="nav-link" href="DefineJob">Define criteria and weight</a><br /><br />
          <a class="nav-link" href="defineParametre">Refine your search</a><br /><br />
          <a class="nav-link" href="jobDetails">Campaign details</a><br /><br />
          <a class="nav-link" href="#">Company messaging</a><br /><br />
          <a class="nav-link" href="#">Company settings</a><br /><br />
        </nav>
      </div>
      </div>
      <div class="col-md-8">
        <div class="content">
          <br /><br /><br /><br />
        <h1 class="text-center">Define more parameters to results</h1>
        <div class="parameter-option">
          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Include only jobs that are open to work</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle color="blue" v-model="selection" val="include only job" />
            </q-item-section>
          </q-item>
        </div>
        <div class="parameter-option">
          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Should we try to retrieve more information emails</q-item-label>
              <q-item-label caption>If successful, we will send you an email available for the job and for export</q-item-label>
            </q-item-section>
            <q-item-section side top>
              <q-toggle color="green"  left-label v-model="selection" val="should retrieve information emails" />
            </q-item-section>
          </q-item>
        </div>
        <div class="parameter-option">
          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Notification currently in our job</q-item-label>
              <q-item-label caption>If successful, we will send you an email available for the job and for export</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle color="red" v-model="selection" val="notify me about updates to jobs" />
            </q-item-section>
          </q-item>
        </div>
        <div class="q-pa-md">
    <q-btn color="black" class="full-width" label="View job" />

    
  </div>

        <div class="button-group text-center">
          <q-btn color="white" text-color="black" label="Back"  href ="/dashbord"/>
          <q-spinner-hourglass class="on-left" />
          <q-btn color="primary" text-color="white" label="Continue"  href ="/defineJob"/>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { ref } from 'vue';

export default class DefineParametreView extends Vue {
  selection = ref();
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
}

.content-left {
  background-color: rgb(147, 168, 76);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.nav-pills .nav-link  a {
  margin-bottom: 10px;
  border-radius: 5px;
  background: #fff;

  
 
}
.theme-1 a {
  color: #fff;
}
</style>