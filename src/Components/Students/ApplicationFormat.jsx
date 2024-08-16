import React from 'react'
import Top from '../Header/top'
import Navbar from '../Header/Navbar'
import Footer1 from '../About/footer'

const ApplicationFormat = () => {
  return (
    <>
    <Top />
    <Navbar />
    <div className="container">
        <h1 style={{marginTop: 30}}>Application Format</h1>
        <table className="table-bordered" style={{width: 1000, height: 100}}>
        <tbody>
            <tr>
                <th>Name of Course</th>
                <th>Duration</th>
                <th>Tentative Date</th>
                <th>When To Apply</th>
                <th>Application Format</th>
            </tr>
            <tr>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>click here</td>
            </tr>
        </tbody>

        </table>
    </div>
    <Footer1 />
      
    </>
  )
}

export default ApplicationFormat