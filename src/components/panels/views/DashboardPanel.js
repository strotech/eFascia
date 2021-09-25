import React from 'react';
import DashboardChart from '../widgets/DashboardChart';

const DashboardSidebarPanel =()=> {
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-12 card-margin">
            <div class="card dashboard-box">
              <div class="card-body p-0">
                <DashboardChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default DashboardSidebarPanel;