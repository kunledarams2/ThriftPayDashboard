import React from 'react'
import CustomerChart from '../../components/Customers/CustomerChart';
import CustomerOverview from '../../components/Customers/customerOverview';
import UserDistribution from '../../components/Customers/UserDistribution';
import "./customer.css";



const CustomerDashboard = () => {
  return (
    <div>
         <div className="tabs">
        <div className="tab">
          <div className="frame-1000002689">
            <div className="tab-label">Overview </div>
          </div>
          <div className="rectangle-3"></div>
        </div>
        <div className="tab">
          <div className="frame-1000002690">
            <div className="tab-label2">Users </div>
          </div>
          <div className="rectangle-32"></div>
        </div>
      </div>

      <div className="info">
  <CustomerOverview/>
</div>
<div className="user">
<div className="usechart">
  <CustomerChart/>
</div>

</div>
<div className="userdistribution">
  <UserDistribution/>
</div>
    </div>
  )
}

export default CustomerDashboard