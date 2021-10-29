import React, { useEffect, useState } from 'react';
import {Modal, Row,Button} from 'react-bootstrap';
import useAuth from '../../Context/useAuth';
import Yourevent from './Yourevent';
const Yourevents = () => {
    const {user} = useAuth();
    const [emaildata, setEmaildata] = useState([])
    const [show, setShow] = useState(false);
    const [isdelete, setIsdelete] = useState(false);
    const [idset, setIdset] = useState(null)
    useEffect(() => {
        const emailarray = [];
        emailarray.push(user.email)
        fetch('http://localhost:5000/registerevents/byemail', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(emailarray)
        })
        .then(res => res.json())
        .then(data => {
            setEmaildata(data)
        })
    },[user.email])
    const DeleteHandler = (id,isadd) => {
        setShow(isadd)
        setIdset(id)
        setIsdelete(true)
        if(isdelete)
        {
            
            fetch(`http://localhost:5000/registerevents/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(deletedata => {
            if(deletedata.deletedCount > 0)
            {
                const remain = emaildata.filter(data => data._id !== id)
                setEmaildata(remain)
                setIsdelete(false)
            }
        })
        }
        else{

        }
    }

    return (
        <div className="container-fluid">
            <Row className="g-4 justify-content-center">
                {
                    emaildata?.map(event => <Yourevent DeleteHandler={DeleteHandler} key={Math.random()} event={event}></Yourevent>)
                }
            </Row>

            <Modal
        show={show}
        onHide={() => setShow(false)}
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
              setShow(false);
              setIsdelete(false)
          }}>
            No
          </Button>
          <Button onClick={() => DeleteHandler(idset)} variant="primary">Yse Sure</Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
};

export default Yourevents;