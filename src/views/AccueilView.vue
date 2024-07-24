<template>
  <div class="Accueil">
    <div class="container-fluid dashboard">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6">
          <h1 class="text-center mb-4">What type of contacts do you want to find?</h1>
          <div class="contact-form">
            <div class="form-group">
              <div class="contact-item"  @click="$router.push('/score')">
                <i class="material-icons">handshake</i>
                <span>Leads</span>
                <i class="material-icons arrow">keyboard_arrow_right</i>
              </div>
            </div>
            <div class="form-group">
              <div class="contact-item" @click="$router.push('/dashbord')">
                <i class="material-icons">badge</i>
                <span>Candidates</span>
                <i class="material-icons arrow">keyboard_arrow_right</i>
              </div>
            </div>
            <div class="form-group">
              <div class="contact-item" @click="$router.push('/')">
                <i class="material-icons">add</i>
                <span>Other</span>
                <i class="material-icons arrow">keyboard_arrow_right</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component';
import { ref } from 'vue';

export default class AccueilView extends Vue {
  manager = ref('');
  job = ref('');
  other = ref('');

  inputText = ref('');

  onSubmit() {
    console.log('Form submitted with:', this.manager, this.job, this.other);
  }
}
</script>

<style scoped lang="scss">
.dashboard {
  padding: 20px;
  background-color: #f8f9fa;
}

.contact-form {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-item:hover {
  background-color: #f1f1f1;
}

.contact-item i {
  font-size: 24px;
  color: #93a84c;
}

.contact-item .arrow {
  color: #93a84c;
}

.text-center {
  text-align: center;
}

.mb-3 {
  margin-bottom: 1rem;
}

.mb-4 {
  margin-bottom: 1.5rem;
}

.mt-3 {
  margin-top: 1rem;
}
</style>