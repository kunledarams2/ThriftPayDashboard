import axios from "axios";

//const API_URL = "https://thriftpay.onrender.com/api/auth/";
const API_URL = "http://127.0.0.1:8000/api/auth/";

export const signup = (first_name: string, last_name: string, email: string, password: string, is_staff: boolean, username:string) => {

    console.log(username)
        return axios.post(API_URL + "register", {
            first_name,
            last_name,
            email,
            password,
            is_staff,
            username,
    
        })
        
    // } catch (error) {
    //     if (axios.isAxiosError(error)) {
    //         console.log('error message: ', error.message);
    //         return error.message;
    //       } else {
    //         console.log('unexpected error: ', error);
    //         return 'An unexpected error occurred';
    //       }
    // }
  
};

async function createAccount(first_name: string, last_name: string, email: string, password: string, is_staff: boolean) {
    try {
        const data = axios.post(API_URL + "register", {
            first_name,
            last_name,
            email,
            password,
            is_staff,
        })
        return data;
    } catch (error) {
        
    }
}

export const login = (email: String, password: string) => {
    return  axios.post(API_URL + "login", {
        email,
        password
    }).then((response) => {
        console.log(response)
        if (response.data.user) {
            localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        return response.data;
    });
    
};
export const logout = () => {
    localStorage.removeItem('user')

};

export const getCurrentUser = () => {
    const userStr = localStorage.getItem('user')
    if (userStr) return JSON.parse(userStr);

    return null;
}