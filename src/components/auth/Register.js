import React, { useState } from 'react';
import axios from 'axios';

const errorMessages = {
    'username': 'You must enter a username!',
    'password': 'You must enter a password!',
    'retype-password': 'You must retype the password!',
    'different-passwords': 'You must enter the same password twice!'
};

function Register() {
    const [formData, setFormData] = useState({
        'username': '',
        'password': '',
        'retype-password': ''
    });

    const [formError, setFormError] = useState({
        'username': '',
        'password': '',
        'retype-password': '',
        'different-passwords': ''
    });

    function handleSubmit(e) { 
        e.preventDefault(); 

        validateFormData();
    }

    function validateFormData() {
        const inputs = ['username', 'password', 'retype-password'];
        const newError = { ...formError };
        
        for(const input of inputs) {
            if(!formData[input]) {
                newError[input] = errorMessages[input];
            }
        }
        
        if(formData.password !== formData['retype-password']) {
           newError['different-passwords'] = errorMessages['different-passwords'];
        }

        setFormError(newError);
    }

    function handleInputChange(e) {
        // const prop = e.currentTarget.id;
        // const newObj = { ...formData };
        // newObj[prop] = e.currentTarget.value;

        // setFormData(newObj);

        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value
        });

        // Aici resetam erorile in cazul in care se scrie din nou in inputuri
        const newError = { 
            ...formError, 
            [e.currentTarget.id]: '',
        };

        if(e.currentTarget.id === 'password' || e.currentTarget.id === 'retype-password') {
            newError['different-passwords'] = '';
        }

        setFormError(newError);
    }

    console.log(formError);

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={ handleSubmit }>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                        onChange={ handleInputChange }
                        value={ formData.username }
                        type="text"
                        className={ 'form-control' + (formError.username ? ' is-invalid' : '') }
                        id="username"
                        placeholder="Enter username"
                    />
    
                    <div className="invalid-feedback">
                        { formError.username }
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={ handleInputChange }
                        value={ formData.password }
                        type="password"
                        className={ 'form-control' + (formError.password ? ' is-invalid' : '') }
                        id="password"
                        placeholder="Password"
                    />
                    <div className="invalid-feedback">
                        { formError.password }
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="retype-password">Retype Password</label>
                    <input
                        onChange={ handleInputChange }
                        value={ formData['retype-password'] }
                        type="password"
                        className={ 'form-control' + (formError['retype-password'] || formError['different-passwords']  ? ' is-invalid' : '') }
                        id="retype-password"
                        placeholder="Retype Password" 
                    />
                    <div className="invalid-feedback">
                        { formError['retype-password'] }
                        { formError['retype-password'] ? <br /> : '' }
                        { formError['different-passwords'] }
                    </div>
                    
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default Register;