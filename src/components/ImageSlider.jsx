import React, { useEffect } from 'react';
import './ImageSlider.css'
const ImageSlider = () => {
  useEffect(() => {
    const preloadImages = () => {
      ['../images/slide-3-1.png', '../images/slide-a-1.png', '../images/slide-b-1.png'].forEach((image) => {
        new Image().src = image;
      });
    };

    preloadImages();
  }, []);

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={require('../images/slide-3-1.png')} className="d-block   slider-image" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={require('../images/slide-a-1.png')} className="d-block  slider-image" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={require('../images/slide-b-1.png')} className="d-block  slider-image" alt="Slide 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ImageSlider;
