import React from 'react'
import {iti1, iti2, iti3, iti5} from "../../Pics/index";
import style from "../../css/style.css";

const Slides = () => {
  return (
    <div className="container-fluid">
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={iti3} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={iti5} class="d-block w-100 img3"  alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<button className="btn1">News & Updates</button>
<p className="p4">Admission open for Session 2024-25</p>
      
    </div>
  );
}

export default Slides
