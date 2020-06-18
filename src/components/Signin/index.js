import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { emailSignInStart, googleSignInStart} from './../../redux/User/user.actions';
import './style.scss';

//forms
import Buttons from './../../components/Forms/Button';
import FormInput from './../../components/Forms/FormInput';
import AuthWrapper from './../AuthWrapper';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const Signin = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentUser } = useSelector(mapState);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (currentUser) {
            resetForm();
            history.push('/');
        }
    }, [currentUser]);

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(emailSignInStart({ email, password }));
    }

    const configAuthWrapper = {
        headline: 'LogIn'
    }

    const handleGoogleSignIn = () =>{
        dispatch(googleSignInStart());
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


export default Signin;