<template>
  <div class="Dashbord">
    <div class="dashboard container-fluid">
      <div class="row">
        <criterias-list></criterias-list>
        <div class="col-md-8">
          <div class="content">
            <h1 style="margin-bottom: 8%;">Please tell us more about your ideal candidates</h1>
            <div class="form-group">
              <q-item-section side>
                <q-btn @click="$router.push('/upload')" class="panel-btn">
                  <q-icon name="description" class="color" />
                  PDF/DOC
                  <q-icon name="keyboard_arrow_right" class="btn-icon" />
                  <p class="desc">Upload the job description in PDF or DOC (MS Word) format</p>
                </q-btn>
              </q-item-section>
            </div>
            <div class="form-group">
              <q-item-section side>
                <q-btn @click="$router.push('/text')" class="panel-btn">
                  <q-icon name="text_fields" class="color" />
                  Text
                  <q-icon name="keyboard_arrow_right" class="btn-icon" />
                  <p class="desc">Describe what you are looking for in a candidate</p>
                </q-btn>
              </q-item-section>
            </div>
            <div class="form-group">
              <q-item-section side>
                <q-btn @click="$router.push('/filter')" class="panel-btn">
                  <q-icon name="filter_list" class="color" />
                  Search with filters
                  <q-icon name="keyboard_arrow_right" class="btn-icon" />
                  <p class="desc">Define each criteria of an ideal candidate</p>
                </q-btn>
              </q-item-section>
            </div>
            <div class="q-pa-md q-gutter-sm" style="position: absolute;">
              <q-item-section @click="$router.push('/Accueil')">
                <button style="color: grey;">
                  <q-icon name="keyboard_arrow_left" style="color: grey;"/>
                  Back
                </button>
              </q-item-section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CriteriasList from '@/components/criteriasList.vue';


@Options({
  components: {
    CriteriasList
  },


})
export default class DashbordView extends Vue {
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
  background-color: #f8f9fa;
}



.content {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.q-item-section {
  font-weight: bold;
}

.btn-icon {
  position: absolute;
  right: 0;
  margin-right: 10px;
  color: #93a84c;
  margin-top: 3%;
}

.text-center {
  text-align: center;
  margin-top: 20px;
}

.ml-3 {
  margin-left: 20px;
}

.panel-btn {
  width: 75% !important;
  font-size: xx-large;
  background-color: white;
  margin-left: 8%;
  border-radius: 11px;
  padding: 30px;
  position: relative;
  cursor: pointer;
  color: #000;
  font-weight: 500;
}

.panel-btn:hover {
  background-color: #f5f5f5;
  color: #93a84c; 
}

.color {
  color: #93a84c;
  margin-right: 10px;
}

.desc {
  font-size: small;
  color: darkgrey;
  margin-left: 8%;
}


</style>
