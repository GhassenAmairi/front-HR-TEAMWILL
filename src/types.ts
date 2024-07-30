export interface LoginResponnse {
    access_token: string;
    token_type: string;
    token: string;
}
export interface jobsForm {
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
export interface userForm {
    username: string;
   
    fullname: string;
    email: string;
    disabled: boolean;
    role: string;
}

export const loginForm: loginForm = {
    username: '',
    password: '',
    fullname: '',
    email: '',
}

export const jobsForm: jobsForm = {
    id: 0,
    title: '',
    description: '',
    category: '',
    location: '',
    job: '',
}
export const userForm: userForm = {
    username: '',
    fullname: '',
    email: '',
    disabled: false,
    role: '',
}

export const documentForm = {
    document: '',
}
  

  