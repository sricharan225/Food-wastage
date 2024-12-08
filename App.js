import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './pages/Signup';
import Dashboard from './components/Dashboard';
import FoodDonar from './components/FoodDonar';
import Receiver from './components/Receiver';
import UserDashboard from './pages/UserDashboard';
import Home from './pages/Home';
import backgroundImage from './assets/image2.webp';

const App = () => {
    return (
        <Router>
            <div className="app">
                {/* Top heading for Food Saver */}
                <header className="app-header">
                    <h1>Food Saver</h1>
                </header>

                {/* Navigation Menu */}
                <nav className="navbar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/food-donar">Food Donar</Link></li>
                        <li><Link to="/receiver">Receiver</Link></li>
                        <li><Link to="/user-dashboard">User Dashboard</Link></li>
                    </ul>
                </nav>

                {/* Page Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/food-donar" element={<FoodDonar />} />
                    <Route path="/receiver" element={<Receiver />} />
                    <Route path="/user-dashboard" element={<UserDashboard />} />
                </Routes>
            </div>

            {/* Embedded styles */}
            <style jsx>{`
                .app {
                    background-image: url(${backgroundImage});
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                    min-height: 100vh;
                    margin: 0;
                    padding: 0;
                    color: white;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                }
                .app-header {
                    text-align: center;
                    padding: 20px;
                    background-color: white;
                    color: white;
                    font-size: 1.2em;
                    font-weight: bold;
                    margin: 0;
                    width: 100%;
                    position: relative;
                    z-index: 2;
                }
                .navbar {
                    background-color: rgba(0, 0, 0, 0.8);
                    padding: 10px 0;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
                    width: 100%;
                    position: relative;
                    z-index: 2;
                }
                .navbar ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                }
                .navbar li {
                    display: inline;
                }
                .navbar a {
                    color: white;
                    text-decoration: none;
                    font-size: 1.1em;
                    padding: 8px 15px;
                    transition: background-color 0.3s ease, transform 0.2s ease;
                }
                .navbar a:hover {
                    background-color: #575757;
                    border-radius: 5px;
                    transform: scale(1.05);
                }
            `}</style>
        </Router>
    );
};

export default App;
