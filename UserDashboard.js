import React from 'react';

function UserDashboard() {
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'FoodDonor'
    };

    return (
        <div className="user-dashboard">
            <h2>User Dashboard</h2>
            <div className="user-info">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Role:</strong> {user.role}</p>
            </div>

            <style jsx>{`
                .user-dashboard {
                    width: 90%;
                    max-width: 500px;
                    margin: 40px auto;
                    padding: 20px;
                    background: black;
                    border-radius: 15px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                }

                .user-info {
                    font-size: 1rem;
                    color: white;
                }

                .user-info p {
                    margin: 10px 0;
                    font-size: 1.2rem;
                }

                @media (max-width: 480px) {
                    .user-dashboard {
                        padding: 15px;
                    }

                    .user-info p {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </div>
    );
}

export default UserDashboard;
