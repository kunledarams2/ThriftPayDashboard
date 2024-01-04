import React from 'react'
import { ActiveUsers } from '../../assets/IconsExtension/ActiveUsers';
import { ArrowPointer } from '../../assets/IconsExtension/ArrowPointer';
import { InactiveUsers } from '../../assets/IconsExtension/InactiveUsers';
import { TotalUsers } from '../../assets/IconsExtension/TotalUsers';
import "./overview.css";

const CustomerOverview = () => {
  return (
    
          <div className="frame">
            <div className="total-thrift-plans">
              <div className="div">
                <div className="icon-wrapper">
                  <div className="icon">
                    <TotalUsers />
                  </div>
                </div>
                <div className="div-2">
                  <div className="div-3">
                    <div className="text-wrapper">Total Users</div>
                    <div className="text-wrapper-2">3200</div>
                  </div>
                  <div className="change">
                    <div className="change-2">
                      <ArrowPointer />
                      <div className="text-wrapper-3">+2.5%</div>
                    </div>
                    <div className="text-wrapper-4">Last 7 Days</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="total-thrift-plans">
              <div className="div">
                <div className="icon-wrapper">
                  <div className="icons-wrapper">
                    < ActiveUsers />
                  </div>
                </div>
                <div className="div-2">
                  <div className="div-3">
                    <div className="text-wrapper">Active Users</div>
                    <div className="text-wrapper-2">237</div>
                  </div>
                  <div className="change">
                    <div className="change-2">
                      <ArrowPointer />
                      <div className="text-wrapper-3">+2.5%</div>
                    </div>
                    <div className="text-wrapper-4">Last 7 Days</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="total-thrift-plans">
              <div className="div">
                <InactiveUsers/>
                <div className="div-2">
                  <div className="div-3">
                    <div className="text-wrapper">Inactive Users</div>
                    <div className="text-wrapper-2">45</div>
                  </div>
                  <div className="change">
                    <div className="change-2">
                      < ArrowPointer/>
                      <div className="text-wrapper-3">+2.5%</div>
                    </div>
                    <div className="text-wrapper-4">Last 7 Days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      };
      
      
      

export default CustomerOverview