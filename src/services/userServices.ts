import axios from "axios";
import authHeader from "./authHeaders";
const API_URL = "http://127.0.0.1:8000/api/";

// const API_URL = "https://thriftpay.onrender.com/api/";  //http://127.0.0.1:8000/ https://thriftpay.onrender.com

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
    date_of_birth:        Date  | null;
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
    virtual_account_name: string;
    bank_name:            string;
    is_kyc_verify:        boolean;
    role:                 string;
    has_secured_pin:      boolean;
    profile_image:        string;
    gender:               string;
    tier:                 string;
    virtualAccountWallet: VirtualAccountWallet | null;
  // id:                   number;
  // first_name:           string;
  // last_name:            string;
  // phone_number:         string;
  // date_of_birth:        Date;
  // username:             string;
  // date_joined:          Date;
  // last_login:           null;
  // email:                string;
  // email_verified:       boolean;
  // is_staff:             boolean;
  // is_active_plan:       boolean;
  // is_active:            boolean;
  // is_bank_verify:       boolean;
  // has_virtual_account:  boolean;
  // virtual_account:      number;
  // virtual_account_name: VirtualAccountName;
  // is_kyc_verify: boolean;
  // gender:string
}

export interface VirtualAccountWallet {
    created_at:       Date;
    updated_at:       Date;
    id:               number | null;
    user_id:          number;
    currency:         string;
    balance:          number;
    previous_balance: number | null;
    account_id:       string;
    account_number:   string;
    bank_name:        string;
    name:             string;
    provider:         string;
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
      API_URL+"auth/user/all", { headers: authHeader() }
    
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





export type UserThriftPlan = {
  success: boolean;
  data:    UserThriftPlanData;
  message: string;
}

export type UserThriftPlanData = {
  user_plans: UserPlan[];
}

export type UserPlan = {
  id:                          number;
  preferred_payment_day:       string;
  preferred_slot:              number;
  preferred_remittance_method: string;
  thrift_plan_id:              string;
  ongoing_contribution:        number;
  expented_contribution:       number;
  is_contribution_complete:    boolean;
  thrift:                      Thrift;
  ongoing_contribution_status: OngoingContributionStatus;
  request_status:              string;
}

export enum OngoingContributionStatus {
  Active = "Active",
  Inactive = "Inactive",
}

export type Thrift = {
  id:                   number;
  name:                 string;
  contribution_amount:  number;
  total_slot:           number;
  available_slot:       number;
  locked_slot:          number;
  is_active:            boolean;
  is_open:              boolean;
  // slots:                Slot[];
  start_date:           Date;
  ongoing_contribution: number;
}

export type Slot = {
  slot:         string;
  status:       boolean;
  contribution: OngoingContributionStatus;
}

// Converts JSON strings to/from your types
export class ConvertUserThriftPlan {
  public static toUserThriftPlan(json: string): UserThriftPlan {
      return JSON.parse(json);
  }

