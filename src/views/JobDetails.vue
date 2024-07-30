<template>
  <div class="row">
    <criterias-list></criterias-list>
    <div class="col-md-8">
      <div class="container">
        <div class="col-md-8 offset-md-2">
          <h2 class="campaign-title">Campaign details</h2>
          <q-form>
            <div class="q-mb-md">
              <label class="input-label">Name *</label>
              <q-input filled v-model="name" placeholder="Add or select a campaign name" dense outlined />
            </div>
            <div class="q-mb-md">
              <label class="input-label">Program *</label>
              <q-input filled v-model="program" placeholder="Add or select a campaign program" dense outlined />
            </div>
            <div class="q-mb-md">
              <label class="input-label">Description</label>
              <q-input filled type="textarea" style="width: 760px;" v-model="description" placeholder="This is how you will describe the campaign, so make it good!" dense outlined />
            </div>
            <q-expansion-item label="Advanced Configuration"  class="q-mt-md">
              <div class="q-mb-md">
                <label class="input-label">Sender</label>
                <q-select
                  filled
                  v-model="sender"
                  placeholder="Please choose a Sender"
                  :options="senderOptions"
                  dense
                  outlined
                />
              </div>
              <div class="q-mb-md">
                <label class="input-label">Source</label>
                <q-select
                  filled
                  v-model="source"
                  placeholder="Please choose a Source"
                  :options="sourceOptions"
                  dense
                  outlined
                />
              </div>
            </q-expansion-item>
          </q-form>
        </div>
      </div>
      <div class="row btns" >
            <div  style="position: absolute; margin-top: 5px;">
                  </div>
                  <div class="button-group text-center" @click="$router.push('/')">
                    <q-btn class="continue" label="Continue" >
                      <q-icon name="keyboard_arrow_right" style="color: white;" />
                    </q-btn>
                  </div>
                </div>
    </div>
  </div>
</template>

<script lang="ts">
import {  ref } from 'vue';
import { QForm, QInput, QExpansionItem, QSelect, QBtn } from 'quasar';
import CriteriasList from '@/components/criteriasList.vue';

import { Options, Vue } from 'vue-class-component';
@Options({
  components: {
    QForm,
    QInput,
    QExpansionItem,
    QSelect,
    CriteriasList,
    QBtn
  },
  computed: {
  },
})
export default class JobDeteils extends Vue {

     name = ref('');
     program = ref('');
     description = ref('');
     sender = ref(null);
     source = ref(null);

     senderOptions = [
      { label: 'Sender 1', value: 'sender1' },
      { label: 'Sender 2', value: 'sender2' }
    ];

     sourceOptions = [
      { label: 'Source 1', value: 'source1' },
      { label: 'Source 2', value: 'source2' }
    ];
  
}
</script>

<style scoped lang="scss">
.container {
  padding: 20px;
  background-color: #f8f9fa;
}

.campaign-title {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 20px;
  color: #2c3e50;
}

.q-mb-md {
  margin-bottom: 16px;
}
.continue{
  background-color: #93a84c !important;
  color: aliceblue !important;
  border-radius: 6px;
  position: absolute;
  right : 0;
  text-decoration: none !important;
}
.q-mt-md {
  margin-top: 16px;
}

.q-input,
.q-select,
.q-expansion-item {
  width: 100%;
}

.input-label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #2c3e50;
}
</style>
