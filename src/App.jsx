// import logo from './logo.svg';
import React from 'react'
import Home from "./Components/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import About from './Components/About/About';
// import Users from './Components/users/Users';
import Director from './Components/About/Director';
import Intro from './Components/About/Intro';
import Infrastructure from './Components/About/infrastructure';
import TradeSpecific from './Components/About/Trade&Spec';
import Rating from './Components/About/Rating';
import StateDirectorate from './Components/About/StateDirectorate';
import Attendance from './Components/Students/Attendance';
import Progress from './Components/Students/Progress';
import Certificate from './Components/Students/Certificate';
import TraineeRecord from './Components/Students/TraineeRecord';
import Achievements from './Components/Students/Achievements';
import AdmissionCriteria from './Components/Students/admissionCriteria';
import ApplicationFormat from './Components/Students/ApplicationFormat';
import Fees from './Components/Students/fees';
import Schemes from './Components/TradesCTS/Schemes';
import Trades from './Components/TradesCTS/Trades';
import Technical from './Components/Staff/Technical';
import LoginPage from './Components/Users/auth/LoginPage';
import AdminDashboard from './Components/Users/userspage/AdminDashboard';
import Register from './Components/Users/auth/register';
import FaceRecognitionLogin from './Components/Users/auth/Face';
import Adminlist from './Components/Users/userspage/Adminlist';
import AddAdmin from './Components/Users/userspage/AddAdmin';
import About1 from './Components/Users/userspage/About';
import Fees1 from './Components/Users/userspage/SidenavbarComponents/Fees';
import Courses from './Components/Users/userspage/SidenavbarComponents/Courses';
import AdministrativeStaff from './Components/Staff/AdministrativeStaff';
import StaffAttendence from './Components/Staff/StaffAttendence';
import InstructorAchievement from './Components/Staff/InstructorAchievement';
import InstructorAwards from './Components/Staff/InstructorAwards';

function App() {
  return (
   <>
    <Router>
      <div>
           {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
         
          <Route path="/Director" element={<Director />} />
          <Route path="/Intro" element={<Intro />} />
          <Route path="/infra" element={<Infrastructure />} />
          <Route path="/trade&Specif" element={<TradeSpecific />} />
          <Route path="/Rating" element={<Rating />} />
          <Route path="/stateDirectorate" element={<StateDirectorate />} />
          <Route path="/Attendance" element={<Attendance />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/certification" element={<Certificate />} />
          <Route path="/trainee" element={<TraineeRecord />} />
          <Route path="/achievement" element={<Achievements />} />
          <Route path="/admissionCriteria" element={<AdmissionCriteria />} />
          <Route path="/applicationFormat" element={<ApplicationFormat />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/trades" element={<Trades />} />
          <Route path="/technical" element={<Technical />} />
          <Route path="/administrativeStaff" element={<AdministrativeStaff />} />
          <Route path="/StaffAttendance" element={<StaffAttendence />} />
          <Route path="/InstructorAchievements" element = {<InstructorAchievement />} />
          <Route path="/InstructorAwards" element = {<InstructorAwards />} />

          <Route exact path="/admin/login" element={<LoginPage />} />
          <Route path="/admin/Dashboard" element={<AdminDashboard />} />
          <Route path="/admin/Adminlist" element={<Adminlist />} />
          <Route path="/admin/addadmin" element={<AddAdmin />} />
          <Route path="/admin/about" element={<About1 />} />
          <Route path="/admin/fees" element={<Fees1 />} />
          <Route path="/admin/Courses" element={<Courses />} />
          

         
        </Routes>
      </div>
    </Router>
   </>
  );
}

export default App;
