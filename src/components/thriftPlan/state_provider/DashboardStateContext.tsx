import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useLocation } from "react-router-dom";
import {
  Convert,
  Dashboardstats,
  fetchDashboardStat,
} from "../../../services/dashboardService";

type ParentState = {
  response: Dashboardstats | undefined;
  loading: boolean;
  openReview: boolean;
  closeReview: boolean;
};

// Define the context and its types
type StateContextType = {
  parentState: ParentState;
  setParentState: React.Dispatch<React.SetStateAction<ParentState>>;
};

const OverviewStateContext = createContext<StateContextType | undefined>(
  undefined
);

type StateProviderProps = {
  children: ReactNode;
};

export function DashboardStateProvider({ children }: StateProviderProps) {
  //   const { state } = useLocation();
  //   const { data } = state;
  const [dashboardStat, setdashboardStat] = useState<Dashboardstats>();

  useEffect(() => {
    // setLoading(true);
    fetchDashboardStat().then(
      (data) => {
        const stringJson = JSON.stringify(data, null, 4);
        const responseData = Convert.toDashboardstats(stringJson);
        // setthriftPlanOverview(responseData);
        // if (responseData.success) {
        setParentState({
          response: responseData,
          loading: false,
          openReview: false,

          closeReview: true,
        });
      },
      (error) => {
        // setLoading(false);
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        // setContent(_content);
      }
    );
  }, []);
  const [parentState, setParentState] = useState<ParentState>({
    response: dashboardStat,
    loading: true,
    openReview: false,
    closeReview: true,
  });

  return (
    <OverviewStateContext.Provider value={{ parentState, setParentState }}>
      {children}
    </OverviewStateContext.Provider>
  );
}

export function useStateContext(): StateContextType {
  const context = useContext(OverviewStateContext);

  if (context === undefined) {
    throw new Error("useStateContext must be used within a StateProvider");
  }

  return context;
}
