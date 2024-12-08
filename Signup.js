import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signup } from '../services/apiService'; // Adjust the path as per your project structure

function Signup() {
    const [user, setUser] = useState({ name: '', email: '', password: '', role: '' });
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await signup(user);
            console.log('Signup successful:', response.data);
            navigate('/login');
        } catch (error) {
            if (error.response && error.response.data) {
                alert('Signup failed: ' + (error.response.data.message || 'Unknown error occurred'));
            } else {
                alert('Signup failed: ' + error.message);
            }
        }
    };
    
    return (
        <div className="signup-container">
            <h1 className="signup-header">Sign Up</h1>
            <form className="signup-form" onSubmit={handleSignup}>
                <input
                    type="text"
                    placeholder="Enter Name"
                    className="signup-input"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Enter Email"
                    className="signup-input"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    className="signup-input"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                <select
                    className="signup-input"
                    value={user.role}
                    onChange={(e) => setUser({ ...user, role: e.target.value })}
                    required
                >
                    <option value="">Select Role</option>
                    <option value="FoodDonor">FoodDonor</option>
                    <option value="Receiver">Receiver</option>
                </select>
                <button type="submit" className="signup-button">Sign Up</button>
            </form>

            {/* Link for users who already have an account */}
            <div className="login-footer">
                <span>Already have an account?</span>
                <Link to="/login" className="login-link">Login</Link>
            </div>

            {/* Add your styles */}
            <style jsx>{`
                .signup-container {
                    width: 90%;
                    max-width: 400px;
                    margin: 40px auto;
                    padding: 20px;
                    background: linear-gradient(145deg, #e0f7fa, #b2ebf2);
                    border-radius: 15px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                    text-align: center; /* Center content inside container */
                }

                .signup-header {
                    font-size: 1.8rem;
                    color: #00796b;
                    margin-bottom: 20px;
                    font-weight: bold;
                }

                .signup-form {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .signup-input {
                    padding: 12px;
                    border: none;
                    border-radius: 8px;
                    font-size: 1rem;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    transition: box-shadow 0.3s ease;
                    outline: none; /* Remove default outline */
                }

                .signup-input:focus {
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }

                .signup-button {
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

                .signup-button:hover {
                    background-color: #004d40;
                    transform: scale(1.05);
                }

                @media (max-width: 480px) {
                    .signup-container {
                        padding: 15px;
                    }

                    .signup-header {
                        font-size: 1.5rem;
                    }

                    .signup-input {
                        font-size: 0.9rem;
                    }

                    .signup-button {
                        font-size: 0.9rem;
                    }
                }

                .login-footer {
                    margin-top: 20px;
                    font-size: 14px;
                    color: #004d40;
                    text-align: center;
                }

                .login-link {
                    color: #00796b;
                    text-decoration: none;
                    font-weight: bold;
                    margin-left: 5px;
                }

                .login-link:hover {
                    color: #004d40;
                }
            `}</style>
        </div>
    );
}

export default Signup;
