<template>
<div v-if="activeComponent === 'page'">
  <h1 class="text-center">Where will we find the job</h1>

<div class="job-sources">
  <figure class="job-source">
    <input type="checkbox" id="sales-navigator" />
    <label for="sales-navigator" class="a_droite">Linkedin Sales Navigator</label><br>
    <img src="@/assets/images/linkedin.png" alt="Linkedin Sales Navigator" />
  </figure>

  <figure class="job-source">
    <input type="checkbox" id="recruiter" />
    <label for="recruiter" class="a_droite">Linkedin Recruiter</label><br>
    <img src="@/assets/images/linkedin.png" alt="Linkedin Recruiter" />
  </figure>

  <figure class="job-source">
    <input type="checkbox" id="github" />
    <label for="github" class="a_droite">Github</label><br>
    <img src="@/assets/images/icon-github.png" alt="Github" />
  </figure>

  <figure class="job-source">
    <input type="checkbox" id="xlsx" />
    <label for="xlsx" class="a_droite">Xls file</label><br>
    <img src="@/assets/images/xlsx_icon.png" alt="Xls file" />
  </figure>
</div>

<div class="actions text-center">
  <q-btn color="white" text-color="black" label="Back" class="mr-2" />
  <q-spinner-hourglass class="on-left" />
  <q-btn color="primary" text-color="black" label="Continue" />
</div>
</div>

<div v-if="activeComponent === 'jobdetails'">
    <h1>job details</h1>
            <div class="q-pa-md">
             <div class="q-gutter-md" style="max-width: 300px"></div>
             <q-label  label =Name*>Name*</q-label><br>
             <q-input standout v-model="getCriteriasModule.name" label="AddSelectorjobname" type ="text" /><br>
             <q-label  label =Description*>Description*</q-label><br>
             <q-input 
                    v-model="getCriteriasModule.name"
                    label ="Description"
                    type="textarea"
                    />

            <h4>configuration des jobs</h4>
            <q-label  label =Name*>Source</q-label><br/>
 
            <q-input standout v-model="getCriteriasModule.name" label="please choose as source" type ="text" /><br> 
          </div>
        </div>
      <div class="q-pa-md q-gutter-sm">
          <q-btn color="white" text-color="black" label="back"  />
          <q-spinner-hourglass class="on-left" />
          <q-btn color="primary" text-color="black" label="continuer" />
     </div>

<div v-if = "activeComponent === 'dashboard'">
        <h1>please tell us more about your ideal job</h1>
        <q-item-section>
              <q-input standout v-model = "getCriteriasModule.name"  type="text">
                PDF/DOC
              </q-input>
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
      <div class="q-pa-md q-gutter-sm">
          <q-btn color="white" text-color="black" label="back"  />
          <q-spinner-hourglass class="on-left" />
          <q-btn color="primary" text-color="black" label="continuer" />
      </div>
</div>
        
 <div v-if = "activeComponent === 'recherche'">
    <h1>please tell us more about your ideal job</h1>
            <q-field stack-label>
        <template v-slot:control>
          <div class="self-center full-width no-outline" ></div>
        </template>
      </q-field>

            <div class="q-pa-md">
              <div>
                <legend>Degree</legend>
              </div> 
              <div class="q-pa-md">
                <div class="q-gutter-md row">
                  <q-select
                  
                  filled
                  v-model="getCriteriasModule.name" 
                     
                      label="Level"
                      style="width: 250px"
                 />
                </div>
                </div>
              <br/>
              <div class="q-pa-md">
                <div class="q-gutter-md row">
                  <q-select
                    filled
                    v-model="criteriasModule" 
                     :options="['manger','lavel','action']"
                     
                      style="width: 250px"
                  />
                </div>
                </div>
                <br/>
              </div> 
              <div class="q-pa-md">
              <div class="q-pa-md">
                <div class="q-gutter-md row">
                  <h2>Description</h2>
                  <div class="q-pa-md" style="max-width: 300px"> 
                    <q-input 
                    v-model ="getCriteriasModule.name"
                    filled
                    type="textarea"
                    />
                </div>
                </div>
                </div>
              <br/>    
              </div>
          </div> 
      <div class="q-pa-md q-gutter-sm">
          <q-btn color="white" text-color="black" label="back"  />
          <q-spinner-hourglass class="on-left" />
          <q-btn color="primary" text-color="black" label="continuer" />
     </div>
   

<div v-if = "activeComponent === 'DefineJob'">
  <h1 class="text-center">Define your ideal job</h1>
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
      <q-select
        v-model="getCriteriasModule"
        outlined
        dense
        :options="['Company', 'Job', 'Action']"
        label="Status"
      ></q-select>
    </q-table>
  </div>


<div class="q-pa-md q-gutter-sm text-center">
<q-btn color="white" text-color="black" label="Back" />
<q-spinner-hourglass class="on-left" />
<q-btn color="primary" text-color="white" label="Continue" />
</div>
</div>

