import React, { useState } from 'react';

const Receiver = () => {
    // Simulated user data
    const [user, setUser] = useState({ id: 1, role: 'receiver', email: 'example@example.com' });

    return (
        <div className="receiver-container">
            <h1>Receiver Page</h1>
            <p>Welcome, {user.email}</p>
            {/* Other content */}
        </div>
    );
};

export default Receiver;
