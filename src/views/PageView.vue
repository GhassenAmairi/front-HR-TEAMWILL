<template>
  <div class="page">
    <h1 class="text-center">Where will we find the leads?</h1>

    <div class="job-sources">
      <figure class="job-source">
        <input type="checkbox" id="sales-navigator" checked />
        <label for="sales-navigator">LinkedIn Sales Navigator</label>
        <img src="@/assets/images/linkedin.png" alt="LinkedIn Sales Navigator" />
      </figure>

      <figure class="job-source">
        <input type="checkbox" id="recruiter" />
        <label for="recruiter">LinkedIn Recruiter</label>
        <img src="@/assets/images/linkedin.png" alt="LinkedIn Recruiter" />
      </figure>

      <figure class="job-source">
        <input type="checkbox" id="github" />
        <label for="github">GitHub</label>
        <img src="@/assets/images/icon-github.png" alt="GitHub" />
      </figure>

      <figure class="job-source">
        <input type="checkbox" id="xlsx" checked />
        <label for="xlsx">XLS file</label>
        <img src="@/assets/images/xlsx_icon.png" alt="XLS file" />
      </figure>

      <figure class="job-source disabled">
        <input type="checkbox" id="bullhorn" disabled />
        <label for="bullhorn">Bullhorn</label>
        <img src="" alt="Bullhorn" />
        <span>Connect your Bullhorn account in the Apps section to use it as a data source</span>
      </figure>
    </div>

    <div class="actions">
  <q-btn
    
    text-color="grey"
    label="Back"
    icon="arrow_back"
    href="/Accueil"
    class="back-btn"
  />
  <q-btn
    color="#93a84c"
    text-color="white"
    label="Continue"
    icon-right="arrow_forward"
    class="continue-btn"
  />
</div>
  </div>
</template>

<script lang="ts">
import { QBtn } from 'quasar';
import { Options, Vue } from 'vue-class-component';
@Options({
  components:{
    QBtn
  }
})
export default class PageView extends Vue { }
</script>

<style scoped lang="scss">
.page {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

h1 {
  margin-bottom: 40px;
  font-size: 2em;
  color: #333;
}

.job-sources {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 20px;
}

.job-source {
  position: relative;
  flex: 1 1 200px;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.job-source input[type="checkbox"] {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  
}

.job-source img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}

.job-source label {
  display: block;
  margin-top: 10px;
  font-size: 1em;
  color: #333;
}

.job-source.disabled {
  opacity: 0.5;
  position: relative;
}

.job-source.disabled span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.8em;
  color: #999;
  width: 80%;
  text-align: center;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.back-btn {
  color: rgb(99, 97, 97);
}
.continue-btn {
  color: white;
  background-color: #93a84c; // Assuming this is the green color you want
}
.q-btn {
  min-width: 100px;
}
</style>
