import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { useSelector } from 'react-redux';
import { checkUserIsAdmin } from './../../utils';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const AdminToolBar = props => {
    const { currentUser } = useSelector(mapState);

    const isAdmin = checkUserIsAdmin(currentUser);

    if(!isAdmin) return null;

    return (
        <div className="adminBar">
            <ul>
                <li>
                    <Link to="/admin">
                        My Admin
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminToolBar;