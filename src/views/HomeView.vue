<template>
  <div class="home">
    <HomeComponent msg="main.menu.home" />
    <DataTable />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HomeComponent from '@/components/HomeComponent.vue';
import DataTable from '@/components/DataTable.vue';
@Options({
  components: {
    HomeComponent,
    DataTable,
  },
})
export default class HomeView extends Vue {}
</script>
