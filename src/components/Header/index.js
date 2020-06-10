import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Header = props => {

    return (

        <header className="header">
            <div className="wrap">
                <Link to="/">
                    <h1>Logo</h1>
                </Link>

                <div className="callToActions">
                    <ul>
                        <li>
                            <Link to="/registration">
                                Register
            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )

}

export default Header;