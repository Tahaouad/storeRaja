import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const ProductSlider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const itemsPerPage = isMobile ? 1 : 4;

  useEffect(() => {
    if (items && items.length > itemsPerPage) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % items.length);
      }, 3000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [items, itemsPerPage]);

  if (!items || items.length === 0) {
    return <p>No products to display.</p>;
  }

  const displayItems = items.slice(currentIndex, currentIndex + itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % items.length);
  };

  return (
    <div className="container-fluid mt-5">
      <h1 className="text-center text-success">Top products</h1>
      <h6 className="text-center text-muted">Latest trends from Raja</h6>
      <div className={`row row-cols-1 row-cols-${isMobile ? '1' : '2'} row-cols-md-4 g-4`}>
        {displayItems.map((item) => (
          <div className="col mb-4" key={item.id}>
            <div className="card h-100">
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
      </div>
      {items.length > itemsPerPage && (
        <div className="text-center mt-3 mb-4">
          <button className="btn btn-outline-success me-2" onClick={handlePrev}>
            <i className="bi bi-chevron-left"></i> 
          </button>
          <button className="btn btn-outline-success" onClick={handleNext}>
             <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductSlider;
