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
    const [fordepend , setFordepend] = useState([])
    const [deleteshow, setDeletehow] = useState(false);
    
    useEffect(() => {
        fetch('https://rocky-fjord-96059.herokuapp.com/registerevents')
        .then(res => res.json())
        .then(data => setRegisterevents(data))
    },[fordepend])
    const DeleteHandler = (id,isadd) => {
        setDeletehow(isadd)
        setIdset(id)
        setIsdelete(true)
        if(isdelete)
        {
            fetch(`https://rocky-fjord-96059.herokuapp.com/registerevents/${id}`, {
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
        fetch(`https://rocky-fjord-96059.herokuapp.com/registerevents/${id}`, {
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
                setFordepend(newdata)
                
            }
        })
    }
    return (
        <div className="container-fluid">
           {
                registerevents.length !==0 ? <Row className="g-4 justify-content-center">
                {
                    registerevents?.map(event => <Allevent ApprovedHadnlder={ApprovedHadnlder} DeleteHandler={DeleteHandler} key={event._id}
                        event={event}></Allevent>)
                }
            </Row> : <div className="spinnerss mx-auto"></div>  
            }  
            <Permissionmodal setShow={setShow} show={show}>Events Approved</Permissionmodal>

            <Deletemodal idset={idset} deleteshow={deleteshow} setIsdelete={setIsdelete} setDeletehow={setDeletehow} DeleteHandler={DeleteHandler}></Deletemodal>
            
        </div>
    );
};

export default Manageevent;