import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser, signInWithGoogle, resetAll} from './../../redux/User/users.actions';
import './style.scss';

//forms
import Buttons from './../../components/Forms/Button';
import FormInput from './../../components/Forms/FormInput';
import AuthWrapper from './../AuthWrapper';

const mapState = ({ user }) => ({
    signInSuccess: user.signInSuccess
});

const Signin = props => {
    const { signInSuccess } = useSelector(mapState);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (signInSuccess) {
            resetForm();
            dispatch(resetAll());
            props.history.push('/');
        }
    }, [signInSuccess]);

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(signInUser({ email, password }));
    }

    const configAuthWrapper = {
        headline: 'LogIn'
    }

    const handleGoogleSignIn = () =>{
        dispatch(signInWithGoogle());
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

                            <Buttons onClick={handleGoogleSignIn}>
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


export default withRouter(Signin);