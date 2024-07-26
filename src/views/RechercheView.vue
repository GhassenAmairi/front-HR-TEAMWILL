<template>
  <div class="row">
    <criterias-list ></criterias-list>

    <div class="col-md-8">
      <div class="content">
        <h1 class="text-left mb-4 define">Define criteria and weight</h1>
        <div class="q-pa-md">
          <q-banner class="bg-primary text-white bannerClass">
            <q-icon name="help_outline" size="large" /> &nbsp; Learn how to define criteria
            <q-btn flat color="white" label="Learn More" class="learn" />
          </q-banner>

          <q-btn label="Add term" class="mb-3 addBTn" @click="addRow" />

          <q-table flat bordered color="primary" row-key="name" :columns="columns" :rows="rows" class="enhanced-table">
            <template v-slot:top-left>
              <div class="form-group">
                <q-markup-table class="enhanced-table">
                  <thead>
                    <tr>
                      <th class="text-left">Category</th>
                      <th class="text-left">Term</th>
                      <th class="text-left">Weight</th>
                      <th class="text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, index) in rows" :key="index" class="table-row">
                      <td>
                        <q-select use-input v-model="row.category" outlined dense :options="categories" label="Category"
                          class="status-select no-arrow" />
                      </td>
                      <td>
                        <q-input v-model="row.term" outlined dense label="Term" class="status-select" />
                      </td>
                      <td>
                        <q-input v-model="row.weight" outlined dense label="Weight" type="number"
                          class="status-select" />
                      </td>
                      <td>
                        <q-btn flat round dense icon="delete" color="red" @click="deleteRow(index)" />
                      </td>
                    </tr>
                  </tbody>
                </q-markup-table>
              </div>
            </template>
          </q-table>
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
          <div class="button-group text-center" @click="$router.push('/defineParametre')">
            <q-btn class="continue" text-color="white" label="Continue">
              <q-icon name="keyboard_arrow_right" style="color: white;" />
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { QBtn, QInput, QSelect, QTable } from 'quasar';
import CriteriasList from '@/components/criteriasList.vue';

export default defineComponent({
  name: 'RechercheView',
  components: {
    QBtn,
    CriteriasList,
    QTable,
    QSelect,
    QInput
  },
  setup() {
    const columns = [
      { name: 'category', label: 'Category', align: 'left' },
      { name: 'term', label: 'Term', align: 'left' },
      { name: 'weight', label: 'Weight', align: 'left' },
      { name: 'action', label: 'Action', align: 'left' },
    ];

    const rows = ref([
      { category: 'Location', term: 'Paris, France', weight: 5 },
      { category: 'Keyword', term: 'Javascript', weight: 4 },
    ]);

    const categories = ['Location', 'Keyword', 'Industry'];

    const addRow = () => {
      rows.value.push({ category: '', term: '', weight: 0 });
    };

    const deleteRow = (index: number) => {
      rows.value.splice(index, 1);
    };

    return {
      columns,
      rows,
      categories,
      addRow,
      deleteRow,
    };
  }
});
</script>

<style scoped lang="scss">
.Recherche {
  padding: 20px;
  background-color: #f8f9fa;
}

.content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 110%;
}

.text-left {
  text-align: left;
  color: grey;
  font-weight: 400;
  font-size: small;
}

.mb-4 {
  margin-bottom: 1.5rem;
  color: gray;
}

.learn {
  position: absolute;
  right: 0;
  margin-right: 5%;
  margin-bottom: 20%;
}

.q-btn {
  width: 150px;
}

.q-banner {
  background-color: #4CAF50;
  /* Adjust this to match the green color in the mockup */
  color: white;
  margin-bottom: 20px;
}

.btns {
  margin-top: 3%;
}

.continue {
  background-color: #93a84c;
  color: aliceblue;
  border-radius: 6px;
  position: absolute;
  right: 0;
  text-decoration: none !important;
}

.bannerClass {
  background-color: #93a84c !important;
  border-radius: 20px;
  font-size: medium;
}

.status-select {
  width: 100%;
}

.form-group {
  margin-bottom: 1rem;
}

.table-header {
  font-weight: bold;
  text-transform: uppercase;
}

.q-pa-md {
  padding: 20px;
}

.text-center {
  text-align: center;
}

.addBTn {
  background-color: #93a84c;
  border-radius: 6px;
  color: white;
  margin-left: 2%;
}

.define {
  color: black;
  font-weight: 600;
  font-size: xx-large;
  margin-left: 5%;
}

.enhanced-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

.enhanced-table th,
.enhanced-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.enhanced-table th {
  background-color: #f2f2f2;
}

.table-row:hover {
  background-color: #f1f1f1;
}

.q-select,
.q-input {
  width: 100%;
}

/* Custom styles to hide the dropdown arrow */
.no-arrow .q-field__append {
  display: none;
}
</style>
