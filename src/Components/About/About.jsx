import React, { useState } from 'react'
import Top from '../Header/top'
import Navbar from '../Header/Navbar'
import * as xlsx  from 'xlsx'
import style from "../../css/style.css";
import { Link } from 'react-router-dom';
import Footer from '../Header/footer';
import Footer1 from './footer';

const About = () => {

   
  return (
    <div className="container-fluid">
    <Top />
    <Navbar />

    <div className="container">
    <h2 style={{marginTop: 10}}>About</h2>
   

            <table className="table bordered">
        
            <tr>
                <td>Name of the Institute</td>
                <td>Shri Amichand Private ITI</td>
            </tr>
            <tr>
                <td>Address of the Institute</td>
                <td>Singhana Road, Buhana – 333502, Tehsil – Buhana, Dist.- Jhunjhunu (Rajasthan)</td>
            </tr>
            <tr>
                <td>Date of Establishment</td>
                <td>27-11-2009</td>
            </tr>
            <tr>
                <td>DGET File Reference No.</td>
                <td>DGET-6/20/131/2009-TC</td>
            </tr>
            <tr>
                <td>Code Allotted by DGET</td>
                <td>PR08001248</td>
            </tr>
            <tr>
                <td>Contact No</td>
                <td>01593 - 298751</td>
            </tr>
            <tr>
                <td>Mobile No</td>
                <td>+91-9413887222, 7073360001, 7073360002, 7073360003</td>
            </tr>
            <tr>
                <td>Fax No</td>
                <td>01593 – 298751</td>
            </tr>
            <tr>
                <td>E-mail ID</td>
                <td>amichanditibuhana@gmail.com, pvt_iti_p645@yahoo.in</td>
            </tr>
            <tr>
                <td>Location Rural / Urban</td>
                <td>Rural Longitude 28.204002 N, Latitude 75.872566 S</td>
            </tr>
            <tr>
                <td>GPS Location</td>
               <td>View</td>
            </tr>
            <tr>
                <td>Approach/How to Reach</td>
                <td >Institute is situated on Singhana - Buhana main road 12 Km. from Singhana, 10 Km. from Pacheri Kalan, 20 Km. from Surajgarh, 25 Km. from Satnali & 30 Km. from Chirawa. Bus facility is available from all major distinct station to reach the ITI.</td>
            </tr>
                      
</table>
    

    </div>
    <Footer1/>
    </div>
  );
}

export default About
