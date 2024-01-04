// // import { useState } from "react";
// import { Link, NavigateFunction, useNavigate } from "react-router-dom";
// import "./siderbar.css";

// // interface Prop {
// //   handleNavBarClick: (value: string) => void;
// // }
// // { handleNavBarClick }: Prop
// const SideBar = () => {
//   // let navigate: NavigateFunction = useNavigate();
//   // const [dashboardSelected, setDashboardSelected] = useState(true);
//   // const [thriftPlanSelected, setThriftPlanSelected] = useState(false);
//   // const [walletSelected, setWalletSelected] = useState(false);
//   // const [userSelected, setUserSelected] = useState(false);

//   // const dashboard = () => {
//   //   navigate("/");
//   //   setDashboardSelected(true);
//   //   setThriftPlanSelected(false);
//   //   setWalletSelected(false);
//   //   setUserSelected(false);
//   //   handleNavBarClick("Dashboard");
//   // };
//   // const thriftPlan = () => {
//   //   navigate("/thrift");
//   //   setDashboardSelected(false);
//   //   setThriftPlanSelected(true);
//   //   setWalletSelected(false);
//   //   setUserSelected(false);
//   //   handleNavBarClick("Thrift Plans");
//   // };

//   // const wallet = () => {
//   //   navigate("/wallet");
//   //   setDashboardSelected(false);
//   //   setThriftPlanSelected(false);
//   //   setWalletSelected(true);
//   //   setUserSelected(false);
//   //   handleNavBarClick("Wallet");
//   // };
//   // const user = () => {
//   //   navigate("/user");
//   //   setDashboardSelected(false);
//   //   setThriftPlanSelected(false);
//   //   setWalletSelected(false);
//   //   setUserSelected(true);
//   //   handleNavBarClick("User");
//   // }
//   // const signOut = () => {
//   //   navigate("/login");
//   // };
//   return (
//     <div className="sidebar">
//       <div className="frame-25">
//         <div className="logo">
//           <div className="logo2">
//             <div className="dreallogo-1-2">
//               <svg
//                 className="layer-x-0020-1"
//                 width="45"
//                 height="48"
//                 viewBox="0 0 45 48"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M6.58406 34.21V47.2225C6.58406 47.6508 6.92995 48.0002 7.35396 48.0002H20.6508C29.2521 48.0002 35.5931 44.2182 39.5489 38.7773C39.6934 38.5785 39.7355 38.3462 39.6701 38.1086C39.6046 37.8707 39.4497 37.694 39.2241 37.5991C24.7418 31.5099 12.1335 20.7822 1.39884 5.41673C1.2022 5.13523 0.861965 5.01944 0.536954 5.1238C0.211809 5.22802 -6.10352e-05 5.52055 -6.10352e-05 5.86505V12.2227C-6.10352e-05 12.3979 0.0495054 12.5486 0.153353 12.6888C5.71301 20.1917 12.747 26.7764 21.2548 32.443C21.6005 32.6732 21.7041 33.139 21.4888 33.4964C21.2746 33.8523 20.8208 33.9744 20.4597 33.7734C14.7905 30.619 9.49165 26.9043 4.56329 22.6293C4.32973 22.4267 4.01994 22.3828 3.74032 22.5126C3.4607 22.6424 3.29193 22.9084 3.29193 23.2193V27.5128C3.29193 27.7592 3.39376 27.9713 3.58543 28.1238C6.29394 30.2786 9.16192 32.2844 12.1891 34.1409C12.5413 34.3568 12.6628 34.8143 12.4648 35.1792C12.2671 35.544 11.8209 35.687 11.4513 35.5042C10.1946 34.8833 8.95436 34.2256 7.73069 33.5318C7.48569 33.3927 7.20742 33.3953 6.96497 33.5387C6.72239 33.6823 6.58406 33.9259 6.58406 34.2099V34.21Z"
//                   fill="white"
//                 />
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M5.05921 1.1523C14.6382 18.7683 26.3582 30.5556 40.2188 36.514C40.5837 36.6709 41.003 36.525 41.1946 36.1744C48.9632 21.9614 42.7705 -0.00012207 20.8682 -0.00012207H5.73402C5.45413 -0.00012207 5.21384 0.138386 5.07133 0.381797C4.92883 0.625207 4.92439 0.904537 5.05921 1.1523Z"
//                   fill="white"
//                 />
//               </svg>
//             </div>
//             <div className="deal-thrift">ThriftPay </div>
//           </div>
//         </div>
//         <div className="nav">
//           <div className="top">
//             <div>
//               <div
//                 className={
//                   false ? "rectangle-306" : "rectangle-3062"
//                 }
//               ></div>
//               <div className="frame-2">
//                 <svg
//                   className="icons"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <g clip-path="url(#clip0_1182_101)">
//                     <path
//                       d="M10.75 5.25V9.75C10.75 10.0152 10.6446 10.2696 10.4571 10.4571C10.2696 10.6446 10.0152 10.75 9.75 10.75H5.25C4.98478 10.75 4.73043 10.6446 4.54289 10.4571C4.35536 10.2696 4.25 10.0152 4.25 9.75V5.25C4.25 4.98478 4.35536 4.73043 4.54289 4.54289C4.73043 4.35536 4.98478 4.25 5.25 4.25H9.75C10.0152 4.25 10.2696 4.35536 10.4571 4.54289C10.6446 4.73043 10.75 4.98478 10.75 5.25ZM4.54289 19.4571L4.18934 19.8107L4.54289 19.4571C4.35536 19.2696 4.25 19.0152 4.25 18.75V14.25C4.25 13.9848 4.35536 13.7304 4.54289 13.5429L4.18934 13.1893L4.54289 13.5429C4.73043 13.3554 4.98478 13.25 5.25 13.25H9.75C10.0152 13.25 10.2696 13.3554 10.4571 13.5429C10.6446 13.7304 10.75 13.9848 10.75 14.25V18.75C10.75 19.0152 10.6446 19.2696 10.4571 19.4571C10.2696 19.6446 10.0152 19.75 9.75 19.75H5.25C4.98478 19.75 4.73043 19.6446 4.54289 19.4571ZM14.25 4.25H18.75C19.0152 4.25 19.2696 4.35536 19.4571 4.54289L19.8107 4.18934L19.4571 4.54289C19.6446 4.73043 19.75 4.98478 19.75 5.25V9.75C19.75 10.0152 19.6446 10.2696 19.4571 10.4571C19.2696 10.6446 19.0152 10.75 18.75 10.75H14.25C13.9848 10.75 13.7304 10.6446 13.5429 10.4571C13.3554 10.2696 13.25 10.0152 13.25 9.75V5.25C13.25 4.98478 13.3554 4.73043 13.5429 4.54289L13.1893 4.18934L13.5429 4.54289C13.7304 4.35536 13.9848 4.25 14.25 4.25ZM14.25 13.25H18.75C19.0152 13.25 19.2696 13.3554 19.4571 13.5429C19.6446 13.7304 19.75 13.9848 19.75 14.25V18.75C19.75 19.0152 19.6446 19.2696 19.4571 19.4571C19.2696 19.6446 19.0152 19.75 18.75 19.75H14.25C13.9848 19.75 13.7304 19.6446 13.5429 19.4571C13.3554 19.2696 13.25 19.0152 13.25 18.75V14.25C13.25 13.9848 13.3554 13.7304 13.5429 13.5429C13.7304 13.3554 13.9848 13.25 14.25 13.25Z"
//                       fill="#FAFAFB"
//                       stroke="#FAFAFB"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_1182_101">
//                       <rect width="24" height="24" fill="white" />
//                     </clipPath>
//                   </defs>
//                 </svg>
//                 <div className="dashboard">Dashboard </div>
//               </div>
//             </div>
//             <div
//               className={false ? "sidebar-item" : "sidebar-item2"}
              
