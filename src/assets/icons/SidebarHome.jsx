import React from 'react';

const SidebarHome = () => {
    return (
      <div>
        <svg
          width="54"
          height="53"
          viewBox="0 0 54 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1_467)">
            <path
              d="M24.2761 13.9912C25.9116 12.8464 28.0884 12.8464 29.7239 13.9912L34.7239 17.4912C35.9937 18.3801 36.75 19.8326 36.75 21.3826V27C36.75 29.6233 34.6234 31.7499 32 31.7499H30C29.5858 31.7499 29.25 31.4142 29.25 30.9999V26.9999C29.25 26.3096 28.6904 25.7499 28 25.7499H26C25.3096 25.7499 24.75 26.3096 24.75 26.9999V30.9999C24.75 31.4142 24.4142 31.7499 24 31.7499H22C19.3766 31.7499 17.25 29.6233 17.25 26.9999V21.3826C17.25 19.8326 18.0063 18.3801 19.2761 17.4912L24.2761 13.9912Z"
              fill="#676778"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_467"
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
                result="effect1_dropShadow_1_467"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_467"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    );
}

export default SidebarHome;
