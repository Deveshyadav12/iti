import React from 'react'
import Top from '../Header/top'
import Navbar from '../Header/Navbar'
import Footer1 from './footer'
import {style} from '../../css/style.css'

const TradeSpecific = () => {
  return (
    <>
    <Top />
    <Navbar />
    <div className="container">
        <h2 style={{marginTop: 100}}>Trade Specifications</h2>
<table className="table-bordered spectable2" style={{textAlign: 'center', height: 250 }}>
   <tbody>
   <tr><th>Trade Name</th><th>Unit</th><th>Class Rooms area per Unit </th><th>Total Class Rooms Area for Trade</th>
   <th>Working Area Per Unit</th><th>Total Working Area for Trade</th><th>Document Related</th>

</tr>
<tr>
    <td>COPA</td>
    <td>02</td>
    <td></td>
    <td>30 Sq.Mt</td>
    <td>63 Sq.Mt</td>
    <td>63.01 Sq.Mt</td>
    <td>63.01 Sq.Mt</td>


</tr>
<tr>
    <td>Mechanic Diesel Engine</td>
    <td>02</td>
    <td>25 Sq. Mt.</td>
    <td>28.88 Sq.Mt</td>
    <td>210 Sq.Mt. including Parking Area</td>
    <td>215 Sq.Mt. including Parking Area</td>
    <td>63.01 Sq.Mt</td>


</tr>
<tr>
    <td>Fitter</td>
    <td>02</td>
    <td>25 Sq.Mt</td>
    <td>30.81 Sq.Mt</td>
    <td>88.00 Sq.Mt</td>
    <td>90.97 Sq.Mt</td>
    <td>63.01 Sq.Mt</td>

</tr>
<tr>
    <td>Electrican</td>
    <td>02</td>
    <td></td>
    <td>117.64 Sq.Mt</td>
    <td>98 Sq.Mt</td>
    <td>511.01 Sq.Mt</td>
    <td>63.01 Sq.Mt</td>

</tr>



   </tbody>
</table>
    </div>
    <Footer1 />
      
    </>
  )
}

export default TradeSpecific
