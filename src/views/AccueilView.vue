<template>
  <div class="Accueil">
    <!----<q-page>--->
      <div class="container-fluid dashboard">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-6">
            <h1 class="text-center mb-4">What type of contacts do you want to find</h1>
            <q-form class="contact-form">
              <div class="form-group">
               
                 <q-item-section side>
                  <q-btn @click="$router.push('/PageHome')" >Manager
                    <q-icon name="keyboard_arrow_right"  style=" margin-left: 100px;"/>
                  </q-btn>
                   
                </q-item-section>
              </div>
              <div class="form-group">
                
                <q-item-section side>
                  
                  <q-btn @click="$router.push('/dashbord')">Job
                    <q-icon name="keyboard_arrow_right" style="    margin-left: 70px;"/>
                  </q-btn>
                </q-item-section>
              </div>
              <div class="form-group">
                
               <q-item-section side>
                  
                  <q-btn @click="$router.push('/')">Other 
                    <q-icon name="keyboard_arrow_right"  style="    margin-left: 300px;"/>
                  </q-btn>
                </q-item-section>
              </div>
              <div class="text-center">
                <q-btn color="primary" text-color="white" label="Submit" @click="onSubmit" class="mt-3" />
              </div>
            </q-form>
          </div>
        </div>
      </div>
  <!---</q-page>--->
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { ref } from 'vue';

export default class AccueilView extends Vue {
  manager = ref('');
  job = ref('');
  other = ref('');

  inputText = ref('');

  onSubmit() {
    console.log('Form submitted with:', this.manager, this.job, this.other);
  }
}
</script>

<style scoped lang="scss">
.dashboard {
  padding: 20px;
  background-color: #f8f9fa;
}

.contact-form {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1rem;
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

.mt-3 {
  margin-top: 1rem;
}
</style>