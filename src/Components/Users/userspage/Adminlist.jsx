import React from 'react'
import Navbar from './Navbars'
import { IconButton, Tooltip, Typography } from '@mui/material'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Delete } from '@mui/icons-material'


const Adminlist = () => {
  
  const navigate = useNavigate();

  const handleAddAdmin = () => {
    // Add your logic here to handle the button click
    navigate('/admin/addadmin');

  }

  return (
    <>

    <div className='container-fluid'>
        <Navbar />
        <div className='container'>
         <h1 style={{alignItems: 'center', textAlign: 'center'}}>Admins Lists</h1>
        <Button className='btn btn-warning' onClick={handleAddAdmin}>Add Admin</Button>
         <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Username</th>
      <th scope="col">Password</th>
      <th scope="col">Curd</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>
      <Tooltip title="Delete">
  <IconButton color='primary'>
    <Delete />
  </IconButton>
</Tooltip>

</td>
    </tr>
  </tbody>
</table>
        </div>
    </div>
      
    </>
  )
}

export default Adminlist
