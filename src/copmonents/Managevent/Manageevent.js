import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Allevent from './Allevent';

const Manageevent = () => {
    const [registerevents, setRegisterevents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/registerevents')
        .then(res => res.json())
        .then(data => setRegisterevents(data))
    },[registerevents])
    const DeleteHandler = (id) => {
        fetch(`http://localhost:5000/registerevents/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(deletedata => {
            if(deletedata.deletedCount > 0)
            {
                alert('Deleted SuccessFully')
                const remain = registerevents.filter(data => data._id !== id)
                setRegisterevents(remain)
            }
        })
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
                alert('Approved')
                const newdata = [...registerevents]
                setRegisterevents(newdata)
            }
        })
    }
    return (
        <div className="container-fluid">
            <Row className="g-4 justify-content-center">
                {
                    registerevents?.map(event => <Allevent ApprovedHadnlder={ApprovedHadnlder} DeleteHandler={DeleteHandler} key={event._id}
                        event={event}></Allevent>)
                }
            </Row>
        </div>
    );
};

export default Manageevent;