import React from 'react';
import DashboardStatus from './DashboardStatus'
import DashboardSalesChart from './DashboardSalesChart';
import DashboardUsageChart from './DashboardUsageChart';




function Dashboard() {
  return (
    <>
    <div className='flex flex-col ' >      
      <DashboardStatus/>         
    </div>
    <div className='flex flex-col-1 m-10'>
      <div className='w-1/2 flex flex-col items-center shadow-lg'>
      <h1> Sales Revenue</h1>
      <DashboardSalesChart/>
      </div>
      <div className='w-1/3 flex flex-col items-center shadow-lg'>
      <h1> App Usage</h1> 
      <DashboardUsageChart/>
      </div>
    </div>
    </>
  )
}

export default Dashboard
