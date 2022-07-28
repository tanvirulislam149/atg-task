import React from "react";
import Card from "react-bootstrap/Card";
import { MdOutlineLocationOn } from "react-icons/md";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const Card3 = () => {
   const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
      <a
         href=""
         ref={ref}
         onClick={(e) => {
            e.preventDefault();
            onClick(e);
         }}
      >
         {/* Render custom icon here */}
         {/* &#x25bc; */}
         {children}
      </a>
   ));
   return (
      <div>
         <div
            style={{ marginTop: "16px" }}
            className="post-margin card-size all-font"
         >
            <Card>
               <Card.Img
                  variant="top"
                  height={220}
                  src="https://i.ibb.co/QHbdsfY/Screenshot-2022-07-27-204156.png"
               />
               <Card.Body>
                  <Card.Title className="card-title">🗓️ Meetup</Card.Title>
                  <div className="d-flex justify-content-between">
                     <div>
                        <p className="card-bold-text mb-0">
                           Finance & Investment Elite Social Mixer @Lujiazui
                        </p>
                     </div>
                     <Dropdown>
                        <Dropdown.Toggle
                           className="dropdown border-0"
                           as={CustomToggle}
                           id="dropdown-basic"
                        >
                           <svg
                              style={{ marginLeft: "20px" }}
                              width="20"
                              height="6"
                              viewBox="0 0 20 6"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z"
                                 fill="black"
                              />
                           </svg>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                           <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                           <Dropdown.Item href="#/action-2">
                              Report
                           </Dropdown.Item>
                           <Dropdown.Item href="#/action-3">
                              Option 3
                           </Dropdown.Item>
                        </Dropdown.Menu>
                     </Dropdown>
                  </div>
                  <div className="card-normal-text d-flex">
                     <div className="d-flex">
                        <svg
                           width="16"
                           height="18"
                           viewBox="0 0 16 18"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M13.8333 2.49992H13V0.833252H11.3333V2.49992H4.66667V0.833252H3V2.49992H2.16667C1.24167 2.49992 0.508333 3.24992 0.508333 4.16659L0.5 15.8333C0.5 16.7499 1.24167 17.4999 2.16667 17.4999H13.8333C14.75 17.4999 15.5 16.7499 15.5 15.8333V4.16659C15.5 3.24992 14.75 2.49992 13.8333 2.49992ZM13.8333 15.8333H2.16667V6.66659H13.8333V15.8333ZM3.83333 8.33325H8V12.4999H3.83333V8.33325Z"
                              fill="black"
                           />
                        </svg>
                        <p className="date-text">Fri, 12 Oct, 2018</p>
                     </div>
                     <div style={{ marginLeft: "70px" }} className="d-flex">
                        <MdOutlineLocationOn height={17} width={12} />
                        <p className="date-text">Ahmedabad,India</p>
                     </div>
                  </div>
                  <Button
                     style={{
                        padding: "auto",
                        width: "100%",
                        marginBottom: "32px",
                     }}
                     className="border-1 border fw-bold bg-white text-danger"
                  >
                     Visit website
                  </Button>
                  <div className="d-flex justify-content-between">
                     <div className="d-flex align-items-center">
                        <img
                           style={{ height: "48px", width: "48px" }}
                           src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                           class="rounded-circle"
                           alt="Avatar"
                        />
                        <p className="avatar-text">Ronal Jones</p>
                     </div>
                     <div>
                        <div className="d-flex align-items-center">
                           <svg
                              className="d-none d-sm-block"
                              width="95"
                              height="18"
                              viewBox="0 0 95 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 fill-rule="evenodd"
                                 clip-rule="evenodd"
                                 d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z"
                                 fill="#525252"
                              />
                              <path
                                 d="M27.7769 14V12.684H30.5209V5.376H30.4089L28.1409 7.798L27.1749 6.93L29.6669 4.228H32.0749V12.684H34.4549V14H27.7769ZM36.9695 14.168C36.6241 14.168 36.3675 14.0793 36.1995 13.902C36.0315 13.7153 35.9475 13.4867 35.9475 13.216V13.006C35.9475 12.7353 36.0315 12.5113 36.1995 12.334C36.3675 12.1473 36.6241 12.054 36.9695 12.054C37.3148 12.054 37.5715 12.1473 37.7395 12.334C37.9075 12.5113 37.9915 12.7353 37.9915 13.006V13.216C37.9915 13.4867 37.9075 13.7153 37.7395 13.902C37.5715 14.0793 37.3148 14.168 36.9695 14.168ZM44.026 14V12.096H39.49V10.738L43.452 4.228H45.524V10.85H46.854V12.096H45.524V14H44.026ZM40.834 10.85H44.026V5.67H43.928L40.834 10.85ZM48.4865 3.64H50.0125V9.996H50.0825L51.0905 8.694L52.8405 6.72H54.6185L52.0705 9.534L54.9265 14H53.1065L51.0205 10.528L50.0125 11.62V14H48.4865V3.64ZM61.0334 14L58.5554 6.72H60.0674L61.1734 10.038L61.9154 12.586H61.9994L62.7414 10.038L63.8754 6.72H65.3314L62.8254 14H61.0334ZM67.3854 5.418C67.0681 5.418 66.8348 5.34333 66.6854 5.194C66.5454 5.04467 66.4754 4.85333 66.4754 4.62V4.382C66.4754 4.14867 66.5454 3.95733 66.6854 3.808C66.8348 3.65867 67.0681 3.584 67.3854 3.584C67.7028 3.584 67.9314 3.65867 68.0714 3.808C68.2114 3.95733 68.2814 4.14867 68.2814 4.382V4.62C68.2814 4.85333 68.2114 5.04467 68.0714 5.194C67.9314 5.34333 67.7028 5.418 67.3854 5.418ZM66.6154 6.72H68.1414V14H66.6154V6.72ZM73.1765 14.168C72.6538 14.168 72.1872 14.0793 71.7765 13.902C71.3658 13.7247 71.0158 13.4727 70.7265 13.146C70.4372 12.81 70.2132 12.4087 70.0545 11.942C69.9052 11.466 69.8305 10.9387 69.8305 10.36C69.8305 9.78133 69.9052 9.25867 70.0545 8.792C70.2132 8.316 70.4372 7.91467 70.7265 7.588C71.0158 7.252 71.3658 6.99533 71.7765 6.818C72.1872 6.64067 72.6538 6.552 73.1765 6.552C73.7085 6.552 74.1752 6.64533 74.5765 6.832C74.9872 7.01867 75.3278 7.28 75.5985 7.616C75.8692 7.94267 76.0698 8.32533 76.2005 8.764C76.3405 9.20267 76.4105 9.674 76.4105 10.178V10.752H71.4125V10.99C71.4125 11.55 71.5758 12.012 71.9025 12.376C72.2385 12.7307 72.7145 12.908 73.3305 12.908C73.7785 12.908 74.1565 12.81 74.4645 12.614C74.7725 12.418 75.0338 12.152 75.2485 11.816L76.1445 12.698C75.8738 13.146 75.4818 13.5053 74.9685 13.776C74.4552 14.0373 73.8578 14.168 73.1765 14.168ZM73.1765 7.742C72.9152 7.742 72.6725 7.78867 72.4485 7.882C72.2338 7.97533 72.0472 8.106 71.8885 8.274C71.7392 8.442 71.6225 8.64267 71.5385 8.876C71.4545 9.10933 71.4125 9.366 71.4125 9.646V9.744H74.8005V9.604C74.8005 9.044 74.6558 8.596 74.3665 8.26C74.0772 7.91467 73.6805 7.742 73.1765 7.742ZM77.3035 6.72H78.7875L79.5295 9.772L80.1875 12.53H80.2295L80.9855 9.772L81.8675 6.72H83.2395L84.1355 9.772L84.9055 12.53H84.9475L85.5915 9.772L86.3475 6.72H87.7615L85.8015 14H84.0795L83.1275 10.682L82.5395 8.638H82.5115L81.9375 10.682L80.9715 14H79.2915L77.3035 6.72ZM91.484 14.168C90.7934 14.168 90.2147 14.0467 89.748 13.804C89.2814 13.5613 88.8754 13.2253 88.53 12.796L89.51 11.9C89.7807 12.2267 90.0794 12.4833 90.406 12.67C90.742 12.8473 91.1294 12.936 91.568 12.936C92.016 12.936 92.3474 12.852 92.562 12.684C92.786 12.5067 92.898 12.264 92.898 11.956C92.898 11.7227 92.8187 11.5267 92.66 11.368C92.5107 11.2 92.2447 11.0927 91.862 11.046L91.19 10.962C90.4434 10.8687 89.8554 10.654 89.426 10.318C89.006 9.97267 88.796 9.464 88.796 8.792C88.796 8.43733 88.8614 8.12467 88.992 7.854C89.1227 7.574 89.3047 7.34067 89.538 7.154C89.7807 6.958 90.0654 6.80867 90.392 6.706C90.728 6.60333 91.0967 6.552 91.498 6.552C92.1514 6.552 92.6834 6.65467 93.094 6.86C93.514 7.06533 93.8874 7.35 94.214 7.714L93.276 8.61C93.0894 8.386 92.842 8.19467 92.534 8.036C92.2354 7.868 91.89 7.784 91.498 7.784C91.078 7.784 90.7654 7.868 90.56 8.036C90.364 8.204 90.266 8.42333 90.266 8.694C90.266 8.974 90.3547 9.184 90.532 9.324C90.7094 9.464 90.994 9.56667 91.386 9.632L92.058 9.716C92.8607 9.83733 93.444 10.0753 93.808 10.43C94.1814 10.7753 94.368 11.242 94.368 11.83C94.368 12.1847 94.298 12.5067 94.158 12.796C94.0274 13.076 93.836 13.3187 93.584 13.524C93.332 13.7293 93.0287 13.888 92.674 14C92.3194 14.112 91.9227 14.168 91.484 14.168Z"
                                 fill="#525252"
                              />
                           </svg>

                           <div className="share">
                              <svg
                                 className="me-2"
                                 width="14"
                                 height="16"
                                 viewBox="0 0 14 16"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M11.5 11.06C10.93 11.06 10.42 11.285 10.03 11.6375L4.6825 8.525C4.72 8.3525 4.75 8.18 4.75 8C4.75 7.82 4.72 7.6475 4.6825 7.475L9.97 4.3925C10.375 4.7675 10.9075 5 11.5 5C12.745 5 13.75 3.995 13.75 2.75C13.75 1.505 12.745 0.5 11.5 0.5C10.255 0.5 9.25 1.505 9.25 2.75C9.25 2.93 9.28 3.1025 9.3175 3.275L4.03 6.3575C3.625 5.9825 3.0925 5.75 2.5 5.75C1.255 5.75 0.25 6.755 0.25 8C0.25 9.245 1.255 10.25 2.5 10.25C3.0925 10.25 3.625 10.0175 4.03 9.6425L9.37 12.7625C9.3325 12.92 9.31 13.085 9.31 13.25C9.31 14.4575 10.2925 15.44 11.5 15.44C12.7075 15.44 13.69 14.4575 13.69 13.25C13.69 12.0425 12.7075 11.06 11.5 11.06Z"
                                    fill="#2D2D2D"
                                 />
                              </svg>
                              Share
                           </div>
                        </div>
                     </div>
                  </div>
               </Card.Body>
            </Card>
         </div>
      </div>
   );
};

export default Card3;
