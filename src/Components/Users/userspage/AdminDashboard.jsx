import React from 'react'
import Navbars from './Navbars'
import Sidebar from './Sidebar'
import { BarChart } from '@mui/x-charts/BarChart';

const AdminDashboard = () => {
  const seriesA = {
    data: [2, 3, 1, 4, 5],
    label: 'Series A',
  };
  const seriesB = {
    data: [3, 1, 4, 2, 1],
    label: 'Series B',
  };
  const seriesC = {
    data: [3, 2, 4, 5, 1],
    label: 'Series C',
  };
  return (
    <>
    <Navbars />
    <Sidebar />
    <div className='container' style={{marginLeft: "300px"}}>
    <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card" style={{backgroundColor: "green", color: "white", textAlign: 'center'}}>
      <div class="card-body">
        <h5 class="card-title">No. of Courses</h5>
        <span class="card-text">0</span>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card" style={{backgroundColor: "blue", color: "white", textAlign: 'center'}}>
      <div class="card-body">
        <h5 class="card-title">No. Of Admins</h5>
        <span class="card-text">0</span>
      </div>
    </div>
  </div>
</div>

<div class="row" style={{marginTop: "20px"}}>
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card" style={{backgroundColor: "yellow", color: "black", textAlign: 'center'}}>
      <div class="card-body">
        <h5 class="card-title">No. of Students</h5>
        <span class="card-text">0</span>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card" style={{backgroundColor: "red", color: "white", textAlign: 'center'}}>
      <div class="card-body">
        <h5 class="card-title">No. Of Contacts</h5>
        <span class="card-text">0</span>
      </div>
    </div>
  </div>
</div>

<h1 style={{marginTop: "20px"}}>Year-Wise Admissions</h1>
<BarChart
  width={600}
  height={300}
  series={[
    { ...seriesA, stack: 'total' },
    { ...seriesB, stack: 'total' },
    { ...seriesC, stack: 'total' },
  ]}
/>

<h1 style={{marginTop: "20px"}}>Contacts</h1>
<BarChart
  width={600}
  height={300}
  series={[
    { ...seriesA, stack: 'total' },
    { ...seriesB, stack: 'total' },
    { ...seriesC, stack: 'total' },
  ]}
/>

    </div>
      
    </>
  )
}

export default AdminDashboard
