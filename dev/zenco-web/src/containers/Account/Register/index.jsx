import React from 'react';
import {Link} from 'react-router-dom';
import RegisterForm from './components/RegisterForm';

const logo = `${process.env.PUBLIC_URL}/img/logo.svg`;

const Register = () => (
    <div className="account">
        <div className="account__wrapper">
            <div className="account__card">
                <div className="account__head">
                    <h3 className="account__title text-center">
                        <img style={{align: "center"}} src={logo} alt="Logo"/>
                        <span className="account__logo">
            </span>
                    </h3>
                </div>
                <RegisterForm onSubmit/>
                <div className="account__have-account">
                    <p>Already have an account? <Link to="/log_in">Login</Link></p>
                </div>
            </div>
        </div>
    </div>
);

export default Register;
