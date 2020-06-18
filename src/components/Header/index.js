import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Logo from './../../assets/logo.png';
import './style.scss';
import { signOutUserStart } from './../../redux/User/user.actions'


const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const Header = props => {
    const dispatch = useDispatch();

    const { currentUser } = useSelector(mapState);

    const signOut = () => {
        dispatch(signOutUserStart());
    }

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
                                <Link to="/">
                                    <span onClick={() => signOut()}>Logout</span>
                                </Link>
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

export default Header;