import axios, { AxiosInstance } from "axios";
const apiClient: AxiosInstance = axios.create({
    baseURL: "http://localhost:8000/docs",
    headers: {
        "Content-type": "application/json"
    }       
});

export default  {

    data () {
        return apiClient
    },
    methods: {
        getlistJob() {
             axios.get("http://localhost:8000/docs/jobs/ListJob").then(Reponse => console.log(Reponse));
        },
        createJobpost() {
             axios.post("http://localhost:8000/docs/jobs/CreateJob").then(Reponse => console.log(Reponse));
        },
        getshowJob() {
             axios.get("http://localhost:8000/docs/jobs/{id}/ShowJob").then(Reponse => console.log(Reponse));
        },
        updateJob() {
             axios.put("http://localhost:8000/docs/jobs/{id}/UpdateJob").then(Reponse => console.log(Reponse));
        },
        deleteJob() {
             axios.delete("http://localhost:8000/docs/jobs/{id}/DeleteJob").then(Reponse => console.log(Reponse));
        }

    },
   


}