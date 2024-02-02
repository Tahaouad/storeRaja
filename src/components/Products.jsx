import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ImageSlider from './ImageSlider';
import ProductSlider from './ProductsSlide';
import Decouvrir from './Decouvrir';
import Footer from './Footer';
import './Products.css'

const Products = ({ products }) => {
  const duplicatedProducts = [...products, ...products];
  const [showAllProducts, setShowAllProducts] = useState(false);

  return (
    <div className='container-fluid'>
      <Navbar />
      <ImageSlider images={['slide-a-1.png', 'slide-3-1.png', 'slide-b-1.png']} />

      <ProductSlider items={duplicatedProducts} />

      <img src={require('../images/cover.PNG')} alt="" className="cover-image" />

      <div className="container-fluid mt-5">
        <h1 className='text-center text-success fw-bold'>EXPLORATION EXCLUSIVE</h1>
        <h6 className='text-center text-muted fw-lighter'>Latest trends from Raja</h6>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-2">
          {products.slice(0, showAllProducts ? products.length : 8).map((product) => (
            <div className="col mb-3" key={product.id}>
              <div className="card h-100 p-2">
                <Link to={`/ProductsDetails/${product.id}`} onClick={(e) => e.stopPropagation()}>
                  <img
                    src={require(`../images/${product.image}`)}
                    alt={product.libelle}
                    className="card-img-top img-fluid"
                  />
                </Link>

                <div className="card-body d-flex flex-column">
                  <h4 className="card-title">{product.libelle}</h4>
                  <h6 className="card-subtitle mb-2 fw-bolder fs-5 text-success">{product.prix}</h6>

                  <Link to={`/ProductsDetails/${product.id}`}>
                    <button className="btn btn-success mt-auto w-100">Buy</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-outline-success m-3' onClick={() => setShowAllProducts(!showAllProducts)}>
            {showAllProducts ? 'Show Less' : 'Show All'}
          </button>
        </div>
      </div>

      <Decouvrir />
      <Footer />
    </div>
  );
};

export default Products;
