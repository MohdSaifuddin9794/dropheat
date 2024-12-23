import React from 'react';

const MicIcon = () => {
    return (
      <div>
        <svg
          width="54"
          height="53"
          viewBox="0 0 54 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1_480)">
            <path
              d="M36.75 14.6665C36.75 13.3454 35.3422 12.5007 34.1765 13.1224L30.7484 14.9507C30.7495 14.967 30.75 14.9834 30.75 15V26C30.75 26.0165 30.7495 26.0328 30.7484 26.049L34.1765 27.8773C35.3422 28.499 36.75 27.6543 36.75 26.3331V14.6665Z"
              fill="#4B4B58"
            />
            <path
              d="M29.25 25.7498V15.2498H22.5C19.6005 15.2498 17.25 17.6003 17.25 20.4998C17.25 23.3993 19.6005 25.7498 22.5 25.7498H29.25Z"
              fill="#4B4B58"
            />
            <path
              d="M27.2457 28.7649L26.7406 27.2499H22.5C22.3156 27.2499 22.1329 27.2425 21.9522 27.228L22.9426 30.1993C23.2513 31.1254 24.118 31.75 25.0941 31.75C26.6421 31.75 27.7352 30.2335 27.2457 28.7649Z"
              fill="#4B4B58"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_480"
              x="-1.6"
              y="-2.6"
              width="57.2"
              height="57.2"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="8.3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.403922 0 0 0 0 0.403922 0 0 0 0 0.470588 0 0 0 0.43 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_480"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_480"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    );
}

export default MicIcon;
