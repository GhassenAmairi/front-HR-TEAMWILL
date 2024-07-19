<template>
  <div class="h3">
    <h1>{{ $t(msg) }}</h1>
    <!-- <q-input dense outlined v-model="name" type="text" class="p-0" /> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
})
export default class HomeComponent extends Vue {
  msg!: string;
  name!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.h3 {
  margin: 150px 50px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
