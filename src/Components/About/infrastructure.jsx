import React from 'react'
import Top from '../Header/top'
import Navbar from '../Header/Navbar'
import Footer1 from './footer'
import {style} from '../../css/style.css'

const Infrastructure = () => {
  return (
    <>
    <Top />
    <Navbar />
    <div className="container">
        <h2 style={{marginTop: 30}}>Infrastructure</h2>
<table class="table-bordered">
   <tbody>
   <tr><th>S.No.</th><th>Ownership Document / Lease Agreement for Rented Building</th><th>In Square Meters</th><th>Link to Scanned Document / Image</th>

</tr>
<tr>
    <td>1</td>
    <td>Covered Area</td>
    <td>783.62 Sq. Mt. (G.F.) + 783.62 Sq. Mt. (F.F.)</td>
    <td>Click Here</td>
</tr>
<tr>
    <td>2</td>
    <td>Total Area</td>
    <td>2500 Sq.Mt.</td>
    <td >Click Here</td>
</tr>
<tr>
    <td>3</td>
    <td>कक्षा कक्ष (Classroom)</td>
    <td>207.73 Sq. Mt.</td>
    <td>Click Here</td>
</tr>
<tr>
    <td>4</td>
    <td>इलेक्ट्रीशियन वर्कशॉप (Electrician Workshop)</td>
    <td>755.96 Sq. Mt.</td>
    <td>Click Here</td>
</tr>
<tr>
    <td>5</td>
    <td>Drawing Hall</td>
    <td>Not Required</td>
    <td></td>
</tr>
<tr>
    <td>6</td>
    <td>Audio Visual Hall</td>
    <td>Not Required</td>
    <td></td>
</tr>
<tr>
    <td>7</td>
    <td>सूचना प्रौद्योगिक प्रयोगशाला (IT Lab)</td>
    <td>45.60 Sq. Mt.</td>
    <td>Click Here</td>
</tr>
<tr>
    <td>8</td>
    <td>Play Area</td>
    <td>Not Required</td>
    <td></td>
</tr>
<tr>
    <td>9</td>
    <td>पुस्तकालय (Library)</td>
    <td>5.55 Sq. Mt.</td>
    <td>Click Here</td>
</tr>
<tr>
    <td>10</td>
    <td>Remark</td>
    <td></td>
    <td></td>
</tr>

   </tbody>
</table>
    </div>
    <Footer1 />
      
    </>
  )
}

export default Infrastructure
