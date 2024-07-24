<template>
  <div v-if="activeComponent === 'page'" class="component-page">
    <h1 class="text-center">Where will we find the job</h1>
    <div class="job-sources">
      <div class="job-source" v-for="source in jobSources" :key="source.id">
        <input type="checkbox" :id="source.id" />
        <label :for="source.id" class="a_droite">{{ source.label }}</label>
        <img :src="source.imgSrc" :alt="source.label" />
      </div>
    </div>
    <div class="actions text-center">
      <q-btn color="white" text-color="black" label="Back" class="mr-2" />
      <q-spinner-hourglass class="on-left" />
      <q-btn color="primary" text-color="black" label="Continue" />
    </div>
  </div>

  <div v-if="activeComponent === 'jobdetails'" class="component-jobdetails">
    <h1>Job Details</h1>
    <div class="form-section">
      <q-label label="Name*" /><br>
      <q-input standout v-model="getCriteriasModule.name" label="Job Name" type="text" /><br>
      <q-label label="Description*" /><br>
      <q-input v-model="getCriteriasModule.description" label="Description" type="textarea" /><br>
      <h4>Configuration of Jobs</h4>
      <q-label label="Source*" /><br>
      <q-input standout v-model="getCriteriasModule.source" label="Please choose a source" type="text" />
    </div>
    <div class="actions text-center">
      <q-btn color="white" text-color="black" label="Back" />
      <q-spinner-hourglass class="on-left" />
      <q-btn color="primary" text-color="black" label="Continue" />
    </div>
  </div>

  <div v-if="activeComponent === 'dashboard'" class="component-dashboard">
    <h1>Please Tell Us More About Your Ideal Job</h1>
    <div class="form-section">
      <q-item-section>
        <q-input standout v-model="getCriteriasModule.fileType" label="PDF/DOC" type="text" />
      </q-item-section>
      <q-item-section side>
        <q-icon name="keyboard_arrow_right" />
      </q-item-section>
      <q-item-section>Text</q-item-section>
      <q-item-section side>
        <q-icon name="keyboard_arrow_right" />
      </q-item-section>
      <q-item-section>Other</q-item-section>
      <q-item-section side>
        <q-icon name="keyboard_arrow_right" />
      </q-item-section>
    </div>
    <div class="actions text-center">
      <q-btn color="white" text-color="black" label="Back" />
      <q-spinner-hourglass class="on-left" />
      <q-btn color="primary" text-color="black" label="Continue" />
    </div>
  </div>

  <div v-if="activeComponent === 'recherche'" class="component-recherche">
    <h1>Please Tell Us More About Your Ideal Job</h1>
    <div class="form-section">
      <q-field stack-label>
        <template v-slot:control>
          <div class="self-center full-width no-outline"></div>
        </template>
      </q-field>
      <div class="degree-section">
        <legend>Degree</legend>
        <div class="q-gutter-md row">
          <q-select filled v-model="getCriteriasModule.degree" label="Level" style="width: 250px" />
        </div>
        <div class="q-gutter-md row">
          <q-select filled v-model="criteriasModule.degreeOptions" :options="['Manager', 'Level', 'Action']"
            style="width: 250px" />
        </div>
      </div>
      <div class="description-section">
        <h2>Description</h2>
        <q-input v-model="getCriteriasModule.description" filled type="textarea" />
      </div>
    </div>
    <div class="actions text-center">
      <q-btn color="white" text-color="black" label="Back" />
      <q-spinner-hourglass class="on-left" />
      <q-btn color="primary" text-color="black" label="Continue" />
    </div>
  </div>

  <div v-if="activeComponent === 'DefineJob'" class="component-define-job">
    <h1 class="text-center">Define Your Ideal Job</h1>
    <div class="q-pa-md q-gutter-sm">
      <q-banner class="bg-primary text-white">
        Learn how to define your ideal job.
        <template v-slot:action>
          <q-btn flat color="white" label="Learn more" />
        </template>
      </q-banner>
    </div>
    <div class="q-pa-md">
      <q-table flat bordered color="primary" row-key="name" :columns="[]">
        <template v-slot:top-right>
          <q-btn color="primary" icon-right="archive" label="Add Team" no-caps />
        </template>
        <q-select v-model="getCriteriasModule.status" outlined dense :options="['Company', 'Job', 'Action']"
          label="Status" />
      </q-table>
    </div>
    <div class="actions text-center">
      <q-btn color="white" text-color="black" label="Back" />
      <q-spinner-hourglass class="on-left" />
      <q-btn color="primary" text-color="white" label="Continue" />
    </div>
  </div>

  <div v-if="activeComponent === 'defineParameters'" class="component-define-parameters">
    <div class="row">
      <div class="col-md-4">
        <nav class="nav nav-pills flex-column">
          <a class="nav-link active" href="#">What type of contacts do you want to find</a>
          <a class="nav-link" href="#">Please tell us more about your ideal job</a>
          <a class="nav-link" href="#">Define criteria and weight</a>
          <a class="nav-link" href="#">Refine your search</a>
          <a class="nav-link" href="#">Campaign details</a>
          <a class="nav-link" href="#">Company messaging</a>
          <a class="nav-link" href="#">Company settings</a>
        </nav>
      </div>
      <div class="col-md-8">
        <h1 class="text-center">Define More Parameters for Results</h1>
        <div class="parameter-option">
          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Include only jobs that are open to work</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle color="blue" v-model="getCriteriasModule.openToWork" />
            </q-item-section>
          </q-item>
        </div>
        <div class="parameter-option">
          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Retrieve more information emails</q-item-label>
              <q-item-label caption>If successful, we will send you an email available for the job and for
                export</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle color="green" v-model="getCriteriasModule.retrieveEmails" />
            </q-item-section>
          </q-item>
        </div>
        <div class="parameter-option">
          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Notify me about updates to jobs</q-item-label>
              <q-item-label caption>If successful, we will send you an email available for the job and for
                export</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle color="red" v-model="getCriteriasModule.notifyUpdates" />
            </q-item-section>
          </q-item>
        </div>
        <div class="actions text-center">
          <q-btn color="white" text-color="black" label="Back" />
          <q-spinner-hourglass class="on-left" />
          <q-btn color="primary" text-color="white" label="Continue" />
        </div>
      </div>
    </div>
  </div>

  <div v-if="activeComponent === 'upload'" class="component-upload">
    <h1 class="text-center">Upload the PDF/DOC</h1>
    <div class="upload-section">
      <textarea class="form-control" rows="8" placeholder="Paste your content here..."></textarea>
      <h3 class="file-name">front-end developer.pdf</h3>
    </div>
    <div class="actions text-center">
      <q-btn color="white" text-color="black" label="Back" />
      <q-spinner-hourglass class="on-left" />
      <q-btn color="primary" text-color="black" label="Continue" />
    </div>
  </div>
