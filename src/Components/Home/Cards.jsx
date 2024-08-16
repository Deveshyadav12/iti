import React from 'react'
import {iti1, iti2, iti3, iti5} from "../../Pics/index";
import style from "../../css/style.css";

const Cards = () => {
    const cardStyle = {
        maxWidth: '1040px',
        marginLeft: '250px',
        backgroundColor: 'wheat',
        paddingTop: '20px',
      };



  return (
    <div className="container-fluid" style={{backgroundColor: "wheat", paddingBottom: "20px",  paddingTop: "20px", position: "absolute", top: "850px"}}>
    <div className="card1" style={cardStyle}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={iti1} className="img-fluid rounded-start" alt="Card" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">Welcome Shri Amichand Private ITI</h2>
            <span className="card-text">The Directorate General of Employment & Training, New Delhi (D.G.E.&T.) of the Ministry of Labour is to provide the skilled man-power with vocational training for the various industries & service sectors. It is being conducted at different I.T.I.s including Shri Amichand Private ITI .In Today's Era Industrialization is developing State-wide and Nation. Shri Amichand Private ITI is a technical knowledge center and our aim is to provide job oriented & knowledge based technical skill that can give the trainee a unique identity creating an edge above others. We are dedicated towards imparting globally competitive skill & soft skill training to make them achieve the best in their life</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cards
