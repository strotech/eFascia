import React from "react";
import {  useLocation, NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";

import sidebarImage from "../../../assets/img/sidebar-3.jpg";
import { Analytics } from 'aws-amplify';


const SidebarPanel=(props)=> {

    const {routes} = props;
    const location = useLocation();
    const activeRoute = (routeName) => {
      return location.pathname.indexOf(routeName) > -1 ? "active" : "";
    };
    // Auth.currentAuthenticatedUser()
    const recordEvent=()=>{
      console.log('Recording event!!')
      Analytics.record({
        name: 'Dashboard Event 1',
        attributes:{
          username:"archer"
        }
      })
    }
  
  return (
    <div className="sidebar"  data-color='blue'>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url("+sidebarImage+")",
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start" onClick={recordEvent}>
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              <img
                src={require("../../../assets/img/reactlogo.png").default}
                alt="..."
              />
            </div>
          </a>
          <a className="simple-text" href="/admin/about">
            DevX Prime
          </a>
        </div>
        <Nav>
          {routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li     
                  className={activeRoute(prop.layout + prop.path)}             
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            return null;
          })}
        </Nav>
      </div>
    </div>
  );
}

export default SidebarPanel;