  public static userThriftPlanToJson(value: UserThriftPlan): string {
      return JSON.stringify(value);
  }
}


export async function fetchUserTPlan(userId:string) {
  try {
    // 👇️ const data: GetUsersResponse
    const { data, status } = await axios.get(
      API_URL+"thrift/user/"+userId+"/plans", { headers: authHeader() }
    
    );

      const stringJson = JSON.stringify(data, null, 4)
    const responseData = ConvertUserThriftPlan.toUserThriftPlan(stringJson)
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



// User Wallet


export type UserWallet = {
  success: boolean;
  data:    UserWalletData;
  message: string;
}

export type UserWalletData = {
  wallet: Wallet;
  // virtual_account:    VirtualAccount;
  wallet_transaction: WalletTransaction[];
}

export type Wallet = {
  currency: string;
  balance: number;
  bank_name: string;
  account_number: string;
}

export type VirtualAccount = {
  bank_name:      BankName;
  account_name:   string;
  account_number: string;
}

export type BankName = {
  name: string;
  id:   number;
  slug: string;
}

export type WalletTransaction = {
  id:               null;
  metadata:         Metadata;
  transaction_type: string;
  source:           string;
  created_at:       Date;
  amount:           number;
  reference: string;
  status: String;
}

export type Metadata = {
  id?:                   number;
  domain?:               string;
  status?:               string;
  reference?:            string;
  amount?:               number;
  message?:              null;
  gateway_response?:     string;
  paid_at?:              Date;
  created_at?:           Date;
  channel?:              string;
  currency?:             string;
  ip_address?:           string;
  metadata?:             string;
  fees_breakdown?:       null;
  log?:                  null;
  fees?:                 number;
  fees_split?:           null;
  authorization?:        Authorization;
  customer?:             Customer;
  plan?:                 Plan;
  subaccount?:           Plan;
  split?:                Plan;
  order_id?:             null;
  paidAt?:               Date;
  requested_amount?:     number;
  pos_transaction_data?: null;
  source?:               Source;
}

export type Authorization = {
  authorization_code: string;
  bin:                string;
  last4:              string;
  exp_month:          string;
  exp_year:           string;
  channel:            string;
  card_type:          string;
  bank:               string;
  country_code:       string;
  brand:              string;
  reusable:           boolean;
  signature:          string;
  account_name:       null;
}

export type Customer = {
  id:                         number;
  first_name:                 string;
  last_name:                  string;
  email:                      string;
  customer_code:              string;
  phone:                      null;
  metadata:                   null;
  risk_action:                string;
  international_format_phone: null;
}

export type Plan = {
}

export type Source = {
  type:        string;
  source:      string;
  entry_point: string;
  identifier:  null;
}

// Converts JSON strings to/from your types
export class ConvertUserWallet {
  public static toUserWallet(json: string): UserWallet {
      return JSON.parse(json);
  }

  public static userWalletToJson(value: UserWallet): string {
      return JSON.stringify(value);
  }
}



export async function fetchWalletInfo(userId:string) {
  try {
    // 👇️ const data: GetUsersResponse
    const { data, status } = await axios.get(
      API_URL+"thriftPay/user/"+userId+"/wallet", { headers: authHeader() }
    
    );

      const stringJson = JSON.stringify(data, null, 4)
    const responseData = ConvertUserWallet.toUserWallet(stringJson)
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



// KYC

export type UserKYC = {
  success: boolean;
  data:    UserKYCData;
}

export type UserKYCData = {
  kyc_bvn:       KycBvn|undefined;
  kyc_id:        KycID|undefined;
  kyc_next_kins: KycNextKins |undefined;
  kyc_address:   KycAddress|undefined;
}

export type KycBvn = {
  id:         number;
  created_at: Date;
  updated_at: Date;
  bvn:        string;
  image_url:  string;
  user_id:    string;
  verified:   boolean;
}

export type KycID = {
  id:          number;
  expiry_date: Date;
  created_at:  Date;
  updated_at:  Date;
  id_type:     string;
  id_number:   string;
  user_id:     string;
  verified:    boolean;
}

export type KycNextKins = {
  id:                number;
  created_at:        Date;
  updated_at:        Date;
  user_id:           string;
  first_name:        string;
  last_name:         string;
  email:             string;
  relationship:      string;
  address:           string;
  valid_address_doc: string;
  verified:          boolean;
}



export type KycAddress = {
  id:          number;
  
  address:     string;
  landmark: string;
  state: string;
  local_gov: string;
  valid_address_doc:   string;
  user_id:     string;
  verified:    boolean;
}

// Converts JSON strings to/from your types
export class ConvertUserKYC {
  public static toUserKYC(json: string): UserKYC {
      return JSON.parse(json);
  }

  public static userKYCToJson(value: UserKYC): string {
      return JSON.stringify(value);
  }
}



export async function fetchKYCInfo(userId:string) {
  try {
    // 👇️ const data: GetUsersResponse
    // const { data, status } = await axios.get(
    //   API_URL+"auth/kyc/"+userId, { headers: authHeader() }
    
    // );

    //   const stringJson = JSON.stringify(data, null, 4)
    // // const responseData = ConvertUserWallet.toUserWallet(stringJson)
    // // localStorage.setItem('dashStats', JSON.stringify(data));
  
    // // console.log( responseData);

    // return data;


    const { data, status } = await axios.get(
      API_URL+"auth/kyc/"+userId+"/all", { headers: authHeader() }
    
    );

      const stringJson = JSON.stringify(data, null, 4)
    const responseData = ConvertUserKYC.toUserKYC(stringJson)
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


export interface KYCUpdateRequest
{
  user_id: string,
  kyc_type: string,
  status:string,
  // kyc_bvn_status?:string,
  // kyc_id_status?:string,
  // kyc_next_kins_status?:string,
  // kyc_address_status?: string,
}

export async function updateKYCStatus(request:KYCUpdateRequest){

 try {
  
   
   const data = await axios.put(
       API_URL +"auth/kyc/"+request.user_id+"/update", request, { headers: authHeader() }
   
   );

   console.log( data);
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