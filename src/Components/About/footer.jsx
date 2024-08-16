import React from 'react'


const Footer1 = () => {
    const cardStyle = {
        maxWidth: '1040px',
        marginLeft: '250px',
        paddingTop: '20px',
      };
  return (
    <div className="container-fluid" style={{position: "absolute", top: 900, backgroundColor: "blue"}}>
        <div class="card2 mb-3 text-white" style={cardStyle}>
  <div class="row g-0">
    <div class="col-md-4">
    <h3>Address</h3>
    <span>Singhana Road, Buhana – 333502, Tehsil – Buhana, Dist.- Jhunjhunu (Rajasthan)</span>
    </div>
    <div class="col-md-5">
      <div class="card2-body">
        <h3 class="card2-title">Quick Contact</h3>
        <span class="card2-text">Tel: 01593 - 298751</span>
        <br></br>
        <br></br>
        <br></br>
        <span class="card2-text">Email : amichanditibuhana@gmail.com, pvt_iti_p645@yahoo.in
</span>
      </div>
    </div>
    <div class="col-md-3">
    <h3>Visitor Counter</h3>
    <span></span>
    </div>
  </div>
</div>
    </div>

  )
}

export default Footer1
