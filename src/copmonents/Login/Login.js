import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link , useHistory, useLocation} from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Login.css';
import useAuth from '../../Context/useAuth';


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [error,setError] = useState('')
    const {setIsloading,setUser,LoginWithGoogle,LoginWithEmailAndPass,user} = useAuth();

    const history = useHistory();
    const location = useLocation()
    const redirectui = location.state?.from || '/'

    const onSubmit = data => {
        const {email,password} = data;
        
        if(email && password)
        {
            LoginWithEmailAndPass(email,password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                setUser(user)
                history.push(redirectui)
            })
            .catch((error) => {
                console.log('from login email',error.message)
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
        <div className="container-fluid parent">
        <Row className="justify-content-center" >
            <Col lg={6} md={10} sm={12} className="login-form mt-4 p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="title text-center">Log-in Here</h2>
                <p className="text-danger"><b>{error}</b></p>
                        <label htmlFor="">Email</label>
                        <input className="w-100" type="email" {...register("email", { required: true })} />
                        <label htmlFor="">Password</label>
                        <input className="w-100" type ="password" {...register("password", { required: true })} />
                        <p><i className=""></i></p>

                        {errors.exampleRequired && <span>This field is required</span>}
        
                        <input type="submit" value="Login" />
                </form>
                <Link to="/reset" className="fs-bold" ><b>Forgot Password ?</b></Link>
                <p><i className="mt-3 mb-2 text-center far fa-circle fa-2x">R</i></p>
                    <h5 className="mb-3 text-dark fw-bold">Sign in with</h5>
                    <i onClick={GoogleSignin}  className="ms-2 mb-2 fab fa-google fa-3x"></i>
                <p className="mt-3" ><small>New to RedOnion?</small></p>
               <p className="fs-5 fw-bold" > <Link to="/register" >Create  Account</Link></p>

            </Col>
        </Row>
    </div>
    );
};

export default Login;