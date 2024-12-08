import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar" style={navbarStyles.container}>
            <ul style={navbarStyles.list}>
                <li style={navbarStyles.item}><Link to="/" style={navbarStyles.link}>Home</Link></li>
                <li style={navbarStyles.item}><Link to="/login" style={navbarStyles.link}>Login</Link></li>
                <li style={navbarStyles.item}><Link to="/signup" style={navbarStyles.link}>Signup</Link></li>
                <li style={navbarStyles.item}><Link to="/dashboard" style={navbarStyles.link}>Dashboard</Link></li>
                <li style={navbarStyles.item}><Link to="/food-donar" style={navbarStyles.link}>Food Donar</Link></li>
                <li style={navbarStyles.item}><Link to="/receiver" style={navbarStyles.link}>Receiver</Link></li>
                <li style={navbarStyles.item}><Link to="/user-dashboard" style={navbarStyles.link}>User Dashboard</Link></li>
            </ul>
        </div>
    );
};

const navbarStyles = {
    container: {
        backgroundColor: '#333',
        padding: '10px',
        textAlign: 'center',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'space-around',
    },
    item: {
        margin: '0 15px',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        transition: 'background-color 0.3s',
    },
    linkHover: {
        backgroundColor: '#555',
    },
};

export default Navbar;
