import React from 'react';
import { Link } from 'react-router-dom';
import FeatureBox from './FeatureBox';

const FeaturedBox = () => {
    return (
      <div className="feature-box-container mt-3">
        <div className="d-flex align-items-center justify-content-between feature mb-3">
          <div className="d-flex align-items-center feature-left">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 0.56C5.2725 0.520833 5.55083 0.5 5.83333 0.5H14.1667C14.4492 0.5 14.7275 0.520833 15 0.56V8H12.5C12.5 6.62167 11.3783 5.5 10 5.5C8.62167 5.5 7.5 6.62167 7.5 8H5V0.56ZM16.6667 8H20V6.33333C20 4.01083 18.6358 2.00167 16.6667 1.06333V8ZM12.5 9.66667V10.5C12.5 11.8783 11.3783 13 10 13C8.62167 13 7.5 11.8783 7.5 10.5V9.66667H0V16.3333C0 18.345 1.43417 20.0292 3.33333 20.4158V12.1667C3.33333 11.7067 3.70583 11.3333 4.16667 11.3333C4.6275 11.3333 5 11.7067 5 12.1667V20.5H15V12.1667C15 11.7067 15.3725 11.3333 15.8333 11.3333C16.2942 11.3333 16.6667 11.7067 16.6667 12.1667V20.4158C18.5658 20.0283 20 18.345 20 16.3333V9.66667H12.5ZM3.33333 8V1.06333C1.36417 2.00167 0 4.01083 0 6.33333V8H3.33333ZM10 11.3333C10.46 11.3333 10.8333 10.9592 10.8333 10.5V8C10.8333 7.54083 10.46 7.16667 10 7.16667C9.54 7.16667 9.16667 7.54083 9.16667 8V10.5C9.16667 10.9592 9.54 11.3333 10 11.3333Z"
                fill="#9F65FF"
              />
            </svg>

            <h2 className="feature-title">Featured Boxes</h2>
          </div>
          <nav className="nav nav-pills nav-fill feature-tabs">
            <Link className="nav-link active" aria-current="page" to="#">
              Featured
            </Link>
            <Link className="nav-link" to="#">
              New Boxes
            </Link>
            <Link className="nav-link" to="#">
              Top Boxes
            </Link>
          </nav>
          <div className="form-control">
            <label htmlFor="sort-by" className="form-label">
              Sort by:
            </label>
            <select class="form-select" >
              <option selected>Price</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className='featurebox-container d-flex align-items-center gap-2 flex-wrap'>
        <FeatureBox />
        </div>
      </div>
    );
}

export default FeaturedBox;
