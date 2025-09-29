import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from './Siderber';

const DashboardLayout = () => {
  return (
    <div>
      <div className='relative min-h-screen md:flex'>
        <Sidebar/>
      </div>

      <div className='flex-1 md:ml-64'>
        <div className='p-5'>
             <Outlet/>
        </div>
     
      </div>
      
    </div>
  );
};

export default DashboardLayout;