<template>
    <div class="row">
        <criterias-list :expliciteRoute="'dashbord'"></criterias-list>
        <div class="col-md-8 content" >
        <h1 style="margin-top: 5%;">Describe what you are looking for in a candidate</h1>
      <div class="row">
        <textarea class="large-textarea"></textarea>
      </div>
      <div class="q-pa-md q-gutter-sm" style="position: absolute ; margin-top: 2%;">
              <q-item-section @click="$router.push('/dashbord')">
                <button style="color: grey;">
                  <q-icon name="keyboard_arrow_left" style="color: grey;"/>
                  Back
                </button>
              </q-item-section>
            </div>
          <div class="button-group text-center" style="margin-top: 2%;">
            <q-btn class="continue" text-color="white" label="Continue" href="/defineJob" >
            <q-icon name="keyboard_arrow_right" style="color: white;"/>
            </q-btn>
          </div>
      </div>

    </div>
  </template>
  
  <script lang="ts">
  import CriteriasList from "@/components/criteriasList.vue";
import { QBtn } from "quasar";
  import { Options, Vue } from "vue-class-component";
  
  @Options({
    components: {
      CriteriasList,
      QBtn
    },
  })
  export default class TextComponent extends Vue {}
  </script>
  
  <style scoped>
  .large-textarea {
    width: 70%;
    height: 300px; /* Adjust the height as needed */
    padding: 10px;
    font-size: 16px;
    border: 2px solid #93a84c;
    border-radius: 8px;
    margin-left: 10%;
    margin-top: 5%;
  }
  .continue{
  background-color: #93a84c;
  color: aliceblue;
  border-radius: 6px;
  position: absolute;
  right : 0;
  text-decoration: none !important;
}
.content{
    background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 110%;
}
  </style>
  