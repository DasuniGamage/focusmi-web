import React from 'react';
import DashboardStatus from './DashboardStatus'
import DashboardSalesChart from './DashboardSalesChart';
import DashboardUsageChart from './DashboardUsageChart';
import UsersTable from '../counsellors/UsersTable';
import Users from './Users';
import Revenue from './Revenue';

const usersData = [
  { id: 1, name: 'John Doe', nic: '123456789X', contact: '1234567890', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', nic: '987654321Y', contact: '9876543210', email: 'jane@example.com' },
  { id: 2, name: 'Jane Smith', nic: '987654321Y', contact: '9876543210', email: 'jane@example.com' },  
  { id: 2, name: 'Jane Smith', nic: '987654321Y', contact: '9876543210', email: 'jane@example.com' },
  { id: 1, name: 'John Doe', nic: '123456789X', contact: '1234567890', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', nic: '987654321Y', contact: '9876543210', email: 'jane@example.com' },
  { id: 2, name: 'Jane Smith', nic: '987654321Y', contact: '9876543210', email: 'jane@example.com' },
  { id: 2, name: 'Jane Smith', nic: '987654321Y', contact: '9876543210', email: 'jane@example.com' },  
  { id: 2, name: 'Jane Smith', nic: '987654321Y', contact: '9876543210', email: 'jane@example.com' },
  { id: 1, name: 'John Doe', nic: '123456789X', contact: '1234567890', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', nic: '987654321Y', contact: '9876543210', email: 'jane@example.com' },
];




function Dashboard() {
  return (
    <div className='max-h-[80vh] overflow-y-scroll'>
    <div className='flex flex-col ' >      
      <DashboardStatus/>         
    </div>
    <div className='flex flex-col-1 gap-4 m-8'>
      <div className='w-1/2 flex flex-col items-center shadow-lg rounded-md'>
      <h1 className='font-semibold'> Income</h1>
      <Revenue/>
      </div>
      <div className='w-1/3 flex flex-col items-center shadow-lg rounded-md'>
      
      </div>
      <div className='w-1/3 '>
        <div className=' w-full h-1/2 shadow-lg rounded-md flex flex-col items-center'>
        <h1 className='font-semibold'> App Usage</h1> 
        <DashboardUsageChart/>
        </div>
        <div>aaaa</div>
      </div>
    </div>
    <div>
      <Users users={usersData} />
    </div>
    </div>
  )
}

export default Dashboard
