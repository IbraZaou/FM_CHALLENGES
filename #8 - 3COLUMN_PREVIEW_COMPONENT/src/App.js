import './style/index.scss';
import SEDAN from './assets/images/icon-sedans.svg';
import SUV from './assets/images/icon-sedans.svg';
import LUXE from './assets/images/icon-luxury.svg';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="sedan">
          <img src={SEDAN} alt="" />
          <h2>SEDANS</h2>
          <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip</p>

          <button><strong>Learn More</strong></button>
        </div>
        <div className="suv">
          <img src={SUV} alt="" />
          <h2>SUVS</h2>
          <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>

          <button><strong>Learn More</strong></button>

        </div>
        <div className="luxe">
          <img src={LUXE} alt="" />
          <h2>LUXURY</h2>
          <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>

          <button><strong>Learn More</strong></button>

        </div>
      </div>
    </div>
  );
}

export default App;
