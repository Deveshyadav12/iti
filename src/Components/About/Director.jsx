import React from 'react'
import Top from '../Header/top';
import Navbar from '../Header/Navbar';
import {director} from '../../Pics/index';
import { style } from "../../css/style.css";
import Footer1 from './footer';

const Director = () => {
  const cardStyle = {
    maxWidth: '600px',
    
    paddingTop: '20px',
  };
  return (
    <div className="container-fluid">
    <Top />
    <Navbar />

    <div className="container" >
    <h2 style={{marginTop:40}}>Director Message</h2>
    <div className="card3 mb-3" style={cardStyle}>
  <div className="row g-0">
    <div className="col-md-5">
      <img src={director} className="img-fluid rounded-start" style={{height: 300, width: 300, paddingLeft: 10, marginLeft:0}} alt="..." />
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <span className="card3-text">Instead of being afraid of such prestigious national level career, you must get ready to afford hard work under proper guidance. In this competitive era, you must check out your strategy to build up your career well in advance because your little bit late decision can give a big land to your competitors.</span>
        <span className="card4-text">It has been my Observation that most of such people go ahead during the time but others waste. Because success of a person depends on a series of little daily efforts which one has to earn it in proper time. If you want to be successful in Life then you must have to believe in action. Build up your career and let the dreams of your parents turn into reality. We think you would never like to lag behind your friends who already have decided their line of action because, the secret of your future is hidden in your daily routine & we, at Shri Amichand Private ITI will take care of even your seconds..</span>
        <span className="card5-text">Vinod Kumar</span>
        <pre>निदेशक</pre>


    </div>
  </div>
</div>

    </div>
      
    </div>
    <Footer1 />
    </div>
  )
}

export default Director
