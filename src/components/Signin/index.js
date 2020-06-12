import React, { Component } from 'react';
import './style.scss';

//forms
import Buttons from './../../components/Forms/Button';
import FormInput from './../../components/Forms/FormInput';
import { signInWithGoogle, auth } from './../../firebase/utils';
import AuthWrapper from './../AuthWrapper'
import { Link } from 'react-router-dom';

const initialState = {
    email: '',
    password: ''
}

class Signin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        this.setState({
            ...initialState
        })
        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (err) {

        }
    }

    render() {

        const { email, password } = this.state;
        const configAuthWrapper = {
            headline: 'LogIn'
        }

        return (
            <AuthWrapper {...configAuthWrapper}>

                <div className="formWrap">
                    <form onSubmit={this.handleSubmit}>

                        <FormInput type="email" name="email" value={email} placeholder="Email" onChange={this.handleChange}
                        />

                        <FormInput type="password" name="password" value={password} placeholder="Password" onChange={this.handleChange}
                        />

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
}

export default Signin;