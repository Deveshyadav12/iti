import React from 'react'
import Top from '../Header/top'
import Navbar from '../Header/Navbar'
import Footer1 from '../About/footer'

const Achievements = () => {
  return (
    <>
    <Top />
    <Navbar />
    <div className="container">
        <h1 style={{marginTop: 22}}>Achivements By Trainees</h1>
        <table className="table-bordered" style={{width: 1000, height: 300}}>
            <tbody>
                <tr>
                    <th>Name of Awards</th>
                    <th>Under Scheme</th>
                    <th>Won By</th>
                    <th>Year</th>
                    <th>Remark</th>
                </tr>
                <tr>
                    <td>Participate in Qualifier Round</td>
                    <td>Rajasthan ITI Skill Olympiad 2019</td>
                    <td>Neeraj</td>
                    <td>2019</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Participate in Qualifier Round</td>
                    <td>Rajasthan ITI Skill Olympiad 2019</td>
                    <td>Ravi Sharma</td>
                    <td>2019</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Participate in Qualifier Round</td>
                    <td>Rajasthan ITI Skill Olympiad 2019</td>
                    <td>Sanjeet</td>
                    <td>2019</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Participate in Qualifier Round</td>
                    <td>Rajasthan ITI Skill Olympiad 2019</td>
                    <td>Mahesh Yadav</td>
                    <td>2019</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Participate in Challenger Round</td>
                    <td>Rajasthan ITI Skill Olympiad 2019</td>
                    <td>Neeraj</td>
                    <td>2019</td>
                    <td></td>
                </tr>

            </tbody>
        </table>

    </div>
    <Footer1 />
      
    </>
  )
}

export default Achievements