</template>

<script lang="ts">
import  store  from '@/store'
import router from '@/router'
import { Options, Vue } from 'vue-class-component'

export default class SearchCriterias extends Vue {
  created() {
    console.log('search criteria created')
  }
  name = "SearchCriterias"
  criteriasModule = {
    name: '',
  }
  Clickme = true


  Selection = ''
  activeComponent = 'criterias'
  jobSources = [
    { id: 'source1', label: 'Indeed', imgSrc: 'img/indeed.svg' },
    { id: 'source2', label: 'Monster', imgSrc: 'img/monster.svg' },
  ]




  getCriteriasModule: any = {
    name: '',
    description: '',
    source: '',
    fileType: '',
    degree: '',
    degreeOptions: '',
    status: '',
    openToWork: false,
    retrieveEmails: false,
    notifyUpdates: false
  }
  NextStep() {
    store.state.activiteComponent === "jobdetails"
    store.state.activiteComponent === "jobDescription"
    store.state.activiteComponent === "page"
    store.state.activiteComponent === "dashboard"
    store.state.activiteComponent === "recherche"
    store.state.activiteComponent === "upload"
    store.state.activiteComponent === "DefineJob"
    store.state.activiteComponent === "DefineParametre"
    store.state.activiteComponent === "login"
    store.state.activiteComponent === "Accueil"
    const criteriaModule = this.getCriteriasModule;
    if (criteriaModule) {
      if (criteriaModule.NextStep) {
        router.push(criteriaModule.NextStep);//'recherche'
        router.push(criteriaModule.NextStep); //page
        router.push(criteriaModule.NextStep); //DefineJob
        router.push(criteriaModule.NextStep); //upload

        router.push(criteriaModule.NextStep); //jobDescription
        router.push(criteriaModule.NextStep); //jobdetails
      }
    }
    this.$router.push({ name: 'Job' }) // 'recherche'
    this.$router.push({ name: 'dashbord' }) //Dashboard
    this.$router.push({ name: 'PageHome' }) //Page
    this.$router.push({ name: 'DefineParametre' }) //DefineParametre
    this.$router.push({ name: 'definejob' }) //DefineJob

    this.$router.push({ name: 'upload' }) //upload
    this.$router.push({ name: 'jobdetails' }) //jobdetails
    this.$router.push({ name: 'Login' }) //login
    this.$router.push({ name: 'test' })
    this.$router.push({ name: 'Accueil' }) //Accueil  
    this.$router.push({ name: 'Recherche' })//Recherche   





  }
}






</script>
<style scoped>
.text-center {
  text-align: center;
}

.actions {
  margin-top: 20px;
}

.q-spinner-hourglass.on-left {
  margin-right: 10px;
}

.component-page,
.component-jobdetails,
.component-dashboard,
.component-recherche,
.component-define-job,
.component-define-parameters,
.component-upload {
  margin: 20px;
}

.job-sources {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.job-source {
  display: flex;
  align-items: center;
}

.job-source label {
  margin-left: 10px;
}

.upload-section {
  margin-top: 20px;
}

.upload-section textarea {
  width: 100%;
}

.file-name {
  margin-top: 10px;
}

.parameter-option {
  margin-bottom: 15px;
}
</style>