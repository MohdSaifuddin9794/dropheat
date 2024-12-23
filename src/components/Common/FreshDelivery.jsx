import React from 'react';
import Testmonials from './Testmonials';

const FreshDelivery = () => {
    return (
      <div>
        <div className="d-flex align-items-center justify-content-between gap-3 latest-battel-header fresh-delivery mt-4 mb-3">
            <div className='d-flex align-items-center gap-3'>

          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.25 5.5C0.25 2.87665 2.37665 0.75 5 0.75H15C17.6234 0.75 19.75 2.87665 19.75 5.5V15.5C19.75 18.1234 17.6234 20.25 15 20.25H5C2.37665 20.25 0.25 18.1234 0.25 15.5V5.5ZM6 5.25C5.58579 5.25 5.25 5.58579 5.25 6C5.25 6.41421 5.58579 6.75 6 6.75H14C14.4142 6.75 14.75 6.41421 14.75 6C14.75 5.58579 14.4142 5.25 14 5.25H6ZM6 8.25C5.58579 8.25 5.25 8.58579 5.25 9C5.25 9.41421 5.58579 9.75 6 9.75H14C14.4142 9.75 14.75 9.41421 14.75 9C14.75 8.58579 14.4142 8.25 14 8.25H6ZM6 11.25C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75H14C14.4142 12.75 14.75 12.4142 14.75 12C14.75 11.5858 14.4142 11.25 14 11.25H6ZM6 14.25C5.58579 14.25 5.25 14.5858 5.25 15C5.25 15.4142 5.58579 15.75 6 15.75H10C10.4142 15.75 10.75 15.4142 10.75 15C10.75 14.5858 10.4142 14.25 10 14.25H6Z"
              fill="#9F65FF"
            />
          </svg>

          <h2 className="feature-title">Fresh Deliveries</h2>
            </div>
          <p className="para">
            Check out some of the hottest unboxings from our community! To
            appear on our page, tag us on Twitter when your item arrives.
          </p>
        </div>
        <Testmonials></Testmonials>
      </div>
    );
}

export default FreshDelivery;
