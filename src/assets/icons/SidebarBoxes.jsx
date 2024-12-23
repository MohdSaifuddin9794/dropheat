import React from 'react';

const SidebarBoxes = () => {
    return (
      <div>
        <svg
          width="54"
          height="54"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1_469)">
            <path
              d="M22 13.06C22.2725 13.0208 22.5508 13 22.8333 13H31.1667C31.4492 13 31.7275 13.0208 32 13.06V20.5H29.5C29.5 19.1217 28.3783 18 27 18C25.6217 18 24.5 19.1217 24.5 20.5H22V13.06ZM33.6667 20.5H37V18.8333C37 16.5108 35.6358 14.5017 33.6667 13.5633V20.5ZM29.5 22.1667V23C29.5 24.3783 28.3783 25.5 27 25.5C25.6217 25.5 24.5 24.3783 24.5 23V22.1667H17V28.8333C17 30.845 18.4342 32.5292 20.3333 32.9158V24.6667C20.3333 24.2067 20.7058 23.8333 21.1667 23.8333C21.6275 23.8333 22 24.2067 22 24.6667V33H32V24.6667C32 24.2067 32.3725 23.8333 32.8333 23.8333C33.2942 23.8333 33.6667 24.2067 33.6667 24.6667V32.9158C35.5658 32.5283 37 30.845 37 28.8333V22.1667H29.5ZM20.3333 20.5V13.5633C18.3642 14.5017 17 16.5108 17 18.8333V20.5H20.3333ZM27 23.8333C27.46 23.8333 27.8333 23.4592 27.8333 23V20.5C27.8333 20.0408 27.46 19.6667 27 19.6667C26.54 19.6667 26.1667 20.0408 26.1667 20.5V23C26.1667 23.4592 26.54 23.8333 27 23.8333Z"
              fill="#676778"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_469"
              x="-1.6"
              y="-1.6"
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
                result="effect1_dropShadow_1_469"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_469"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    );
}

export default SidebarBoxes;
