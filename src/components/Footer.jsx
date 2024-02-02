import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const Mode_Payement = ['cmi.png', 'visa.png', 'mastercard.png', 'cashplus.png'];
  const Mode_livraison = ['aramex.jpg', 'cathedis.png', 'dhl.png'];

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row bg-dark text-light">
          <div className="col-md-3 p-3 mt-4">
            <img src={require('../images/logo.png')} alt="" width="200px" className="img-fluid" />
            <hr className="bg-light" />
            <p style={{ fontSize: '12px' }}>
              Chez Rajasshop, nous sommes fiers de vous offrir une expérience de magasinage exceptionnelle. Depuis notre
              fondation en 2023, nous avons travaillé sans relâche pour devenir votre source préférée de produits de
              qualité à des prix abordables.
            </p>
          </div>

          <div className="col-md-2 mt-4">
            <h5 className="font-weight-bold text-light">AIDE</h5>
            <hr className="bg-light" />
            <ul style={{ fontSize: '12px', paddingLeft: 0 }}>
              <li className='list-unstyled pb-3'>Qui sommes-nous ?</li>
              <li className='list-unstyled pb-3'>Mentions légales</li>
              <li className='list-unstyled pb-3'>Conditions d'utilisation</li>
              <li className='list-unstyled pb-3'>Paiement sécurisé</li>
              <li className='list-unstyled pb-3'>Livraison</li>
              <li className='list-unstyled pb-3'>Conditions de retour</li>
              <li className='list-unstyled pb-3'>Nous contacter</li>
            </ul>
          </div>

          <div className="col-md-2 mt-4">
            <h5 className="font-weight-bold text-light">TOP PRODUITS</h5>
            <hr className="bg-light" />
            <ul style={{ fontSize: '12px', paddingLeft: 0 }}>
              <li className='list-unstyled pb-3'>Tenus de Match</li>
              <li className='list-unstyled pb-3'>Entrainement</li>
              <li className='list-unstyled pb-3'>Mode</li>
              <li className='list-unstyled pb-3'>Cadeaux et accessoires</li>
            </ul>
          </div>

          <div className="col-md-2 mt-4">
            <h5 className="font-weight-bold text-light">MON COMPTE</h5>
            <hr className="bg-light" />
            <ul style={{ fontSize: '12px', paddingLeft: 0 }}>
              <li className='list-unstyled pb-3'>Créer un compte</li>
              <li className='list-unstyled pb-3'>Se connecter</li>
              <li className='list-unstyled pb-3'>Mon profil</li>
              <li className='list-unstyled pb-3'>Mes adresses</li>
              <li className='list-unstyled pb-3'>Mes commandes</li>
            </ul>
          </div>

          <div className="col-md-3 mt-4">
            <h4 className="font-weight-bold text-light">NEWSLETTER</h4>
            <hr className="bg-light" />
            <p style={{ fontSize: '12px' }}>
              Recevez nos exclusivités en avant-première ! Abonnez-vous à notre newsletter pour ne rien manquer
            </p>
            <div className="d-flex">
              <input type="text" className="p-2 w-75" placeholder='votre adresse email' />
              <button className='p-2 bg-success border-success btn-success w-25'>Envoyer</button>
            </div>
            <div className="mt-3">
              <h4 className="font-weight-bold pt-2 text-light">Suivez-nous</h4>
              <hr className="bg-light" />
              <div className="d-flex justify-content-around">
                <FaFacebook size={20} color="white" />
                <FaTwitter size={20} color="white" />
                <FaInstagram size={20} color="white" />
                <FaEnvelope size={20} color="white" />
              </div>
            </div>
          </div>
        </div>

        <div className='row pb-4 bg-dark text-light'>
          <div className='col-md-4'>
            <h5 className="font-weight-bold pt-2 text-light">Mode de paiement</h5>
            <hr className="bg-light" />
            {Mode_Payement.map((image, index) => (
              <img key={index} src={require(`../images/${image}`)} className="mt-1" style={{ marginLeft: '10px' }} width={50} alt={`Mode de paiement ${index + 1}`} />
            ))}
          </div>
          <div className="col-md-4"></div>
          <div className='col-md-4'>
            <h5 className="font-weight-bold pt-2 text-light">Modes de livraison</h5>
            <hr className="bg-light" />
            {Mode_livraison.map((image, index) => (
              <img key={index} src={require(`../images/${image}`)} className="mt-1" style={{ marginLeft: '10px' }} width={60} alt={`Mode de livraison ${index + 1}`} />
            ))}
          </div>
        </div>

        <div className='row d-flex justify-content-center bg-dark text-light'>
          <div className="col-12 text-center">
            <h6 style={{ fontSize: '12px' }}>© 2024 Rajashop - Tahaouad</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
