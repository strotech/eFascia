import React from 'react';
import DashboardChart from '../widgets/DashboardChart';

const DashboardSidebarPanel =()=> {
    return (
      <div className="card">
        <div className="card-body">
          <DashboardChart />
        </div>
      </div>
    );
  }

export default DashboardSidebarPanel;