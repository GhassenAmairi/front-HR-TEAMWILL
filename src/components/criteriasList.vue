<template>
    <div class="col-md-4">
      <div class="content-left" style="margin-top: 20%;">
        <nav class="nav nav-pills flex-column">
          <a
            class="nav-link"
            :class="{ active: isActive('Accueil') }"
            href="Accueil"
          >
            What type of contacts do you want to find
          </a>
          <br />
          <a
            class="nav-link"
            :class="{ active: isActive('dashbord') }"
            href="dashbord"
          >
            Please tell us more about your ideal candidates
          </a>
          <br />
          <a
            class="nav-link"
            :class="{ active: isActive('DefineJob') }"
            href="DefineJob"
          >
            Define criteria and weight
          </a>
          <br />
          <a
            class="nav-link"
            :class="{ active: isActive('defineParametre') }"
            href="defineParametre"
          >
            Refine your search
          </a>
          <br />
          <a
            class="nav-link"
            :class="{ active: isActive('jobDetails') }"
            href="jobDetails"
          >
            Campaign details
          </a>
          <br />
          <a class="nav-link" :class="{ active: isActive('#') }" href="#">
            Company messaging
          </a>
          <br />
          <a class="nav-link" :class="{ active: isActive('#') }" href="#">
            Company settings
          </a>
          <br />
        </nav>
      </div>
    </div>
  </template>
<script lang="ts">

import { Options, Vue } from "vue-class-component";
@Options({
    props:["expliciteRoute"]
})
export default class CriteriasList extends Vue {
    expliciteRoute?:any;
    isActive(routeName:any) {
        if(this.expliciteRoute){
            return this.expliciteRoute === routeName;
        }
        else {
            return this.$route.path.includes(routeName);
        }
    }
}
</script>
<style scoped>
.nav-pills .nav-link {
  margin-bottom: 10px;
  padding: 10px;
  color: #000;
}

.nav-pills .nav-link.active {
  background-color: #93a84c;
  color: white;
}
</style>