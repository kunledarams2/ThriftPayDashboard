import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import {
  Data,
  RequestMembers,
  ThriftPlanOverviewResponse,
  getThriftPlanOverview,
  thriftPlanOverviewResponseConvert,
} from "../../../services/thriftPlans";
import { useLocation } from "react-router-dom";

// const [loading, setLoading] = useState(false);

// Define your state type
type ParentState = {
  response: ThriftPlanOverviewResponse | undefined;
  loading: boolean;
  openReview: boolean;
  request: RequestMembers | undefined;
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

export function StateProvider({ children }: StateProviderProps) {
  const { state } = useLocation();
  const { data } = state;
  const [thriftPlanOverview, setthriftPlanOverview] =
    useState<ThriftPlanOverviewResponse>();
  const [requestMember, setrequestMember] = useState<RequestMembers>();

  useEffect(() => {
    // setLoading(true);
    getThriftPlanOverview(data.id).then(
      (data) => {
        const stringJson = JSON.stringify(data, null, 4);
        const responseData =
          thriftPlanOverviewResponseConvert.tothriftPlanOverviewResponse(
            stringJson
          );
        // setthriftPlanOverview(responseData);
        // if (responseData.success) {
        setParentState({
          response: responseData,
          loading: false,
          openReview: false,
          request: requestMember,
          closeReview: true,
        });
        //   setthriftPlanOverview(responseData);
        //   if (responseData.data.contributions.length == 0) setEmpty(false);
        // } else {
        //   setEmpty(true);
        // }
        // setLoading(false);
        // console.log(responseData.results);
        // setthriftPlanList(responseData);
        // setContent(response.data);
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
    response: thriftPlanOverview,
    loading: true,
    openReview: false,
    request: requestMember,
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
