import React from 'react';

const Footer = () => {
  const Mode_Payement = ['cmi.png', 'visa.png', 'mastercard.png', 'cashplus.png'];
  const Mode_livraison = ['aramex.jpg', 'cathedis.png', 'dhl.png'];

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row bg-dark text-light">
          <div className="col-md-3 p-3 mt-4">
            <img src={require('../images/logo.png')} alt="" width="200px" className="img-fluid" />
            <hr />
            <p style={{ fontSize: '12.4px' }}>
              Chez Rajasshop, nous sommes fiers de vous offrir une expérience de magasinage exceptionnelle. Depuis notre
              fondation en 2023, nous avons travaillé sans relâche pour devenir votre source préférée de produits de
              qualité à des prix abordables.
            </p>
          </div>

          <div className="col-md-2 mt-4">
            <h2 className="font-weight-bold">AIDE</h2>
            <hr />
            <ul style={{ fontSize: '12.4px', paddingLeft: 0 }}>
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
            <h2 className="font-weight-bold">PRODUITS HAUT DE GAMME</h2>
            <hr />
            <ul style={{ fontSize: '12.4px', paddingLeft: 0 }}>
              <li className='list-unstyled pb-3'>Tenus de Match</li>
              <li className='list-unstyled pb-3'>Entrainement</li>
              <li className='list-unstyled pb-3'>Mode</li>
              <li className='list-unstyled pb-3'>Cadeaux et accessoires</li>
            </ul>
          </div>

          <div className="col-md-2 mt-4">
            <h2 className="font-weight-bold">MON COMPTE</h2>
            <hr />
            <ul style={{ fontSize: '12.4px', paddingLeft: 0 }}>
              <li className='list-unstyled pb-3'>Créer un compte</li>
              <li className='list-unstyled pb-3'>Se connecter</li>
              <li className='list-unstyled pb-3'>Mon profil</li>
              <li className='list-unstyled pb-3'>Mes adresses</li>
              <li className='list-unstyled pb-3'>Mes commandes</li>
            </ul>
          </div>

          <div className="col-md-3 mt-4">
            <h2 className="font-weight-bold">NEWSLETTER</h2>
            <hr />
            <p style={{ fontSize: '12.4px' }}>
              Recevez nos exclusivités en avant-première ! Abonnez-vous à notre newsletter pour ne rien manquer
            </p>
            <div className="d-flex">
              <input type="text" className="p-2 w-75" placeholder='votre adresse email' />
              <button className='p-2 bg-success border-success btn-success w-25'>Envoyer</button>
            </div>
            <div>
              <h2 className="font-weight-bold pt-2">Suivez-nous</h2>
              <hr />
            </div>
          </div>
        </div>


        <div className='row pb-4 bg-dark text-light'>
          <div className='col-md-4'>
            <h2 className="font-weight-bold pt-2">Mode de paiement</h2>
            <hr />
            {Mode_Payement.map((image, index) => (
              <img key={index} src={require(`../images/${image}`)} className="mt-1" style={{ marginLeft: '10px' }} width={50} alt={`Mode de paiement ${index + 1}`} />
            ))}
          </div>
          <div className="col-md-4"></div>
          <div className='col-md-4'>
            <h2 className="font-weight-bold pt-2">Modes de livraison</h2>
            <hr />
            {Mode_livraison.map((image, index) => (
              <img key={index} src={require(`../images/${image}`)} className="mt-1" style={{ marginLeft: '10px' }} width={60} alt={`Mode de livraison ${index + 1}`} />
            ))}
          </div>
        </div>


        <div className='row d-flex justify-content-center bg-dark text-light'>
        <div className="col-12 text-center">
          <h6 style={{ fontSize: '16px' }}>© 2024 Rajashop - Tahaouad</h6>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
