<template>
    <div class = "Dashbord">

      <div class="row">
        <div class ="col-4">
          <nav class="nav nav-pills flex-column">
            <a class="nav-link " href="Accueil"> what type of contacts do you want to  find</a>
            <a class="nav-link " href="">please tell us more about your ideal job</a>
            <a class="nav-link " href="#">define critela and weight </a>
            <a class="nav-link " href="#">reline your search</a>
            <a class="nav-link " href="#">capagenie detais</a>
            <a class="nav-link " href="#">compagenie messaagerie</a>
            <a class="nav-link " href="#">compagenie settings</a>
          </nav>
          <div class="col-8">
            <h1>please tell us more about your ideal job</h1>
            <!---<q-input standout v-model="inputText.value" label="  PDF/DOC" type ="text" /><br>
            <q-input standout v-model="inputText.value" label="Text" type ="text" /><br>
            <q-input standout v-model="inputText.value" label="Other" type ="text" /><br>-->
            <q-item-section>
              <q-input standout v-model = "inputText.value"  type="text">
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
          
          </div>
        

        </div>


      </div>
      <div class="q-pa-md q-gutter-sm">
          <q-btn color="white" text-color="black" label="back"  />
          <q-spinner-hourglass class="on-left" />
          <q-btn color="primary" text-color="black" label="continuer" />
     </div>
    
     
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { ref } from 'vue';
export default class DashbordView extends Vue {
  inputText = ref('');
}
</script>

<style scoped lang="scss">
.h1
{
  text-align: center;
  margin: 150px 50px;
}
</style>