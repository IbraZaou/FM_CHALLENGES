import React from 'react';
import TB from './assets/images/icon-team-builder.svg';
import CAL from './assets/images/icon-calculator.svg';
import KAR from './assets/images/icon-karma.svg';
import SUP from './assets/images/icon-supervisor.svg';

const App = () => {
  return (
    <div>

      <div className="wrapper">

        <div className="container-text">
          <h2>Reliable, efficient delivery</h2>
          <h2><strong>Powered by Technology</strong></h2>

          <p>Our artificial intelligence powered tools use millions of project data points to ensure that your projects is successful</p>
        </div>


        <div className="cards">

          <div className="card teambuilder">
            <h2>Team Builder</h2>
            <p>Scams our talent network to create the optimal team for your project</p>
            <div className="container-img">
              <img src={TB} alt="" />
            </div>
          </div>


          <div className="column">
            <div className="card calculator">
              <h2>Calculator</h2>
              <p>Uses data from pas projects to provide better delivery estimates</p>
              <div className="container-img">
                <img src={CAL} alt="" />
              </div>
            </div>
            <div className="card karma">
              <h2>Karma</h2>
              <p>Regularly evaluates our talent to ensure quality</p>
              <div className="container-img">
                <img src={KAR} alt="" />
              </div>
            </div>
          </div>

          <div className="card supervisor">
            <h2>Supervisor</h2>
            <p>Monitors activity to identify project roadblocks</p>
            <div className="container-img">
              <img src={SUP} alt="" />
            </div>
          </div>

        </div>

      </div>

    </div >
  );
};

export default App;