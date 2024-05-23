import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  Convert,
  KycAddress,
  KycBvn,
  KycID,
  KycNextKins,
  UserData,
  UserKYCData,
  fetchAllUser,
} from "../../services/userServices";
import { useLoaderData } from "react-router-dom";

// Define the context type
type ContextType = {
  result?: UserData | undefined;
  openReview?: boolean;
  kycInfoLoaded?: boolean;
  kycBVN?: KycBvn | undefined;
  kycAddress?: KycAddress | undefined;
  kycId?: KycID | undefined;
  kycNexkKins?: KycNextKins | undefined;
  kycType?: string;
  userKYCData?: UserKYCData;
};

const UserContext = createContext<StateContextType | undefined>(undefined);

type StateContextType = {
  parentState: ContextType;
  setParentState: React.Dispatch<React.SetStateAction<ContextType>>;
};

type StateProviderProps = {
  children: React.ReactNode;
};

export function UserStateProvider({ children }: StateProviderProps) {
  const [parentState, setParentState] = useState<ContextType>({
    result: undefined,
    openReview: false,
    kycInfoLoaded: false,
  });

  return (
    <UserContext.Provider value={{ parentState, setParentState }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser(): StateContextType {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useUser must be used within a UserContentDetail component"
    );
  }
  return context;
}
