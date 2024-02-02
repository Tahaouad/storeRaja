import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Decouvrir(props) {
  const containerStyle = {
    position: 'relative',
    height: '380px',
    width: '100%', // Set the width to 100% to take the entire width of the screen
    margin: '0',
  };

  const backgroundStyle = {
    background: 'linear-gradient(to top, #000000, #333333)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '10px',
    right: '20px',
    padding: '1rem',
    zIndex: 2,
  };

  const imageStyle1 = {
    backgroundImage: `url(${require('../images/tenues-cat-1.png')})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  };

  const imageStyle2 = {
    backgroundImage: `url(${require('../images/entrainement-cat-1.png')})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  };

  const imageStyle3 = {
    backgroundImage: `url(${require('../images/cadeaux-cat-1.png')})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  };

  return (
    <div className='row justify-content-around'>
      <div style={containerStyle} className='col-lg-4 col-md-4 mb-1'>
        <div style={{ ...backgroundStyle, ...imageStyle1 }}>
          <button className="decovriRbutton" style={{ ...buttonStyle }}>
            Découvrir &gt;
          </button>
        </div>
      </div>
      <div style={containerStyle} className='col-lg-4 col-md-4 mb-1'>
        <div style={{ ...backgroundStyle, ...imageStyle2 }}>
          <button className="decovriRbutton" style={{ ...buttonStyle }}>
            Découvrir &gt;
          </button>
        </div>
      </div>
      <div style={containerStyle} className='col-lg-4 col-md-4 mb-1'>
        <div style={{ ...backgroundStyle, ...imageStyle3 }}>
          <button className="decovriRbutton" style={{ ...buttonStyle }}>
            Découvrir &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Decouvrir;
