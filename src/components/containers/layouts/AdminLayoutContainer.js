import React from 'react';
import {  Route } from "react-router-dom";

import routes from "../../core/routes/Admin";
import AdminLayoutPanel from '../../panels/layouts/AdminLayoutPanel'

const AdminLayoutContainer =()=> {

    const getRoutes = (routes) => {
      return routes.map((prop, key) => {
        if (prop.layout === "/admin") {
          return (
            <Route
              path={prop.layout + prop.path}
              render={(props) => <prop.component {...props} />}
              key={key}
            />
          );
        } else {
          return null;
        }
      });
    };
    return (
        <AdminLayoutPanel routes={routes} getRoutes={getRoutes}/>
    );
  }
export default AdminLayoutContainer;