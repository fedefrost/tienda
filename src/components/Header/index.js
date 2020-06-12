import React from 'react';
import { Link } from 'react-router-dom';
import { Connect, connect } from 'react-redux'
import { auth } from '../../firebase/utils';
import Logo from './../../assets/logo.png'
import './style.scss';

const Header = props => {

    const { currentUser } = props;

    return (

        <header className="header">
            <div className="wrap">
                <Link to="/">
                    <div
                        className="logo"
                        style={{
                            backgroundImage: `url(${Logo})`
                        }}
                    ></div>
                </Link>

                <div className="callToActions">

                    {currentUser && (
                        <ul>
                            <li>
                                <Link to="/dashboard">
                                    my account
                                </Link>
                            </li>

                            <li>
                                <span onClick={() => auth.signOut()}>Logout</span>
                            </li>
                        </ul>
                    )}

                    {!currentUser && (

                        <ul>
                            <li>
                                <Link to="/registration">
                                    Register
                                </Link>
                            </li>

                            <li>
                                <Link to="/login">
                                    Login
                                </Link>
                            </li>
                        </ul>

                    )}

                </div>
            </div>
        </header >
    )

}

Header.defaultProps = {

}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
})

export default connect(mapStateToProps, null)(Header);