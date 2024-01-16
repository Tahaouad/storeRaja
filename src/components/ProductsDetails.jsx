import React, { useState } from "react";
import { ScrollRestoration, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const [showAlert, setShowAlert] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  const add = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const productNow = products.find((produit) => produit.id == id);
  if (!productNow) {
    return <div>Product not available</div>;
  }
  const { image, libelle, prix, tailles, reference } = productNow;

  return (
    <>
      <Navbar />
      
      <div className="container-fluid mt-5" id="top">
        <div className="row">
          <div className="col-md-5">
            <img
              src={require(`../images/${image}`)}
              alt={libelle}
              className="img-fluid mt-3"
              width={620}
            />
          </div>
          <div className="col-md-7">
            <p className="fs-2 fw-bold text-bold text-success mt-2">
              {parseInt(prix) * quantity} DHs
            </p>
            <h2 className="text-success">{libelle}</h2>
            <h6>Ref : {reference}</h6>
            <hr />

            <div className="mb-3 d-flex justify-content-between align-items-center">
              {

                (tailles[0] !== 'Taille unique') &&
                <div className="d-flex ">

                  <h4 className="fs-6 fw-light mt-2 col-md-11">Tailles :</h4>
                  <hr />

                  {tailles.map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={`btn btn-outline-success border col-md-3 " ${selectedSize === size ? "active" : ""
                        }`}
                      onClick={() => handleSizeChange(size)}
                    >
                      {size}
                    </button>

                  ))}
                </div>

              }

            </div>
            <hr />

            <div>
              <div className="d-flex align-items-center mb-1">
                <button
                  className={`btn btn-outline-success me-2 ${parseInt(quantity) === 1 ? "disabled" : ""
                    }`}
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <span className="me-2">{quantity}</span>
                <button
                  className={`btn btn-outline-success`}
                  onClick={increaseQuantity}
                >
                  +
                </button>
                <button
                  className="btn btn-success w-100 m-2"
                  onClick={add}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            {showAlert && (
              <div
                className="alert alert-success mt-3"
                role="alert"
              >
                Produit a bien ajouté au panier!
              </div>
            )}
            <hr className="" />

            <h4 className="mt-1">Description</h4>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              aliquid voluptatem. Quod vero, consectetur similique labore deserunt,
              optio vitae sint praesentium accusamus cumque perspiciatis obcaecati
              distinctio harum architecto quae voluptatem!
            </p>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
