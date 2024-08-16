import React from 'react';
import style from "../../css/style.css";
import logo from "../../Pics/logo.png";

const Top = () => {
  return (
    <div className="container-fluid">
    <div className="header">
    <i class="bi bi-telephone"></i><span className="sp1"><a>+91-01593 - 298751</a></span>
        <i class="bi bi-envelope"></i><span className="sp2"><a>amichanditibuhana@gmail.com, pvt_iti_p645@yahoo.in</a></span>
    </div>
    <div className="logo">
    <img src={logo} alt=''  className="img1" />

    </div>
    
    </div>

   
    
  );
}

export default Top