//             >
//               <div
//                 className={
//                   true ? "rectangle-306" : "rectangle-3062"
//                 }
//               ></div>
//               <div className="frame-2">
//                 <svg
//                   className="icons2"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <g clip-path="url(#clip0_1182_108)">
//                     <path
//                       d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
//                       stroke="#FAFAFB"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M22.5 6H1.5V18H22.5V6Z"
//                       stroke="#FAFAFB"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M22.5 9.75C21.5631 9.59121 20.6989 9.14494 20.027 8.47304C19.3551 7.80113 18.9088 6.93686 18.75 6"
//                       stroke="#FAFAFB"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M18.75 18C18.9088 17.0631 19.3551 16.1989 20.027 15.527C20.6989 14.8551 21.5631 14.4088 22.5 14.25"
//                       stroke="#FAFAFB"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M1.5 14.25C2.43686 14.4088 3.30113 14.8551 3.97304 15.527C4.64494 16.1989 5.09121 17.0631 5.25 18"
//                       stroke="#FAFAFB"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M5.25 6C5.09121 6.93686 4.64494 7.80113 3.97304 8.47304C3.30113 9.14494 2.43686 9.59121 1.5 9.75"
//                       stroke="#FAFAFB"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_1182_108">
//                       <rect width="24" height="24" fill="white" />
//                     </clipPath>
//                   </defs>
//                 </svg>
//                 <div className="thrift-plans">Thrift Plans </div>
//               </div>
//             </div>
//             <div
//               className={true ? "sidebar-item" : "sidebar-item2"}
              