<div v-if = "activeComponent === 'defineParameters'">  
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
        <h1 class="text-center">Define more parameters to results</h1>
        <div class="parameter-option">
          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Include only jobs that are open to work</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle color="blue" v-model="getCriteriasModule" val="include only job" />
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
              <q-toggle color="green" v-model="getCriteriasModule" val="should retrieve information emails" />
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
              <q-toggle color="red" v-model="getCriteriasModule" val="notify me about updates to jobs" />
            </q-item-section>
          </q-item>
        </div>
        <div class="button-group text-center">
          <q-btn color="white" text-color="black" label="Back" />
          <q-spinner-hourglass class="on-left" />
          <q-btn color="primary" text-color="white" label="Continue" />
        </div>
      </div>
    </div>
  </div>
<div v-if = "activeComponent === 'upload '" >
  <h1 class="text-center">Upload the PDF/DOC</h1>
        <div class="upload-section">
          <textarea class="form-control" rows="8" placeholder="Paste your content here..."></textarea>
          <h3 class="file-name">front-end developer.pdf</h3>
        </div>
      </div>
    

    <div class="q-pa-md q-gutter-sm text-center">
      <q-btn color="white" text-color="black" label="Back" />
      <q-spinner-hourglass class="on-left" />
      <q-btn color="primary" text-color="white" label="Continue" />
    </div>
  <div v-if = "activeComponent === 'login'">
    <q-page>
    <div class="row login-page">
      <div class="col-12 col-md-4 col-lg-4 offset-md-4 offset-lg-4">
        <div class="text-center text-grey-7 mb-4">
          <h3>Please login to your account below</h3>
        </div>

        <div class="q-pa-md">
          <!--<q-form @submit.prevent="onLogin">-->
            <q-item-section>
            <q-input  standout v-model = 'getCriteriasModule.name'  type="text" label="Email" class="mb-3" />
            <q-input stundout v-model ='  getCriteriasModule.name '  type="password" label="Password" class="mb-3" />
        </q-item-section>
            <div class="text-center">
              /<!----<q-btn color="primary" text-color="white" label="Login" @click="onLogin" class="mb-3" />-->
            </div>
            <div class="q-pa-md q-gutter-sm text-center">
              <q-btn color="white" text-color="black" label="Back" />
              <q-spinner-hourglass class="on-left" />
              <q-btn color="primary" text-color="white" label="Continue" />
            </div>
          
          </div>
    </div>
    </div>
  </q-page>
  </div>

<div>


</div>

<div>
    <q-input v-model="criteriasModule.name" label="Search Criterias" type ="text" />


</div>

<q-btn @click="NextStep()">Click me</q-btn>

</template>

<script lang="ts">
import { defineComponent ,ref } from 'vue'
import { store } from '@/store'
import router from '@/router'


export default defineComponent({
  name:"searchCriterias",
    data() {
        return {
            criteriasModule: {
                name: '',
            },
           Clickme : true ,
            
            activeComponent: 'criterias',
            
            Selection: ref('')
            
          }
          
    },
    methods: {
        getCriteriasModule () {
          
          return store.state.criterias
        },
      
      NextStep() {
            store.state.activiteComponent ==="jobdetails"
            store.state.activiteComponent ==="jobDescription"
            store.state.activiteComponent ==="page"
            store.state.activiteComponent ==="dashboard"
            store.state.activiteComponent ==="recherche"
            store.state.activiteComponent ==="upload"
            store.state.activiteComponent ==="DefineJob"
            store.state.activiteComponent ==="DefineParametre"
            store.state.activiteComponent ==="login"
            store.state.activiteComponent ==="Accueil"
            const criteriasModule= this.getCriteriasModule();
            if (criteriasModule) {
              if (criteriasModule.NextStep) {
                    router.push(criteriasModule.NextStep);//'recherche'
                    router.push(criteriasModule.NextStep); //page
                    router.push(criteriasModule.NextStep); //DefineJob
                    router.push(criteriasModule.NextStep); //upload
                    
                    router.push(criteriasModule.NextStep); //jobDescription
                    router.push(criteriasModule.NextStep); //jobdetails
              }
        }
            this.$router.push ({name: 'Job'}) // 'recherche'
            this.$router.push({name: 'dashbord'}) //Dashboard
            this.$router.push({name: 'PageHome'}) //Page
            this.$router.push({name: 'DefineParametre'}) //DefineParametre
            this.$router.push({name: 'definejob'}) //DefineJob
             
            this.$router.push({name: 'upload'}) //upload
            this.$router.push({name: 'jobdetails'}) //jobdetails
            this.$router.push({name:'Login'}) //login
            this.$router.push({name: 'test'})
            this.$router.push({name:'Accueil'}) //Accueil  
            this.$router.push({name : 'Recherche'})//Recherche   
             
           
            
      
          
        },
        }
        
    

})



</script>