<template>
    <div class = "DefineProfil">

      <div class="row">
      <div class="col-md-4">
        <div class="content-left">
        <nav class="nav nav-pills flex-column">
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
     <div class="col-md-8">
        <div class="content">
        <h1 class="text-center">Define your ideal profil</h1>
        <div class="q-pa-md q-gutter-sm">
          <q-banner class="bg-primary text-white">
            Learn how to define your ideal profil.
            <template v-slot:action>
              <q-btn flat color="white" label="Learn more" />
            </template>
          </q-banner>
           
           
           
              <q-btn color="primary" icon-right="archive" label="Add Job" style="margin-left: left; " @click="addJob()"  no-caps  />
              <q-btn color="primary" icon-right="archive" label="Update Job"   @click="updateJob()"  no-caps  />
              <div  class = "form-group" v-if="show">
                    <!----<q-input standout v-model="varia" type="text" label="whatever" class="mb-3" ></q-input>-->
                    <q-dialog :v-model ="prompt" persistent>
                    <q-card style="min-width: 350px">
                    <q-card-section>
          <div class="text-h6">Your email</div>
           <div><q-input  v-model="varia" type="text"  class="mb-3" ></q-input></div>
           <div class="text-h6">Your Password</div>
           <div><q-input  v-model="varia" type="password"  class="mb-3" ></q-input></div>
        </q-card-section>
       



        

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add Job" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
            </div>
            <div  class = "form-group" v-if="put">
        <q-dialog :v-model ="prompt" persistent>
        <q-card style="min-width: 350px"> 
        <q-card-section>
          <div class="text-h6">update yor job</div>
           <div><q-input  v-model="variaa" type="text"  class="mb-3" ></q-input></div>
           <div class="text-h6">description</div>
           <div><q-input  v-model="variaa" type="password"  class="mb-3" ></q-input></div>
        </q-card-section>
        
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Update Job" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
            </div>

        </div>
        <div class="q-pa-md">
  <q-table flat bordered color="primary" row-key="name" :columns="[]">
    <template v-slot:top-left>
      <div class="form-group">
        <q-markup-table>
          <thead>
            <tr>
              <th class="text-left">category</th>
              <th class="text-left">location</th>
              <th class="text-left">profil</th>
              <th class="text-left">action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <q-select
                  use-input
                  v-model="selection"
                  outlined
                  dense
                  :options="['Company', 'Job', 'Action']"
                  label="Status"
                  class="status-select"
                ></q-select>
              </td>
              <td>
                <q-select  
                  use-input
                  v-model="selection"
                  outlined
                  dense
                  :options="['Paris', 'Berlin', 'Tunisie']"
                  label="location"
                  class="status-select"
                ></q-select>
              </td>
              <td>
                <q-select
                  use-input
                  v-model="selection"
                  outlined
                  dense
                  :options="['developer', 'devops', 'test']"
                  label="job"
                  class="status-select"
                ></q-select>
              </td>
              <td>
                <q-td :props="props">
                  <q-btn flat round dense icon="edit" color="green-5" @click="editItem()" />
                  <q-btn flat round dense icon="delete" color="red-5" @click="deleteItem()" />
                </q-td>
              </td>
            </tr>
            <tr>
              <td>
                <q-select
                  use-input
                  v-model="selection"
                  outlined
                  dense
                  :options="['Company', 'Job', 'Action']"
                  label="Status"
                  class="status-select"
                ></q-select>
              </td>
              <td>
                <q-select
                  use-input
                  v-model="selection"
                  outlined
                  dense
                  :options="['Company', 'Job', 'Action']"
                  label="location"
                  class="status-select"
                ></q-select>
              </td>
              <td>
                <q-select
                  use-input
                  v-model="selection"
                  outlined
                  dense
                  :options="['ingenieur', 'finance', 'Achat']"
                  label="job"
                  class="status-select"
                ></q-select>
              </td>
              <td>
                <q-td :props="props">
                  <q-btn flat round dense icon="edit" color="green-5" @click="editItem()" />
                  <q-btn flat round dense icon="delete" color="red-5" @click="deleteItem()" />
                </q-td>
              </td>
            </tr>
            <tr>
              <td>
                <q-select
                  use-input
                  v-model="selection"
                  outlined
                  dense
                  :options="['Company', 'Job', 'Action']"
                  label="Status"
                  class="status-select"
                ></q-select>
              </td>
              <td>
                <q-select
                  use-input
                  v-model="selection"
                  outlined
                  dense
                  :options="['Company', 'Job', 'Action']"
                  label="location"
                  class="status-select"
                ></q-select>
              </td>
              <td>
                <q-select
                  use-input
                  v-model="selection"
                  outlined
                  dense
                  :options="['Company', 'Job', 'Action']"
                  label="job"
                  class="status-select"
                ></q-select>
              </td>
              <td>
                <q-td :props="props">
                  <q-btn flat round dense icon="edit" color="green-5" @click="editItem()" />
                  <q-btn flat round dense icon="delete" color="red-5" @click="deleteItem()" />
                </q-td>
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
    </template>
  </q-table>
</div>

          
    
    <div class="button-group text-center">
      <q-btn color="white" text-color="black" label="Back" href ="dashbord" />
      <q-spinner-hourglass class="on-left" />
      <q-btn color="primary" text-color="white" label="Continue" href = "jobDetails" />
    </div>
    </div>
  </div>
  </div>
</div>

  
</template>

<script lang="ts">
import {  Vue } from 'vue-class-component';
import { ref  } from 'vue';

export default class DefineJobView extends Vue {
  varia = "" ;
prompt = "";
  variaa = "";
  props = ref();
  address = ref('');
  show = false ; 
  put = false;

  selection = ref();
   columns:[{
     name: 'name',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    sortable: true,
},
{ name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
  { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
  { name: 'protein', label: 'Protein (g)', field: 'protein' },
  { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
  
] | undefined
 rows:[{
  name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
},] | undefined

addJob(){
this.show = !this.show
}

updateJob(){  
    this.put = !this.put 
}
editItem() {
      // Implement your edit logic here
      console.log('Edit');
      this.put = !this.put
    }
    deleteItem() {
      // Implement your delete logic here
      console.log('Delete');


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
  color: #fff;
}
.nav-pills .nav-link.active,
.nav-pills .nav-link:hover {
  background-color: #007bff;
  color: white;
  font-size : bold; 
}
h1 {
  margin-bottom: 20px;
}
.q-banner {
  margin-bottom: 20px;
}
.q-pa-md {
  margin-bottom: 20px;
}
.q-table {
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
.button-group {
  margin-top: 20px;
  text-align: center;
}
.nav-pills .nav-link.active {
  background-color: #007bff;
  color: white;
}


    .form-group {
    margin-bottom: 2rem;
    .status-select {
      width: 100%;
      max-width: 300px;
    }
  }
</style>

