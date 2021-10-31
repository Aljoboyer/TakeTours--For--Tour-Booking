import React, { useEffect, useState } from 'react';
import {Col, Modal, Row,Button} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import logo from '../../asset/logo.PNG'
import Permissionmodal from '../Permissonmodal/Permissionmodal';
const Eventregister = () => {
   
    const [event, setEvent] = useState({})
    const {id} = useParams()
    const { register,reset, handleSubmit, watch, formState: { errors } } =useForm();
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        fetch(`https://rocky-fjord-96059.herokuapp.com/events/${id}`)
        .then(res => res.json())
        .then(data => setEvent(data))
    },[])

    const onSubmit = data => {
        data.status = "Pending"
        data.img = event.img
        fetch('https://rocky-fjord-96059.herokuapp.com/registerevents', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(events => 
            {
                if(events.insertedId)
                {
                    setShow(true)
                    reset()
                }
            })
    }
    return (
        <div className="container-fluid">
            <Row className="justify-content-center">
                <Col lg={5} md={6} sm={12}>
                    <img className="w-75 rounded" src={event.img} alt="" />
                    <h2>{event.name}</h2>
                    <h5 className="text-primary">{event.time}</h5>
                    <p>{event.short}{event.full}</p>
                </Col>
                <Col lg={5} md={6} sm={12}>
                <Row className="justify-content-center mt-4">
                <img  className="w-50" src={logo} alt="" />
                 <form onSubmit={handleSubmit(onSubmit)} >
                     
                   <h2 className="title text-center mt-1">Register Your Event</h2>
                            <label htmlFor="">Your Name</label>
                            <input className="w-100" type ="text" {...register("name", { required: true })} />
                           {errors.name && <p className="text-danger">This field is required</p>}

                           <label htmlFor="">User Email</label>
                           <input className="w-100" type="email" {...register("email", { required: true })} />
                           {errors.email && <p className="text-danger">This field is required</p>}

                           <label htmlFor="">Your Location</label>
                           <input className="w-100" type="text" {...register("location", { required: true })} />
                           {errors.location && <p className="text-danger">This field is required</p>}

                           <label htmlFor="">Phone</label>
                           <input className="w-100" type="number" {...register("phone", { required: true })} />
                           {errors.phone && <p className="text-danger">This field is required</p>}

                           <label htmlFor="">Date</label>
                           <input className="w-100" type ="date" {...register("date", { required: true})} />
                           {errors.date && <p className="text-danger">This field is required</p>}
                           
                           <label htmlFor="">Destination Name</label>
                            <input   className="w-100" type ="text" {...register("eventname", { required: true })} />
                           {errors.eventname && <p className="text-danger">This field is required</p>}

                       <input className="mb-3" type="submit" value="Register" />
                    </form>
               
                </Row>
                </Col>
            </Row>
            <Permissionmodal setShow={setShow} show={show}>Events Register</Permissionmodal>
        </div>
    );
};

export default Eventregister;