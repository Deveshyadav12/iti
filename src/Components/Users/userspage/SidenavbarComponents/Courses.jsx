import React from 'react'
import Navbar from '../Navbars'
import DeleteIcon from '@mui/icons-material/Delete';
import { Navigate } from 'react-router-dom';
import TextField from '@mui/material/TextField'

const Courses = () => {

 
  return (
    <>
    <Navbar />
    <div className='container'>
        <h1 style={{textAlign: 'center'}}>Courses Lists</h1>
        <br></br>
        <br></br>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add New Courses
</button>

        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Courses</th>
      <th scope="col">Curd</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Electrician</td>
      <td><DeleteIcon /> &nbsp; <i class="bi bi-pencil-square"></i></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Fitter</td>
      <td><DeleteIcon /> &nbsp; <i class="bi bi-pencil-square"></i></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Mechanical Diesel</td>
      <td><DeleteIcon /> &nbsp; <i class="bi bi-pencil-square"></i></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>COPA</td>
      <td><DeleteIcon /> &nbsp; <i class="bi bi-pencil-square"></i></td>
    </tr>
  </tbody>
</table>


    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" style={{marginTop: 70}}>
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New Course</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <h4>Course Name:</h4>
      <TextField id="standard-basic" label="Courses" variant="standard" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Add</button>
      </div>
    </div>
  </div>
</div>
      
    </>
  )
}

export default Courses
