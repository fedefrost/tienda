import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { resetPassword, resetAll } from './../../redux/User/users.actions'
import './style.scss';

//forms
import AuthWrapper from './../AuthWrapper';
import FormInput from './../Forms/FormInput';
import Buttons from './../Forms/Button';

const mapState = ({ user }) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    resetPasswordError: user.resetPasswordError
});

const EmailPassword = props => {
    const { resetPasswordSuccess, resetPasswordError } = useSelector(mapState);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (resetPasswordSuccess) {
            dispatch(resetAll());
            props.history.push('/');
        }
    }, [resetPasswordSuccess]);

    useEffect(() => {
        if (Array.isArray(resetPasswordError) && resetPasswordError.length > 0) {
            setErrors(resetPasswordError);
        }
}, [resetPasswordError]);

const handleSubmit = e => {
    e.preventDefault();
    dispatch(resetPassword({ email }));
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