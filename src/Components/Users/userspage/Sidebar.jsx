import React from 'react'
import { Style1 } from "./style1.css";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='box1'>
        <div className='link1'>
        <Link style={{textDecoration: "none", color: "white", paddingBottom: "20px", paddingTop: "70px"}} to="/admin/Dashboard">Dashboard</Link>
        </div>
        <hr/>
        <div className='link6'>
        <Link style={{textDecoration: "none", color: "white"}} to="#">Students</Link>
        </div>
        <hr/>
        <div className='link2'>
        <Link style={{textDecoration: "none", color: "white"}} to="/admin/Courses">Courses</Link>
        </div>
        <hr/>
        <div className='link3'>
        <Link style={{textDecoration: "none", color: "white"}} to="/admin/adminlist">Admins</Link>
        </div>
        <hr/>
        <div className='link4'>
        <Link style={{textDecoration: "none", color: "white"}} to="/admin/fees">Fees</Link>
        </div>
        <hr/>
        <div className='link5'>
        <Link style={{textDecoration: "none", color: "white"}} to="#">Contacts</Link>
        </div>

            
        </div>
    </div>
      
    </>
  )
}

export default Sidebar
