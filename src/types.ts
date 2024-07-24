export interface LoginResponnse {
    access_token: string;
    token_type: string;
    token: string;
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