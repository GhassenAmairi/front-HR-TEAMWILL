<template>
    <div class = "Dashbord">

      <div class="dashboard container-fluid">
    <div class="row">
      <div class="col-md-4">
        <div class="content-left">
        <nav class="nav nav-pills flex-column">
          <a class="nav-link " href="Accueil">What type of contacts do you want to find</a><br />
          <a class="nav-link " href="dashbord">Please tell us more about your ideal job</a><br />
          <a class="nav-link " href="DefineJob">Define criteria and weight</a><br />
          <a class="nav-link " href="defineParametre">Refine your search</a><br />
          <a class="nav-link " href="jobDetails">Campaign details</a><br />
          <a class="nav-link " href="#">Company messaging</a><br />
          <a class="nav-link " href="#">Company settings</a><br />
        </nav>
        
        </div>
      </div>
      <div class="col-md-8">
        <div class="content">
        <h1 class="text-right">Please tell us more about your ideal job</h1>
        <div class="form-group">
          
          <q-item-section side>
           
          <q-btn @click="$router.push('/upload')" >PDF/DOC
            <q-icon name="keyboard_arrow_right"   style = "margin-left: 400px"/>
          </q-btn>  
          </q-item-section>
        
        </div>
        <div class="form-group">
          

          <q-item-section side>
              
              <q-btn @click="$router.push('/')"  >Text  
                <q-icon name="keyboard_arrow_right"  style = "margin-left: 400px"/>
              </q-btn>
            </q-item-section>
            <!----<q-item-section q-input id="text-input" standout v-model="inputText.value" type="text">Text</q-item-section>-->
        </div>
        <div class="form-group">
          
          <q-item-section side>
              
              <q-btn @click="$router.push('/Recherche')">Search with filters 
                <q-icon name="keyboard_arrow_right"   style = "margin-left: 400px"/>
              </q-btn>
            </q-item-section>
        </div>
      
      </div>
    </div>
  </div>

        
           <!---- <q-item-section side>
              <q-icon name="keyboard_arrow_right" />
            </q-item-section>
            <q-item-section>PDF/DOC</q-item-section>
          
            <q-item-section side>
              <q-icon name="keyboard_arrow_right" />
            </q-item-section>
            <q-item-section>Search with filters</q-item-section>
            <q-item-section side>
              <q-icon name="keyboard_arrow_right" />
            </q-item-section>--->
          
          </div>
        

      <div class=" text-center q-pa-md q-gutter-sm">
          <q-btn color="white" text-color="black" label="back"   />
          <q-spinner-hourglass class="on-left"  style="margin-left: 80px;" />
          <q-btn  color="primary" text-color="black" label="continuer" style="margin-left: 80px;" />
     </div>
    </div>
    
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { ref } from 'vue';
export default class DashbordView extends Vue {
  inputText = ref('');
  //const token:string | null = localStorage.getItem('token');
  upload() {
    this.$router.push("/upload");
}


}
</script>
<style scoped>
.dashboard {
  padding: 20px;
  background-color: #f8f9fa;
}
.nav-pills .nav-link {
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 20px;
  color: #fff;
}
.nav-pills .nav-link.active {
  background-color: #007bff;
  color: white;
}
.form-group {
  margin-bottom: 20px;
}
.form-group label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;


}
.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.q-item-section {
  font-weight: bold;
}
q-pa-md q-gutter-sm {
  margin-top: 20px;
  margin-bottom: 10px;
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
.text-center {
  text-align: center;
}

</style>