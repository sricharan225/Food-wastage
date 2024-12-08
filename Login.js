import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../services/apiService';

function Login() {
    const [user, setUser] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login(user);
            console.log('Login successful:', response.data);
            // Redirect to home page on successful login
            navigate('/home');
        } catch (error) {
            let errorMessage = 'Login failed. Please try again.';
            if (error.response && error.response.data && error.response.data.message) {
                errorMessage = error.response.data.message;
            }
            console.error('Login error:', errorMessage);
            alert(errorMessage); // Show error message to the user
        }
    };

    return (
        <div className="login-container">
            <h1 className="login-header">Login</h1>
            <form className="login-form" onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Enter Email"
                    className="login-input"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    className="login-input"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                <button type="submit" className="login-button">Login</button>
            </form>

            {/* Link for users who don't have an account */}
            <div className="signup-footer">
                <span>Don't have an account?</span>
                <Link to="/signup" className="signup-link">Sign Up</Link>
            </div>

            <style jsx>{`
                /* Main Container */
                .login-container {
                    width: 90%;
                    max-width: 400px;
                    margin: 40px auto;
                    padding: 20px;
                    background: linear-gradient(145deg, #e0f7fa, #b2ebf2);
                    border-radius: 15px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                }

                /* Header */
                .login-header {
                    font-size: 1.8rem;
                    text-align: center;
                    color: #00796b;
                    margin-bottom: 20px;
                    font-weight: bold;
                }

                /* Form */
                .login-form {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                /* Input Fields */
                .login-input {
                    padding: 12px;
                    border: none;
                    border-radius: 8px;
                    font-size: 1rem;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    transition: box-shadow 0.3s ease;
                }

                .login-input:focus {
                    outline: none;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }

                /* Button */
                .login-button {
                    padding: 12px;
                    background-color: #00796b;
                    color: white;
                    font-size: 1rem;
                    font-weight: bold;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background-color 0.3s ease, transform 0.2s ease;
                }

                .login-button:hover {
                    background-color: #004d40;
                    transform: scale(1.05);
                }

                /* Responsive Design */
                @media (max-width: 480px) {
                    .login-container {
                        padding: 15px;
                    }

                    .login-header {
                        font-size: 1.5rem;
                    }

                    .login-input {
                        font-size: 0.9rem;
                    }

                    .login-button {
                        font-size: 0.9rem;
                    }
                }

                /* Footer Links */
                .signup-footer {
                    margin-top: 20px;
                    text-align: center;
                }

                .signup-footer span {
                    font-size: 14px;
                    color: #004d40;
                }

                .signup-link {
                    color: #00796b;
                    text-decoration: none;
                    font-weight: bold;
                    margin-left: 5px;
                }

                .signup-link:hover {
                    color: #004d40;
                }
            `}</style>
        </div>
    );
}

export default Login;
