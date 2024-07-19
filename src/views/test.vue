<template>
  <div class = "test">
    <br /><br /><br /><br />
    <h1 class="text-center">Where will we find the job</h1>

<div class="job-sources">
<figure class="job-source">
  <input type="checkbox" id="sales-navigator" />
  <label for="sales-navigator" class="a_droite">Linkedin Sales Navigator</label><br>
  <img src="@/assets/images/linkedin.png" alt="Linkedin Sales Navigator" />
</figure>

<figure class="job-source">
  <input type="checkbox" id="recruiter" />
  <label for="recruiter" class="a_droite">Linkedin Recruiter</label><br>
  <img src="@/assets/images/linkedin.png" alt="Linkedin Recruiter" />
</figure>

<figure class="job-source">
  <input type="checkbox" id="github" />
  <label for="github" class="a_droite">Github</label><br>
  <img src="@/assets/images/icon-github.png" alt="Github" />
</figure>

<figure class="job-source">
  <input type="checkbox" id="xlsx" />
  <label for="xlsx" class="a_droite">Xls file</label><br>
  <img src="@/assets/images/xlsx_icon.png" alt="Xls file" />
</figure>
</div>

<div class="actions text-center">
<q-btn color="white" text-color="black" label="Back" href ="/Accueil" class="mr-2" />
<q-spinner-hourglass class="on-left" />
<q-btn color="primary" text-color="black" label="Continue" />
</div>
</div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class PageView extends Vue {}
</script>

<style scoped lang="scss">
.page {
padding: 20px;
background-color: #f8f9fa;
border-radius: 8px;
}

h1 {
margin-bottom: 40px;
}

.job-sources {
display: flex;
flex-wrap: wrap;
justify-content: space-around;
margin-bottom: 20px;
}

.job-source {
flex: 1 1 200px;
margin: 10px;
padding: 20px;
border: 1px solid #ddd;
border-radius: 8px;
text-align: center;
background-color: #fff;
}

.job-source img {
width: 70px;
height: 70px;
margin-bottom: 10px;
}

.job-source input[type="checkbox"] {
margin-right: 10px;
}

.actions {
margin-top: 20px;
}
</style>