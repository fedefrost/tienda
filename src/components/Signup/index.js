import React, { Component } from 'react';
import './style.scss';

//forms
import { auth, handleUserProfile } from './../../firebase/utils'
import FormInput from './../../components/Forms/FormInput';
import Buttons from './../../components/Forms/Button';
import AuthWrapper from './../AuthWrapper'

const initialState = {
    displayName: '',
    email: '',
    password: '',
    conirfmPassword: '',
    errors: []
}

class Signup extends Component {

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
        })
    }

    handleFormSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, conirfmPassword } = this.state;

        if (password !== conirfmPassword) {
            const err = ['Password don\'t match'];

            this.setState({
                errors: err
            });

            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await handleUserProfile(user, { displayName });
            this.setState({
                ...initialState
            })

        } catch (err) {

        }
    }




    render() {
        const { displayName,email,password,confirmPassword,errors } = this.state;

        const configAuthWrapper = {
            headline : 'registration'
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

                    <form onSubmit={this.handleFormSubmit}>

                        <FormInput type="text" name="displayName" value={displayName} placeholder="Full name" onChange={this.handleChange}
                        />

                        <FormInput type="email" name="email" value={email} placeholder="Email" onChange={this.handleChange}
                        />

                        <FormInput type="password" name="password" value={password} placeholder="Password" onChange={this.handleChange}
                        />

                        <FormInput type="password" name="confirmPassword" value={confirmPassword} placeholder="Confirm the password" onChange={this.handleChange}
                        />

                        <Buttons type="submit">
                            Register
                            </Buttons>
                    </form>
                </div>
            </AuthWrapper>
        );
    }
}

export default Signup;