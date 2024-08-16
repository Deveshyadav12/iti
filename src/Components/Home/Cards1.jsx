import React from 'react'
import style from "../../css/style.css";
import { photo } from "../../Pics/index";
const Cards1 = () => {
  const cardStyle = {
    maxWidth: '1040px',
    marginLeft: '250px',
    paddingTop: '20px',
  };
  return (
    <div className="container-fluid" style={{backgroundColor: "red", paddingBottom: "20px",  paddingTop: "20px", position: "absolute", top: "1140px"}}>
    <div className="card1" style={cardStyle}>
      <div className="row g-0">
        <div className="col-md-4">
        <h3 className="Card-title">Principal Desk</h3>
        </div>
        <div className="col-md-5">
          <div className="card-body">
            <span className="card-text">Instead of being afraid of such prestigious national level career, you must get ready to afford hard work under proper guidance. In this competitive era, you must check out your strategy to build up your career well in advance because your little bit late decision can give a big land to your competitors. It has been my Observation that most of such people go ahead during the time but others waste. Because success of a person depends on a series of little daily efforts which one has to earn it in proper time. If you want to be successful in Life then you must have to believe in action. Build up your career and let the dreams of your parents turn into reality. We think you would never like to lag behind your friends who already have decided their line of action because, the secret of your future is hidden in your daily routine & we, at Shri Amichand Private ITI will take care of even your seconds</span>
          </div>
        

        </div>
        <div className="col-md-3">
          <div className="card-body">
            <span className="card-img"><img src={photo} alt='' width={400} style={{paddingLeft: "20px"}} /></span>
          </div>
        

        </div>
      </div>
    </div>
    </div>
  )
}

export default Cards1
