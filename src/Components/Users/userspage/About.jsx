import React from 'react'
import Navbar from './Navbars'
import { Button } from 'react-bootstrap';

const about = () => {
  return (
    <>
    <Navbar />
  

    <div className="container">
    <h2 style={{marginTop: 10}}>About</h2>
   

            <table class="table bordered">
        
            <tr>
                <td>Name of the Institute</td>
                <td>Shri Amichand Private ITI</td>
                <td><i class="bi bi-pencil-square"></i></td>
            </tr>
            <tr>
                <td>Address of the Institute</td>
                <td>Singhana Road, Buhana – 333502, Tehsil – Buhana, Dist.- Jhunjhunu (Rajasthan)</td>
                <td><i class="bi bi-pencil-square"></i></td>
            </tr>
            <tr>
                <td>Date of Establishment</td>
                <td>27-11-2009</td>
                <td><i class="bi bi-pencil-square"></i></td>
            </tr>
            <tr>
                <td>DGET File Reference No.</td>
                <td>DGET-6/20/131/2009-TC</td>
                <td><i class="bi bi-pencil-square"></i></td>
            </tr>
            <tr>
                <td>Code Allotted by DGET</td>
                <td>PR08001248</td>
                <td><i class="bi bi-pencil-square"></i></td>
            </tr>
            <tr>
                <td>Contact No</td>
                <td>01593 - 298751</td>
                <td><i class="bi bi-pencil-square"></i></td>
            </tr>
            <tr>
                <td>Mobile No</td>
                <td>+91-9413887222, 7073360001, 7073360002, 7073360003</td>
                <td><i class="bi bi-pencil-square"></i></td>
            </tr>
            <tr>
                <td>Fax No</td>
                <td>01593 – 298751</td>
                <td><i class="bi bi-pencil-square"></i></td>
            </tr>
            <tr>
                <td>E-mail ID</td>
                <td>amichanditibuhana@gmail.com, pvt_iti_p645@yahoo.in</td>
                <td><i class="bi bi-pencil-square"></i></td>
            </tr>
            <tr>
                <td>Location Rural / Urban</td>
                <td>Rural Longitude 28.204002 N, Latitude 75.872566 S</td>
                <td><i class="bi bi-pencil-square"></i></td>
            </tr>
            <tr>
                <td>GPS Location</td>
               <td>View</td>
               <td><i class="bi bi-pencil-square"></i></td>
            </tr>
            <tr>
                <td>Approach/How to Reach</td>
                <td >Institute is situated on Singhana - Buhana main road 12 Km. from Singhana, 10 Km. from Pacheri Kalan, 20 Km. from Surajgarh, 25 Km. from Satnali & 30 Km. from Chirawa. Bus facility is available from all major distinct station to reach the ITI.</td>
                <td><i class="bi bi-pencil-square"></i></td>
            </tr>
                      
</table>


    

    </div>
   
    </>
  )
}

export default about;
