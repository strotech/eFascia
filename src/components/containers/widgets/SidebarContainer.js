import React from 'react';
import SidebarPanel from '../../panels/widgets/SidebarPanel';

const SidebarContainer =(props)=> {
  const {routes} = props;
    return (
        <SidebarPanel routes={routes} />
    );
  }
export default SidebarContainer;