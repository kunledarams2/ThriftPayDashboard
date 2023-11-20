import axios from "axios";
import authHeader from "./authHeaders";


const API_URL = "https://thriftpay.onrender.com/api/thrift/";

 export interface ThriftPlanResponse {
    count:    number;
    next:     null;
    previous: null;
    results:  IResult[];
}

export interface IResult {
    id:                  number;
    name:                string;
    contribution_amount: number;
    total_slot:          number;
    available_slot:      number;
    locked_slot:         number;
    is_active:           boolean;
    is_open:             boolean;
    slots: Slot[];
   ongoing_contribution: number;
}

export interface Slot {
    slot:         string;
    status:       boolean;
    contribution: Contribution;
}

export  enum Contribution {
    Active = "Active",
    Inactive = "Inactive",
  }


// Converts JSON strings to/from your types
export class Convert {
    public static toThriftPlanResponse(json: string): ThriftPlanResponse {
        return JSON.parse(json);
    }

    public static thriftPlanResponseToJson(value: ThriftPlanResponse): string {
       
        return JSON.stringify(value);
    }
}


  export async function getThriftPlans() {
    try {
      // 👇️ const data: GetUsersResponse
      const { data, status } = await axios.get(
        API_URL, { headers: authHeader() }
      
      );

        const stringJson = JSON.stringify(data, null, 4)
        const responseData = Convert.toThriftPlanResponse(stringJson)
    
      console.log( responseData);
  
      // 👇️ "response status is: 200"
    //   console.log('response status is: ', status);
  
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
  
export default getThriftPlans();
  
export const getPlan = () => {
    return axios.get(API_URL, { headers: authHeader() });
};
  




export type ThriftPlanOverviewResponse = {
    success: boolean;
    data:    Data;
}

export type Data = {
    total_contribution: number;
    total_payout:       number;
    complete_month:     number;
    contributions: ContributionData[];
    member:             Members[];
    requests:             RequestMembers[];
}

export type ContributionData = {
    amount:     string;
    thrift:     Thrift;
    user:       User;
    created_at: Date;
}

export type Thrift = {
    id:                  number;
    name:                string;
    contribution_amount: number;
}

export type User = {
    id:           number;
    first_name:   string;
    last_name:    string;
    phone_number: string;
    email:        string;
}
export type Members = {
  full_name:    string;
  phone_number: string;
  slot: number;
  
}

export type RequestMembers = {
  join_id: string;
  thrift_id: string;
  full_name:    string;
  phone_number: string;
  slot: number;
  bank_statement_document_url: string;
  created_at:Date
  
}



// Converts JSON strings to/from your types
export class thriftPlanOverviewResponseConvert {
    public static tothriftPlanOverviewResponse(json: string): ThriftPlanOverviewResponse {
        return JSON.parse(json);
    }

    public static thriftPlanOverviewResponseToJson(value: ThriftPlanOverviewResponse): string {
        return JSON.stringify(value);
    }
}

export async function getThriftPlanOverview(thriftPlanId:string) {
    try {
      // 👇️ const data: GetUsersResponse
  
      
      const { data, status } = await axios.get(
          API_URL + thriftPlanId+"/overview", { headers: authHeader() }
      
      );

        const stringJson = JSON.stringify(data, null, 4)
        const responseData = Convert.toThriftPlanResponse(stringJson)
    
      console.log( responseData);
  
      // 👇️ "response status is: 200"
    //   console.log('response status is: ', status);
  
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
  


export interface ActiveThriftPlan {
    success: boolean;
    data:    ActiveThriftPlanData;
}

export interface ActiveThriftPlanData {
    ongoing_contribution:  number;
    expented_contribution: number;
    payout_receiver:       PayoutReceiver;
    plan_member:           PlanMember[];
    contributions:         ActiveThriftPlanContribution[];
}

export interface ActiveThriftPlanContribution {
    amount:     string;
    thrift:     Thrift;
    user:       User;
    created_at: Date;
}

export interface ActiveThriftPlanThrift {
    id:                  number;
    name:                string;
    contribution_amount: number;
}

export interface ActiveThriftPlanUser {
    id:           number;
    first_name:   string;
    last_name:    string;
    phone_number: string;
    email:        string;
}

export interface PayoutReceiver {
    username:     string;
    phone_number: string;
}

export interface PlanMember {
    id:           number;
    username:     string;
    phone_number: string;
    contribution: boolean;
}

// Converts JSON strings to/from your types
export class ActiveThriftPlanConvert {
    public static toActiveThriftPlan(json: string): ActiveThriftPlan {
        return JSON.parse(json);
    }

    public static activeThriftPlanToJson(value: ActiveThriftPlan): string {
        return JSON.stringify(value);
    }
}

export async function getThriftPlanActive(thriftPlanId:string) {
    try {
      // 👇️ const data: GetUsersResponse
  
      
      const { data, status } = await axios.get<ActiveThriftPlan>(
          API_URL + thriftPlanId+"/active", { headers: authHeader() }
      
      );

        const stringJson = JSON.stringify(data, null, 4)
        const responseData = ActiveThriftPlanConvert.toActiveThriftPlan(stringJson)
    
      console.log( responseData);
  
      // 👇️ "response status is: 200"
    //   console.log('response status is: ', status);
  
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


export interface createPlanRequest{
  name: string;
  contribution_amount: number;
  salary_range: number;
  start_date: string;
  remittance_day: string;
  total_slot: number;
  company_users: string[];

}
export async function CreatePlan(request:createPlanRequest){

  try {
    // 👇️ const data: GetUsersResponse

    
    const data = await axios.post(
        API_URL +"create", request, { headers: authHeader() }
    
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

export interface companyUserJoinPlan{
  email:string
}

export interface JoinPlanRequest{
   request_status: string,
  approval: boolean,
  thrift_plan_id:string,
  preferred_slot: string,
  rejected_reason:string,
}

export async function updateJoinPlanRequest(request:JoinPlanRequest, join_id:string){

  try {
   
    
    const data = await axios.put(
        API_URL +"join/request/"+join_id+"/update", request, { headers: authHeader() }
    
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
