
import React, { useEffect, useState } from "react";
import { getSlider } from "../../actions/actions";


function Home1Banner() {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    getSlider().then((res) => setSlider(res.data.data));
  }, []);

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active" >
          <img
            src={slider[0]?.img}
            className="d-block w-100"
            alt="..."
          
          />
        </div>
        {slider.length > 1 && (
          <div className="carousel-item" >
            <img
              src={slider[1]?.img}
              className="d-block w-100"
              alt="..."
           
            />
          </div>
        )}
        {slider.length > 2 && (
          <div className="carousel-item">
            <img
              src={slider[2]?.img}
              className="d-block w-100"
              alt="..."
              
            />
          </div>
        )}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Home1Banner;
