import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import UserSubTab from "../../components/Customers/Usertab";
import UserListView from "../../components/Customers/UserListView";
import UserListHeader from "../../components/Customers/UserListHeader";
import styles from "./usercontent.module.css";
import { useLoaderData } from "react-router-dom";
import {
  Convert,
  User,
  UserData,
  fetchAllUser,
} from "../../services/userServices";
import { UserStateProvider, useUser } from "./UserStateProvider";
import NextKinKYCModel from "../../components/modal/NextKinKYCModel";

// type ContextType = {
//   result: UserData | undefined;
//   openReview: boolean;
// };

// // Create the context
// const UserContext = createContext<StateContextType | undefined>(undefined);

// type StateContextType = {
//   parentState: ContextType;
//   setParentState: React.Dispatch<React.SetStateAction<ContextType>>;
// };

// type StateProviderProps = {
//   children: ReactNode;
// };

// export function UserStateProvider({ children }: StateProviderProps) {
//   const loaderData = useLoaderData();
//   const [users, setUsers] = useState<UserData | undefined>(undefined);

//   useEffect(() => {
//     const stringJson = JSON.stringify(loaderData, null, 4);
//     const responseData = Convert.toUserResponse(stringJson);
//     if (responseData.success) {
//       setParentState({
//         result: responseData.data,
//         openReview: false,
//       });

//       // setUsers(responseData.data);

//       // setStatus(Boolean(progress == 100));
//     } else {
//       // setEmpty(true);
//     }
//   }, []);

//   const [parentState, setParentState] = useState<ContextType>({
//     result: users,
//     openReview: false,
//   });

//   return (
//     <UserContext.Provider value={{ parentState, setParentState }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// export function useUser(): StateContextType {
//   const context = useContext(UserContext);
//   console.log(context);
//   if (!context) {
//     throw new Error(
//       "useUser must be used within a UserContentDetail component"
//     );
//   }
//   return context;
// }
// export { UserContext };

const UserContentList = () => {
  // const loaderData = useLoaderData();

  const [users, setUsers] = useState<UserData | undefined>(undefined);

  useEffect(() => {
    fetchAllUser().then((data) => {
      const stringJson = JSON.stringify(data, null, 4);
      const responseData = Convert.toUserResponse(stringJson);
      if (responseData.success) {
        setParentState({
          result: responseData.data,
        });
      }
    });
  }, []);

  const { parentState, setParentState } = useUser();
  console.log(parentState.result);

  return (
    <UserStateProvider>
      <>
        <div className={styles.content}>
          <UserSubTab />
          <UserListHeader />
          <div className={styles.contentList}>
            {parentState.result?.user
              .slice()
              .sort((a, b) =>
                b.is_active_plan === a.is_active_plan
                  ? 0
                  : b.is_active_plan
                  ? -1
                  : 1
              )
              .reverse()
              .map((results) => (
                <UserListView user={results} />
              ))}
          </div>
        </div>
      </>
    </UserStateProvider>
  );
};

export default UserContentList;
