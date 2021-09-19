import React,{ useEffect }  from 'react';
import {API} from 'aws-amplify';
import config from '../../../aws-exports';

import DashboardPanel from '../../panels/views/DashboardPanel'

API.configure(config);

const DashboardContainer =()=> {
    // useEffect(()=>{
    //   API.get('cdedashboardapi','/telegram/covid').then(res=>console.log(res));
    // },[]);
    return (
        <DashboardPanel />
    );
  }
export default DashboardContainer;