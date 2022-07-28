import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./PostHeader.css";

const PostHeader = ({ user }) => {
   return (
      <div>
         <div className="post-header-margin header-border">
            <div className="route-text d-flex justify-content-between">
               <div style={{ marginTop: "9px" }} className="d-flex">
                  <p className="mb-0 all-post-border fw-semibold border-bottom border-1 border-dark">
                     All posts(32)
                  </p>
                  <p
                     className="mb-0 d-none d-sm-block"
                     style={{ color: "#8A8A8A", marginLeft: "20px" }}
                  >
                     Article
                  </p>
                  <p
                     className="mb-0 d-none d-sm-block"
                     style={{ color: "#8A8A8A", marginLeft: "20px" }}
                  >
                     Event
                  </p>
                  <p
                     className="mb-0 d-none d-sm-block"
                     style={{ color: "#8A8A8A", marginLeft: "20px" }}
                  >
                     Education
                  </p>
                  <p
                     className="mb-0 d-none d-sm-block"
                     style={{
                        color: "#8A8A8A",
                        marginLeft: "20px",
                     }}
                  >
                     Job
                  </p>
               </div>
               <div className="d-flex align-items-start">
                  <div>
                     <Dropdown>
                        <Dropdown.Toggle
                           className="border-0 text-black fw-semibold write-post d-none d-sm-block"
                           id="dropdown-basic"
                           style={{
                              backgroundColor: "#EDEEF0",
                              marginRight: "16px",
                              position: "static",
                           }}
                        >
                           Write a post
                        </Dropdown.Toggle>
                        <Dropdown.Toggle
                           className="border-0 text-black fw-semibold write-post d-sm-none d-block"
                           id="dropdown-basic"
                           style={{
                              backgroundColor: "#EDEEF0",
                              marginRight: "16px",
                              position: "static",
                           }}
                        >
                           Filter: All
                        </Dropdown.Toggle>
                     </Dropdown>
                  </div>
                  {user ? (
                     <>
                        <button className="btn border border-1 border-dark text-dark d-none d-sm-block">
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
                        <button
                           style={{ backgroundColor: "#2F6CE5" }}
                           className="btn btn-primary d-none d-sm-block text-white"
                        >
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
               </div>
            </div>
         </div>
      </div>
   );
};

export default PostHeader;
