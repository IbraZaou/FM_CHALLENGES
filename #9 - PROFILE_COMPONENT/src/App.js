import './style/index.scss';
import PIC from './assets/images/image-victor.jpg';
import BG_PIC from './assets/images/bg-pattern-card.svg';
import BG_TOP from './assets/images/bg-pattern-top.svg';
import BG_BOT from './assets/images/bg-pattern-bottom.svg';

function App() {
  return (
    <div className="App">
      <img className='bg_top' src={BG_TOP} alt="" />
        <div className="wrapper">
        <img className='bg_container' src={BG_PIC} alt="" />
          <img className='profile_pic' src={PIC} alt="" />

          <p>Victor Crest <span>26</span></p>
          <span>London</span>

          <hr />

          <div className="container_stat">
            <div className="bloc">
              <h2><strong>80K</strong></h2>
              <span>Followers</span>
            </div>
            <div className="bloc">
            <h2><strong>803K</strong></h2>
              <span>Likes</span>
            </div>
            <div className="bloc">
            <h2><strong>1.4K</strong></h2>
              <span>Photos</span>
            </div>
          </div>
        </div>
      <img className='bg_bot' src={BG_BOT} alt="" />

    </div>
  );
}

export default App;
