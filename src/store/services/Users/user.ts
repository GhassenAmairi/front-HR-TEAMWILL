import axios from "axios";

export const state = () => ({
id :0,
email : '',
password : ''
})
class UserData {
    id= 0;
    email='';
    password= '';
    jsonData: any;
}

export const mutations ={
    storeId:(state:{id:number},data:number)=>{
        state.id = data
    },
    storeEmail:(state:{email:string},data:string)=>{
        state.email = data
    },
    storePassword:(state:{password:string},data:string)=>{
        state.password = data
    },
const: 'API_URL= http://localhost:8000/api/login',

    async fetchloginData(username: string, password: string) {
        try {
          const response = await axios.post('http://localhost:8000/api/login', {
              auth: {
                username: username,
                password: password
              }
          });
          UserDataInstance.jsonData = response.data;
        } catch (error) {
          console.error('Error fetching JSON data:', error);
        }
      }
    }
    const UserDataInstance = new UserData();
    
  

