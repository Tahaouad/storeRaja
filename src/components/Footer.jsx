const Footer = () => {
    const Mode_Payement = ['cmi.png','visa.png','mastercard.png','cashplus.png']
    const Mode_livraison = ['aramex.jpg','cathedis.png','dhl.png']
    return (
      <>
        <div className="row w-100  bg-dark text-light mt-3 m-auto">
          <div className="col-md-3 p-3 mt-4">
            <img src={require('../images/logo.png')} alt="" width={'200px'} />
            <hr style={{ width: '23px' }} />
            <p style={{ fontSize: '12.4px' }}>
              Chez Rajasshop, nous sommes fiers de vous offrir une expérience de
              magasinage exceptionnelle. Depuis notre fondation en 2023, nous avons
              travaillé sans relâche pour devenir votre source préférée de produits
              de qualité à des prix abordables.
            </p>
          </div>
          <div className="col-md-2  mt-4">
            <h2 style={{ fontSize: '16px',paddingLeft: 0}} className=''>AIDE</h2>
            <hr style={{ width: '23px' }} />
            <ul style={{ fontSize: '12.4px', paddingLeft: 0 }}>
              <li className='list-unstyled pb-3'>
                Qui sommes-nous ?
              </li>
              <li className='list-unstyled pb-3'>
                Mentions légales
              </li>
              <li className='list-unstyled pb-3'>
                Conditions d'utilisation
              </li>
              <li className='list-unstyled pb-3'>
                Paiement sécurisé
              </li>
              <li className='list-unstyled pb-3'>
                Livraison
              </li>
              <li className='list-unstyled pb-3'>
                Conditions de retour
              </li>
              <li className='list-unstyled pb-3'>
                Nous contacter
              </li>
            </ul>
          </div>
          <div className="col-md-2 mt-4"  style={{ fontSize: '16px',paddingLeft: 0}} >
           
            <h2 style={{ fontSize: '16px',paddingLeft: 0}} className=''> PRODUITS HAUT DE GAMME</h2>
            <hr style={{ width: '23px' }} />
            <ul style={{ fontSize: '12.4px', paddingLeft: 0 }}>
                <li className='list-unstyled pb-3'>
                Tenus de Match
                </li>
                <li className='list-unstyled pb-3'>
                Entrainement
                </li>
                <li className='list-unstyled pb-3'>
                Mode
                </li>
                <li className='list-unstyled pb-3'>
                Cadeaux et accessoires
                </li>
            </ul>
    

          </div>
          <div className="col-md-2 mt-4"  style={{ fontSize: '16px',paddingLeft: 0}} >
             
            <h2 style={{ fontSize: '16px',paddingLeft: 0}} className=''> MON COMPTE</h2>
            <hr style={{ width: '23px' }} />

            <ul style={{ fontSize: '12.4px', paddingLeft: 0 }}>
                <li className='list-unstyled pb-3'>
                    Créer un compte
                </li>
                <li className='list-unstyled pb-3'>
                    Se connecter
                </li>
                <li className='list-unstyled pb-3'>
                    Mon profil
                </li>
                <li className='list-unstyled pb-3'>
                    Mes adresses
                </li>
                <li className='list-unstyled pb-3'>
                    Mes commandes
                </li>
            </ul>
          </div>
          <div className="col-md-3 mt-4"  style={{ fontSize: '16px',paddingLeft: 0}} >
            
            <h2 style={{ fontSize: '16px',paddingLeft: 0}} className=''> NEWSLETTER</h2>
            <hr style={{ width: '23px' }} />
            <p style={{ fontSize: '12.4px' }}>
                Recevez nos exclusivités en avant-première ! 
                Abonnez-vous à notre newsletter pour ne rien manquer
            </p>
            <div>
            <input type="text" className='p-2 w-75' placeholder='votre adresse email'/>
                <button className='p-2 bg-success border-success btn-success w-25'>
                        Envoyer
                </button>
            </div>
            <div>
                <h2 style={{ fontSize: '16px',paddingLeft: 0}} className='pt-2'> Suivez-nous</h2>
                <hr style={{ width: '23px' }} />
            </div>
          </div>
        <hr />
        <div>
            <div className='row ' >
                <div className='d-flex col-md-4 ' >
                    <div>
                    <h2 style={{ fontSize: '16px',paddingLeft: 0}} className='pt-2'> Mode de payement  </h2>
                    <hr style={{ width: '23px' }} />
                    </div>

                    <div>
                    {Mode_Payement.map(i=><img src={require(`../images/${i}`)} className='mt-1 ' style={{marginLeft:'10px'}} width={50}/>)}

                    </div>
                </div>
                <div className="col-md-4"></div>
                <div className='d-flex col-md-4' >
                    <div>
                    <h2 style={{ fontSize: '16px',paddingLeft: 0}} className='pt-2'>Modes de livraison </h2>
                    <hr style={{ width: '23px' }} />
                    </div>

                    <div>
                    {Mode_livraison.map(i=><img src={require(`../images/${i}`)} className='mt-1 ' style={{marginLeft:'10px'}} width={60}/>)}

                    </div>
                </div>
            </div>
            <hr />
            <div className='d-flex justify-content-center'>
                    <h6 style={{ fontSize: '16px'}}>© 2024 Rajashop - Tahaouad</h6>
            </div>

        </div>
        </div>
        
      </>
    );
  };
  
  export default Footer;
  