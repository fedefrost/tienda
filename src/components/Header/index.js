import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { auth } from '../../firebase/utils';

const Header = props => {

    const { currentUser } = props;

    return (

        <header className="header">
            <div className="wrap">
                <Link to="/">
                    <h1>Logo</h1>
                </Link>

                <div className="callToActions">

                    {currentUser && (
                        <ul>
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
        </header>
    )

}

Header.defaultProps = {

}

export default Header;