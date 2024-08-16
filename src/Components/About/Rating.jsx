import React from 'react'
import Top from '../Header/top'
import Navbar from '../Header/Navbar'
import Footer1 from './footer'
import {style} from '../../css/style.css'



const Rating = () => {
  return (
    <>
     <Top />
     <Navbar />
     <div className="container">
     <h1 style={{marginTop: 80}}>Institute Rating</h1>
     <table className="  table bordered spectable2">
      <tbody>
      <tr>
        <td style={{textAlign: 'center'}}>NA</td>
      </tr>

      </tbody>
      </table>

     </div>
     <Footer1 />

    </>
  )
}

export default Rating