//             >
//               <div
//                 className={true ? "rectangle-306" : "rectangle-3062"}
//               ></div>
//               <div className="frame-2">
//                 <svg
//                   className="icons3"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <g clip-path="url(#clip0_1182_120)">
//                     <path
//                       d="M3.75 6V18C3.75 18.3978 3.90804 18.7794 4.18934 19.0607C4.47064 19.342 4.85218 19.5 5.25 19.5H20.25C20.4489 19.5 20.6397 19.421 20.7803 19.2803C20.921 19.1397 21 18.9489 21 18.75V8.25C21 8.05109 20.921 7.86032 20.7803 7.71967C20.6397 7.57902 20.4489 7.5 20.25 7.5H5.25C4.85218 7.5 4.47064 7.34196 4.18934 7.06066C3.90804 6.77936 3.75 6.39782 3.75 6ZM3.75 6C3.75 5.60218 3.90804 5.22064 4.18934 4.93934C4.47064 4.65804 4.85218 4.5 5.25 4.5H18"
//                       stroke="#FAFAFB"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M17.0625 13.125C17.0625 13.2286 16.9786 13.3125 16.875 13.3125C16.7714 13.3125 16.6875 13.2286 16.6875 13.125C16.6875 13.0214 16.7714 12.9375 16.875 12.9375C16.9786 12.9375 17.0625 13.0214 17.0625 13.125Z"
//                       fill="#FAFAFB"
//                       stroke="#FAFAFB"
//                       stroke-width="1.5"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_1182_120">
//                       <rect width="24" height="24" fill="white" />
//                     </clipPath>
//                   </defs>
//                 </svg>
//                 <div className="wallets">Wallets </div>
//               </div>
//             </div>
//             <div className="sidebar-item2">
//               <div className="rectangle-3062"></div>
//               <div className="frame-2">
//                 <svg
//                   className="icons4"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <g clip-path="url(#clip0_1182_128)">
//                     <path
//                       d="M11.25 17.25H4.5V21H11.25V17.25Z"
//                       stroke="#FAFAFB"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M6 17.25V16.125C6 15.6277 6.19754 15.1508 6.54917 14.7992C6.90081 14.4475 7.37772 14.25 7.875 14.25C8.37228 14.25 8.84919 14.4475 9.20083 14.7992C9.55246 15.1508 9.75 15.6277 9.75 16.125V17.25"
//                       stroke="#FAFAFB"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M14.25 3V8.25H19.5"
//                       stroke="#FAFAFB"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M15 21H18.75C18.9489 21 19.1397 20.921 19.2803 20.7803C19.421 20.6397 19.5 20.4489 19.5 20.25V8.25L14.25 3H5.25C5.05109 3 4.86032 3.07902 4.71967 3.21967C4.57902 3.36032 4.5 3.55109 4.5 3.75V12"
//                       stroke="#FAFAFB"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_1182_128">
//                       <rect width="24" height="24" fill="white" />
//                     </clipPath>
//                   </defs>
//                 </svg>
//                 <div className="kyc">KYC </div>
//               </div>
//             </div>
//             <div 
//               className={true ? "sidebar-item" : "sidebar-item2"}
              
