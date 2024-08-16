import React from 'react'

import  Navbars  from '../Navbars'
import TextField from '@mui/material/TextField'

const Fees1 = () => {
  return (
    <>
   <Navbars />
    <div className="container">
        <h1 style={{marginTop: 30}}>Fees</h1>
        <br></br>
        <br></br>

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add New Course Fees
</button>
        <table className="table-bordered text-center" style={{width: 1000, height: 200}}>
            <tbody>
                <tr>
                    <th>#</th>
                    <th>Fees</th>
                    <th>Curd</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>24000</td>
                    <td><i class="bi bi-pencil-square"></i></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>22000</td>
                    <td><i class="bi bi-pencil-square"></i></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>20000</td>
                    <td><i class="bi bi-pencil-square"></i></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" style={{marginTop: 70}}>
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Course Fees</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <h4>Enter ID:</h4>
      <TextField id="standard-basic" label="id" variant="standard" />
      <br></br>
      <br></br>
      <h4>Enter Fees:</h4>
      <TextField id="standard-basic" label="Fee" variant="standard" />
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

export default Fees1
