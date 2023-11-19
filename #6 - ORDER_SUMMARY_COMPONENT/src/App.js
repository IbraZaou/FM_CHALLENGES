import ORDER from './assets/images/illustration-hero.svg'
import MUSIC from './assets/images/icon-music.svg';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <img src={ORDER} alt="" />

        <h2><strong>Order Summary</strong></h2>
        <p>You can now listen to millions of songs,  audiobooks, and podcasts on any device anywhere you like!</p>

        <div className="container_subscription">
          <img src={MUSIC} alt="" />
          <div className="container_plan">
            <strong>Annual Plan</strong>
            <span>$59.99/year</span>
          </div>
          <a href="">Change</a>
        </div>

        <div className="btn">
          <button>Proceed to Payment</button>

          <a href="">Cancel Order</a>
        </div>
      </div>


    </div>
  );
}

export default App;
