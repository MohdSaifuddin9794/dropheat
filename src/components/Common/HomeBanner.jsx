import React from 'react';
import banner from './../../assets/images/banner-2.png'
const HomeBanner = () => {
    return (
      <div className='desktop-banner'>
        
      <div className="row">
        <div className="col-xl-8">
          <div className="banner-container">
            <div className="row">
              <div className="col-xl-5">
                <h2 className="banner-title">
                  Sign Up today and claim your FREE box
                </h2>
                <p className="para">
                  Unlock YOUR Free Box Today! Each box is a treasure trove of
                  excitement waiting to be discovered. Don't miss out – dive
                  into the unknown with us!
                </p>
                <button className="gradient-btn mt-4 ">Claim now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 ps-0">
          <div
            className="banner-container-2"
            style={{
              backgroundImage: `url(${banner})`,
            }}
          >
            <div className="row">
              <div className="col-xl-8">

            <h2 className="banner-title">
              Earn up to 10% on deposits from your friends
            </h2>
            <p className="para">
              Give your friends a 5% bonus added to all their cash deposits
            </p>
            <button className="gradient-btn mt-4 ">Refer a friend</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}

export default HomeBanner;
