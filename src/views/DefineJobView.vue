<template>
  <div class="row">
    <criterias-list :expliciteRoute="'dashbord'"></criterias-list>
    <div class="col-md-8">
      <h1 class="text-center" style="margin-top: 5%;">Please tell us more about your ideal candidates</h1>
      <div class="filters">
        <div class="filter-group">
          <h2>Top Filters</h2>
          <div class="filter-row">
            <q-btn label="Geography" icon-right="add" flat @click="showOptions('geography')" />
            <q-btn label="Industry" icon-right="add" flat @click="showOptions('industry')" />
          </div>
          <div v-if="selectedFilters.geography.length" class="selected-filters">
            <div v-for="item in selectedFilters.geography" :key="item" class="selected-item">{{ item }}</div>
          </div>
          <div v-if="selectedFilters.industry.length" class="selected-filters">
            <div v-for="item in selectedFilters.industry" :key="item" class="selected-item">{{ item }}</div>
          </div>
        </div>

        <div class="filter-group">
          <h2>Role & Tenure Filters</h2>
          <div class="filter-row">
            <q-btn label="Seniority level" icon-right="add" flat @click="showOptions('seniority')" />
            <q-btn label="Function" icon-right="add" flat @click="showOptions('function')" />
            <q-btn label="Title" icon-right="add" flat @click="showOptions('title')" />
          </div>
          <div v-if="selectedFilters.seniority.length" class="selected-filters">
            <div v-for="item in selectedFilters.seniority" :key="item" class="selected-item">{{ item }}</div>
          </div>
          <div v-if="selectedFilters.function.length" class="selected-filters">
            <div v-for="item in selectedFilters.function" :key="item" class="selected-item">{{ item }}</div>
          </div>
          <div v-if="selectedFilters.title.length" class="selected-filters">
            <div v-for="item in selectedFilters.title" :key="item" class="selected-item">{{ item }}</div>
          </div>
        </div>

        <div class="filter-group">
          <h2>Company Info</h2>
          <div class="filter-row">
            <q-btn label="Company" icon-right="add" flat @click="showOptions('company')" />
            <q-btn label="Company headcount" icon-right="add" flat @click="showOptions('headcount')" />
            <q-btn label="Annual revenue" icon-right="add" flat @click="showOptions('revenue')" />
          </div>
          <div v-if="selectedFilters.company.length" class="selected-filters">
            <div v-for="item in selectedFilters.company" :key="item" class="selected-item">{{ item }}</div>
          </div>
          <div v-if="selectedFilters.headcount.length" class="selected-filters">
            <div v-for="item in selectedFilters.headcount" :key="item" class="selected-item">{{ item }}</div>
          </div>
          <div v-if="selectedFilters.revenue.length" class="selected-filters">
            <div v-for="item in selectedFilters.revenue" :key="item" class="selected-item">{{ item }}</div>
          </div>
        </div>
      </div>
      <div class="row btns">
        <div style="position: absolute; margin-top: 5px;">
          <q-item-section @click="$router.push('/dashbord')">
            <button style="color: grey;">
              <q-icon name="keyboard_arrow_left" style="color: grey;" />
              Back
            </button>
          </q-item-section>
        </div>
        <div class="button-group text-center" @click="$router.push('/DefineJob')">
          <q-btn class="continue" label="Continue">
            <q-icon name="keyboard_arrow_right" style="color: white;" />
          </q-btn>
        </div>
      </div>

      <q-dialog v-model="dialog">
        <q-card>
          <q-card-section>
            <div class="text-h6">{{ capitalizedFilter }} Options</div>
          </q-card-section>
          <q-list>
            <q-item v-for="option in options(currentFilter)" :key="option" clickable @click="selectOption({ filter: currentFilter, option })">
              <q-item-section>{{ option }}</q-item-section>
            </q-item>
          </q-list>
          <q-card-actions align="right">
            <q-btn flat label="Close" v-close-popup  @click="store.commit('setDialog',!store.state.dialog)"/>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { QBtn, QDialog, QCard, QCardSection, QCardActions, QList, QItem, QItemSection } from 'quasar';
import { mapState, mapActions, mapGetters, mapMutations, useStore } from 'vuex';
import CriteriasList from '@/components/criteriasList.vue';

@Options({
  components: {
    CriteriasList,
    QBtn,
    QDialog,
    QCard,
    QCardSection,
    QCardActions,
    QList,
    QItem,
    QItemSection
  },
  computed: {
    ...mapState(['dialog', 'currentFilter', 'selectedFilters']),
    ...mapGetters(['options', 'capitalizedFilter']),
    ...mapMutations(['setDialog']),
  },
  methods: {
    ...mapActions(['showOptions', 'selectOption']),
  },
})

export default class DefineJob extends Vue {
store = useStore();
title="";
description="";
category="";
location="";
job =""; 

createjob() {
          //const { id, title, description,category, location,job } = this.store.state.jobForm;
          this.store.commit('addJob',{id :this.store.state.jobForm?.id, title:this.title, description:this.description,category:this.category, Location:this.location,job:this.job});
          this.store.dispatch('addJob');
          //console.log(this.store.state.jobForm);
        }
        updatejob() {
          //const { id, title, description,category, location,job } = this.store.state.jobForm;
          this.store.commit('updateJob',{id :this.store.state.jobForm?.id, title:this.title, description:this.description,category:this.category, Location:this.location,job:this.job});
          this.store.dispatch('updateJob');
        }
        deletejob() {
          //const { id, title, description,category, location,job } = this.store.state.jobForm;
          this.store.commit('deleteJob',{id :this.store.state.jobForm?.id, title:this.title, description:this.description,category:this.category, Location:this.location,job:this.job});
          this.store.dispatch('deleteJob');
        }
}
</script>

<style scoped lang="scss">
.filters {
  margin-top: 20px;
}
.continue {
  background-color: #93a84c !important;
  color: aliceblue !important;
  border-radius: 6px;
  position: absolute;
  right: 0;
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

.selected-filters {
  margin-top: 10px;
}

.selected-item {
  display: inline-block;
  margin-right: 10px;
  padding: 5px 10px;
  background-color: #d1e7dd;
  border-radius: 4px;
  color: #0f5132;
}
</style>
