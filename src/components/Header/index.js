import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux'
import { auth } from '../../firebase/utils';
import Logo from './../../assets/logo.png'
import './style.scss';


const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const Header = props => {

    const { currentUser } = useSelector(mapState);

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

export default Header;