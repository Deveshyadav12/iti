import React from 'react'
import Top from '../Header/top'
import Navbar from '../Header/Navbar'
import Footer from '../Header/footer'

const Trades = () => {
  return (
    <>
    <Top />
    <Navbar />
    <div className="container">
    <div className="heading" style={{marginTop: 100}}>
        <h1>Summary of Trades Affiliated to NCVT</h1>
    </div>
    <div> 
    <table className="table-bordered">
    <tbody>
        <tr>
            <th>Name of the Trade</th>
            <th>No. of Units</th>
            <th>Shifts Running 1</th>
            <th>Shifts Running 2</th>
            <th>Shifts Running 3</th>
            <th>Seating Capacity per Units</th>
            <th>Total Seating Capacity</th>
            <th>Affiliation Date</th>
            <th>DGET Order</th>
        </tr>
        <tr>
            <td>Electrician</td>
            <td>10</td>
            <td>5</td>
            <td>5</td>
            <td></td>
            <td>20</td>
            <td>200</td>
            <td>27-11-2009</td>
            <td>Click Here</td>
        </tr>
        <tr>
            <td>Fitter</td>
            <td>2</td>
            <td>1</td>
            <td>1</td>
            <td></td>
            <td>20</td>
            <td>40</td>
            <td>27-11-2009</td>
            <td>Click Here</td>
        </tr>
        <tr>
            <td>Mechanic Diesel Engine</td>
            <td>2</td>
            <td>1</td>
            <td>1</td>
            <td></td>
            <td>24</td>
            <td>48</td>
            <td>27-11-2009</td>
            <td>Click Here</td>
        </tr>
        <tr>
            <td>COPA</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
            <td></td>
            <td>24</td>
            <td>48</td>
            <td>27-11-2009</td>
            <td>Click Here</td>
        </tr>
    </tbody>

    </table>
    </div>
    <div className="heading" style={{marginTop: 100}}>
        <h1>Summary of Trades Affiliated to NCVT</h1>
    </div>
    <div> 
    <table className="table-bordered">
    <tbody>
        <tr>
            <th>Trade Name</th>
            <th>Shift intake capacity 1</th>
            <th>Shift intake capacity 2</th>
            <th>Shift intake capacity 3</th>
            <th>Total No. of Units</th>
            <th>DGET order no.</th>
            <th>Document</th>
        </tr>
        <tr>
            <td>COPA</td>
            <td>24</td>
            <td>24</td>
            <td></td>
            <td>2</td>
            <td>DGET-6/20/131/2009-TC</td>
            <td></td>
        </tr>
        <tr>
            <td>Mechanic Diesel Engine</td>
            <td>24</td>
            <td>24</td>
            <td></td>
            <td>2</td>
            <td>DGET-6/20/131/2009-TC</td>
            <td></td>
        </tr>
        <tr>
            <td>Fitter</td>
            <td>20</td>
            <td>20</td>
            <td></td>
            <td>2</td>
            <td>DGET-6/20/131/2009-TC</td>
            <td></td>
        </tr>
        <tr>
            <td>Electrician</td>
            <td>100</td>
            <td>100</td>
            <td></td>
            <td>10</td>
            <td>DGET-6/20/131/2009-TC</td>
            <td></td>
        </tr>
    </tbody>

    </table>
    </div>
    <div className="heading" style={{marginTop: 100}}>
        <h1>Summary of Trades Affiliated to SCVT</h1>
    </div>
    <div>
    <table className="table-bordered">
    <tbody>
    <tr>
            <th>Trade Name</th>
            <th>Shift intake capacity 1</th>
            <th>Shift intake capacity 2</th>
            <th>Shift intake capacity 3</th>
            <th>Total No. of Units</th>
            <th>Remark</th>
        </tr>
        </tbody>

</table>
    </div>

    </div>
    <Footer />
    
      
    </>
  )
}

export default Trades
