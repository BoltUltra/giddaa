import React from 'react'
import Sidebar from './Sidebar'
import Transactions from './Transactions'

const Dashboard = () => {
  return (
    <section className='flex items-start'>
      <Sidebar />
      <div className='ml-[25%]'>Dashboard</div>
    </section>
  )
}

export default Dashboard