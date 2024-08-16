import React from 'react'
import Top from '../Header/top';
import Navbar from '../Header/Navbar';
import Footer1 from '../About/footer';

const AdministrativeStaff = () => {
  return (
    <>

    <Top/>
    <Navbar />

   <div className='container'>
   <h1 style={{marginTop: 30}}>Administrative Staff</h1>
   
   <table class="table">
  <thead>
    <tr>
      <th scope="col">S.No.</th>
      <th scope="col">Name of Staff</th>
      <th scope="col">Designation</th>
      <th scope="col">Date of Joining</th>
      <th scope="col">Remarks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Vinod Kumar</td>
      <td>Secretary</td>
      <td>20.08.2007</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Amit Kumar</td>
      <td>LDC</td>
      <td>01.04.2019</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Madan Lal</td>
      <td>Peon</td>
      <td>01.01.2019</td>
      <td></td>
     
    </tr>
  </tbody>
</table>
   </div>
   <Footer1/>


      
    </>
  )
}

export default AdministrativeStaff
