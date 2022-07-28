import React from "react";
import "./Posts.css";
import PostHeader from "./PostHeader";
import Card1 from "./Card1";
import Card3 from "./Card3";
import Card2 from "./Card2";
import Card4 from "./Card4";
import { MdOutlineLocationOn } from "react-icons/md";
import Button from "react-bootstrap/Button";

const Posts = ({ user }) => {
   return (
      <div>
         <PostHeader user={user}></PostHeader>
         <div className="d-sm-flex justify-content-between">
            <div>
               <Card1></Card1>
               <Card2></Card2>
               <Card3></Card3>
               <Card4></Card4>
            </div>
            <div
               className="d-none d-lg-block location-margin"
               style={{ width: "240px" }}
            >
               <div>
                  <MdOutlineLocationOn height={17} width={12} />
                  <input
                     className="border-0"
                     type="text"
                     name="location"
                     id=""
                  />
                  <svg
                     width="16"
                     height="16"
                     viewBox="0 0 16 16"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M0.5 12.375V15.5H3.625L12.8417 6.28334L9.71667 3.15834L0.5 12.375ZM15.2583 3.86667C15.5833 3.54167 15.5833 3.01667 15.2583 2.69167L13.3083 0.741675C12.9833 0.416675 12.4583 0.416675 12.1333 0.741675L10.6083 2.26667L13.7333 5.39167L15.2583 3.86667Z"
                        fill="black"
                     />
                  </svg>
               </div>
               <hr className="mt-2" />
               <div className="d-flex">
                  <div className="pt-0">
                     <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M6.33337 9.00004H7.66671V10.3334H6.33337V9.00004ZM6.33337 3.66671H7.66671V7.66671H6.33337V3.66671ZM6.99337 0.333374C3.31337 0.333374 0.333374 3.32004 0.333374 7.00004C0.333374 10.68 3.31337 13.6667 6.99337 13.6667C10.68 13.6667 13.6667 10.68 13.6667 7.00004C13.6667 3.32004 10.68 0.333374 6.99337 0.333374ZM7.00004 12.3334C4.05337 12.3334 1.66671 9.94671 1.66671 7.00004C1.66671 4.05337 4.05337 1.66671 7.00004 1.66671C9.94671 1.66671 12.3334 4.05337 12.3334 7.00004C12.3334 9.94671 9.94671 12.3334 7.00004 12.3334Z"
                           fill="black"
                        />
                     </svg>
                  </div>
                  <div className="ms-1">
                     <p className="location-text mb-0 mt-1">
                        Your location will help us serve better and extend a
                        personalised experience.
                     </p>
                  </div>
               </div>
               {user ? (
                  <>
                     <div>
                        <div style={{ marginTop: "54px" }} className="d-flex">
                           <svg
                              style={{ marginRight: "5px" }}
                              width="18"
                              height="16"
                              viewBox="0 0 18 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M6.75 15.75H13.5C14.1225 15.75 14.655 15.375 14.88 14.835L17.145 9.5475C17.2125 9.375 17.25 9.195 17.25 9V7.5C17.25 6.675 16.575 6 15.75 6H11.0175L11.73 2.5725L11.7525 2.3325C11.7525 2.025 11.625 1.74 11.4225 1.5375L10.6275 0.75L5.685 5.6925C5.415 5.9625 5.25 6.3375 5.25 6.75V14.25C5.25 15.075 5.925 15.75 6.75 15.75ZM6.75 6.75L10.005 3.495L9 7.5H15.75V9L13.5 14.25H6.75V6.75ZM0.75 6.75H3.75V15.75H0.75V6.75Z"
                                 fill="black"
                              />
                           </svg>
                           <p className="recommended">recommended groups</p>
                        </div>
                        <div>
                           <div
                              style={{ marginBottom: "22px" }}
                              className="d-flex justify-content-between"
                           >
                              <div className="d-flex align-items-center">
                                 <img
                                    style={{ height: "36px", width: "36px" }}
                                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                    class="rounded-circle"
                                    alt="Avatar"
                                 />
                                 <p className="group-name">Leisure</p>
                              </div>
                              <div>
                                 <button className="border-0 text-white bg-dark follow mt-2">
                                    Followed
                                 </button>
                              </div>
                           </div>
                           <div
                              style={{ marginBottom: "22px" }}
                              className="d-flex justify-content-between"
                           >
                              <div className="d-flex align-items-center">
                                 <img
                                    style={{ height: "36px", width: "36px" }}
                                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                    class="rounded-circle"
                                    alt="Avatar"
                                 />
                                 <p className="group-name">Activism</p>
                              </div>
                              <div>
                                 <button className="border-0 follow mt-2">
                                    Follow
                                 </button>
                              </div>
                           </div>
                           <div
                              style={{ marginBottom: "22px" }}
                              className="d-flex justify-content-between"
                           >
                              <div className="d-flex align-items-center">
                                 <img
                                    style={{ height: "36px", width: "36px" }}
                                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                    class="rounded-circle"
                                    alt="Avatar"
                                 />
                                 <p className="group-name">MBA</p>
                              </div>
                              <div>
                                 <button className="border-0 follow mt-2">
                                    Follow
                                 </button>
                              </div>
                           </div>
                           <div
                              style={{ marginBottom: "22px" }}
                              className="d-flex justify-content-between"
                           >
                              <div className="d-flex align-items-center">
                                 <img
                                    style={{ height: "36px", width: "36px" }}
                                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                    class="rounded-circle"
                                    alt="Avatar"
                                 />
                                 <p className="group-name">Philosophy</p>
                              </div>
                              <div>
                                 <button className="border-0 follow mt-2">
                                    Follow
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </>
               ) : (
                  <></>
               )}
            </div>
         </div>
      </div>
   );
};

export default Posts;
