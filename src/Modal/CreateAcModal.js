import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const CreateAcModal = ({ show, handleClose }) => {
   return (
      <div>
         {" "}
         <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
         >
            <Modal.Header closeButton>
               <Modal.Title id="contained-modal-title-vcenter">
                  Create Account
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <h4>Centered Modal</h4>
               <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
               </p>
            </Modal.Body>
            <Modal.Footer>
               <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
};

export default CreateAcModal;
