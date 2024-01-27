import axios from "axios";
import authHeader from "./authHeaders";


const API_URL = "https://thriftpay.onrender.com/api/thrift/";

export type Dashboardstats = {
    success: boolean;
    data:    DashboardStatsData;
}

export type DashboardStatsData = {
    total_users:                       number;
    total_active_users:                number;
    total_active_thrift_plan:          number;
    total_pending_thrift_plan:         number;
    total_completed_thrift_plan:       number;
    total_virtual_account_transaction: number;
    total_virtual_account_Inflow:      number;
    total_virtual_account_Outflow:     number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toDashboardstats(json: string): Dashboardstats {
        return JSON.parse(json);
    }

    public static dashboardstatsToJson(value: Dashboardstats): string {
        return JSON.stringify(value);
    }
}



export async function fetchDashboardStat() {
    try {
      // 👇️ const data: GetUsersResponse
      const { data, status } = await axios.get(
        API_URL+"dashboard/stats", { headers: authHeader() }
      
      );

        const stringJson = JSON.stringify(data, null, 4)
      const responseData = Convert.toDashboardstats(stringJson)
      localStorage.setItem('dashStats', JSON.stringify(data));
    
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