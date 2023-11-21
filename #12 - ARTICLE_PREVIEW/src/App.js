import React, { useState } from 'react';
import ILLU from './assets/images/drawers.jpg'
import PROFILE_PIC from './assets/images/avatar-michelle.jpg';
import BUTTON from './assets/images/icon-share.svg';
import FB from './assets/images/icon-facebook.svg';
import PR from './assets/images/icon-pinterest.svg';
import TW from './assets/images/icon-twitter.svg';


const App = () => {
  const [isMediaVisible, setIsMediaVisible] = useState(false);

  const toggleMediaVisibility = () => {
    setIsMediaVisible(!isMediaVisible);
  };

  return (
    <div className='App'>

      <div className="wrapper">
        <img className='illu' src={ILLU} alt="" />

        <div className="container-content">
          <h2>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h2>

          <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>

          <div className="container-profile">

            <div className="container_pic_name">
              <img className='profile-pic' src={PROFILE_PIC} alt="" />

              <div className="name_date">
                <span><strong>Michelle Appleton</strong></span>
                <span>28 Jun 2020</span>
              </div>

            </div>

            <img
              className='share-btn'
              onClick={toggleMediaVisibility}
              src={BUTTON} alt="" />

          </div>

        </div>

        {/* MODAL WITH SOCIAL  */}
        {isMediaVisible && (
          <div className="container-media">
            <button>SHARE</button>
            <img className='social' src={FB} alt="" />
            <img className='social' src={TW} alt="" />
            <img className='social' src={PR} alt="" />
          </div>
        )}

      </div>

    </div>
  );
};

export default App;