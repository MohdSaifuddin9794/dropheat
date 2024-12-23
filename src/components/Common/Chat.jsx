import React from 'react';
import MsgIcon from './../../assets/icons/MsgIcon.jsx'
import Thumbnail from './../../assets/images/thumbnail.png'
const Chat = () => {
    return (
      <div className="chat-window">
        <div className="chat-header d-flex align-item-center justify-content-between">
          <div className="d-flex chat-icons">
            <MsgIcon></MsgIcon>
            <h4 className="chat-title">Chat</h4>
          </div>
          <div className="d-flex msg-counts-container align-items-center">
            <div className="d-flex align-items-center  counts">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle opacity="0.2" cx="8" cy="8" r="8" fill="#B1FF62" />
                <circle cx="8" cy="8" r="3" fill="#B1FF62" />
              </svg>
              <p className="my-0">12, 490</p>
            </div>
            <button className="open-chat">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="#CBCBDD"
                  stroke-width="1.77778"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="chat-body">
          <div className="d-flex gap-2 mb-3">
            <div className="thumbnail">
              <img src={Thumbnail} alt="" />
            </div>
            <div className="chat-boxes">
              <div className="d-flex align-items-center gap-1 mb-2">
                <span className="name">coolmate</span>
                <span className="time">10:13</span>
              </div>
              <div className="msg-box">Hello all friends</div>
            </div>
          </div>
          <div className="d-flex gap-2 mb-3">
            <div className="thumbnail">
              <img src={Thumbnail} alt="" />
            </div>
            <div className="chat-boxes">
              <div className="d-flex align-items-center gap-1 mb-2">
                <span className="name">coolmate</span>
                <span className="time">10:13</span>
              </div>
              <div className="msg-box">Hello all friends</div>
            </div>
          </div>
          <div className="d-flex gap-2 mb-3">
            <div className="thumbnail">
              <img src={Thumbnail} alt="" />
            </div>
            <div className="chat-boxes">
              <div className="d-flex align-items-center gap-1 mb-2">
                <span className="name">coolmate</span>
                <span className="time">10:13</span>
              </div>
              <div className="msg-box">Hello all friends</div>
            </div>
          </div>
          <div className="d-flex gap-2 mb-3">
            <div className="thumbnail">
              <img src={Thumbnail} alt="" />
            </div>
            <div className="chat-boxes">
              <div className="d-flex align-items-center gap-1 mb-2">
                <span className="name">coolmate</span>
                <span className="time">10:13</span>
              </div>
              <div className="msg-box">Hello all friends</div>
            </div>
          </div>
          <div className="d-flex gap-2 mb-3">
            <div className="thumbnail">
              <img src={Thumbnail} alt="" />
            </div>
            <div className="chat-boxes">
              <div className="d-flex align-items-center gap-1 mb-2">
                <span className="name">coolmate</span>
                <span className="time">10:13</span>
              </div>
              <div className="msg-box">Hello all friends</div>
            </div>
          </div>
          <div className="d-flex gap-2 mb-3">
            <div className="thumbnail">
              <img src={Thumbnail} alt="" />
            </div>
            <div className="chat-boxes">
              <div className="d-flex align-items-center gap-1 mb-2">
                <span className="name">coolmate</span>
                <span className="time">10:13</span>
              </div>
              <div className="msg-box">Hello all friends</div>
            </div>
          </div>
          <div className="d-flex gap-2 mb-3">
            <div className="thumbnail">
              <img src={Thumbnail} alt="" />
            </div>
            <div className="chat-boxes">
              <div className="d-flex align-items-center gap-1 mb-2">
                <span className="name">coolmate</span>
                <span className="time">10:13</span>
              </div>
              <div className="msg-box">Hello all friends</div>
            </div>
          </div>
          <div className="d-flex gap-2 mb-3">
            <div className="thumbnail">
              <img src={Thumbnail} alt="" />
            </div>
            <div className="chat-boxes">
              <div className="d-flex align-items-center gap-1 mb-2">
                <span className="name">coolmate</span>
                <span className="time">10:13</span>
              </div>
              <div className="msg-box">Hello all friends</div>
            </div>
          </div>
          <div className="d-flex gap-2 mb-3">
            <div className="thumbnail">
              <img src={Thumbnail} alt="" />
            </div>
            <div className="chat-boxes">
              <div className="d-flex align-items-center gap-1 mb-2">
                <span className="name">coolmate</span>
                <span className="time">10:13</span>
              </div>
              <div className="msg-box">Hello all friends</div>
            </div>
          </div>
          <div className="d-flex gap-2 mb-3">
            <div className="thumbnail">
              <img src={Thumbnail} alt="" />
            </div>
            <div className="chat-boxes">
              <div className="d-flex align-items-center gap-1 mb-2">
                <span className="name">coolmate</span>
                <span className="time">10:13</span>
              </div>
              <div className="msg-box">Hello all friends</div>
            </div>
          </div>
          <div className="d-flex gap-2 mb-3">
            <div className="thumbnail">
              <img src={Thumbnail} alt="" />
            </div>
            <div className="chat-boxes">
              <div className="d-flex align-items-center gap-1 mb-2">
                <span className="name">coolmate</span>
                <span className="time">10:13</span>
              </div>
              <div className="msg-box">Hello all friends</div>
            </div>
          </div>
          <div className="d-flex gap-2 mb-3">
            <div className="thumbnail">
              <img src={Thumbnail} alt="" />
            </div>
            <div className="chat-boxes">
              <div className="d-flex align-items-center gap-1 mb-2">
                <span className="name">coolmate</span>
                <span className="time">10:13</span>
              </div>
              <div className="msg-box">Hello all friends</div>
            </div>
          </div>
        </div>
        <div className="chat-footer">
          <div className="d-flex chat-input align-items-center gap-2 justify-content-between">
            <input type="text" placeholder="Enter your message" />
            <div className="d-flex smile align-items-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.00002 17.3333C13.6024 17.3333 17.3334 13.6024 17.3334 8.99999C17.3334 4.39762 13.6024 0.666656 9.00002 0.666656C4.39765 0.666656 0.666687 4.39762 0.666687 8.99999C0.666687 13.6024 4.39765 17.3333 9.00002 17.3333ZM5.99792 11.9611C6.20346 11.6838 6.59489 11.6257 6.8722 11.8312C7.47915 12.2811 8.21177 12.5417 9.00002 12.5417C9.78827 12.5417 10.5209 12.2811 11.1278 11.8312C11.4051 11.6257 11.7966 11.6838 12.0021 11.9611C12.2077 12.2385 12.1495 12.6299 11.8722 12.8354C11.0619 13.4361 10.0708 13.7917 9.00002 13.7917C7.92921 13.7917 6.93819 13.4361 6.12784 12.8354C5.85054 12.6299 5.79237 12.2385 5.99792 11.9611ZM12.3334 7.74999C12.3334 8.44035 11.9603 8.99999 11.5 8.99999C11.0398 8.99999 10.6667 8.44035 10.6667 7.74999C10.6667 7.05963 11.0398 6.49999 11.5 6.49999C11.9603 6.49999 12.3334 7.05963 12.3334 7.74999ZM6.50002 8.99999C6.96026 8.99999 7.33335 8.44035 7.33335 7.74999C7.33335 7.05963 6.96026 6.49999 6.50002 6.49999C6.03978 6.49999 5.66669 7.05963 5.66669 7.74999C5.66669 8.44035 6.03978 8.99999 6.50002 8.99999Z"
                  fill="#4B4B58"
                />
              </svg>
              <button className="send-btn gradient-btn">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8013 3.70061C18.553 1.53736 16.4885 -0.564995 14.3169 0.200498L1.87065 4.58792C-0.518025 5.42995 -0.582889 8.80181 1.76992 9.73721L1.77648 9.73982L5.85907 11.2571L9.80808 7.30805C10.0522 7.06397 10.4479 7.06397 10.692 7.30805C10.936 7.55213 10.936 7.94785 10.692 8.19193L6.74798 12.1359C6.74805 12.1361 6.7479 12.1357 6.74798 12.1359L8.3517 16.1867C9.25703 18.5828 12.6453 18.5376 13.4866 16.1166L17.8013 3.70061Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Chat;
