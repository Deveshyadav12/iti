import React from 'react'
import Top from '../Header/top'
import Navbar from '../Header/Navbar'
import Footer1 from '../About/footer'

const AdmissionCriteria = () => {
  return (
    <>
    <Top />
    <Navbar />
 <div className="container">
 <h1 style={{marginTop: 30}}>Admission Criteria</h1>
    <span>
       <ol>
        <li>Merit</li>
        <li>Written Test</li>
        <li>Interview</li>
        <li>Any Other</li>
       </ol>
    </span>
    <table className="table-bordered" style={{width: 1000, height: 300}}>
    <tbody>
      <tr>
        <th>S.No.</th>
        <th>Name of Trade under (NCVT)</th>
        <th>Duration of Training</th>
        <th>Eligibility Qualification</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Mechanic Diesel Engine</td>
        <td>1 Year</td>
        <td>10th</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Fitter</td>
        <td>2 Year</td>
        <td>10th</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Electrician</td>
        <td>2 Year</td>
        <td>10th</td>
      </tr>
      <tr>
        <td>4</td>
        <td>COPA</td>
        <td>1 Year</td>
        <td>10th</td>
      </tr>
    </tbody>

    </table>

 </div>
 <Footer1 />
      
    </>
  )
}

export default AdmissionCriteria
