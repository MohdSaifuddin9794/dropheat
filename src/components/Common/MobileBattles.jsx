import React from 'react';
import player1 from "./../../assets/images/pl-1.png";
import player2 from "./../../assets/images/pl-2.png";
import player3 from "./../../assets/images/pl-3.png";
import player4 from "./../../assets/images/pl-4.png";
import gift1 from "./../../assets/images/gift-1.png";
import gift2 from "./../../assets/images/gift-2.png";
import gift3 from "./../../assets/images/gift-3.png";
import gift4 from "./../../assets/images/gift-4.png";
import gift5 from "./../../assets/images/gift-5.png";
const MobileBattles = () => {
        const giftImages = [
          gift1,
          gift2,
          gift3,
          gift4,
          gift5,
        
        ];
    return (
      <div>
        <div className="battel-container mb-battles">
          <div className="row align-items-center">
            <div className="col-xl-12">
              <div className="d-flex align-items-center justify-content-center gift-container">
                {giftImages.map((gift) => (
                  <img src={gift} />
                ))}
              </div>
            </div>
            <div className="col-6 ">
              <div className="d-flex vs align-items-center justify-content-center gap-3 left">
                <div className="imgs d-flex align-items-center">
                  <img src={player1} alt="" />
                  <img src={player2} className="pl-2" alt="" />
                </div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.4697 0.46967L11.0606 7.87872L12.1213 8.93938L19.5303 1.53033C19.8232 1.23744 19.8232 0.762563 19.5303 0.46967C19.2374 0.176777 18.7626 0.176777 18.4697 0.46967Z"
                    fill="#3FA1FC"
                  />
                  <path
                    d="M7.87864 11.0607L8.9393 12.1214L8.03887 13.0218C8.54719 13.7465 8.8252 14.6151 8.8252 15.5124C8.8252 16.2554 8.63454 16.9787 8.28038 17.6169C8.00754 18.1086 7.52835 18.3534 7.0496 18.3743C6.58672 18.3944 6.12499 18.2101 5.78706 17.8722L5.43924 17.5244L4.38441 18.5792C3.56617 19.3974 2.23954 19.3974 1.4213 18.5792C0.603058 17.761 0.603056 16.4343 1.4213 15.6161L2.47613 14.5612L2.12806 14.2132C1.79013 13.8753 1.6058 13.4135 1.62597 12.9506C1.64684 12.4719 1.89162 11.9927 2.38331 11.7199C3.02153 11.3657 3.74488 11.175 4.48789 11.175C5.38501 11.175 6.25348 11.453 6.97817 11.9612L7.87864 11.0607Z"
                    fill="#3FA1FC"
                  />
                  <path
                    d="M0.969669 2.03033C0.676777 1.73744 0.676777 1.26256 0.969669 0.96967C1.26256 0.676777 1.73744 0.676777 2.03033 0.96967L13.0219 11.9613C13.7467 11.4529 14.6153 11.1749 15.5126 11.1749C16.2556 11.1749 16.9789 11.3656 17.6171 11.7197C18.1088 11.9926 18.3536 12.4718 18.3745 12.9505C18.3947 13.4134 18.2103 13.8751 17.8724 14.2131L17.524 14.5614L18.5787 15.6161C19.3969 16.4343 19.3969 17.761 18.5787 18.5792C17.7605 19.3974 16.4338 19.3974 15.6156 18.5792L14.5609 17.5245L14.2134 17.8721C13.8755 18.21 13.4137 18.3943 12.9508 18.3741C12.4721 18.3533 11.9929 18.1085 11.7201 17.6168C11.3659 16.9786 11.1753 16.2552 11.1753 15.5122C11.1753 14.6151 11.4532 13.7467 11.9613 13.022L0.969669 2.03033Z"
                    fill="#3FA1FC"
                  />
                </svg>
                <div className="imgs d-flex align-items-center">
                  <img src={player3} alt="" />
                  <img src={player4} className="pl-2" alt="" />
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex align-items-center gap-2">
                <div className="price-container">
                  <span className="price">$350</span>
                  <span className="price-point">.00</span>
                </div>
                <button className="gradient-btn">Open case</button>
              </div>
            </div>
          </div>
        </div>
        <div className="battel-container mb-battles">
          <div className="row align-items-center">
            <div className="col-xl-12">
              <div className="d-flex align-items-center justify-content-center gift-container">
                {giftImages.map((gift) => (
                  <img src={gift} />
                ))}
              </div>
            </div>
            <div className="col-6 ">
              <div className="d-flex vs align-items-center justify-content-center gap-3 left">
                <div className="imgs d-flex align-items-center">
                  <img src={player1} alt="" />
                  <img src={player2} className="pl-2" alt="" />
                </div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.4697 0.46967L11.0606 7.87872L12.1213 8.93938L19.5303 1.53033C19.8232 1.23744 19.8232 0.762563 19.5303 0.46967C19.2374 0.176777 18.7626 0.176777 18.4697 0.46967Z"
                    fill="#3FA1FC"
                  />
                  <path
                    d="M7.87864 11.0607L8.9393 12.1214L8.03887 13.0218C8.54719 13.7465 8.8252 14.6151 8.8252 15.5124C8.8252 16.2554 8.63454 16.9787 8.28038 17.6169C8.00754 18.1086 7.52835 18.3534 7.0496 18.3743C6.58672 18.3944 6.12499 18.2101 5.78706 17.8722L5.43924 17.5244L4.38441 18.5792C3.56617 19.3974 2.23954 19.3974 1.4213 18.5792C0.603058 17.761 0.603056 16.4343 1.4213 15.6161L2.47613 14.5612L2.12806 14.2132C1.79013 13.8753 1.6058 13.4135 1.62597 12.9506C1.64684 12.4719 1.89162 11.9927 2.38331 11.7199C3.02153 11.3657 3.74488 11.175 4.48789 11.175C5.38501 11.175 6.25348 11.453 6.97817 11.9612L7.87864 11.0607Z"
                    fill="#3FA1FC"
                  />
                  <path
                    d="M0.969669 2.03033C0.676777 1.73744 0.676777 1.26256 0.969669 0.96967C1.26256 0.676777 1.73744 0.676777 2.03033 0.96967L13.0219 11.9613C13.7467 11.4529 14.6153 11.1749 15.5126 11.1749C16.2556 11.1749 16.9789 11.3656 17.6171 11.7197C18.1088 11.9926 18.3536 12.4718 18.3745 12.9505C18.3947 13.4134 18.2103 13.8751 17.8724 14.2131L17.524 14.5614L18.5787 15.6161C19.3969 16.4343 19.3969 17.761 18.5787 18.5792C17.7605 19.3974 16.4338 19.3974 15.6156 18.5792L14.5609 17.5245L14.2134 17.8721C13.8755 18.21 13.4137 18.3943 12.9508 18.3741C12.4721 18.3533 11.9929 18.1085 11.7201 17.6168C11.3659 16.9786 11.1753 16.2552 11.1753 15.5122C11.1753 14.6151 11.4532 13.7467 11.9613 13.022L0.969669 2.03033Z"
                    fill="#3FA1FC"
                  />
                </svg>
                <div className="imgs d-flex align-items-center">
                  <img src={player3} alt="" />
                  <img src={player4} className="pl-2" alt="" />
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex align-items-center gap-2">
                <div className="price-container">
                  <span className="price">$350</span>
                  <span className="price-point">.00</span>
                </div>
                <button className="gradient-btn">Open case</button>
              </div>
            </div>
          </div>
        </div>
        <div className="battel-container mb-battles">
          <div className="row align-items-center">
            <div className="col-xl-12">
              <div className="d-flex align-items-center justify-content-center gift-container">
                {giftImages.map((gift) => (
                  <img src={gift} />
                ))}
              </div>
            </div>
            <div className="col-6 ">
              <div className="d-flex vs align-items-center justify-content-center gap-3 left">
                <div className="imgs d-flex align-items-center">
                  <img src={player1} alt="" />
                  <img src={player2} className="pl-2" alt="" />
                </div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.4697 0.46967L11.0606 7.87872L12.1213 8.93938L19.5303 1.53033C19.8232 1.23744 19.8232 0.762563 19.5303 0.46967C19.2374 0.176777 18.7626 0.176777 18.4697 0.46967Z"
                    fill="#3FA1FC"
                  />
                  <path
                    d="M7.87864 11.0607L8.9393 12.1214L8.03887 13.0218C8.54719 13.7465 8.8252 14.6151 8.8252 15.5124C8.8252 16.2554 8.63454 16.9787 8.28038 17.6169C8.00754 18.1086 7.52835 18.3534 7.0496 18.3743C6.58672 18.3944 6.12499 18.2101 5.78706 17.8722L5.43924 17.5244L4.38441 18.5792C3.56617 19.3974 2.23954 19.3974 1.4213 18.5792C0.603058 17.761 0.603056 16.4343 1.4213 15.6161L2.47613 14.5612L2.12806 14.2132C1.79013 13.8753 1.6058 13.4135 1.62597 12.9506C1.64684 12.4719 1.89162 11.9927 2.38331 11.7199C3.02153 11.3657 3.74488 11.175 4.48789 11.175C5.38501 11.175 6.25348 11.453 6.97817 11.9612L7.87864 11.0607Z"
                    fill="#3FA1FC"
                  />
                  <path
                    d="M0.969669 2.03033C0.676777 1.73744 0.676777 1.26256 0.969669 0.96967C1.26256 0.676777 1.73744 0.676777 2.03033 0.96967L13.0219 11.9613C13.7467 11.4529 14.6153 11.1749 15.5126 11.1749C16.2556 11.1749 16.9789 11.3656 17.6171 11.7197C18.1088 11.9926 18.3536 12.4718 18.3745 12.9505C18.3947 13.4134 18.2103 13.8751 17.8724 14.2131L17.524 14.5614L18.5787 15.6161C19.3969 16.4343 19.3969 17.761 18.5787 18.5792C17.7605 19.3974 16.4338 19.3974 15.6156 18.5792L14.5609 17.5245L14.2134 17.8721C13.8755 18.21 13.4137 18.3943 12.9508 18.3741C12.4721 18.3533 11.9929 18.1085 11.7201 17.6168C11.3659 16.9786 11.1753 16.2552 11.1753 15.5122C11.1753 14.6151 11.4532 13.7467 11.9613 13.022L0.969669 2.03033Z"
                    fill="#3FA1FC"
                  />
                </svg>
                <div className="imgs d-flex align-items-center">
                  <img src={player3} alt="" />
                  <img src={player4} className="pl-2" alt="" />
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex align-items-center gap-2">
                <div className="price-container">
                  <span className="price">$350</span>
                  <span className="price-point">.00</span>
                </div>
                <button className="gradient-btn">Open case</button>
              </div>
            </div>
          </div>
        </div>
        <div className="battel-container mb-battles">
          <div className="row align-items-center">
            <div className="col-xl-12">
              <div className="d-flex align-items-center justify-content-center gift-container">
                {giftImages.map((gift) => (
                  <img src={gift} />
                ))}
              </div>
            </div>
            <div className="col-6 ">
              <div className="d-flex vs align-items-center justify-content-center gap-3 left">
                <div className="imgs d-flex align-items-center">
                  <img src={player1} alt="" />
                  <img src={player2} className="pl-2" alt="" />
                </div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.4697 0.46967L11.0606 7.87872L12.1213 8.93938L19.5303 1.53033C19.8232 1.23744 19.8232 0.762563 19.5303 0.46967C19.2374 0.176777 18.7626 0.176777 18.4697 0.46967Z"
                    fill="#3FA1FC"
                  />
                  <path
                    d="M7.87864 11.0607L8.9393 12.1214L8.03887 13.0218C8.54719 13.7465 8.8252 14.6151 8.8252 15.5124C8.8252 16.2554 8.63454 16.9787 8.28038 17.6169C8.00754 18.1086 7.52835 18.3534 7.0496 18.3743C6.58672 18.3944 6.12499 18.2101 5.78706 17.8722L5.43924 17.5244L4.38441 18.5792C3.56617 19.3974 2.23954 19.3974 1.4213 18.5792C0.603058 17.761 0.603056 16.4343 1.4213 15.6161L2.47613 14.5612L2.12806 14.2132C1.79013 13.8753 1.6058 13.4135 1.62597 12.9506C1.64684 12.4719 1.89162 11.9927 2.38331 11.7199C3.02153 11.3657 3.74488 11.175 4.48789 11.175C5.38501 11.175 6.25348 11.453 6.97817 11.9612L7.87864 11.0607Z"
                    fill="#3FA1FC"
                  />
                  <path
                    d="M0.969669 2.03033C0.676777 1.73744 0.676777 1.26256 0.969669 0.96967C1.26256 0.676777 1.73744 0.676777 2.03033 0.96967L13.0219 11.9613C13.7467 11.4529 14.6153 11.1749 15.5126 11.1749C16.2556 11.1749 16.9789 11.3656 17.6171 11.7197C18.1088 11.9926 18.3536 12.4718 18.3745 12.9505C18.3947 13.4134 18.2103 13.8751 17.8724 14.2131L17.524 14.5614L18.5787 15.6161C19.3969 16.4343 19.3969 17.761 18.5787 18.5792C17.7605 19.3974 16.4338 19.3974 15.6156 18.5792L14.5609 17.5245L14.2134 17.8721C13.8755 18.21 13.4137 18.3943 12.9508 18.3741C12.4721 18.3533 11.9929 18.1085 11.7201 17.6168C11.3659 16.9786 11.1753 16.2552 11.1753 15.5122C11.1753 14.6151 11.4532 13.7467 11.9613 13.022L0.969669 2.03033Z"
                    fill="#3FA1FC"
                  />
                </svg>
                <div className="imgs d-flex align-items-center">
                  <img src={player3} alt="" />
                  <img src={player4} className="pl-2" alt="" />
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex align-items-center gap-2">
                <div className="price-container">
                  <span className="price">$350</span>
                  <span className="price-point">.00</span>
                </div>
                <button className="gradient-btn">Open case</button>
              </div>
            </div>
          </div>
        </div>
        <div className="battel-container mb-battles">
          <div className="row align-items-center">
            <div className="col-xl-12">
              <div className="d-flex align-items-center justify-content-center gift-container">
                {giftImages.map((gift) => (
                  <img src={gift} />
                ))}
              </div>
            </div>
            <div className="col-6 ">
              <div className="d-flex vs align-items-center justify-content-center gap-3 left">
                <div className="imgs d-flex align-items-center">
                  <img src={player1} alt="" />
                  <img src={player2} className="pl-2" alt="" />
                </div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.4697 0.46967L11.0606 7.87872L12.1213 8.93938L19.5303 1.53033C19.8232 1.23744 19.8232 0.762563 19.5303 0.46967C19.2374 0.176777 18.7626 0.176777 18.4697 0.46967Z"
                    fill="#3FA1FC"
                  />
                  <path
                    d="M7.87864 11.0607L8.9393 12.1214L8.03887 13.0218C8.54719 13.7465 8.8252 14.6151 8.8252 15.5124C8.8252 16.2554 8.63454 16.9787 8.28038 17.6169C8.00754 18.1086 7.52835 18.3534 7.0496 18.3743C6.58672 18.3944 6.12499 18.2101 5.78706 17.8722L5.43924 17.5244L4.38441 18.5792C3.56617 19.3974 2.23954 19.3974 1.4213 18.5792C0.603058 17.761 0.603056 16.4343 1.4213 15.6161L2.47613 14.5612L2.12806 14.2132C1.79013 13.8753 1.6058 13.4135 1.62597 12.9506C1.64684 12.4719 1.89162 11.9927 2.38331 11.7199C3.02153 11.3657 3.74488 11.175 4.48789 11.175C5.38501 11.175 6.25348 11.453 6.97817 11.9612L7.87864 11.0607Z"
                    fill="#3FA1FC"
                  />
                  <path
                    d="M0.969669 2.03033C0.676777 1.73744 0.676777 1.26256 0.969669 0.96967C1.26256 0.676777 1.73744 0.676777 2.03033 0.96967L13.0219 11.9613C13.7467 11.4529 14.6153 11.1749 15.5126 11.1749C16.2556 11.1749 16.9789 11.3656 17.6171 11.7197C18.1088 11.9926 18.3536 12.4718 18.3745 12.9505C18.3947 13.4134 18.2103 13.8751 17.8724 14.2131L17.524 14.5614L18.5787 15.6161C19.3969 16.4343 19.3969 17.761 18.5787 18.5792C17.7605 19.3974 16.4338 19.3974 15.6156 18.5792L14.5609 17.5245L14.2134 17.8721C13.8755 18.21 13.4137 18.3943 12.9508 18.3741C12.4721 18.3533 11.9929 18.1085 11.7201 17.6168C11.3659 16.9786 11.1753 16.2552 11.1753 15.5122C11.1753 14.6151 11.4532 13.7467 11.9613 13.022L0.969669 2.03033Z"
                    fill="#3FA1FC"
                  />
                </svg>
                <div className="imgs d-flex align-items-center">
                  <img src={player3} alt="" />
                  <img src={player4} className="pl-2" alt="" />
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex align-items-center gap-2">
                <div className="price-container">
                  <span className="price">$350</span>
                  <span className="price-point">.00</span>
                </div>
                <button className="gradient-btn">Open case</button>
              </div>
            </div>
          </div>
        </div>
        <div className="battel-container mb-battles">
          <div className="row align-items-center">
            <div className="col-xl-12">
              <div className="d-flex align-items-center justify-content-center gift-container">
                {giftImages.map((gift) => (
                  <img src={gift} />
                ))}
              </div>
            </div>
            <div className="col-6 ">
              <div className="d-flex vs align-items-center justify-content-center gap-3 left">
                <div className="imgs d-flex align-items-center">
                  <img src={player1} alt="" />
                  <img src={player2} className="pl-2" alt="" />
                </div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.4697 0.46967L11.0606 7.87872L12.1213 8.93938L19.5303 1.53033C19.8232 1.23744 19.8232 0.762563 19.5303 0.46967C19.2374 0.176777 18.7626 0.176777 18.4697 0.46967Z"
                    fill="#3FA1FC"
                  />
                  <path
                    d="M7.87864 11.0607L8.9393 12.1214L8.03887 13.0218C8.54719 13.7465 8.8252 14.6151 8.8252 15.5124C8.8252 16.2554 8.63454 16.9787 8.28038 17.6169C8.00754 18.1086 7.52835 18.3534 7.0496 18.3743C6.58672 18.3944 6.12499 18.2101 5.78706 17.8722L5.43924 17.5244L4.38441 18.5792C3.56617 19.3974 2.23954 19.3974 1.4213 18.5792C0.603058 17.761 0.603056 16.4343 1.4213 15.6161L2.47613 14.5612L2.12806 14.2132C1.79013 13.8753 1.6058 13.4135 1.62597 12.9506C1.64684 12.4719 1.89162 11.9927 2.38331 11.7199C3.02153 11.3657 3.74488 11.175 4.48789 11.175C5.38501 11.175 6.25348 11.453 6.97817 11.9612L7.87864 11.0607Z"
                    fill="#3FA1FC"
                  />
                  <path
                    d="M0.969669 2.03033C0.676777 1.73744 0.676777 1.26256 0.969669 0.96967C1.26256 0.676777 1.73744 0.676777 2.03033 0.96967L13.0219 11.9613C13.7467 11.4529 14.6153 11.1749 15.5126 11.1749C16.2556 11.1749 16.9789 11.3656 17.6171 11.7197C18.1088 11.9926 18.3536 12.4718 18.3745 12.9505C18.3947 13.4134 18.2103 13.8751 17.8724 14.2131L17.524 14.5614L18.5787 15.6161C19.3969 16.4343 19.3969 17.761 18.5787 18.5792C17.7605 19.3974 16.4338 19.3974 15.6156 18.5792L14.5609 17.5245L14.2134 17.8721C13.8755 18.21 13.4137 18.3943 12.9508 18.3741C12.4721 18.3533 11.9929 18.1085 11.7201 17.6168C11.3659 16.9786 11.1753 16.2552 11.1753 15.5122C11.1753 14.6151 11.4532 13.7467 11.9613 13.022L0.969669 2.03033Z"
                    fill="#3FA1FC"
                  />
                </svg>
                <div className="imgs d-flex align-items-center">
                  <img src={player3} alt="" />
                  <img src={player4} className="pl-2" alt="" />
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex align-items-center gap-2">
                <div className="price-container">
                  <span className="price">$350</span>
                  <span className="price-point">.00</span>
                </div>
                <button className="gradient-btn">Open case</button>
              </div>
            </div>
          </div>
        </div>  
      </div>
    );
}

export default MobileBattles;