//               >
//               <div 
//                className={true ? "rectangle-306" : "rectangle-3062"}
//                ></div>
//               <div className="frame-2">
//                 <svg
//                   className="icons5"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <g clip-path="url(#clip0_1182_138)">
//                     <path
//                       d="M18 11.25C18.8734 11.2493 19.7349 11.4524 20.516 11.843C21.2972 12.2335 21.9765 12.8009 22.5 13.5"
//                       stroke="#FAFAFB"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M1.5 13.5C2.0235 12.8009 2.70281 12.2335 3.48398 11.843C4.26514 11.4524 5.12663 11.2493 6 11.25"
//                       stroke="#FAFAFB"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M12 17.25C14.0711 17.25 15.75 15.5711 15.75 13.5C15.75 11.4289 14.0711 9.75 12 9.75C9.92893 9.75 8.25 11.4289 8.25 13.5C8.25 15.5711 9.92893 17.25 12 17.25Z"
//                       stroke="#FAFAFB"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M6.75 20.25C7.2884 19.3364 8.0559 18.579 8.97665 18.0529C9.8974 17.5267 10.9395 17.25 12 17.25C13.0605 17.25 14.1026 17.5267 15.0233 18.0529C15.9441 18.579 16.7116 19.3364 17.25 20.25"
//                       stroke="#FAFAFB"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M15.0938 7.5C15.234 6.95678 15.5238 6.46377 15.9302 6.07697C16.3366 5.69017 16.8433 5.42508 17.3927 5.31179C17.9422 5.19851 18.5125 5.24158 19.0387 5.43611C19.5649 5.63064 20.0261 5.96883 20.3697 6.41229C20.7134 6.85574 20.9258 7.38668 20.9829 7.9448C21.04 8.50293 20.9394 9.06587 20.6926 9.56971C20.4458 10.0735 20.0627 10.4981 19.5867 10.7951C19.1108 11.0921 18.561 11.2497 18 11.25"
//                       stroke="#FAFAFB"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M6.00001 11.25C5.43898 11.2497 4.88926 11.0921 4.4133 10.7951C3.93733 10.4981 3.55419 10.0735 3.30739 9.56971C3.06059 9.06587 2.96002 8.50293 3.01709 7.9448C3.07417 7.38668 3.28661 6.85574 3.63028 6.41229C3.97396 5.96883 4.4351 5.63064 4.96133 5.43611C5.48756 5.24158 6.0578 5.19851 6.60728 5.31179C7.15676 5.42508 7.66346 5.69017 8.06985 6.07697C8.47623 6.46377 8.76601 6.95678 8.90626 7.5"
//                       stroke="#FAFAFB"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_1182_138">
//                       <rect width="24" height="24" fill="white" />
//                     </clipPath>
//                   </defs>
//                 </svg>
//                 <div className="customers">Users </div>
//               </div>
//             </div>
//           </div>
//           <div  className="sidebar-item2">
//             <div className="rectangle-3063"></div>
//             <div className="frame-2">
//               <svg
//                 className="icons6"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <g clip-path="url(#clip0_1182_158)">
//                   <path
//                     d="M9.75 3.75H4.5C4.30109 3.75 4.11032 3.82902 3.96967 3.96967C3.82902 4.11032 3.75 4.30109 3.75 4.5V19.5C3.75 19.6989 3.82902 19.8897 3.96967 20.0303C4.11032 20.171 4.30109 20.25 4.5 20.25H9.75"
//                     stroke="#FA8080"
//                     stroke-width="1.5"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   />
//                   <path
//                     d="M9.75 12H20.25"
//                     stroke="#FA8080"
//                     stroke-width="1.5"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   />
//                   <path
//                     d="M16.5 8.25L20.25 12L16.5 15.75"
//                     stroke="#FA8080"
//                     stroke-width="1.5"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   />
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_1182_158">
//                     <rect width="24" height="24" fill="white" />
//                   </clipPath>
//                 </defs>
//               </svg>
//               <div className="customers2">Log Out </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideBar;



import NavItem from '../navItems/NavItem'
import classes from './siderbar.module.css'
import Dreallogo from '../../assets/Dreallogo.svg'
import {wallet,walletAc,users,usersAc,dashboard,dashboardAc,thriftPlans,thriftPlansAc} from '../../assets/nav'
const SideBar = () => {
  return (
    <div className={classes.sidebar}>
      <header className={classes.header}>
    <p><img src={Dreallogo} alt="Dreal" /></p>
    <p>DealThrift</p>
      </header>
      <nav>
    <NavItem to='/dashboard' inActiveicon={dashboard} activeIcon={dashboardAc}>Dashboard</NavItem>
    <NavItem to='/thrift-plans' inActiveicon={thriftPlans} activeIcon={thriftPlansAc}>Thrift Plans</NavItem>
    <NavItem to='/wallets' inActiveicon={wallet} activeIcon={walletAc} >Wallets</NavItem>
    <NavItem to='/users' inActiveicon={users} activeIcon={usersAc} >Users</NavItem>
      </nav>
      <div>logout</div>
    </div>
  )
}

export default SideBar