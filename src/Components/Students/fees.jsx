import React from 'react'
import Top from '../Header/top'
import Navbar from '../Header/Navbar'
import Footer1 from '../About/footer'

const Fees = () => {
  return (
    <>
    <Top />
    <Navbar />
    <div className="container">
        <h1 style={{marginTop: 30}}>Fees</h1>
        <table className="table-bordered text-center" style={{width: 1000, height: 200}}>
            <tbody>
                <tr>
                    <th>Course Name</th>
                    <th>Fees</th>
                </tr>
                <tr>
                    <td>Electrician</td>
                    <td>24000</td>
                </tr>
                <tr>
                    <td>Fitter</td>
                    <td>22000</td>
                </tr>
                <tr>
                    <td>Mech Diesel</td>
                    <td>20000</td>
                </tr>
            </tbody>
        </table>
    </div>
    <Footer1 />
      
    </>
  )
}

export default Fees
