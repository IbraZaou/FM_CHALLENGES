import './style/index.scss';
import IMG from './assets/images/image-header-desktop.jpg';

function App() {
  return (
    <div className="App">
      <div className="wrapper">

<div className="container_info">
        <h2><strong>Get <span>insights</span> that help your business grow.</strong></h2>

        <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>

        <div className="container_number">
          <div>
            <h3>10k+</h3>
            <span>Companies</span>
          </div>

          <div>
            <h3>314</h3>
            <span>Templates</span>
          </div>

          <div>
            <h3>12M+</h3>
            <span>Queries</span>
          </div>
        </div>

        </div>

        <div className="image-container">
        <img src={IMG} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
