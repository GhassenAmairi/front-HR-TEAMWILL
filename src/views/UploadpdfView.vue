<template>
  <div class="Uploadpdf">
    <div class="row">
      <criterias-list :expliciteRoute="'dashbord'"></criterias-list>
      <div class="col-md-8">
        <div class="content">
          <br /><br /><br /><br />
          <h1 class="text-center">Upload the PDF/DOC</h1><br />


          <div class="upload-section">

            <input type="file" @change="handleFileUpload" class="form-control-file">
            <h3 v-if="fileName" class="file-name">{{ fileName }}</h3>
          </div>

          <div class="q-pa-md">
            <q-badge color="secondary">
              Model: {{ value }} (-20 to 20)
            </q-badge>
            <q-slider v-model="value" :min="-20" :max="20" :step="4" snap label color="purple" />
            <div class="row btns" >
            <div  style="position: absolute; margin-top: 5px;">
                    <q-item-section @click="$router.push('/dashbord')">
                      <button style="color: grey;">
                        <q-icon name="keyboard_arrow_left" style="color: grey;" />
                        Back
                      </button>
                    </q-item-section>
                  </div>
                  <div class="button-group text-center" @click="$router.push('/text')">
                    <q-btn class="continue" text-color="white" label="Continue" >
                      <q-icon name="keyboard_arrow_right" style="color: white;" />
                    </q-btn>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import CriteriasList from '@/components/criteriasList.vue';
import { QBtn } from 'quasar';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    CriteriasList,
    QBtn
  }
})
export default class UploadPdf extends Vue {
  value = 0;
  fileName = ''; // To store the uploaded file name

  // Handle file upload change event
  handleFileUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.fileName = file.name;
    }
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
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
}

.upload-section .form-control {
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.btns {
  margin-top: 10%;
}
.continue {
  background-color: #93a84c;
  color: aliceblue;
  border-radius: 6px;
  position: absolute;
  right: 0;
  text-decoration: none !important;
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
