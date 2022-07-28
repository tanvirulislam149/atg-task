import React from "react";
import "./Banner.css";

const Banner = ({ user }) => {
   return (
      <div className="banner-background">
         <div className="text-white banner-text">
            <p className="fw-bold fs-1 mb-0">Computer Engineering</p>
            <p>142,765 Computer Engineers follow this</p>
         </div>
         {user ? (
            <>
               <button className="btn border border-1 border-white text-white d-sm-none d-block join-btn">
                  <svg
                     style={{ marginRight: "6px" }}
                     width="18"
                     height="18"
                     viewBox="0 0 18 18"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M7.24917 12.2908L8.54167 13.5833L13.125 9L8.54167 4.41667L7.24917 5.70917L9.61417 8.08333H0.75V9.91667H9.61417L7.24917 12.2908ZM15.4167 0.75H2.58333C1.56583 0.75 0.75 1.575 0.75 2.58333V6.25H2.58333V2.58333H15.4167V15.4167H2.58333V11.75H0.75V15.4167C0.75 16.425 1.56583 17.25 2.58333 17.25H15.4167C16.425 17.25 17.25 16.425 17.25 15.4167V2.58333C17.25 1.575 16.425 0.75 15.4167 0.75Z"
                        fill="#6A6A6B"
                     />
                  </svg>
                  Leave Group
               </button>
            </>
         ) : (
            <>
               <button className="btn border border-1 border-white d-sm-none d-block text-white join-btn">
                  <svg
                     style={{ marginRight: "6px" }}
                     width="22"
                     height="22"
                     viewBox="0 0 22 22"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M7.33333 9.16671H4.58333V6.41671H2.75V9.16671H0V11H2.75V13.75H4.58333V11H7.33333V9.16671ZM16.5 10.0834C18.0217 10.0834 19.2408 8.85504 19.2408 7.33337C19.2408 5.81171 18.0217 4.58337 16.5 4.58337C16.2067 4.58337 15.9225 4.62921 15.6658 4.71171C16.1883 5.45421 16.4908 6.35254 16.4908 7.33337C16.4908 8.31421 16.1792 9.20337 15.6658 9.95504C15.9225 10.0375 16.2067 10.0834 16.5 10.0834ZM11.9167 10.0834C13.4383 10.0834 14.6575 8.85504 14.6575 7.33337C14.6575 5.81171 13.4383 4.58337 11.9167 4.58337C10.395 4.58337 9.16667 5.81171 9.16667 7.33337C9.16667 8.85504 10.395 10.0834 11.9167 10.0834ZM17.985 12.0634C18.7458 12.7325 19.25 13.585 19.25 14.6667V16.5H22V14.6667C22 13.255 19.8275 12.3842 17.985 12.0634ZM11.9167 11.9167C10.0833 11.9167 6.41667 12.8334 6.41667 14.6667V16.5H17.4167V14.6667C17.4167 12.8334 13.75 11.9167 11.9167 11.9167Z"
                        fill="white"
                     />
                  </svg>
                  Join Group
               </button>
            </>
         )}
         <div>
            <svg
               className="pen d-block d-sm-none"
               width="62"
               height="62"
               viewBox="0 0 62 62"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <g filter="url(#filter0_dd_1_266)">
                  <circle
                     cx="31"
                     cy="29"
                     r="27"
                     fill="url(#paint0_linear_1_266)"
                  />
               </g>
               <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M36.6588 20C36.4088 20 36.1488 20.1 35.9588 20.29L34.1288 22.12L37.8788 25.87L39.7088 24.04C40.0988 23.65 40.0988 23.02 39.7088 22.63L37.3688 20.29C37.1688 20.09 36.9188 20 36.6588 20ZM33.0588 26.02L33.9788 26.94L24.9188 36H23.9988V35.08L33.0588 26.02ZM21.9988 34.25L33.0588 23.19L36.8088 26.94L25.7488 38H21.9988V34.25Z"
                  fill="white"
               />
               <defs>
                  <filter
                     id="filter0_dd_1_266"
                     x="0"
                     y="0"
                     width="62"
                     height="62"
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
                     <feOffset />
                     <feGaussianBlur stdDeviation="1" />
                     <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                     />
                     <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_266"
                     />
                     <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                     />
                     <feOffset dy="2" />
                     <feGaussianBlur stdDeviation="2" />
                     <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"
                     />
                     <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_1_266"
                        result="effect2_dropShadow_1_266"
                     />
                     <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_1_266"
                        result="shape"
                     />
                  </filter>
                  <linearGradient
                     id="paint0_linear_1_266"
                     x1="31"
                     y1="2"
                     x2="31"
                     y2="56"
                     gradientUnits="userSpaceOnUse"
                  >
                     <stop stop-color="#FF5C5C" />
                     <stop offset="1" stop-color="#F0568A" />
                  </linearGradient>
               </defs>
            </svg>
         </div>
         <div>
            <svg
               className="arrow d-block d-sm-none"
               width="16"
               height="16"
               viewBox="0 0 16 16"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
                  fill="white"
               />
            </svg>
         </div>
      </div>
   );
};

export default Banner;
