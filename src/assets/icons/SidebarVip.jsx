import React from 'react';

const SidebarVip = () => {
    return (
      <div>
        <svg
          width="54"
          height="49"
          viewBox="0 0 54 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1_475)">
            <path
              d="M28.4337 13.7401C27.737 12.7448 26.263 12.7448 25.5663 13.7401L23.4695 16.7356C23.3893 16.8502 23.2307 16.8767 23.1176 16.7944L20.0293 14.5483C18.8726 13.7071 17.25 14.5334 17.25 15.9636V23.9999C17.25 26.0709 18.9289 27.7499 21 27.7499H33C35.0711 27.7499 36.75 26.0709 36.75 23.9999V15.9636C36.75 14.5334 35.1274 13.7071 33.9707 14.5483L30.8824 16.7944C30.7693 16.8767 30.6107 16.8502 30.5305 16.7356L28.4337 13.7401Z"
              fill="#676778"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_475"
              x="-1.6"
              y="-4.6"
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
                result="effect1_dropShadow_1_475"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_475"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    );
}

export default SidebarVip;
