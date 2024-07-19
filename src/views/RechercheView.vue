<template>
    <div class = "Recherche">

      <div class="container-fluid Recherche">
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="content-left">
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
          <div class="content">
            <h1 class="text-left mb-4">Please tell us more about your ideal job</h1>
            <div class="q-pa-md">
              <div class="q-gutter-md">
                <q-field stack-label>
                  <template v-slot:control>
                    <div class="self-center full-width no-outline"></div>
                  </template>
                </q-field>
                <div class="mb-4">
                  
                  <legend>Top Filter</legend>
                  <q-select
                    use-input
                    v-model="selection"
                    outlined
                    dense
                    :options="['manager', 'level', 'action']"
                    label="Level"
                    style="width: 250px"
                    class="mb-3"
                  />
                </div>
                <div class="mb-4">
                  <q-select
                    use-input
                    v-model="selection"
                    outlined
                    dense
                    :options="['manager', 'level', 'action']"
                    label="Options"
                    style="width: 250px"
                    class="mb-3"
                  />
                
                </div>
                
                <div>
                  
                  <h2 class="mb-3">Description</h2>
                  <!----<q-input
                    v-model="varia"
                    filled
                    type="textarea"
                    style="max-width: 300px"
                    class="mb-3"-->
                  
                  <div class="upload-section">
                    <textarea class="form-control" rows="8" placeholder="Paste your content here..."></textarea>
                  </div>
                </div>
              </div>
              <div class="text-center q-pa-md q-gutter-sm">
                <q-btn color="white" text-color="black" label="Back" href="/dashbord" class="mr-2" />
                <q-spinner-hourglass class="on-left mr-2" />
                <q-btn color="primary" text-color="white" label="Continue" href="/DefineParametre" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ref } from 'vue';
@Options({
  props: {
    text: String
  },
})

export default class RechercheView extends Vue {
  selection = ref('');
  inputText = ref('');
  varia = "";
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
  background-color: #0c0f13;
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

.text-left {
  text-align: left;
}

.mb-3 {
  margin-bottom: 1rem;
}

.mb-4 {
  margin-bottom: 1.5rem;
 color: gray;

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