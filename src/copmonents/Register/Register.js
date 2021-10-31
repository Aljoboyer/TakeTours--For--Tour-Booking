import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link ,useHistory,useLocation} from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../Context/useAuth';
const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } =useForm();
    const {SetUserName,setIsloading,setUser,RegisterUser,LoginWithGoogle,user} = useAuth();
    const [regerror, setRegerror] = useState('');

    const history = useHistory();
    const location = useLocation()
    const redirectui = location.state?.from || '/'

    const onSubmit = data =>{
        const {name,email,password} = data;
        if(password)
        {
            RegisterUser(email,password,name)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                SetUserName(name)
            })
            .catch((error) => {
                setRegerror('Email is Already Exists Please Log in')
            }).finally(() => setIsloading(false))
        }
    }

    const GoogleSignin = () => {
        LoginWithGoogle()
        .then((result) => {
            const user = result.user;
            setUser(user)
            history.push(redirectui)
        }).catch((error) => {
            console.log('from google',error.message)
        }).finally(() => setIsloading(false))
    }

    return (
        <div className="container-fluid">
        <Row className="justify-content-center mt-4">
            <Col lg={6} md={12} sm={12} className="login-form">
               {
                   user.email ? <h1 className="text-center">Register SuccessFully <i className="fas fa-check-circle fa-3x"></i></h1> : <form onSubmit={handleSubmit(onSubmit)} >
                   <h2 className="title text-center mt-1">Create <img className="w-25  mb-4" src="" alt="" /> Account</h2>
                   <p className="text-danger">{regerror}</p>
                               <label htmlFor="">Name</label>
                               <input className="w-100" type ="text" {...register("name", { required: true })} />
                           {errors.name && <p className="text-danger">This field is required</p>}

                           <label htmlFor="">Email</label>
                           <input className="w-100" type="email" {...register("email", { required: true })} />
                           {errors.email && <p className="text-danger">This field is required</p>}

                           <label htmlFor="">Password</label>
                           <input className="w-100" type ="password" {...register("password", { required: true, min:6,})} />
                           {errors.password && <p className="text-danger">This field is required</p>}
                           <p className="text-danger"></p>
                           
                       <input className="mb-3" type="submit" value="Sign Up" />
                       <h5 className="mb-3 text-dark fw-bold">Register in with</h5>
                       <i onClick={GoogleSignin}  className="ms-2 mb-2 fab fa-google fa-3x"></i>
                       <p className="mb-3 mt-3">Already Have an Account ?</p>
                       <p className="fs-5 fw-bold" ><Link to="/login" >Log in</Link></p>
               </form>
               }
            </Col>
        </Row>
   </div>
    );
};

export default Register;

