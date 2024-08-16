import React from 'react'
import Top from '../Header/top';
import Navbar from '../Header/Navbar';
import { Collapse } from 'react-bootstrap'
import Footer1 from '../About/footer'
import {style} from '../../css/style.css'

const Progress = () => {
  return (
    <>
    <Top />
    <Navbar />
    <div className="container">
    <h1 style={{marginTop: 40}}>Progress Card</h1>
      <table className='table bordered'>
        <tbody>
        <tr>
            <td>Select Session</td>
            <td><select><option>select</option></select></td>
            <td>Select Trade</td>
            <td><select><option>select</option></select></td>
            <td><button>Search</button></td>

        </tr>


        </tbody>
      </table>
      <table className='table table-bordered'>
        <tbody>
        <tr>
            <th>Student Name</th>
            <th>Trade</th>
            <th>Year</th>
            <th>Monthly Test 1</th>
            <th>Monthly Test 2</th>
            <th>Monthly Test 3</th>
            <th>Monthly Test 4</th>
            <th>Monthly Test 5</th>
            <th>Monthly Test 6</th>
            <th>Monthly Test 7</th>
          

        </tr>
        <tr>
            <th></th>
            <th></th>
            <th></th>
            <th style={{margin: 0, paddingLeft: 0, paddingRight: 0, marginRight: 0,  border: Collapse, backgroundColor: 'lightskyblue'}}><td style={{ paddingLeft: 10, paddingRight: 10,  borderTop: 0, borderBottom: 0,}}>Th</td><td style={{ paddingLeft: 10, paddingRight: 10, borderTop: 0, borderBottom: 0, }}>Pr</td><td style={{ paddingLeft: 10, paddingRight: 10, borderTop: 0, borderBottom: 0, }}>Ws</td><td style={{  paddingLeft: 10,  margin: 0, paddingRight: 10, marginRight: 0, borderTop: 0, borderBottom: 0,}}>ED</td></th>
            <th style={{margin: 0, paddingLeft: 0, paddingRight: 0, marginRight: 0,  border: Collapse, backgroundColor: 'lightskyblue'}}><td style={{ paddingLeft: 10, paddingRight: 10,  borderTop: 0, borderBottom: 0,}}>Th</td><td style={{ paddingLeft: 10, paddingRight: 10, borderTop: 0, borderBottom: 0, }}>Pr</td><td style={{ paddingLeft: 10, paddingRight: 10, borderTop: 0, borderBottom: 0, }}>Ws</td><td style={{  paddingLeft: 10,  margin: 0, paddingRight: 10, marginRight: 0, borderTop: 0, borderBottom: 0,}}>ED</td></th>
             <th style={{margin: 0, paddingLeft: 0, paddingRight: 0, marginRight: 0,  border: Collapse, backgroundColor: 'lightskyblue'}}><td style={{ paddingLeft: 10, paddingRight: 10,  borderTop: 0, borderBottom: 0,}}>Th</td><td style={{ paddingLeft: 10, paddingRight: 10, borderTop: 0, borderBottom: 0, }}>Pr</td><td style={{ paddingLeft: 10, paddingRight: 10, borderTop: 0, borderBottom: 0, }}>Ws</td><td style={{  paddingLeft: 10,  margin: 0, paddingRight: 10, marginRight: 0, borderTop: 0, borderBottom: 0,}}>ED</td></th>
             <th style={{margin: 0, paddingLeft: 0, paddingRight: 0, marginRight: 0,  border: Collapse, backgroundColor: 'lightskyblue'}}><td style={{ paddingLeft: 10, paddingRight: 10,  borderTop: 0, borderBottom: 0,}}>Th</td><td style={{ paddingLeft: 10, paddingRight: 10, borderTop: 0, borderBottom: 0, }}>Pr</td><td style={{ paddingLeft: 10, paddingRight: 10, borderTop: 0, borderBottom: 0, }}>Ws</td><td style={{  paddingLeft: 10,  margin: 0, paddingRight: 10, marginRight: 0, borderTop: 0, borderBottom: 0,}}>ED</td></th>
             <th style={{margin: 0, paddingLeft: 0, paddingRight: 0, marginRight: 0,  border: Collapse, backgroundColor: 'lightskyblue'}}><td style={{ paddingLeft: 10, paddingRight: 10,  borderTop: 0, borderBottom: 0,}}>Th</td><td style={{ paddingLeft: 10, paddingRight: 10, borderTop: 0, borderBottom: 0, }}>Pr</td><td style={{ paddingLeft: 10, paddingRight: 10, borderTop: 0, borderBottom: 0, }}>Ws</td><td style={{  paddingLeft: 10,  margin: 0, paddingRight: 10, marginRight: 0, borderTop: 0, borderBottom: 0,}}>ED</td></th>
             <th style={{margin: 0, paddingLeft: 0, paddingRight: 0, marginRight: 0,  border: Collapse, backgroundColor: 'lightskyblue'}}><td style={{ paddingLeft: 10, paddingRight: 10,  borderTop: 0, borderBottom: 0,}}>Th</td><td style={{ paddingLeft: 10, paddingRight: 10, borderTop: 0, borderBottom: 0, }}>Pr</td><td style={{ paddingLeft: 10, paddingRight: 10, borderTop: 0, borderBottom: 0, }}>Ws</td><td style={{  paddingLeft: 10,  margin: 0, paddingRight: 10, marginRight: 0, borderTop: 0, borderBottom: 0,}}>ED</td></th>
             <th style={{margin: 0, paddingLeft: 0, paddingRight: 0, marginRight: 0,  border: Collapse, backgroundColor: 'lightskyblue'}}><td style={{ paddingLeft: 10, paddingRight: 10,  borderTop: 0, borderBottom: 0,}}>Th</td><td style={{ paddingLeft: 10, paddingRight: 10, borderTop: 0, borderBottom: 0, }}>Pr</td><td style={{ paddingLeft: 10, paddingRight: 10, borderTop: 0, borderBottom: 0, }}>Ws</td><td style={{  paddingLeft: 10,  margin: 0, paddingRight: 10, marginRight: 0, borderTop: 0, borderBottom: 0,}}>ED</td></th>
             
        </tr>


        </tbody>
      </table>
      </div>
      <Footer1 />
      
    </>
  )
}

export default Progress
