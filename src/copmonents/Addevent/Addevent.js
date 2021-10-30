import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import logo from '../../asset/logo.PNG'
const Addevent = () => {
    const { register,reset, handleSubmit, watch, formState: { errors } } =useForm();

    const onSubmit = data => {
        
        fetch('https://rocky-fjord-96059.herokuapp.com/events', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(newevent => {
            if(newevent.insertedId)
            {
                alert('Data Added');
                reset();
            }
        })
    }
    return (
        <div className="container-fluid">
        <Row className="justify-content-center mt-4">
            <Col lg={6} md={12} sm={12} className="login-form">
            
              <form onSubmit={handleSubmit(onSubmit)} >
                   <h2 className="title text-center mt-1">Add <img src={logo} alt="" /> New Event</h2>
                        <label htmlFor="">Event Name</label>
                        <input className="w-100" type ="text" {...register("name", { required: true })} />
                        {errors.name && <p className="text-danger">This field is required</p>}

                        <label htmlFor="">Image Url</label>
                        <input className="w-100" type ="text" {...register("img", { required: true })} />
                        {errors.img && <p className="text-danger">This field is required</p>}
                        
                        <label htmlFor="">Short Description</label>
                        <input className="w-100" type ="text" {...register("short", { required: true })} />
                        {errors.short && <p className="text-danger">This field is required</p>}

                        <label htmlFor="">Full Description</label>
                        <input className="w-100" type ="text" {...register("full", { required: true })} />
                        {errors.full && <p className="text-danger">This field is required</p>}

                        <label htmlFor="">Event Package</label>
                        <input className="w-100" type ="text" {...register("time", { required: true })} />
                        {errors.time && <p className="text-danger">This field is required</p>}

                        <label htmlFor="">Event Id</label>
                        <input className="w-100" type ="number" {...register("id", { required: true })} />
                        {errors.id && <p className="text-danger">This field is required</p>}
                       <input className="mb-3" type="submit" value="Add Event" />
                       
               </form>
               
            </Col>
        </Row>
   </div>
    );
};

export default Addevent;