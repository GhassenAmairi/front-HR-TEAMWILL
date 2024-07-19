<template>
    <div class = "JobDetails">

          
            <h1>job details</h1>
            <div class="q-pa-md">
             <div class="q-gutter-md" style="max-width: 300px"></div>
             <q-label  label =Name*>Name*</q-label><br>
             <q-input standout v-model="inputText.value" label="AddSelectorjobname" type ="text" /><br>
             <q-label  label =Description*>Description*</q-label><br>
             <q-input 
                    v-model="inputText.value"
                    label ="Description"
                    type="textarea"
                    />

            <h4>configuration des jobs</h4>
            <q-label  label =Name*>Source</q-label><br/>
 
            <q-input standout v-model="inputText.value" label="please choose as source" type ="text" /><br>

            


          </div>
        </div>
        

  

      <div class="q-pa-md q-gutter-sm">
          <q-btn color="white" text-color="black" label="back"  />
          <q-spinner-hourglass class="on-left" />
          <q-btn color="primary" text-color="black" label="continuer" />
     </div>
    
      
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { ref } from 'vue';
export default class JobDetailsView extends Vue {
  inputText = ref();
}
</script>

<style scoped lang="scss">
.h1
{
  text-align: center;
  margin: 150px 50px;
}
</style>