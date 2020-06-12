import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
import './style.scss';

//forms
import { auth, handleUserProfile } from './../../firebase/utils'
import FormInput from './../../components/Forms/FormInput';
import Buttons from './../../components/Forms/Button';
import AuthWrapper from './../AuthWrapper'

const Signup = props => {

    const[displayName, setDisplayname] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');
    const[errors, setErrors] = useState('');

    const reset = () =>{
        setDisplayname('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors([]);
    }

   const handleFormSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            const err = ['Password don\'t match'];
            setErrors(err);
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await handleUserProfile(user, { displayName });

            reset();
            props.history.push('/');

        } catch (err) {

        }
    }

    const configAuthWrapper = {
        headline: 'registration'
    }

    return (
        <AuthWrapper {...configAuthWrapper}>

            <div className="formWrap">

                {errors.length > 0 && (
                    <ul>
                        {errors.map((err, index) => {
                            return (<li key={index}>
                                {err}
                            </li>
                            )
                        })}

                    </ul>
                )}

                <form onSubmit={handleFormSubmit}>

                    <FormInput type="text" name="displayName" value={displayName} 
                    placeholder="Full name" handleChange={e => setDisplayname(e.target.value)} />

                    <FormInput type="email" name="email" value={email} 
                    placeholder="Email" handleChange={e => setEmail(e.target.value)} />

                    <FormInput type="password" name="password" value={password} 
                    placeholder="Password" handleChange={e => setPassword(e.target.value)} />

                    <FormInput type="password" name="confirmPassword" value={confirmPassword} 
                    placeholder="Confirm password" handleChange={e => setConfirmPassword(e.target.value)}/>

                    <Buttons type="submit">
                        Register
                            </Buttons>
                </form>
            </div>
        </AuthWrapper>
    );
}

export default withRouter(Signup);