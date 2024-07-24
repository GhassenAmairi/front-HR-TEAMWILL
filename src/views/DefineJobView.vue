<!-- <template>
  <div class="DefineJob">
    <div class="row">
      <div class="col-md-4">
        <div class="content-left">
          <nav class="nav nav-pills flex-column">
            <br />
            <a class="nav-link" href="Accueil">What type of contacts do you want to find</a><br /><br />
            <a class="nav-link" href="dashbord">Please tell us more about your ideal job</a><br /><br />
            <a class="nav-link" href="DefineJob">Define criteria and weight</a><br /><br />
            <a class="nav-link" href="defineParametre">Refine your search</a><br /><br />
            <a class="nav-link" href="jobDetails">Campaign details</a><br /><br />
            <a class="nav-link" href="#">Company messaging</a><br /><br />
            <a class="nav-link" href="#">Company settings</a><br /><br />
          </nav>
        </div>
      </div>
      <div class="col-md-8">
        <div class="content">
          <h1 class="text-center">Define your ideal job</h1>
          <div class="q-pa-md q-gutter-sm">
            <q-banner class="bg-primary text-white">
              Learn how to define your ideal job.
              <template v-slot:action>
                <q-btn flat color="white" label="Learn more" />
              </template>
            </q-banner>

            <q-btn color="primary" icon-right="archive" label="Add Job" @click="showAddJobDialog" no-caps />
            <q-btn color="primary" icon-right="archive" label="Update Job" @click="showUpdateJobDialog" no-caps />
            <q-btn color="primary" icon-right="archive" label="List Job" @click="listJob" no-caps />

            <q-dialog v-model="showAddDialog" persistent>
              <q-card style="min-width: 350px">
                <q-card-section>
                  <div class="text-h6">Your email</div>
                  <q-input v-model="jobEmail" type="text" class="mb-3" />
                  <div class="text-h6">Your Password</div>
                  <q-input v-model="jobPassword" type="password" class="mb-3" />
                </q-card-section>
                <q-card-actions align="right" class="text-primary">
                  <q-btn flat label="Cancel" v-close-popup />
                  <q-btn flat label="Add Job" @click="addJob" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>

            <q-dialog v-model="showUpdateDialog" persistent>
              <q-card style="min-width: 350px">
                <q-card-section>
                  <div class="text-h6">Update your job</div>
                  <q-input v-model="updateJobTitle" type="text" class="mb-3" />
                  <div class="text-h6">Description</div>
                  <q-input v-model="updateJobDescription" type="text" class="mb-3" />
                </q-card-section>
                <q-card-actions align="right" class="text-primary">
                  <q-btn flat label="Cancel" v-close-popup />
                  <q-btn flat label="Update Job" @click="updateJob" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>

          <div class="q-pa-md">
            <q-table flat bordered color="primary" row-key="name" :columns="columns" :rows="rows">
              <template v-slot:top-left>
                <div class="form-group">
                  <q-markup-table>
                    <thead>
                      <tr>
                        <th class="text-left">Category</th>
                        <th class="text-left">Location</th>
                        <th class="text-left">Job</th>
                        <th class="text-left">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(row, index) in rows" :key="index">
                        <td>
                          <q-select use-input v-model="row.category" outlined dense :options="row.categories" label="Category" class="status-select"></q-select>
                        </td>
                        <td>
                          <q-select use-input v-model="row.location" outlined dense :options="row.locations" label="Location" class="status-select"></q-select>
                        </td>
                        <td>
                          <q-select use-input v-model="row.job" outlined dense :options="row.jobTypes" label="Job" class="status-select"></q-select>
                        </td>
                        <td>
                          <q-td>
                            <q-btn flat round dense icon="edit" color="green-5" />
                            <q-btn flat round dense icon="delete" color="red-5" />
                          </q-td>
                        </td>
                      </tr>
                    </tbody>
                  </q-markup-table>
                </div>
              </template>
            </q-table>
          </div>

          <div class="button-group text-center">
            <q-btn color="white" text-color="black" label="Back" href="dashbord" />
            <q-spinner-hourglass class="on-left" />
            <q-btn color="primary" text-color="white" label="Continue" href="jobDetails" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {  ref } from 'vue';
import axios from 'axios';
import { Vue } from 'vue-class-component';
import { Job } from '@/store/modules/critieriaModule/job';


export default class DefineJob extends Vue{
 
     showAddDialog = ref(false);
     showUpdateDialog = ref(false);
     jobEmail = ref('');
     jobPassword = ref('');
     updateJobTitle = ref('');
     updateJobDescription = ref('');
     jobs = ref<Job[]>([]);
     categories = ['Company', 'Job', 'Action'];
     locations = ['Paris', 'Berlin', 'Tunisie'];
     jobTypes = ['Developer', 'DevOps', 'Tester'];

     columns = [
      { name: 'category', label: 'Category', align: 'left' },
      { name: 'location', label: 'Location', align: 'left' },
      { name: 'job', label: 'Job', align: 'left' },
      { name: 'action', label: 'Action', align: 'left' },
    ];

    rows = ref([
  { id: 1, category: '', location: '', job: '' },
]);

   showAddJobDialog = () => {
      this.showAddDialog.value = true;
    };

     showUpdateJobDialog = () => {
      this.showUpdateDialog.value = true;
    };

  addJob = async () => {
      try {
        const response = await axios.post('http://localhost:8000/jobs/', {
          email: this.jobEmail.value,
          password: this.jobPassword.value,
        });
        console.log('Job added:', response.data);
      } catch (error) {
        console.log('Error adding job:', error);
      }
    };

  updateJob = async () => {
      try {
        const response = await axios.put('http://localhost:8000/jobs/5eb7cf5a86d9755df3a6c593', {
          title: this.updateJobTitle.value,
          description: this.updateJobDescription.value,
        });
        console.log('Job updated:', response.data);
      } catch (error) {
        console.log('Error updating job:', error);
      }
    };

    listJob = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found in local storage');
        }
        const response = await axios.get('http://localhost:8000/jobs/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.jobs.value = response.data;
      } catch (error) {
        console.error('Error listing jobs:', error);
      }
    };

     deleteItem = async (index: number) => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found in local storage');
        }
        const jobId = this.jobs.value[index].id;
        await axios.delete(`http://localhost:8000/jobs/deletejob/${jobId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.jobs.value.splice(index, 1);
      } catch (error) {
        console.error('Error deleting job:', error);
      }
    };
  
}
</script>

<style scoped >
.dashboard {
  padding: 20px;
  background-color: #f8f9fa;
}
.nav-pills .nav-link {
  margin-bottom: 10px;
  border-radius: 5px;
  color: #fff;
}
.nav-pills .nav-link.active,
.nav-pills .nav-link:hover {
  background-color: #007bff;
  color: white;
  font-size: bold;
}
h1 {
  margin-bottom: 20px;
}
.q-banner {
  margin-bottom: 20px;
}
.q-pa-md {
  margin-bottom: 20px;
}
.q-table {
  margin-top: 20px;
}
.text-center {
  text-align: center;
}
.content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.content-left {
  background-color: rgb(147, 168, 76);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.button-group {
  margin-top: 20px;
  text-align: center;
}
.nav-pills .nav-link.active {
  background-color: #007bff;
  color: white;
}
.form-group {
  margin-bottom: 2rem;
}
  .status-select {
    width: 100%;
    max-width: 300px;
  }
</style> -->
