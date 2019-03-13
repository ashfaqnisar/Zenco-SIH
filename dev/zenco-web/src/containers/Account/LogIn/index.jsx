import React from 'react';
import {Link} from 'react-router-dom';
import FacebookIcon from 'mdi-react/FacebookIcon';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import LogInForm from './components/LogInForm';

const logo = `${process.env.PUBLIC_URL}/img/logo.svg`;

const LogIn = () => (
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
                <LogInForm onSubmit/>
            </div>
        </div>
    </div>
);

export default LogIn;
