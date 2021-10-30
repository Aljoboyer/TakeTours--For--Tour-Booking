import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Deletemodal from '../Deletemodal/Deletemodal';
import Permissionmodal from '../Permissonmodal/Permissionmodal';
import Allevent from './Allevent';

const Manageevent = () => {
    const [registerevents, setRegisterevents] = useState([]);
    const [show, setShow] = useState(false);
    const [isdelete, setIsdelete] = useState(false);
    const [idset, setIdset] = useState(null)

    const [deleteshow, setDeletehow] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/registerevents')
        .then(res => res.json())
        .then(data => setRegisterevents(data))
    },[registerevents])
    const DeleteHandler = (id,isadd) => {
        setDeletehow(isadd)
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
                
                const remain = registerevents.filter(data => data._id !== id)
                setRegisterevents(remain)
                setIsdelete(false)
            }
        })
        }
    }
    const ApprovedHadnlder = id => {
        const approvedata ={status: "Approved"}
        fetch(`http://localhost:5000/registerevents/${id}`, {
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(approvedata)
        })
        .then(res => res.json())
        .then(updated => {
            if(updated.modifiedCount > 0)
            {
                setShow(true)
                const newdata = [...registerevents]
                setRegisterevents(newdata)
                
            }
        })
    }
    return (
        <div className="container-fluid">
            {
                registerevents.length ? <Row className="g-4 justify-content-center">
                {
                    registerevents?.map(event => <Allevent ApprovedHadnlder={ApprovedHadnlder} DeleteHandler={DeleteHandler} key={event._id}
                        event={event}></Allevent>)
                }
            </Row> : <Row className="notbookrow d-flex  align-items-center"><div className="text-center">
                <h2 className="fs-1 fw-bold htow">No Events Books Yet <i className="far fa-calendar-alt"></i></h2></div></Row> 
            }
            <Permissionmodal setShow={setShow} show={show}>Events Approved</Permissionmodal>

            <Deletemodal idset={idset} deleteshow={deleteshow} setIsdelete={setIsdelete} setDeletehow={setDeletehow} DeleteHandler={DeleteHandler}></Deletemodal>
            
        </div>
    );
};

export default Manageevent;