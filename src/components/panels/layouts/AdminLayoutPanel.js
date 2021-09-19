import React from 'react';
import { Switch } from "react-router-dom";

import SidebarContainer from '../../containers/widgets/SidebarContainer';
import AdminNavbarContainer from '../../containers/widgets/AdminNavbarContainer';


const AdminLayoutPanel =(props)=> {
  const mainPanel = React.useRef(null);
  const {routes,getRoutes} = props;
  React.useEffect(() => {
    mainPanel.current.scrollTop = 0;
  })
    return (
      <div className="wrapper">
        <SidebarContainer routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbarContainer /> 
          <div className="content">
            <Switch>{getRoutes(routes)}</Switch>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    );
  }

export default AdminLayoutPanel;