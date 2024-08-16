import React from 'react'
import Top from '../Header/top'
import Navbar from '../Header/Navbar'
import Footer1 from '../About/footer'

const Schemes = () => {
  return (
    <>
    <Top />
    <Navbar />
    <div className="container">
    <h1 style={{marginTop: 100}}>Schemes</h1>
    <table className="table-bordered" style={{width: 1000, height: 100}}>
    <tbody>
        <tr>
            <th>Name of the Scheme</th>
            <th>Total Capacity</th>
            <th>Duration</th>
            <th>Admitted in current Financial Year</th>
            <th>Current Status</th>
        </tr>
        <tr>
        <td>Craftmen Training Scheme</td>
        <td>316</td>
        <td>2 Years & 1 Year</td>
        <td>78</td>
        <td>192</td>
        </tr>
        <tr>
        <td>Modular Rmployable Scheme</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        </tr>
        <tr>
        <td>Other Schemes</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        </tr>
        
    </tbody>

    </table>
</div>
<Footer1 />
      
    </>
  )
}

export default Schemes
