import IMG from '../src/assets/images/image-equilibrium.jpg';
import ETH from '../src/assets/images/icon-ethereum.svg';
import CLOCK from '../src/assets/images/icon-clock.svg';
import PROFILE from '../src/assets/images/image-avatar.png';
import EYE from '../src/assets/images/icon-view.svg';
import { useState } from 'react';

function App() {

  const [hovered, setHovered] = useState(false);

  const toggleHover = () => {
    setHovered(!hovered);
  };

  const eyeStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: hovered ? .7 : 0,
    transition: 'opacity 0.3s ease-in-out',
    width: '50px',
    height: '50px',
    backgroundImage: `url(${EYE})`,
    backgroundSize: 'cover',
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div
          className='eth_img_wrapper'
          style={{ position: 'relative', width: '320px', margin: '1rem auto', borderRadius: '20px', overflow: 'hidden' }}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          <img className='eth_img' src={IMG} alt="" style={{ width: '100%' }} />
          <div style={eyeStyle}></div>
        </div>


        <h3>Equilibrium #3429</h3>
        <p>Our Equilibrium collection promotes balance and calm</p>

        <div className="wrapper_eth_days">

          <div className="container_eth">
            <img src={ETH} alt="" />
            <span> 0.041 ETH</span>
          </div>

          <div className="container_days">
            <img src={CLOCK} alt="" />
            <span> 3 days left</span>
          </div>

        </div>

        <hr />

        <div className="container_profile">
          <img src={PROFILE} alt="" />
          <p>Creation of <span>Jule Wyvern</span></p>
        </div>
      </div>
    </div>
  );
}

export default App;
