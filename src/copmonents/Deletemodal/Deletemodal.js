import React from 'react';
import { Modal ,Button} from 'react-bootstrap';

const Deletemodal = (props) => {
    return (
       
        <Modal
        show={props.deleteshow}
        onHide={() => props.setDeletehow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title ><i className="fas fa-trash-alt fa-3x"></i></Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-danger fs-4">
        Are You sure-! Want to delete this event.?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
              props.setDeletehow(false);
              props.setIsdelete(false)
          }}>
            No
          </Button>
          <Button onClick={() => props.DeleteHandler(props.idset)} variant="primary">Yse Sure</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default Deletemodal;