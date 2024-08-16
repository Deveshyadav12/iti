import React from 'react'
import Navbar from './Navbars'

const AddAdmin = () => {
  return (
    <>
    <Navbar />
   <div className='container'>
   <h1 style={{alignItems: 'center', textAlign: 'center'}}>Add Admins</h1>
   <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="text" className="form-control"  />
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  
  <button type="submit" class="btn btn-primary">Add Admin</button>
</form>

   </div>
      
    </>
  )
}
  export default AddAdmin;
