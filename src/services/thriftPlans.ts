import axios from "axios";
import authHeader from "./authHeaders";


// const API_URL = "https://thriftpay.onrender.com/api/thrift/";
const API_URL = "http://127.0.0.1:8000/api/thrift/";
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
  total_contribution: number;
  start_date: string;
  created_at:string
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
    amount:     number;
    thrift:     Thrift;
    user:       User;
  created_at: Date;
  penalty: number;
  service_charges: number;
  coordinator_charges:number;
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
  tenure: string;
  is_external_plan:boolean

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


// Thrift notification 



export type ThriftNotification = {
  // success: boolean;
  // message: string;
  // data: NotificationDatum[];
  success: boolean;
  data:    ThriftNotificationDatum[];
  message: string;
}

export type ThriftNotificationDatum = {
  join_thrift:    JoinThrift;
    user:           User;
    coordinator:    ThriftCoordinator;
    kyc_submission: null;
    read_status:    string;
}

export type NotificationDatum = {
  id:             number;
  join_thrift:    JoinThrift;
  // created_at:     Date;
  // updated_at:     Date;
  read_status:    string;
  kyc_submission: undefined;
  user:           User;
}

export type JoinThrift = {
  id:                   number;
  // created_at:           Date;
  // updated_at:           Date;
  name:                 string;
  contribution_amount:  number;
  available_slot:       number;
  locked_slot:          number;
  total_slot:           number;
  // is_active:            boolean;
  // is_open:              boolean;
  // slots:                Slot[];
  total_contribution:   number;
  ongoing_contribution: number;
  salary_range:         number;
  start_date:           Date;
  remittance_day:       string;
  is_external:          boolean;
  join_code:            string;
  relationship:         undefined;
}


export type UserR = {
  slot:         string;
  status:       boolean;
  contribution: string;
}

export type ThriftCoordinator = {
  // id:                       null;
  created_at:               Date;
  updated_at:               Date;
  coordinator_user_id:      string;
  coordinator_contributing: boolean;
  coordinator_slot:         number;
  coordinator_phone:        string;
  coordinator_relationship: string;
  coordinator_thrift:       number;
}


export class NotificationConvert {
  public static toNotification(json: string): ThriftNotification {
      return JSON.parse(json);
  }

  public static NotificationToJson(value: ThriftNotification): string {
      return JSON.stringify(value);
  }
}


export type notificationQuery={
  destination: string;
 

}

export async function fetchNotification(queryParams:notificationQuery){

  try {
   
    
    const { data, status } = await axios.get(
      API_URL + "notifications", {
        headers: authHeader(),
        params: queryParams 
         }
    
    );
    const stringJson = JSON.stringify(data, null, 4);

    const responseData = NotificationConvert.toNotification(stringJson);

    // console.log( data);
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


export interface CreatePlanRequest{
 
 approve: boolean,
 user_id:number,
 contributing: boolean,
  thrift_id: string,
  coordinator_slot?: string,
  
}

export async function updateCreatePlanRequest(request:CreatePlanRequest){

 try {
  
   
   const  data = await axios.put( 
     //thrift/plan/25/request
       API_URL +"plan/"+request.thrift_id+"/request", request, { headers: authHeader() }
   
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







