import React from 'react'
import Top1 from '../Header/top'
import Navbar from '../Header/Navbar'
import Footer1 from './footer'

const StateDirectorate = () => {
  return (
    <>
     <Top1 />
     <Navbar />
     <div className="container">
        <h2 style={{marginTop: 100}}>State Directorate</h2>
        
        <table className=" table bordered">
        
        <tr>
            <td>Name of the Directorate:</td>
            <td>	Directorate of Technical Education, Rajasthan</td>
        </tr>
        <tr>
            <td>Address of Directorate:</td>
            <td>W-6, Gaurav Path, Residency Road, Jodhpur - 342032</td>
        </tr>
        <tr>
            <td>Contact Number :</td>
            <td>0291 - 2434395</td>
        </tr>
        <tr>
            <td>Mobile Number :</td>
            <td>N/A</td>
        </tr>
        <tr>
            <td>Fax Number :</td>
            <td>	N/A</td>
        </tr>
        <tr>
            <td>Email Address :</td>
            <td>dte_raj@yahoo.com</td>
        </tr>
        </table>
     </div> 
     <Footer1 />
    </>
  )
}

export default StateDirectorate
