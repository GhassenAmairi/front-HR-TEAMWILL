export interface LoginResponnse {
    access_token: string;
    token_type: string;
    token: string;
}
interface Job {
    id: number;
    title: string;
    description: string;
    category: string;
    location: string;
    job: string;
  }
  
export interface loginForm {
    username: string;
    password: string;
    fullname?: string;
    email?: string;

}

export const loginForm: loginForm = {
    username: '',
    password: '',
    fullname: '',
    email: '',
}
