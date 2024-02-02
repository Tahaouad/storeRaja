import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import './ProductSlider.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductSlider = ({ items }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  if (!items || items.length === 0) {
    return <p>No products to display.</p>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container-fluid w-100 mb-4 mt-4" style={{overflow:'hidden',width:'50%'}}>
      <h1 className="text-center text-success">Top products</h1>
      <h6 className="text-center text-muted">Latest trends from Raja</h6>
      <Slider {...settings}>
  {items.map((item) => (
    <div className="slick-slide" key={item.id}   >
      <div className="card" key={item.id}>
        <Link to={`/ProductsDetails/${item.id}`}>
          <img src={require(`../images/${item.image}`)} alt={item.libelle} className="card-img-top" />
        </Link>
        <div className="card-body">
          <h4 className="card-title">{item.libelle}</h4>
          <h6 className="card-subtitle text-success mb-2 fs-4 fw-bolder">
            {item.prix}
          </h6>
        </div>
      </div>
      
    </div>
  ))}
</Slider>
    </div>
  );
};

export default ProductSlider;
