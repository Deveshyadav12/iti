import React from 'react'
import Top from '../Header/top';
import Navbar from '../Header/Navbar'
import Footer2 from '../About/Footer1'
import Footer1 from '../About/footer'

const Attendance = () => {
  return (
    <>
    <Top />
    <Navbar />
    <div className="container">
    <h1 style={{marginTop: 40}}>Student Attendence Record</h1>
      <table className='table bordered'>
        <tbody>
        <tr>
            <td>Select</td>
            <td><select><option>select</option></select></td>
            <td>Select Trade</td>
            <td><select><option>select</option></select></td>
            <td><button>Search</button></td>

        </tr>


        </tbody>
      </table>
      <table className='table  table-bordered'>
        <tbody>
        <tr>
            <th>S.No</th>
            <th>Name of Trainees</th>
            <th>Trade</th>
            <th>Jan</th>
            <th>Feb</th>
            <th>Mar</th>
            <th>Apr</th>
            <th>May</th>
            <th>Jun</th>
            <th>Jul</th>
            <th>Aug</th>
            <th>Sep</th>
            <th>Oct</th>
            <th>Nov</th>
            <th>Dec</th>

        </tr>


        </tbody>
      </table>
    </div>
    <Footer1 />
    </>
  )
}

export default Attendance
