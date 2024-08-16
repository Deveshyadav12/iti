import React from 'react'
import  Top  from "../Header/top";
import Navbar from '../Header/Navbar';
import style from "../../css/style.css";
import Footer1 from '../About/footer';
import Footer from '../Header/footer';
const TraineeRecord = () => {
  return (
    <>
     <Top /> 
     <Navbar />
     <div className="container">
        <h1 style={{marginTop: 20}}>Trainee Record</h1>
        <table className='table bordered'>
            <tbody>
            <tr>
                <th>Select Session</th>
                <th><select  style={{borderRadius: 20}}>
                <option>select</option>
                <option>2018-20</option>
                <option>2019-21</option>
                <option>2019-20</option>
                <option>2020-22</option>
                <option>2020-21</option>
                <option>2021-23</option>
                <option>2021-22</option>
                <option>2022-24</option>
                <option>2022-23</option>
                <option>2023-25</option>
                <option>2023-24</option>
                <option>2023-24</option>
                <option>2023-2024</option>


                
                </select></th>
                <th>Select Trade</th>
                <th>
                    <select  style={{borderRadius: 20}}>
                    <option>Electrician</option>
                    <option>Fitter</option>
                    <option>Mech. Diesel Engine</option>
                    <option>Mech. Diesel Engine</option>
                    <option>MECHANICAL DIESEL</option>
                    </select>
                </th>
                <th>
                    <button style={{backgroundColor: "green", borderRadius: 12}}>Search</button>
                </th>
            </tr>
            </tbody>
        </table>

        <table className=" table-bordered" style={{width: 1400}}>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Father's Name</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Caste</th>
                    <th>Trade</th>
                    <th>Shift</th>
                    <th>Session</th>
                    <th>Remark</th>
                </tr>
                <tr>
                    <td>PANKAJ</td>
                    <td>JAGVEER SINGH</td>
                    <td>04/03/2003</td>
                    <td>MALE</td>
                    <td>GEN</td>
                    <td>Electrician</td>
                    <td>I</td>
                    <td>2018-20</td>
                    <td></td>
                </tr>
                <tr>
                    <td>DEEPAK KUMAR</td>
                    <td>RAMESH CHAND</td>
                    <td>07/04/2001</td>
                    <td>MALE</td>
                    <td>ST</td>
                    <td>Electrician</td>
                    <td>I</td>
                    <td>2018-20</td>
                    <td></td>
                </tr>
                <tr>
                    <td>NAVEEN KUMAR</td>
                    <td>SURESH KUMAR</td>
                    <td>02/07/2001</td>
                    <td>MALE</td>
                    <td>OBC</td>
                    <td>Electrician</td>
                    <td>I</td>
                    <td>2018-20</td>
                    <td></td>
                </tr>
                <tr>
                    <td>DEVENDER SINGH</td>
                    <td>KANWAR PAL SINGH</td>
                    <td>07/07/2001</td>
                    <td>MALE</td>
                    <td>GEN</td>
                    <td>Electrician</td>
                    <td>I</td>
                    <td>2018-20</td>
                    <td></td>
                </tr>
                <tr>
                    <td>SANJAY</td>
                    <td>SATYAVEER</td>
                    <td>23/05/2002</td>
                    <td>MALE</td>
                    <td>SC</td>
                    <td>Electrician</td>
                    <td>I</td>
                    <td>2018-20</td>
                    <td></td>
                </tr>
                <tr>
                    <td>HARI SHANKAR</td>
                    <td>MANOJ KUMAR</td>
                    <td>12/07/2003</td>
                    <td>MALE</td>
                    <td>GEN</td>
                    <td>Electrician</td>
                    <td>I</td>
                    <td>2018-20</td>
                    <td></td>
                </tr>
                <tr>
                    <td>VIVEK</td>
                    <td>BANSHIDAR</td>
                    <td>20/07/2000</td>
                    <td>MALE</td>
                    <td>OBC</td>
                    <td>Electrician</td>
                    <td>I</td>
                    <td>2018-20</td>
                    <td></td>
                </tr>
                <tr>
                    <td>KASHMIR MAAN</td>
                    <td>OMPRAKASH</td>
                    <td>02/01/2001</td>
                    <td>MALE</td>
                    <td>OBC</td>
                    <td>Electrician</td>
                    <td>I</td>
                    <td>2018-20</td>
                    <td></td>
                </tr>
                <tr>
                    <td>MOHAN</td>
                    <td>SURESH KUMAR</td>
                    <td>05/07/2003</td>
                    <td>MALE</td>
                    <td>OBC</td>
                    <td>Electrician</td>
                    <td>I</td>
                    <td>2018-20</td>
                    <td></td>
                </tr>
                <tr>
                    <td>VIKAS KUMAR</td>
                    <td>MAHESH KUMAR</td>
                    <td>09/11/2001</td>
                    <td>MALE</td>
                    <td>OBC</td>
                    <td>Electrician</td>
                    <td>I</td>
                    <td>2018-20</td>
                    <td></td>
                </tr>
                <tr>
                    <td>RAHUL SINGH</td>
                    <td>RAM SINGH</td>
                    <td>20/08/2003</td>
                    <td>MALE</td>
                    <td>GEN</td>
                    <td>Electrician</td>
                    <td>I</td>
                    <td>2018-20</td>
                    <td></td>
                </tr>
                <tr>
                    <td>AKSHAY KUMAR</td>
                    <td>RATAN SINGH</td>
                    <td>15/09/2002</td>
                    <td>MALE</td>
                    <td>SC</td>
                    <td>Electrician</td>
                    <td>I</td>
                    <td>2018-20</td>
                    <td></td>
                </tr>
                <tr>
                    <td>HIMESH YADAV</td>
                    <td>VIJAY KUMAR YADAV</td>
                    <td>26/11/2002</td>
                    <td>MALE</td>
                    <td>OBC</td>
                    <td>Electrician</td>
                    <td>I</td>
                    <td>2018-20</td>
                    <td></td>
                </tr>
                <tr>
                    <td>PANKAJ KUMAR</td>
                    <td>RAJKUMAR</td>
                    <td>12/01/2004	</td>
                    <td>MALE</td>
                    <td>GEN</td>
                    <td>Electrician</td>
                    <td>I</td>
                    <td>2018-20</td>
                    <td></td>
                </tr>
                <tr>
                    <td>SHIV KUMAR</td>
                    <td>RAM KUMAR</td>
                    <td>05/12/1998	</td>
                    <td>MALE</td>
                    <td>SC</td>
                    <td>Electrician</td>
                    <td>I</td>
                    <td>2018-20</td>
                    <td></td>
                </tr>
                <tr>
                    <td>ANIL</td>
                    <td>MOHAN LAL</td>
                    <td>16/04/2001</td>
                    <td>MALE</td>
                    <td>SC</td>
                    <td>Electrician</td>
                    <td>I</td>
                    <td>2018-20</td>
                    <td></td>
                </tr>
                <tr>
                    <td>HIMESH YADAV</td>
                    <td>VIJAY KUMAR YADAV</td>
                    <td>26/11/2002</td>
                    <td>MALE</td>
                    <td>OBC</td>
                    <td>Electrician</td>
                    <td>I</td>
                    <td>2018-20</td>
                    <td></td>
                </tr>
                <tr>
                    <td>HIMESH YADAV</td>
                    <td>VIJAY KUMAR YADAV</td>
                    <td>26/11/2002</td>
                    <td>MALE</td>
                    <td>OBC</td>
                    <td>Electrician</td>
                    <td>I</td>
                    <td>2018-20</td>
                    <td></td>
                </tr>
                
            </tbody>
        </table>
     </div>
     <Footer />
    </>
  )
}

export default TraineeRecord
