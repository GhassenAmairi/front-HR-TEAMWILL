<template>
  <div class = "Uploadpdf">

      <div class="row">
  <div class="col-md-4">
      <div class="content-left">
        <nav class="nav nav-pills flex-column">
          <br /><br /><br /><br />
          <a class="nav-link" href="Accueil">What type of contacts do you want to find</a><br />
          <a class="nav-link" href=" dashbord">Please tell us more about your ideal job</a><br />
          <a class="nav-link" href="DefineJob">Define criteria and weight</a><br />
          <a class="nav-link" href="defineParametre">Refine your search</a><br />
          <a class="nav-link" href="jobDetails">Campaign details</a><br />
          <a class="nav-link" href="#">Company messaging</a><br />
          <a class="nav-link" href="#">Company settings</a><br />
        </nav>
      </div>
    </div>
      <div class="col-md-8">
        <div class="content">
        <br /><br /><br /><br />
        <h1 class="text-center">Upload the PDF/DOC</h1><br/>
        <div class="upload-section">
          <textarea class="form-control" rows="8" placeholder="Paste your content here..."></textarea>
          <h3 class="file-name">front-end developer.pdf</h3>
          <div class="q-pa-md">
    <q-badge color="secondary">
      Model: {{ value }} (-20 to 20)
    </q-badge>

    <q-slider
      v-model="value"
      :min="-20"
      :max="20"
      :step="4"
      snap
      label
      color="purple"
    />
  </div>
        </div>
      </div>
      </div>
    </div>

    <div class="q-pa-md q-gutter-sm text-center">
      <q-btn color="white" text-color="black" label="Back" href="/dashbord" />
      <q-spinner-hourglass class="on-left" />
      <q-btn color="primary" text-color="white" label="Continue" />
    </div>
    
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class UploadPdf extends Vue {
  value = 0;
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
  color: #fff;
}
.nav-pills .nav-link:hover,
.nav-pills .nav-link.active {
  background-color: #007bff;
  color: white;
}
h1 {
  margin-bottom: 20px;
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
.file-name {
  margin-top: 10px;
  color: #007bff;
}
.q-pa-md {
  margin-top: 20px;
}
.text-center {
  text-align: center;
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
</style>