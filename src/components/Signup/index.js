import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signUpUser , resetAll} from './../../redux/User/users.actions';
import './style.scss';

//forms
import { auth, handleUserProfile } from './../../firebase/utils'
import FormInput from './../../components/Forms/FormInput';
import Buttons from './../../components/Forms/Button';
import AuthWrapper from './../AuthWrapper'

const mapState = ({ user }) => ({
    signUpSuccess: user.signUpSuccess,
    signUpError: user.signUpError
})

const Signup = props => {
    const { signUpSuccess, signUpError } = useSelector(mapState);
    const dispatch = useDispatch();
    const [displayName, setDisplayname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState('');

    useEffect(() => {
        if (signUpSuccess) {
            reset();
            dispatch(resetAll());
            props.history.push('/');
        }

    }, [signUpSuccess]);

    useEffect(() => {
        if (Array.isArray(signUpError) && signUpError.length > 0) {
            setErrors(signUpError);
        }

    }, [signUpError]);

    const reset = () => {
        setDisplayname('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors([]);
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        dispatch(signUpUser({
            displayName, email, password, confirmPassword
        }));
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
                        placeholder="Confirm password" handleChange={e => setConfirmPassword(e.target.value)} />

                    <Buttons type="submit">
                        Register
                            </Buttons>
                </form>
            </div>
        </AuthWrapper>
    );
}

export default withRouter(Signup);