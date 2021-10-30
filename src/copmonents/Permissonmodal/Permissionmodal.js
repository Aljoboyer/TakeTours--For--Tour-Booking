import React from 'react';
import { Modal ,Button} from 'react-bootstrap';

const Permissionmodal = (props) => {

    return (
        <Modal
        show={props.show}
        onHide={() => props.setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title ><i className="fas fa-check-circle fa-3x"></i></Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-success fs-4">
          {props.children}
     
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-dark text-warning" onClick={() => props.setShow(false)}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal> 
    );
};

export default Permissionmodal;