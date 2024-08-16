import React from 'react'
import style from  "../../css/style.css";
import { Link } from 'react-router-dom';
import About from "../About/About";
import Director from '../About/Director';
import Home from '../Home/Home';

const Navbar = () => {
  return (
  
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <Link class="navbar-brand hidden-md-and-up text-white " to="#" >Menu</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/" >Home</Link>
        </li>
        <li class="nav-item dropdown" style={{paddingLeft: 20}}>
          <Link class="nav-link dropdown-toggle" to="About" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </Link>
          <ul class="dropdown-menu" style={{backgroundColor: "darkblue", fontSize: 16, paddingLeft: 0}}>
            <li><Link class="dropdown-item" to="/About">About ITI</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="/Director">Director Message</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="/Intro">Introduction</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="/infra">Infrastructure</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="/trade&Specif">Trade Specifications</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="/Rating">Institute Rating</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="/stateDirectorate">State Directorate</Link></li>

          </ul>
        </li>
        <li class="nav-item dropdown" style={{paddingLeft: 20}}>
          <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Important Link
          </Link>
          <ul class="dropdown-menu" style={{backgroundColor: "darkblue", fontSize: 16, paddingLeft: 0}}>
            <li><Link class="dropdown-item" to="https://www.livelihoods.rajasthan.gov.in/dtetrg">DIRECTORATE OF TECHNICAL EDUCATION, RAJASTHAN, JODHPUR</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="https://ncvtmis.gov.in/pages/home.aspx">NCVT-Management information System</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="https://dgt.gov.in/">Directorate General of Training New Delhi</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="https://www.bharatskills.gov.in/">BHARAT SKILLS</Link></li>
            <li><hr class="dropdown-divider" /></li>
            
            <li><Link class="dropdown-item" to="">Something else here</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown" style={{paddingLeft: 20}}>
          <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Students
          </Link>
          <ul class="dropdown-menu"  style={{backgroundColor: "darkblue", fontSize: 16, paddingLeft: 0}}>
            <li><Link class="dropdown-item" to="/Attendance">Attendance Record</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="/progress">Progress Card</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="/certification">Certification</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="/trainee">Trainee Record</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="/achivement">Achievements</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="/admissionCriteria">Admission Criteria</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="/applicationFormat">Application Format</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="/fees">Fees</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown" style={{paddingLeft: 20}}>
          <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Trades/CTS
          </Link>
          <ul class="dropdown-menu"  style={{backgroundColor: "darkblue", fontSize: 16, paddingLeft: 0}}>
            <li><Link class="dropdown-item" to="/schemes">Scheme</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="/trades">Trade</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown" style={{paddingLeft: 20}}>
          <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Staff
          </Link>
          <ul class="dropdown-menu" style={{backgroundColor: "darkblue", fontSize: 16, paddingLeft: 0}}>
            <li><Link class="dropdown-item" to="/technical">Technical Staff</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="/administrativeStaff">Administrative Staff</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="/StaffAttendance">Staff Attendence</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="/InstructorAchievements">Achievements by Instructor</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="/InstructorAwards">Awards of Instructor</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown" style={{paddingLeft: 20}}>
          <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Facilities
          </Link>
          <ul class="dropdown-menu" style={{backgroundColor: "darkblue", fontSize: 16, paddingLeft: 0}}>
            <li><Link class="dropdown-item" to="#">Electric Power Supply</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="#">Library information</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="#">Computer Lab</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="#">Sports</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="#">Industry Institute Linkage</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="#">Industry Visit</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="#">Extra Curricular Activities</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown" style={{paddingLeft: 20}}>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Details
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown" style={{paddingLeft: 20}}>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Results
          </a>
          <ul class="dropdown-menu" style={{paddingLeft: 20}}>
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown" style={{paddingLeft: 20}}>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Consumptions
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
      
  );
}

export default Navbar

