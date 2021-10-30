import React, { useEffect, useState } from 'react';
import {Modal, Row,Button} from 'react-bootstrap';
import useAuth from '../../Context/useAuth';
import Deletemodal from '../Deletemodal/Deletemodal';
import Yourevent from './Yourevent';
const Yourevents = () => {
    const {user} = useAuth();
    const [emaildata, setEmaildata] = useState([])
    const [deleteshow, setDeletehow] = useState(false);
    const [isdelete, setIsdelete] = useState(false);
    const [idset, setIdset] = useState(null)
    useEffect(() => {
        const emailarray = [];
        emailarray.push(user.email)
        fetch('https://rocky-fjord-96059.herokuapp.com/registerevents/byemail', {
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
            
           { emaildata.length ? <Row className="g-4 justify-content-center">
                {
                    emaildata?.map(event => <Yourevent DeleteHandler={DeleteHandler} key={Math.random()} event={event}></Yourevent>)
                }
            </Row>: <Row className="notbookrow d-flex  align-items-center"><div className="text-center">
            <h2 className="fs-1 fw-bold htow">No Events Books Yet <i className="far fa-calendar-alt"></i></h2></div></Row> }

        <Deletemodal idset={idset} deleteshow={deleteshow} setIsdelete={setIsdelete} setDeletehow={setDeletehow} DeleteHandler={DeleteHandler}></Deletemodal>
     
        </div>
    );
};

export default Yourevents;
