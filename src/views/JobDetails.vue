<template>
    <div class = "JobDetails">
      <!----<q-page>-->
    <div class="container-fluid dashboard">
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="content">
          <nav class="nav nav-pills flex-column mb-4">
            <br />
            <a class="nav-link" href="Accueil">What type of contacts do you want to find</a><br /><br />
            <a class="nav-link" href="dashbord">Please tell us more about your ideal job</a><br /><br />
            <a class="nav-link" href="DefineJob">Define criteria and weight</a><br /><br />
            <a class="nav-link" href="defineParametre">Refine your search</a><br /><br />
            <a class="nav-link" href="jobDetails">Campaign details</a><br /><br />
            <a class="nav-link" href="#">Company messaging</a><br /><br />
            <a class="nav-link" href="#">Company settings</a><br /><br />
          </nav>
          </div>
        </div>
        <div class="col-12 col-md-8">
          <div class="content-left">
            <h1 class="text-center mb-4">Job Details</h1>
            <div class="q-pa-md">
              <div class="q-gutter-md">
                <q-form>
                  <div class="form-group">
                    <q-label label="Name*">Name*</q-label><br />
                    <q-input standout v-model ='varia' label="Job Name" type="text" class="mb-3" />
                  </div>
                  <div class="form-group">
                    <q-label label="Description*">Description*</q-label><br />
                    <!----<q-input  standout v-model ='variaa' label="Description" type="textarea" class="mb-3" />-->
                    <div class="upload-section">
                      <textarea class="form-control" rows="8" placeholder="Paste your content here..."></textarea>
                    </div>
                  </div>
                  <h4 class="mt-4">Job Configuration</h4>
                  <div class="form-group">
                    <q-label label="Source*">Source*</q-label><br />
                    <q-input standout v-model ='variaaa' label="Please choose a source" type="text" class="mb-3" />
                    
                  </div>
                  <div class="text-center q-pa-md q-gutter-sm">
                    <q-btn color="white" text-color="black" label="Back" class="mr-2" />
                    <q-spinner-hourglass class="on-left mr-2" />
                    <q-btn color="primary" text-color="white" label="Continue" />
                  </div>
                </q-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <!----</q-page>-->

    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { ref } from 'vue';


export default class JobDetailsView extends Vue {
  inputText = ref('');
  variaa =  ""; 
  varia = "";
  variaaa = "";
    
  

}
</script>

<style scoped lang="scss">
.dashboard {
  padding: 20px;
  background-color: #f8f9fa;
}

.nav-pills .nav-link {
  color: #fff;
  margin-bottom: 0.5rem;
}

.nav-pills .nav-link:hover {
  background-color: #e2e6ea;
}

.content {
  background-color: rgb(147,168,76);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.content-left {
  background-color:#fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.text-center {
  text-align: center;
}

.mb-3 {
  margin-bottom: 1rem;
}

.mb-4 {
  margin-bottom: 1.5rem;
}

.mt-4 {
  margin-top: 1.5rem;
}

.q-btn {
  width: 100px;
}
.upload-section {
  margin-top: 20px;
}
.upload-section .form-control {
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>