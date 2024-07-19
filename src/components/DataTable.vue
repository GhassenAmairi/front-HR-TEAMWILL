<template>
  <div class="q-pa-md">
    <q-table title="Treats" :rows="rows1" :columns="columns1" row-key="name" />
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { tableColumns, tableRows } from '@/utils/user/table-config';
import { store } from '@/store';
export default class DataTable extends Vue {
  columns: any;
  rows: any;
  selected: any;
  get rows1() {
    return store.state.userModule?.tabRows;
  }
  get columns1() {
    return store.state.userModule?.tabColumns;
  }
  created() {
    this.columns = tableColumns;
    this.rows = tableRows;
    store.dispatch('userModule/UPDATE_ROWS', tableRows);
    store.dispatch('userModule/UPDATE_COLUMNS', tableColumns);
  }
}
</script>
