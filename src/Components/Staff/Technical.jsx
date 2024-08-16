import React from 'react'
import Top from '../Header/top'
import Navbar from '../Header/Navbar'
import { Table } from 'react-bootstrap'
import {style} from '../../css/style.css'
import { CenterFocusWeakTwoTone } from '@mui/icons-material'
import Footer2 from '../About/Footer1'
import Footer1 from '../About/footer'
import Footer from '../Header/footer'


const Technical = () => {

  return (
    <>
    <Top />
    <Navbar />
    <div className="container" style={{marginTop: 50}}>
    <div className="head">
    <h1>Technical Staff</h1>

    </div>
    <table className="table-bordered">
        <tbody>
            <tr>
                <td style={{fontWeight: 'bold', fontSize: 20, textAlign: CenterFocusWeakTwoTone}}>S.NO</td>
                <td style={{fontWeight: 'bold', fontSize: 20, textAlign: CenterFocusWeakTwoTone}}>Name</td>
                <td style={{fontWeight: 'bold', fontSize: 20, textAlign: CenterFocusWeakTwoTone}}>Designation</td>
                <td style={{fontWeight: 'bold', fontSize: 20, textAlign: CenterFocusWeakTwoTone}}>Qualification</td>
                <td style={{fontWeight: 'bold', fontSize: 20, textAlign: CenterFocusWeakTwoTone}}>Trade</td>
                <td style={{fontWeight: 'bold', fontSize: 20, textAlign: CenterFocusWeakTwoTone}}>Date of Joining</td>
                <td style={{fontWeight: 'bold', fontSize: 20, textAlign: CenterFocusWeakTwoTone}}>Regular/Adhoc/Contract</td>
                <td style={{fontWeight: 'bold', fontSize: 20, textAlign: CenterFocusWeakTwoTone}}>CTI trained(Yes/No)</td>
                <td style={{fontWeight: 'bold', fontSize: 20, textAlign: CenterFocusWeakTwoTone}}>Remarks</td>
                <td style={{fontWeight: 'bold', fontSize: 20, textAlign: CenterFocusWeakTwoTone}}>Photo Link</td>
            </tr>
            <tr>
            <td style={{textAlign: 'center'}}>1</td>
            <td style={{textAlign: 'center'}}>Kurda Ram</td>
            <td style={{textAlign: 'center'}}>Group Instructor</td>
            <td>N.T.C</td>
            <td>GI</td>
            <td>16-08-2010</td>
            <td>Regular Fix Pay</td>
            <td>No</td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Subham Verma</td>
            <td>Instructor</td>
            <td>B.Tech. Mech. Engg.</td>
            <td>WCS & ED</td>
            <td>01-02-2016</td>
            <td>Regular Fix Pay</td>
            <td>No</td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Sumit Kumar</td>
            <td>Instructor</td>
            <td>B.Tech. Mech. Engg.</td>
            <td>Electrican</td>
            <td>01-08-2016</td>
            <td>Regular Fix Pay</td>
            <td>No</td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Kshetrapal</td>
            <td>Instructor</td>
            <td>C.T.I</td>
            <td>Electrican</td>
            <td>01-07-2013</td>
            <td>Regular Fix Pay</td>
            <td>Yes</td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Rinku Kumar</td>
            <td>Instructor</td>
            <td>C.T.I</td>
            <td>Electrican</td>
            <td>12-03-2018</td>
            <td>Regular Fix Pay</td>
            <td>Yes</td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Rampal Singh</td>
            <td>Instructor</td>
            <td>N.T.C</td>
            <td>Electrican</td>
            <td>01-04-2016</td>
            <td>Regular Fix Pay</td>
            <td>No</td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Savita Devi</td>
            <td>Instructor</td>
            <td>C.T.I</td>
            <td>Electrican</td>
            <td>02-01-2017</td>
            <td>Regular Fix Pay</td>
            <td>Yes</td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Virender Singh</td>
            <td>Instructor</td>
            <td>N.T.C</td>
            <td>Electrican</td>
            <td>01-09-2015</td>
            <td>Regular Fix Pay</td>
            <td>No</td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Vinod Kumar</td>
            <td>Instructor</td>
            <td>Diploma.Mech.Engg</td>
            <td>WCD & ED</td>
            <td>30-09-2021</td>
            <td>Regular Fix Pay</td>
            <td>No</td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td>10</td>
            <td>Renu Yadav</td>
            <td>Orincipal</td>
            <td>Diploma.Electrical Engg.</td>
            <td>Electrican</td>
            <td>01-10-2021</td>
            <td>Regular Fix Pay</td>
            <td>No</td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td>11</td>
            <td>Rakesh Kumar</td>
            <td>Instructor</td>
            <td>N.T.C</td>
            <td>Mech.Diesel Engine</td>
            <td>01-10-2011</td>
            <td>Regular Fix Pay</td>
            <td>No</td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td>12</td>
            <td>Vinay Yadav</td>
            <td>Instructor</td>
            <td>B.Tech.Mech.Engg</td>
            <td>Fitter</td>
            <td>01.08.2016</td>
            <td>Regular Fix Pay</td>
            <td>No</td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td>13</td>
            <td>Radheshyam</td>
            <td>Instructor</td>
            <td>N.T.C</td>
            <td>Electrician</td>
            <td>01.09.2019</td>
            <td>Regular Fix Pay</td>
            <td>No</td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td>14</td>
            <td>Vishnu Kumar</td>
            <td>Instructor</td>
            <td>N.T.C</td>
            <td>Electrician</td>
            <td>06.09.2021</td>
            <td>Regular Fix Pay</td>
            <td>No</td>
            <td> </td>
            <td> </td>
          </tr>
        </tbody>
       
    </table>
    </div>
    <Footer />
      
    </>
  )
}

export default Technical
