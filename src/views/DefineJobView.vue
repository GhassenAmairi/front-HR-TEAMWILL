<template>
  <div class="row">
    <criterias-list :expliciteRoute="'dashbord'"></criterias-list>
    <div class="col-md-8">
      <h1 class="text-center" style="margin-top: 5%;">Please tell us more about your ideal candidates</h1>
      <div class="filters">
        <div class="filter-group">
          <h2>Top Filters</h2>
          <div class="filter-row">
            <q-btn label="Geography" icon-right="add" flat />
            <q-btn label="Industry" icon-right="add" flat />
          </div>
        </div>

        <div class="filter-group">
          <h2>Role & Tenure Filters</h2>
          <div class="filter-row">
            <q-btn label="Seniority level" icon-right="add" flat />
            <q-btn label="Function" icon-right="add" flat />
            <q-btn label="Title" icon-right="add" flat />
          </div>
        </div>

        <div class="filter-group">
          <h2>Company Info</h2>
          <div class="filter-row">
            <q-btn label="Company" icon-right="add" flat />
            <q-btn label="Company headcount" icon-right="add" flat />
            <q-btn label="Annual revenue" icon-right="add" flat />
          </div>
        </div>
      </div>
      <div class="row btns" >
            <div  style="position: absolute; margin-top: 5px;">
                    <q-item-section @click="$router.push('/dashbord')">
                      <button style="color: grey;">
                        <q-icon name="keyboard_arrow_left" style="color: grey;" />
                        Back
                      </button>
                    </q-item-section>
                  </div>
                  <div class="button-group text-center" @click="$router.push('/DefineJob')">
                    <q-btn class="continue" label="Continue" >
                      <q-icon name="keyboard_arrow_right" style="color: white;" />
                    </q-btn>
                  </div>
                </div>
    </div>
  </div>
</template>

<script lang="ts">
import CriteriasList from '@/components/criteriasList.vue';
import { Options, Vue } from 'vue-class-component';
import { QBtn } from 'quasar';

@Options({
  components: {
    CriteriasList,
    QBtn
  }
})

export default class DefineJob extends Vue {

}
</script>

<style scoped lang="scss">
.filters {
  margin-top: 20px;
}
.continue{
  background-color: #93a84c !important;
  color: aliceblue !important;
  border-radius: 6px;
  position: absolute;
  right : 0;
  text-decoration: none !important;
}
.filter-group {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.filter-group h2 {
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #5d6d7e;
}

.filter-row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.q-btn {
  flex: 1;
  justify-content: space-between;
  background-color: #f8f9fa;
  color: #2c3e50;
  border: 1px solid #ddd;
  border-radius: 6px;
}
</style>
