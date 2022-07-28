import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";
import pic from "../image/Screenshot 2022-07-28 031948.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const CreateAcModal = ({ show, handleClose }) => {
   return (
      <div>
         <div>
            <Modal
               show={show}
               onHide={handleClose}
               backdrop="static"
               keyboard={false}
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
            >
               <CloseButton
                  style={{ marginTop: "-40px", marginBottom: "10px" }}
                  className="ms-auto rounded-circle p-2 d-none d-sm-block bg-white"
                  onClick={handleClose}
               />
               <div>
                  <p
                     style={{
                        backgroundColor: "#EFFFF4",
                        color: "#008A45",
                        borderRadius: "10px",
                        paddingTop: "17px",
                        paddingBottom: "17px",
                        marginBottom: "8px",
                     }}
                     className="text-center d-none d-sm-block"
                  >
                     Let's learn, share & inspire each other with our passion
                     for computer engineering. Sign up now 🤘🏼
                  </p>
               </div>
               <div
                  style={{
                     marginLeft: "36px",
                     marginRight: "36px",
                     marginBottom: "36px",
                     marginTop: "16px",
                  }}
               >
                  <div>
                     <div
                        style={{ marginBottom: "24px" }}
                        className="d-flex justify-content-between align-items-center"
                     >
                        <div className="d-flex w-100 justify-content-between align-items-center">
                           <Modal.Title
                              className="fw-bold"
                              id="contained-modal-title-vcenter"
                           >
                              Create Account
                           </Modal.Title>
                           <CloseButton
                              style={{ position: "relative" }}
                              className="ms-auto rounded-circle d-sm-none d-block p-2 bg-dark close-button"
                              onClick={handleClose}
                           >
                              <button
                                 style={{
                                    position: "absolute",
                                    top: 5,
                                    left: 4,
                                 }}
                                 type="button"
                                 class="btn-close btn-close-white"
                                 aria-label="Close"
                              ></button>
                           </CloseButton>
                        </div>
                        <div>
                           <p
                              className="ms-auto d-none d-sm-block"
                              style={{ fontWeight: 600, marginBottom: 0 }}
                           >
                              Already have an account?{" "}
                              <span style={{ color: "#2F6CE5" }}>Sign In</span>
                           </p>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div className="d-flex">
                        <div>
                           <div class="d-flex w-1/2">
                              <div class="col">
                                 <input
                                    style={{
                                       backgroundColor: "#F7F8FA",
                                       height: "46px",
                                    }}
                                    type="text"
                                    class="form-control"
                                    placeholder="First name"
                                    aria-label="First name"
                                 />
                              </div>
                              <div class="col">
                                 <input
                                    style={{
                                       backgroundColor: "#F7F8FA",
                                       height: "46px",
                                    }}
                                    type="text"
                                    class="form-control"
                                    placeholder="Last name"
                                    aria-label="Last name"
                                 />
                              </div>
                           </div>
                           <input
                              style={{
                                 backgroundColor: "#F7F8FA",
                                 height: "46px",
                              }}
                              type="text"
                              class="form-control"
                              placeholder="Email"
                           />
                           <input
                              style={{
                                 backgroundColor: "#F7F8FA",
                                 height: "46px",
                              }}
                              type="text"
                              class="form-control password"
                              placeholder="Password                                                                    &#xF06E;"
                           />
                           <input
                              style={{
                                 backgroundColor: "#F7F8FA",
                                 height: "46px",
                              }}
                              type="text"
                              class="form-control"
                              placeholder="Confirm Password"
                           />
                           <div className="d-flex mt-4 justify-content-between align-items-center">
                              <button
                                 style={{
                                    height: "48px",
                                    width: "100%",
                                    border: 0,
                                    backgroundColor: "#2F6CE5",
                                    color: "white",
                                    borderRadius: "20px",
                                    width: "50%",
                                 }}
                              >
                                 Create Account
                              </button>
                              <div>
                                 <a className="text-dark" href="#">
                                    Or Sign In
                                 </a>
                              </div>
                           </div>
                           <button
                              style={{
                                 marginTop: "20px",
                                 height: "48px",
                                 width: "100%",
                                 border: "1px solid lightgray",
                                 backgroundColor: "white",
                                 color: "black",
                              }}
                           >
                              <FaFacebook
                                 style={{ marginRight: "10px" }}
                                 color="#2F6CE5"
                                 height={16}
                                 width={16}
                              />
                              Sign up with Facebook
                           </button>
                           <button
                              style={{
                                 marginTop: "20px",
                                 height: "48px",
                                 width: "100%",
                                 border: "1px solid lightgray",
                                 backgroundColor: "white",
                                 color: "black",
                              }}
                           >
                              {" "}
                              <FcGoogle
                                 style={{ marginRight: "10px" }}
                                 height={16}
                                 width={16}
                              />
                              Sign up with Google
                           </button>
                           <p
                              className="d-block d-sm-none"
                              style={{
                                 fontSize: "11px",
                                 textAlign: "center",
                                 marginBottom: 0,
                                 marginTop: "30px",
                              }}
                           >
                              By signing up, you agree to our Terms &
                              conditions, Privacy policy
                           </p>
                        </div>
                        <div className="w-1/2 d-none d-sm-block">
                           <img className="w-100" src={pic} alt="" />
                           <p
                              style={{
                                 fontSize: "11px",
                                 textAlign: "center",
                                 marginBottom: 0,
                                 marginTop: "30px",
                              }}
                           >
                              By signing up, you agree to our Terms &
                              conditions, Privacy policy
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </Modal>
         </div>
      </div>
   );
};

export default CreateAcModal;
