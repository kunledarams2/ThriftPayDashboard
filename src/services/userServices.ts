import axios from "axios";
import authHeader from "./authHeaders";

const API_URL = "http://127.0.0.1:8000/api/auth/";  //http://127.0.0.1:8000/ https://thriftpay.onrender.com

export const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

export const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

export const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

export const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};




export type UserResponse = {
  success: boolean;
  data:    UserData;
  message: string;
}

export type UserData = {
  user: User[];
}

export type User = {
  id:                   number;
  first_name:           string;
  last_name:            string;
  phone_number:         string;
  date_of_birth:        Date;
  username:             string;
  date_joined:          Date;
  last_login:           null;
  email:                string;
  email_verified:       boolean;
  is_staff:             boolean;
  is_active_plan:       boolean;
  is_active:            boolean;
  is_bank_verify:       boolean;
  has_virtual_account:  boolean;
  virtual_account:      number;
  virtual_account_name: VirtualAccountName;
  is_kyc_verify:        boolean;
}

export enum VirtualAccountName {
  TestManagedAccount = "TEST-MANAGED-ACCOUNT",
  VirtualAccountName = "Virtual Account Name",
}

// Converts JSON strings to/from your types
export class Convert {
  public static toUserResponse(json: string): UserResponse {
      return JSON.parse(json);
  }

  public static userResponseToJson(value: UserResponse): string {
      return JSON.stringify(value);
  }
}



export async function fetchAllUser() {
  try {
    // 👇️ const data: GetUsersResponse
    const { data, status } = await axios.get(
      API_URL+"user/all", { headers: authHeader() }
    
    );

      const stringJson = JSON.stringify(data, null, 4)
    const responseData = Convert.toUserResponse(stringJson)
    // localStorage.setItem('dashStats', JSON.stringify(data));
  
    console.log( responseData);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}