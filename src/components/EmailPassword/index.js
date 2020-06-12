import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import './style.scss';

//forms
import { auth } from './../../firebase/utils'
import AuthWrapper from './../AuthWrapper';
import FormInput from './../Forms/FormInput';
import Buttons from './../Forms/Button';

const EmailPassword = props => {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const config = {
                url: 'localhost:3000/login'
            }

            await auth.sendPasswordResetEmail(email)
                .then(() => {
                    props.history.push('/login');
                })
                .catch(() => {
                    const err = ['Email not found. Please try again'];
                    setErrors(err);
                });
        } catch (err) {

        }
    }

    const configAuthWrapper = {
        headline: 'Email password'
    };

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
                <form onSubmit={handleSubmit}>
                    <FormInput type="email" name="email" value={email}
                        placeholder="Email" handleChange={e => setEmail(e.target.value)} />

                    <Buttons type="submit">
                        Sign in
                    </Buttons>
                </form>
            </div>
        </AuthWrapper>
    );
}

export default withRouter(EmailPassword);