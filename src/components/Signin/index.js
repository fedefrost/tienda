import React, { useState } from 'react';
import './style.scss';

//forms
import Buttons from './../../components/Forms/Button';
import FormInput from './../../components/Forms/FormInput';
import { signInWithGoogle, auth } from './../../firebase/utils';
import AuthWrapper from './../AuthWrapper'
import { Link } from 'react-router-dom';

const Signin = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const resetForm = () =>{
        setEmail('');
        setPassword('');
    }

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            resetForm();

            props.history.push('/');
        } catch (err) {

        }
    }

    const configAuthWrapper = {
        headline: 'LogIn'
    }

    return (
        <AuthWrapper {...configAuthWrapper}>

            <div className="formWrap">
                <form onSubmit={handleSubmit}>

                    <FormInput type="email" name="email" value={email} 
                    placeholder="Email" handleChange={e => setEmail(e.target.value)} />

                    <FormInput type="password" name="password" value={password} 
                    placeholder="Password" handleChange={e => setPassword(e.target.value)} />

                    <Buttons type="submit">
                        Sign in
                                    </Buttons>

                    <div className="socialSignin">
                        <div className="row">

                            <Buttons onClick={signInWithGoogle}>
                                Sign in with Google
                                    </Buttons>

                        </div>
                    </div>

                    <div className="links">
                        <Link to="/recovery">
                            Reset password
                        </Link>
                    </div>
                </form>
            </div>

        </AuthWrapper>
    );
}


export default Signin;